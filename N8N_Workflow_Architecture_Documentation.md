# N8N Invoice Processing System - Architecture Documentation

## Overview

This is a comprehensive **Thai invoice processing and validation system** that uses **6 interconnected workflows** to automate invoice data extraction, validation, and reconciliation.

---

## System Architecture

### Main Processing Flow

1. **Invoice Ingestion** → Entry Point
2. **Invoice Extraction** → AI/OCR Processing
3. **Invoice Processing Logic** → Validation Orchestrator
4. **RD VAT Lookup** → Tax Department API
5. **Compare Address** → Address Validation

### Separate Flow

6. **Invoice Reconciliation** → Excel vs PDF Comparison

---

## Workflow Details

### ① Invoice Ingestion (Entry Point)

**Purpose:** Receive PDF invoices, create database schema, orchestrate batch processing

**Steps: 20 nodes**

| Step  | Action                 | Description                                                                 |
| ----- | ---------------------- | --------------------------------------------------------------------------- |
| 1     | Webhook                | Receive HTTP POST with PDF invoices                                         |
| 2     | Read Files             | Load uploaded invoice files from disk                                       |
| 3     | Extract File Info      | Extract metadata (name, directory, path)                                    |
| 4     | Hash Schema Name       | Generate unique schema using FNV-1a hash                                    |
| 5     | Create Global Tables   | Setup vat_companies, buildmeup_customers, workflow_batches, workflow_errors |
| 6     | Create Company Schema  | Setup invoices, invoice_check_summary, excel_purchase_tax tables            |
| 7     | Insert Invoice Records | Store file references in database                                           |
| 8     | Prepare Batch          | Create batch metadata                                                       |
| 9     | Create Batch Record    | Insert batch tracking record                                                |
| 10    | Merge Batch ID         | Combine batch ID with invoice data                                          |
| 11    | Loop Over Items        | Split batch into individual invoices                                        |
| 12    | Call Sub-workflow      | Trigger Invoice Extraction (non-blocking)                                   |
| 13    | Wait for Completion    | Poll is_done flag until all invoices processed                              |
| 14    | Wait                   | Delay 2 seconds                                                             |
| 15-18 | Load Customer Data     | Read Excel, parse, normalize, insert customer master data                   |
| 19    | Merge Results          | Combine all results                                                         |
| 20    | Respond to Webhook     | Return success response                                                     |

---

### ② Invoice Extraction (AI/OCR Processing)

**Purpose:** Extract invoice data using Google Gemini AI

**Steps: 7 nodes**

| Step | Action              | Description                                               |
| ---- | ------------------- | --------------------------------------------------------- |
| 1    | Start Trigger       | Receive batch_id and file_path                            |
| 2    | Analyze Document    | Use Gemini 2.0 Flash Vision to transcribe PDF to Markdown |
| 3    | Gemini Chat         | Parse and normalize invoice data with strict rules        |
| 4    | Clean Output        | Remove markdown formatting from JSON                      |
| 5    | Validate Amounts    | Check VAT calculations, totals, rates                     |
| 6    | Merge Input         | Combine validated data                                    |
| 7    | Call Logic Workflow | Trigger Invoice Processing Logic                          |

**Data Extracted:**

- Invoice Number
- Date (DD/MM/YYYY format)
- Vendor Info (Name, VAT ID 13 digits, Branch 5 digits)
- Buyer Info (Name, VAT ID, Branch, Full Address)
- Amounts (Net, VAT, Grand Total, Vatable Amount, VAT Exempt Amount)

**Validation Rules:**

- VAT = Vatable Amount × 7%
- Grand Total = Net Amount + VAT Amount
- Inclusive Total = Vatable Amount + VAT Amount
- Net Amount = Vatable Amount + VAT Exempt Amount

---

### ③ Invoice Processing Logic (Validation Orchestrator)

**Purpose:** Validate invoice data, check VAT registration, update database

**Steps: 17 nodes**

| Step  | Action            | Description                                                    |
| ----- | ----------------- | -------------------------------------------------------------- |
| 1     | Trigger           | Receive invoice data from parent workflow                      |
| 2     | Check Customs     | If vendor is customs department, skip buyer validation         |
| 3     | Update Invoices   | Save extracted data to invoices table                          |
| 4     | Insert Summary    | Create invoice_check_summary record                            |
| 5-6   | Check Vendor DB   | Query if vendor exists in vat_companies                        |
| 7-8   | Vendor Validation | If not found, call RD VAT Lookup (Vendor)                      |
| 9-10  | Check Buyer DB    | Query if buyer exists in vat_companies                         |
| 11-12 | Buyer Validation  | If not found, call RD VAT Lookup (Buyer), else Compare Address |
| 13-15 | Merge Results     | Combine validation results from all branches                   |
| 16    | Update Summaries  | Write validation statuses to database                          |
| 17    | Mark Done         | Set is_done = true                                             |

---

### ④ RD VAT Lookup (Tax Department API)

**Purpose:** Validate VAT IDs with Thailand Revenue Department

**Steps: 11 nodes**

| Step  | Action             | Description                                       |
| ----- | ------------------ | ------------------------------------------------- |
| 1     | Trigger            | Receive vat_id, branch_id, type (vendor/buyer)    |
| 2     | HTTP Request       | Send SOAP request to RD API                       |
| 3     | XML to JSON        | Convert SOAP response                             |
| 4     | Normalize Response | Parse company info and address                    |
| 5     | Merge Input        | Combine original data with RD response            |
| 6     | Check Success      | Verify if lookup was successful                   |
| 7     | Upsert Company     | Save/update in vat_companies table                |
| 8     | Switch Type        | Route based on vendor or buyer                    |
| 9     | Compare Address    | For buyers, validate address matching             |
| 10-11 | Update Summary     | Write validation results to invoice_check_summary |

**API Endpoint:**

```
POST https://rdws.rd.go.th/serviceRD3/vatserviceRD3.asmx
```

**Data Retrieved:**

- VAT ID (13 digits)
- Branch Number (5 digits, 00000 = HQ)
- Company Name (Thai format)
- Full Address (Standardized Thai format with proper abbreviations)

---

### ⑤ Compare Address (Address Validation)

**Purpose:** Compare buyer address from PDF vs Revenue Department database

**Steps: 6 nodes**

| Step | Action         | Description                           |
| ---- | -------------- | ------------------------------------- |
| 1    | Trigger        | Receive invoice data with buyer info  |
| 2    | Query DB       | Fetch buyer info from vat_companies   |
| 3    | Merge Data     | Combine PDF and DB data               |
| 4    | Compare        | Advanced address comparison algorithm |
| 5    | Check Match    | Evaluate comparison result            |
| 6    | Update Summary | Write validation status to database   |

**Comparison Algorithm:**

1. **Normalize Addresses:**

   - Convert Thai digits (๐-๙) to Western (0-9)
   - Expand abbreviations (จ. → จังหวัด, ต. → ตำบล, อ. → อำเภอ)
   - Clean spaces and punctuation

2. **Normalize Company Names:**

   - Remove: บริษัท, จำกัด, มหาชน, บจก, บมจ
   - Remove punctuation and extra spaces

3. **Subset Matching:**
   - Split addresses into words
   - Check if all words from source exist in target
   - Bidirectional check: (PDF ⊂ DB) OR (DB ⊂ PDF)

---

### ⑥ Invoice Reconciliation (Excel vs PDF Comparison)

**Purpose:** Compare Excel tax report with extracted PDF invoice data

**Steps: 21 nodes**

| Step  | Action            | Description                              |
| ----- | ----------------- | ---------------------------------------- |
| 1     | Webhook           | Receive schema and Excel file path       |
| 2     | Hash Schema       | Generate schema identifier               |
| 3-4   | Read Excel        | Load and parse purchase tax report       |
| 5     | Normalize Excel   | Clean and standardize Excel data         |
| 6     | Query Source ID   | Look up customer in buildmeup_customers  |
| 7     | Insert Excel Data | Save to excel_purchase_tax table         |
| 8     | Fetch DB Invoices | Get all PDF invoice records              |
| 9     | Normalize DB      | Standardize database records             |
| 10-11 | Merge Data        | Combine Excel and DB for comparison      |
| 12    | Compare Logic     | Advanced field-by-field comparison       |
| 13    | Insert Missing    | Create placeholder records               |
| 14-15 | Update Summary    | Write comparison results                 |
| 16    | Fetch Report      | Generate comprehensive comparison report |
| 17-18 | Export CSV        | Convert to CSV and write to disk         |
| 19-21 | Finalize          | Merge results and cleanup                |

**Comparison Fields:**

- invoice_number_status
- date_raw_status
- vendor_name_status (normalized)
- vendor_vat_id_status
- vendor_branch_status
- net_amount_status (±0.01 tolerance)
- vat_amount_status (±0.01 tolerance)
- grand_total_status (±0.01 tolerance)

**Composite Key:** `invoice_number + vendor_vat_id + vendor_branch`

**Detection:**

- `missing_in_pdf` - Excel has record, PDF doesn't
- `missing_in_excel` - PDF has record, Excel doesn't
- `all_ok` - All checks passed

---

## Database Schema

### Global Schema (Shared)

#### vat_companies

```sql
CREATE TABLE global.vat_companies (
    id SERIAL PRIMARY KEY,
    vat_id TEXT NOT NULL,
    branch TEXT NOT NULL,
    company_name TEXT,
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT vat_company_unique UNIQUE (vat_id, branch)
);
```

#### buildmeup_customers

```sql
CREATE TABLE global.buildmeup_customers (
    id SERIAL PRIMARY KEY,
    source_id INT UNIQUE,
    company_name TEXT,
    tax_id VARCHAR(20),
    company_status VARCHAR(50),
    vat_status VARCHAR(50),
    vat_date DATE,
    entity_type VARCHAR(100),
    business_code_regis VARCHAR(50),
    objective_regis TEXT,
    business_code_latest VARCHAR(50),
    objective_latest TEXT,
    account_start_date DATE
);
```

#### workflow_batches

```sql
CREATE TABLE global.workflow_batches (
    id SERIAL PRIMARY KEY,
    batch_name TEXT,
    total_files INT,
    completed_files INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    status TEXT DEFAULT 'pending'
);
```

### Company Schema (Per-Company: s_xxx_hash)

#### invoices

```sql
CREATE TABLE {schema}.invoices (
    id SERIAL PRIMARY KEY,
    invoice_number TEXT,
    date_raw TEXT,
    doc_title TEXT,
    vendor_name TEXT,
    vendor_vat_id TEXT,
    vendor_branch TEXT,
    net_amount NUMERIC(15,2),
    vat_amount NUMERIC(15,2),
    grand_total NUMERIC(15,2),
    name TEXT UNIQUE,
    path TEXT UNIQUE,
    is_done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT invoices_unique_triplet
        UNIQUE (invoice_number, vendor_vat_id, vendor_branch)
);
```

#### invoice_check_summary

```sql
CREATE TABLE {schema}.invoice_check_summary (
    id SERIAL PRIMARY KEY,
    invoice_id INT UNIQUE REFERENCES {schema}.invoices(id) ON DELETE CASCADE,
    invoice_number TEXT NOT NULL,
    vendor_vat_id TEXT NOT NULL,
    vendor_branch TEXT NOT NULL,

    invoice_status BOOLEAN,
    buyer_vat_info_status BOOLEAN,
    invoice_number_status BOOLEAN,
    date_raw_status BOOLEAN,
    vendor_name_status BOOLEAN,
    vendor_vat_id_status BOOLEAN,
    vendor_vat_id_info_status BOOLEAN,
    vendor_branch_status BOOLEAN,
    net_amount_status BOOLEAN,
    vat_amount_status BOOLEAN,
    vat_calculation_status BOOLEAN,
    grand_total_status BOOLEAN,
    grand_total_calculation_status BOOLEAN,

    missing_in_pdf BOOLEAN,
    missing_in_excel BOOLEAN,
    all_ok BOOLEAN,

    updated_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT uq_invoice_check_summary
        UNIQUE (invoice_number, vendor_vat_id, vendor_branch)
);
```

#### excel_purchase_tax

```sql
CREATE TABLE {schema}.excel_purchase_tax (
    id SERIAL PRIMARY KEY,
    invoice_number TEXT,
    date_raw TEXT,
    ref_doc TEXT,
    doc_title TEXT,
    vendor_name TEXT,
    vendor_vat_id TEXT,
    vendor_branch TEXT,
    net_amount NUMERIC(15,2),
    vat_amount NUMERIC(15,2),
    grand_total NUMERIC(15,2),
    report_company_name TEXT,
    report_tax_form_id TEXT,
    source_id INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## External Integrations

### Google Gemini API

- **Model:** Gemini 2.0 Flash
- **Features:** Vision + Text (Multimodal)
- **Purpose:** Invoice OCR & Structured Data Extraction
- **Output:** Markdown → JSON

### Thailand Revenue Department API

- **Endpoint:** https://rdws.rd.go.th/serviceRD3/vatserviceRD3.asmx
- **Protocol:** SOAP/XML
- **Purpose:** VAT ID Validation & Company Info Lookup
- **Response:** Company Name, Address, Registration Status

### PostgreSQL Database

- **Architecture:** Multi-Schema (Tenant Isolation)
- **Features:** Composite Keys, UPSERT Operations, Constraints
- **Purpose:** Data Storage & Deduplication

---

## Key Features

✅ **AI-Powered OCR** - Gemini Vision API for high-accuracy Thai invoice extraction
✅ **Government Integration** - Real-time VAT validation with Revenue Department
✅ **Address Matching** - Advanced Thai address normalization & subset matching
✅ **Batch Processing** - Parallel invoice processing with progress tracking
✅ **Reconciliation** - Excel vs PDF comparison with tolerance matching
✅ **Multi-Tenant** - Schema-per-company for data isolation
✅ **Idempotent Operations** - Safe retries with UPSERT and composite keys
✅ **Error Handling** - Comprehensive error logging and recovery

---

## Workflow Summary

| Workflow                   | Steps  | Purpose                                           |
| -------------------------- | ------ | ------------------------------------------------- |
| ① Invoice Ingestion        | 20     | Entry point, schema creation, batch orchestration |
| ② Invoice Extraction       | 7      | AI OCR, data extraction, normalization            |
| ③ Invoice Processing Logic | 17     | Validation orchestration, conditional execution   |
| ④ RD VAT Lookup            | 11     | Tax Department API integration                    |
| ⑤ Compare Address          | 6      | Thai address validation                           |
| ⑥ Invoice Reconciliation   | 21     | Excel vs PDF comparison, reporting                |
| **TOTAL**                  | **82** | **Complete invoice processing pipeline**          |

---

## Data Flow Summary

```
User Upload (PDF)
    ↓
① Invoice Ingestion
    ↓ (for each invoice)
② Invoice Extraction (Gemini AI)
    ↓
③ Invoice Processing Logic
    ├─→ ④ RD VAT Lookup (Vendor)
    ├─→ ④ RD VAT Lookup (Buyer)
    └─→ ⑤ Compare Address
    ↓
Database (Validated Invoice Data)
    ↓
⑥ Invoice Reconciliation (Excel Upload)
    ↓
CSV Report (Comparison Results)
```

---

## Technical Specifications

### Technologies

- **Workflow Engine:** n8n
- **AI/ML:** Google Gemini 2.0 Flash
- **Database:** PostgreSQL
- **API Protocol:** SOAP/XML, REST/JSON
- **File Formats:** PDF, Excel (XLSX), CSV

### Performance

- **Batch Processing:** Asynchronous, non-blocking
- **Concurrency:** Multiple invoices processed in parallel
- **Polling:** Wait loop with 2-second intervals
- **Retry Logic:** Built-in error handling with retries

### Data Validation

- **Format Validation:** VAT ID (13 digits), Branch (5 digits)
- **Math Validation:** VAT calculations, totals
- **API Validation:** Government registry lookup
- **Address Validation:** Subset matching algorithm
- **Reconciliation:** Field-by-field comparison with tolerance

---

_Generated: 2025-12-29_
_System Version: n8n Invoice Processing v1.0_

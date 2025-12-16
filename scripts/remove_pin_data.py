
import json
import os

def remove_pin_data_from_workflows():
    """
    Removes the "pinData" key and its contents from all JSON files
    in the "workflows" directory.
    """
    workflows_dir = os.path.join(os.path.dirname(__file__), '..', 'workflows')
    if not os.path.isdir(workflows_dir):
        print(f"Error: Directory not found at '{workflows_dir}'")
        return

    print(f"Scanning directory: {workflows_dir}")

    for filename in os.listdir(workflows_dir):
        if filename.endswith(".json"):
            file_path = os.path.join(workflows_dir, filename)
            print(f"Processing '{filename}'...")

            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)

                if "pinData" in data:
                    del data["pinData"]
                    print(f"  - Removed 'pinData' key.")

                    with open(file_path, 'w', encoding='utf-8') as f:
                        json.dump(data, f, indent=2, ensure_ascii=False)
                        # Add a newline at the end of the file for consistency
                        f.write('\n')
                    print(f"  - Saved changes to '{filename}'.")
                else:
                    print(f"  - 'pinData' key not found. Skipping.")

            except json.JSONDecodeError:
                print(f"  - Error: Could not decode JSON in '{filename}'.")
            except Exception as e:
                print(f"  - An unexpected error occurred: {e}")

if __name__ == "__main__":
    remove_pin_data_from_workflows()
    print("\nOperation complete.")

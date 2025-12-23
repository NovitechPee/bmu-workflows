FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the prebuilt static site into nginx's served directory
COPY dist/ /usr/share/nginx/html/

# Use default nginx configuration; container listens on port 80


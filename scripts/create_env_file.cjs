const fs = require("fs");
const path = require("path");

// 1. Mock reading from .env.preview
// (You can implement real reading logic later)
const previewVar = "mocked-preview-var";

// 2. Mock fetching backend URL
const backendUrl = "http://mocked-backend-url:4000";

// 3. Prepare .env.cloudflare content
const envContent = [
  'VITE_TEST_VAR="I\'M HERE TO STAY"',
  'VITE_TEST_VAR_2="I\'M HERE TO STAY 3"',
  `VITE_API_URL="${backendUrl}"`,
].join("\n");

// 4. Write to .env.cloudflare at project root
const envPath = path.resolve(__dirname, "../.env.cloudflare");
fs.writeFileSync(envPath, envContent, "utf8");
console.log(".env.cloudflare created!");

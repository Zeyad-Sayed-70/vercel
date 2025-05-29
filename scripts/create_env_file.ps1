# PowerShell script to create .env.cloudflare at the project root

# 1. Read a variable from .env.preview (mocked for now)
$envPreviewPath = "$PSScriptRoot\..\.env.preview"
$backendUrl = "http://mocked-backend-url:4000"  # Mocked fetched data

# 2. Fetch data from a source (mocked)
# In real usage, you would fetch or compute this value
# $backendUrl = Invoke-RestMethod -Uri "https://api.example.com/backend-url"

# 3. Prepare .env.cloudflare content
$envContent = @"
VITE_TEST_VAR="I'M HERE TO STAY"
VITE_TEST_VAR_2="I'M HERE TO STAY 3"
VITE_API_URL="$backendUrl"
"@

# 4. Write to .env.cloudflare
Set-Content -Path "$PSScriptRoot\..\.env.cloudflare" -Value $envContent

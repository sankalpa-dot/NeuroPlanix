# GitHub Actions Configuration Reference

Quick reference for GitHub Actions configurations and environment variables.

## Workflow Triggers

### Push Triggers
```yaml
on:
  push:
    branches: [main, develop]
    paths:
      - 'frontend/**'
      - '.github/workflows/frontend-ci.yml'
```

### Pull Request Triggers
```yaml
on:
  pull_request:
    branches: [main, develop]
    paths:
      - 'frontend/**'
```

### Schedule Triggers (Cron)
```yaml
on:
  schedule:
    - cron: '0 2 * * 0'  # Sunday at 2 AM
    - cron: '0 0 * * *'  # Daily at midnight
```

### Manual Trigger
```yaml
on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to release'
        required: true
        default: 'v1.0.0'
```

### Tag Trigger
```yaml
on:
  push:
    tags:
      - 'v*'
      - 'frontend-v*'
```

---

## Common Actions

### Setup Node.js
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20.x'
    cache: 'npm'
    cache-dependency-path: 'frontend/package-lock.json'
```

### Checkout Repository
```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    fetch-depth: 0  # Full history for releases
```

### Upload Artifacts
```yaml
- name: Upload build artifacts
  uses: actions/upload-artifact@v4
  with:
    name: frontend-build
    path: frontend/dist
    retention-days: 5
```

### Deploy to GitHub Pages
```yaml
- name: Setup Pages
  uses: actions/configure-pages@v4

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: 'frontend/dist'

- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4
```

### Create Release
```yaml
- name: Create GitHub Release
  uses: softprops/action-gh-release@v1
  with:
    name: Release ${{ steps.tag_name.outputs.version }}
    files: frontend/dist/**/*
    draft: false
    prerelease: false
    body: 'Release notes here'
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## Environment Variables

### Default Available Variables
```yaml
# GitHub Actions runtime variables
${{ github.repository }}       # owner/repo
${{ github.ref }}              # refs/heads/main or refs/tags/v1.0.0
${{ github.sha }}              # commit hash
${{ github.event_name }}       # push, pull_request, schedule, etc
${{ github.actor }}            # username who triggered workflow
${{ github.event.head_commit.timestamp }}  # commit timestamp
```

### Job-Specific Variables
```yaml
${{ job.status }}              # success, failure
${{ job.outputs.id }}          # job output value
```

### Step-Specific Variables
```yaml
${{ steps.step_id.outputs.value }}  # step output
```

### Custom Variables
```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com

steps:
  - name: Using custom variable
    run: echo ${{ env.NODE_ENV }}
```

---

## Secrets

### Setting Secrets

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Enter name: `SECRET_NAME`
4. Enter value: `secret_value`
5. Click "Add secret"

### Using Secrets in Workflows

```yaml
env:
  # Use in environment
  API_KEY: ${{ secrets.API_KEY }}

steps:
  - name: Use secret
    run: echo "Token: ${{ secrets.SNYK_TOKEN }}"
    env:
      SECRET: ${{ secrets.MY_SECRET }}
```

---

## Conditions & Logic

### Skip on Condition
```yaml
- name: Build
  if: github.event_name == 'push'
  run: npm run build

- name: Deploy
  if: github.ref == 'refs/heads/main'
  run: npm run deploy

- name: Check
  if: always()  # Run even if previous failed
  run: npm test
```

### Matrix Strategy (Multiple Configurations)
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]
    os: [ubuntu-latest, windows-latest]

steps:
  - name: Setup Node
    uses: actions/setup-node@v4
    with:
      node-version: ${{ matrix.node-version }}
```

---

## Working Directories

### Change Working Directory
```yaml
- name: Install dependencies
  working-directory: frontend
  run: npm ci

- name: Build
  working-directory: frontend
  run: npm run build
```

---

## Outputs & Artifacts

### Set Job Output
```yaml
- name: Get version
  id: version
  run: |
    VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }')
    echo "version=$VERSION" >> $GITHUB_OUTPUT

- name: Use output
  run: echo "Version: ${{ steps.version.outputs.version }}"
```

### Upload Artifacts
```yaml
- name: Upload
  uses: actions/upload-artifact@v4
  with:
    name: build-artifacts
    path: dist/
    retention-days: 5
```

### Download Artifacts
```yaml
- name: Download
  uses: actions/download-artifact@v4
  with:
    name: build-artifacts
    path: ./download-dir
```

---

## Error Handling

### Continue on Error
```yaml
- name: Run tests
  run: npm test
  continue-on-error: true  # Don't fail workflow if this step fails
```

### Always Run
```yaml
- name: Cleanup
  if: always()
  run: npm run cleanup
```

### Conditional Success
```yaml
- name: Deploy
  if: success()  # Only if all previous steps succeeded
  run: npm run deploy
```

---

## Concurrency & Limits

### Set Concurrency
```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true  # Cancel previous runs
```

### Job Timeout
```yaml
timeout-minutes: 30
```

---

## Useful Snippets

### Check Build Size
```yaml
- name: Check build size
  run: |
    if [ -d "dist" ]; then
      du -sh dist/
    fi
```

### Find Files
```yaml
- name: Find files
  run: find . -name "*.jsx" -type f | head -10
```

### Check for Issues
```yaml
- name: Check for console logs
  run: |
    ! grep -r "console\.log" src/ --include="*.jsx" || echo "Found console.log"
```

### Generate Report
```yaml
- name: Generate Report
  run: |
    echo "## Build Report" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "- Build: ✅ Success" >> $GITHUB_STEP_SUMMARY
    echo "- Tests: ✅ Passed" >> $GITHUB_STEP_SUMMARY
```

---

## Permissions

### Set Job Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
  pull-requests: write
  checks: write
```

### Scope Permissions
- `read` - Read-only access
- `write` - Read and write access
- `admin` - Full admin access

---

## Advanced Patterns

### Reusable Workflows
```yaml
# .github/workflows/reusable.yml
on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
```

### Using Reusable Workflow
```yaml
jobs:
  build:
    uses: ./.github/workflows/reusable.yml
    with:
      node-version: '20.x'
```

---

## Performance Tips

1. **Use Caching**
   ```yaml
   cache: 'npm'
   ```

2. **Limit Matrix**
   - Don't test too many combinations
   - Use primary version for artifacts

3. **Parallel Jobs**
   - Jobs run in parallel by default
   - Use `needs` for dependencies

4. **Conditional Runs**
   - Skip unnecessary jobs with `if`
   - Only run expensive builds when needed

5. **Artifact Cleanup**
   - Set retention days
   - Remove old artifacts

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| npm cache errors | Use `npm ci` instead of `npm install` |
| Path not found | Use working-directory for monorepos |
| Permission denied | Check script permissions |
| Timeout | Increase timeout-minutes setting |
| Out of memory | Consider splitting jobs |

### Check Workflow Logs

1. Go to Actions tab
2. Click on workflow run
3. Click on job
4. Review logs for errors
5. Use `echo` statements for debugging

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Available Actions](https://github.com/marketplace?type=actions)
- [Cron Schedule Format](https://crontab.guru)

---

Last Updated: February 10, 2026

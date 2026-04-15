---
name: sunapi-company-onboarding
description: Prepare an existing SUNAPI issuer for operation without skipping branches, correlatives, catalogs, or SUNAT and GRE readiness.
---

# SUNAPI Company Onboarding

Use this skill when the issuer already exists in the SUNAPI dashboard and the task is to prepare it for real operation.

## Reference surfaces

- dashboard: `https://sunapi.site`
- REST API: `https://api.sunapi.site`
- MCP: `https://mcp.sunapi.site`
- docs: `https://development.sunapi.site`

## Use this when

- the account contains more than one company and the right issuer must be identified
- branches, correlatives, catalogs, or identity data still need setup
- SUNAT or GRE readiness must be reviewed without skipping neutral dependencies
- the operator is mixing dashboard-only company creation with public automation surfaces

## Workflow

1. State that company creation is dashboard-managed.
2. List companies first.
3. Confirm the target issuer.
4. Resolve neutral setup first:
   - branches
   - correlatives
   - catalogs
   - products and customers when relevant
5. Review SUNAT and GRE credentials only after neutral setup is clear.
6. Prefer sandbox readiness before production.

## Rules

- do not tell the user to create a company from SDK, REST, or MCP
- treat companies, branches, correlatives, products, customers, catalogs, and webhooks as neutral resources
- treat SUNAT and GRE credentials as environment-sensitive operations
- explain which values come from catalogs and which are typed manually
- call out multi-company risks explicitly

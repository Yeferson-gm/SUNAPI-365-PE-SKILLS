---
name: sunapi-company-onboarding
description: Use this skill when you need to prepare a SUNAPI issuer already created in the dashboard, including branches, correlatives, catalogs, and SUNAT or GRE readiness without skipping dependencies.
---

# SUNAPI Company Onboarding

Use this skill when the user is preparing a company to operate correctly in SUNAPI. The company itself is created from the dashboard at `https://sunapi.site`. This skill starts after that point and keeps the operator aligned with the REST API at `https://api.sunapi.site`, the MCP server at `https://mcp.sunapi.site`, and the technical documentation at `https://development.sunapi.site`.

## What this skill covers

- listing companies and choosing the correct issuer
- preparing branches and correlatives
- reviewing catalog dependencies
- explaining products, customers, and webhook-aware setup dependencies
- reviewing SUNAT credentials
- reviewing GRE credentials
- sandbox and production readiness

## Public method families this skill should recognize

- companies: list, activate, toggle production, delete when explicitly requested
- branches: list, create, update, inspect correlatives
- catalogs: geo and tax lookup resources
- auxiliary resources: customers, products, and webhooks as neutral setup resources
- credentials: SUNAT and GRE read or update flows

## Workflow

1. List the available companies first.
2. Confirm which issuer the user actually wants to configure.
3. Resolve neutral setup first:
   - branches
   - correlatives
   - catalogs
   - identity data
4. Review SUNAT and GRE credentials only after the neutral setup is clear.
5. Prefer sandbox readiness before production whenever possible.

## Rules

- do not tell the user to create a company from the public SDK, REST API, or MCP
- list companies first in multi-company accounts
- treat companies, branches, correlatives, products, customers, catalogs, and webhooks as neutral resources
- treat SUNAT and GRE credentials as environment-sensitive configuration
- explain sandbox readiness before production readiness when both are being prepared

## Common mistakes this skill should prevent

- jumping straight to SUNAT credentials before branches or correlatives exist
- hardcoding ubigeo or catalog values instead of reading SUNAPI resources
- using the wrong company in a multi-company account
- presenting setup as one opaque payload instead of an ordered process

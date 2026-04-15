---
name: sunapi-document-issuer
description: Use this skill when you need to create, formalize, send, inspect, or download SUNAPI tickets, invoices, receipts, notes, summaries, guides, retentions, or voided documents with the correct fiscal lifecycle.
---

# SUNAPI Document Issuer

Use this skill when the user needs operational help with SUNAPI document flows. The objective is not only to build payloads, but to preserve the real lifecycle of each public resource so the user does not confuse local creation, SUNAT submission, status tracking, and file handling.

Reference surfaces:

- dashboard: `https://sunapi.site`
- REST API: `https://api.sunapi.site`
- MCP: `https://mcp.sunapi.site`
- docs: `https://development.sunapi.site`

## What this skill covers

- simple product operations needed before issuance
- tickets
- cash register and cash closure ticket formalization
- invoices
- receipts
- credit notes
- debit notes
- daily summaries
- dispatch guides
- retentions
- voided documents
- PDF, XML, and CDR generation or download

## Public method families this skill should recognize

- tickets: create, pay, convert, list, get history, print, download PDF
- POS support: cash registers, cash closures, and conversion of closure tickets into receipts or invoices
- invoices: create, list, send to SUNAT, generate PDF, download PDF, XML, and CDR
- receipts: create, list, send to SUNAT, generate PDF, download PDF, XML, and CDR
- credit notes and debit notes: create, send, inspect, download files
- daily summaries: create, build from pending receipts, send to SUNAT, inspect
- dispatch guides, retentions, and voided documents: create, send, inspect, and download where applicable

## Workflow

1. Identify the document family and the target environment.
2. Resolve company, branch, and correlativo first.
3. Validate customer and product data.
4. Create the local document.
5. If it is a ticket, explain the conversion path before talking about SUNAT.
6. If it is a fiscal document, send it to SUNAT when appropriate.
7. Inspect status before suggesting retries.
8. Generate or download PDF, XML, and CDR only when the user explicitly needs files.

## Rules

- use `sandbox` for tests and `production` for real issuance
- do not request `environment` for neutral resources such as companies, branches, customers, products, or catalogs
- tickets are internal and are not sent to SUNAT directly
- cash operations can start from tickets and later formalize at conversion time
- receipts usually move through daily summary reporting
- `DNI` and `RUC` must be validated before SUNAPI stores a new fiscal customer
- repeated-digit placeholders such as `99999999` and `99999999999` must be rejected
- if the same `documentType + documentNumber` already exists in the same company, SUNAPI must reuse that customer instead of duplicating it
- if the user explicitly overrides product price, use the explicit price
- choose only one `deliveryChannel` per operation: `sms` or `whatsapp`
- explain the lifecycle in order: create, send, status, files

## Common mistakes this skill should prevent

- treating tickets as fiscal documents by themselves
- treating receipts exactly like invoices
- assuming PDF generation also downloads the file
- retrying SUNAT blindly without checking current status
- mixing document delivery status with SUNAT status

---
name: sunapi-document-issuer
description: Issue tickets and fiscal documents with the correct create, send, status, and file lifecycle across SUNAPI surfaces.
---

# SUNAPI Document Issuer

Use this skill when the request involves tickets, invoices, receipts, notes, summaries, guides, retentions, voided documents, or their PDF, XML, and CDR artifacts.

## Reference surfaces

- dashboard: `https://sunapi.site`
- REST API: `https://api.sunapi.site`
- MCP: `https://mcp.sunapi.site`
- docs: `https://development.sunapi.site`

## Use this when

- a ticket must be created and later formalized into a receipt or invoice
- a fiscal document must be issued and sent to SUNAT correctly
- the user needs to separate local creation from SUNAT submission and artifact handling
- the operator needs to understand which next step is safe after each response

## Workflow

1. Identify the document family and environment.
2. Resolve company, branch, and correlativo.
3. Validate customer and product inputs.
4. Create the local document.
5. If it is a ticket, explain the formalization path before talking about SUNAT.
6. If it is fiscal, send it to SUNAT when appropriate.
7. Inspect status before retrying.
8. Generate or download PDF, XML, and CDR only when needed.

## Rules

- tickets are internal and are not sent to SUNAT directly
- receipts usually move through daily summary reporting
- do not request `environment` for neutral resources
- validate `DNI` and `RUC` before storing a fiscal customer
- reject repeated-digit placeholders such as `99999999` and `99999999999`
- reuse a customer when the same `documentType + documentNumber` already exists in the same company
- if the user explicitly overrides product price, respect that explicit price
- choose only one `deliveryChannel` per operation: `sms` or `whatsapp`
- explain the lifecycle in order: create, send, status, files

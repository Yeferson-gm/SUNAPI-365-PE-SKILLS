---
name: sunapi-sunat-troubleshooter
description: Use this skill when SUNAPI document issuance, SUNAT status changes, delivery skips, XML or CDR generation, or credential mistakes need diagnosis and the next safe action.
---

# SUNAPI SUNAT Troubleshooter

Use this skill for diagnosis and guided fixes around SUNAPI and SUNAT operations.

## What this skill covers

- pending or rejected documents
- missing XML, CDR, or PDF
- repeated send attempts
- summary and voided document issues
- credential and environment mistakes
- delivery skip reasons
- file generation mismatches

## Workflow

1. Identify the exact document type and environment.
2. Separate the phases:
   - local creation
   - SUNAT submission
   - status resolution
   - file generation
   - file download
   - delivery
3. Inspect current state before suggesting retries.
4. Name the most probable root cause first.
5. Recommend the next safest action in order.

## Rules

- do not suggest blind retries without checking state
- keep `sandbox` and `production` separate
- use precise lifecycle language, not vague wording
- if the failure is local, say it is local
- if the failure is SUNAT-related, say it is SUNAT-related
- if delivery is skipped, identify the explicit reason instead of implying the provider is down

## Common mistakes this skill should prevent

- confusing missing PDF with missing XML or CDR
- confusing ticket issues with SUNAT issues
- retrying a document that is already accepted
- blaming the WhatsApp provider when the delivery policy or payload is the actual blocker

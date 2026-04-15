---
name: sunapi-sunat-troubleshooter
description: Diagnose SUNAPI and SUNAT document issues safely by separating creation, submission, status, files, and delivery.
---

# SUNAPI SUNAT Troubleshooter

Use this skill when a SUNAPI document lifecycle issue needs diagnosis before retrying or escalating.

## Use this when

- a document is pending or rejected
- XML, CDR, or PDF is missing
- the team is unsure whether the issue is local, SUNAT-side, credential-related, or delivery-related
- someone wants to retry before checking the current state

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
5. Recommend the next safest action.

## Rules

- do not suggest blind retries
- keep `sandbox` and `production` separate
- distinguish local failures from SUNAT-side failures
- distinguish provider connection issues from delivery policy or payload issues
- use precise lifecycle language instead of vague wording

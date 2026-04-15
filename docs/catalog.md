# Skills Catalog

## Status

Active. This file defines the maintained SUNAPI skill catalog and the business meaning each runtime variant must preserve.

## Maintained skills

| Skill | Purpose | Typical surfaces |
|---|---|---|
| `sunapi-company-onboarding` | Prepare an existing issuer for operation without skipping branches, correlatives, catalogs, or credentials | dashboard, REST API, SDK, MCP |
| `sunapi-document-issuer` | Issue tickets and fiscal documents with the correct create → send → status → files lifecycle | REST API, SDK, MCP |
| `sunapi-mcp-operator` | Help teams operate SUNAPI directly from MCP-capable editors | MCP, documentation |
| `sunapi-sunat-troubleshooter` | Diagnose SUNAT, artifact, lifecycle, and delivery issues safely | REST API, MCP, documentation |

## Runtime mapping

| Runtime | Artifact names |
|---|---|
| Claude Code | `claude-code/sunapi-*.md` |
| Codex | `codex/skills/<skill-name>/SKILL.md` |
| OpenCode | `opencode/agents/sunapi-*.md` |

## Catalog rules

Each skill must make clear:

- when to use it
- what surface it operates on
- what it is allowed to guide
- what lifecycle constraints it must preserve
- what it must not invent

## Alignment rules

- If backend, docs, SDK, Composer, or MCP semantics change, review affected skills for drift.
- Skill descriptions must remain capability-accurate.
- Runtime variants of the same skill must preserve the same business meaning.
- URLs, product naming, and current supported runtimes must remain current.

## Removal policy

If a runtime is no longer supported:

1. remove its distribution artifacts
2. remove it from installer logic
3. remove it from README and docs
4. ensure no orphan references remain in examples or paths

## Do not do this

- Do not create broad "do everything" skills that obscure responsibility.
- Do not keep stale prompts after product terminology or lifecycle changes.
- Do not let troubleshooting skills recommend unsupported workarounds as normal flow.

# SUNAPI Skills — Agent Guide

> Read `../MAP.md` first, then `../AGENTS.md`, then this file.

## Scope

`skills/` packages SUNAPI operational guidance for the maintained agent runtimes:

- Claude Code
- Codex
- OpenCode

It owns runtime-specific packaging and installation assets, but it does **not** own product truth. Backend, MCP, SDK, and documentation remain the source of operational meaning.

## Mandatory rules

- Skills must teach the real SUNAPI lifecycle, not a simplified fictional version.
- Skills must preserve backend terminology and operational phases.
- Keep `sandbox` and `production` distinctions explicit.
- Runtime packaging may differ, but business meaning must stay aligned.
- If SUNAPI behavior changes, the relevant skills must be updated in the same task or tracked as explicit debt.
- Supported public surfaces must stay aligned with:
  - dashboard: `https://sunapi.site`
  - REST API: `https://api.sunapi.site`
  - MCP: `https://mcp.sunapi.site`
  - documentation: `https://development.sunapi.site`

## Read next depending on the task

- structure and ownership → `skills/docs/architecture.md`
- skill catalog expectations → `skills/docs/catalog.md`
- runtime installation/distribution → `skills/docs/installation.md`

## Validation

Validation here means alignment:

- prompts match real backend/docs behavior
- examples match real integration surfaces
- installer instructions match the actual repository layout
- runtime-specific directories still map to the intended skills
- deprecated runtimes are fully removed from docs and distribution assets

## Do not do this

- Do not let runtime-specific prompt phrasing change business truth.
- Do not ship installation instructions that no longer match the repository structure.
- Do not keep outdated operational guidance just because one runtime still uses it.
- Do not reintroduce Gemini CLI artifacts unless the repository explicitly decides to support it again.

## When uncertain

If a skill starts to embed business logic that is not verified by backend or docs, stop and reconcile the source of truth first.

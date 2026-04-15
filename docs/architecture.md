# Skills Architecture

## Status

Active. This package distributes SUNAPI operational guidance across the maintained agent runtimes.

## Purpose

The `skills/` package turns SUNAPI operational knowledge into runtime-specific installable artifacts without changing the underlying product meaning.

## Real structure

```text
skills/
├── bin/
│   └── skill-sunapi-365-pe.mjs
├── claude-code/
│   └── *.md
├── codex/
│   └── skills/
│       └── <skill-name>/SKILL.md
├── docs/
├── opencode/
│   └── agents/
│       └── *.md
├── install.sh
└── package.json
```

## Runtime packaging model

### Claude Code

- uses subagents markdown files
- install targets:
  - project: `.claude/agents/`
  - global: `~/.claude/agents/`

### Codex

- uses real skills with `SKILL.md`
- install targets:
  - project: `.agents/skills/`
  - global: `~/.agents/skills/`

### OpenCode

- uses agent markdown files
- install targets:
  - project: `.opencode/agents/`
  - global: `~/.config/opencode/agents/`

## Ownership

### Runtime directories

Own runtime-specific packaging and layout conventions.

### `bin/skill-sunapi-365-pe.mjs`

Owns the package-native installer used through `bunx`.

### `install.sh`

Owns the shell fallback installer for environments that prefer a direct script.

### `docs/`

Own package-level guidance for catalog, installation, and maintenance expectations.

## Boundary rules

- Runtime-specific formatting may vary.
- Business lifecycle guidance must not vary in meaning.
- Skills are consumers of backend/docs truth, not alternate sources of truth.
- Installation concerns must stay separate from domain/operator guidance.
- Public URLs used by skills and docs must stay aligned with production surfaces.

## Canonical public surfaces

- dashboard: `https://sunapi.site`
- REST API: `https://api.sunapi.site`
- MCP: `https://mcp.sunapi.site`
- technical documentation: `https://development.sunapi.site`

## Do not do this

- Do not let one runtime carry materially different operational instructions without explicit intent.
- Do not encode guessed backend behavior into prompts.
- Do not treat prompt packaging as a substitute for maintaining actual product docs.
- Do not keep deprecated runtimes in the installer or documentation after support has been removed.

# SUNAPI Skills

Private proprietary operational skills for SUNAPI.

## Executive summary

This package distributes production-aligned SUNAPI operating knowledge for three maintained agent runtimes:

- `Claude Code`
- `Codex`
- `OpenCode`

The repository is designed to live independently because runtime packaging, installation directories, and agent conventions evolve separately from the backend, frontend, MCP server, and public SDKs.

## What this package covers

- company onboarding after the issuer already exists in the dashboard
- document issuance and lifecycle handling
- MCP usage and editor-native operation
- SUNAT troubleshooting with lifecycle-first diagnosis

## Canonical SUNAPI surfaces

- dashboard: `https://sunapi.site`
- REST API: `https://api.sunapi.site`
- MCP endpoint: `https://mcp.sunapi.site`
- technical documentation: `https://development.sunapi.site`

## Supported runtimes

| Runtime | Packaging model | Install target |
|---|---|---|
| Claude Code | subagents markdown | `.claude/agents/` or `~/.claude/agents/` |
| Codex | skills with `SKILL.md` | `.agents/skills/` or `~/.agents/skills/` |
| OpenCode | agents markdown | `.opencode/agents/` or `~/.config/opencode/agents/` |

## Skill catalog

- `sunapi-company-onboarding`
- `sunapi-document-issuer`
- `sunapi-mcp-operator`
- `sunapi-sunat-troubleshooter`

Each runtime receives the same business meaning with packaging adapted to the runtime's current official conventions.

## Installation

### Preferred: `bunx`

```bash
bunx skill-sunapi-365-pe install claude-code global
bunx skill-sunapi-365-pe install codex project
bunx skill-sunapi-365-pe install opencode global
bunx skill-sunapi-365-pe install all project
```

### Shell fallback

```bash
bash install.sh claude-code global
bash install.sh codex project
bash install.sh opencode global
bash install.sh all project
```

## Repository layout

```text
skills/
├── bin/
├── claude-code/
├── codex/skills/
├── docs/
├── opencode/agents/
├── install.sh
├── package.json
├── README.md
└── LICENSE.md
```

## Operating rule

These are not generic prompts. Every artifact must preserve the real SUNAPI lifecycle across dashboard onboarding, REST API usage, MCP operations, SUNAT submission, status tracking, and artifact downloads without mixing environments or inventing unsupported flows.

## Distribution and release

The detailed installation and distribution rules live in `skills/docs/installation.md`.

The package is prepared for `bunx`-style installation. Because it is proprietary, the expected publication target is an internal/private registry or other controlled distribution channel using the same package name.

## License

This repository is private and proprietary. See [`LICENSE.md`](./LICENSE.md).

# Skills Installation and Distribution

## Status

Active. This file defines runtime-target installation expectations.

## Supported runtime targets

- Claude Code
- Codex
- OpenCode

## Installation artifacts

- package binary: `skill-sunapi-365-pe`
- shell fallback: `install.sh`

## Preferred installation flow

After publishing the package to the intended private distribution channel, install with `bunx`:

```bash
bunx skill-sunapi-365-pe install claude-code global
bunx skill-sunapi-365-pe install codex project
bunx skill-sunapi-365-pe install opencode global
bunx skill-sunapi-365-pe install all project
```

## Shell fallback

```bash
bash install.sh claude-code global
bash install.sh codex project
bash install.sh opencode global
bash install.sh all project
```

## Runtime targets and paths

| Runtime | Project install path | Global install path |
|---|---|---|
| Claude Code | `.claude/agents/` | `~/.claude/agents/` |
| Codex | `.agents/skills/` | `~/.agents/skills/` |
| OpenCode | `.opencode/agents/` | `~/.config/opencode/agents/` |

## CLI contract

```bash
skill-sunapi-365-pe install <runtime|all> <project|global>
skill-sunapi-365-pe list
skill-sunapi-365-pe --help
```

Accepted runtime values:

- `claude`
- `claude-code`
- `codex`
- `opencode`
- `all`

Accepted scope values:

- `project`
- `global`

## Installation rules

- Installation instructions must match the real repository layout.
- Runtime-specific packaging details should live here rather than being scattered across prompts.
- If a new runtime target is added, document both its installation path and its maintained skill set.
- `bunx` examples and shell fallback examples must stay functionally equivalent.

## Maintenance rules

- If directory layout changes, update installer guidance immediately.
- If a runtime no longer supports a skill packaging model, record the change explicitly.
- Installation success assumptions must remain realistic for the target runtime.
- Proprietary distribution constraints must be documented when packaging is intended for private registries.

## Package release and distribution flow

When a new package version is ready for distribution:

```bash
bun run check
git push origin main
git tag v<version>
git push origin v<version>
```

If the package is distributed through a private npm-compatible registry, publish it from the package root after validation:

```bash
npm whoami
npm publish
```

Release rules:

- keep the package version in `package.json` aligned with the intended release version
- create the Git tag only after the release commit is final
- if a tag must move because the release commit was amended, update the remote tag explicitly
- verify that the published package still contains the intended runtime directories: `claude-code`, `codex`, `opencode`, `bin`, and `install.sh`

## Do not do this

- Do not assume all runtimes consume the same file structure.
- Do not leave outdated installer behavior undocumented.
- Do not duplicate installation truth across many runtime prompt files when this document should own it.

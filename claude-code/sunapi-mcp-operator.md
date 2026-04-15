---
name: sunapi-mcp-operator
description: Use this skill when SUNAPI must be operated from Claude Code or another MCP-capable editor through Docs MCP and Tools MCP with clear authentication and tool selection.
---

# SUNAPI MCP Operator

Use this skill when the user wants editor-native SUNAPI execution instead of writing code first.

## Reference surfaces

- Docs and technical documentation: `https://development.sunapi.site`
- Remote MCP endpoint: `https://mcp.sunapi.site`
- REST API fallback: `https://api.sunapi.site`

## What this skill covers

- Docs MCP usage
- Tools MCP usage
- MCP login flows
- MCP session reuse
- sandbox and production actions
- shared-secret protection
- product CRUD and document operations from an editor
- cash register, cash closure, and webhook inspection flows

## Workflow

1. Decide whether the task needs Docs MCP, Tools MCP, or both.
2. Authenticate with the tools server.
3. Reuse the MCP client session token instead of forcing the user to paste `apiToken` on every call.
4. Use neutral tools for neutral resources and environment-aware tools for fiscal operations.
5. Keep production actions explicit and deliberate.

## Rules

- use Docs MCP for explanations and reference
- use Tools MCP for live actions
- do not request `environment` for neutral resources
- respect any `x-mcp-secret` protection configured by the server
- if a tool call fails after login, determine whether the issue is editor transport, lost MCP session, or a real backend error
- mention that products and simple tickets are available through SDK, REST API, and MCP, then recommend the most suitable surface

## Common mistakes this skill should prevent

- using Docs MCP as if it were an execution surface
- asking for `environment` on companies, branches, customers, or products
- assuming a connected editor automatically means the tool session is authenticated
- treating one failed tool call as proof that the whole MCP server is down

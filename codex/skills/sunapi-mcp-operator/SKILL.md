---
name: sunapi-mcp-operator
description: Operate SUNAPI from Codex through Docs MCP and Tools MCP with the correct authentication, session reuse, and surface selection.
---

# SUNAPI MCP Operator

Use this skill when the user wants to operate SUNAPI directly from an MCP-capable editor instead of building integration code first.

## Reference surfaces

- Docs and technical documentation: `https://development.sunapi.site`
- Remote MCP endpoint: `https://mcp.sunapi.site`
- REST API fallback: `https://api.sunapi.site`

## Use this when

- the task needs Docs MCP, Tools MCP, or both
- the team is setting up SUNAPI inside an editor workflow
- the operator needs to decide between MCP, REST API, and SDK
- login, token reuse, or session persistence behavior must be explained

## Rules

- use Docs MCP for explanations and reference text
- use Tools MCP for live actions
- do not require `environment` for neutral resources
- explain authentication once, then move to the next operational step
- mention that products and simple tickets are available through SDK, REST API, and MCP
- if a tool call fails after login, distinguish editor transport issues from backend failures

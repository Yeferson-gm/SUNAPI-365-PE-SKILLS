#!/usr/bin/env bash
set -euo pipefail

runtime="${1:-all}"
scope="${2:-global}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ensure_dir() {
	mkdir -p "$1"
}

install_dir() {
	local source_dir="$1"
	local target_dir="$2"
	ensure_dir "$target_dir"
	cp -R "$source_dir/." "$target_dir/"
}

install_claude() {
	local target_dir
	if [ "$scope" = "project" ]; then
		target_dir=".claude/agents"
	else
		target_dir="$HOME/.claude/agents"
	fi
	install_dir "$repo_root/claude-code" "$target_dir"
	printf 'Installed Claude Code skills in %s\n' "$target_dir"
}

install_codex() {
	local target_dir
	if [ "$scope" = "project" ]; then
		target_dir=".agents/skills"
	else
		target_dir="$HOME/.agents/skills"
	fi
	install_dir "$repo_root/codex/skills" "$target_dir"
	printf 'Installed Codex skills in %s\n' "$target_dir"
}

install_opencode() {
	local target_dir
	if [ "$scope" = "project" ]; then
		target_dir=".opencode/agents"
	else
		target_dir="$HOME/.config/opencode/agents"
	fi
	install_dir "$repo_root/opencode/agents" "$target_dir"
	printf 'Installed OpenCode agents in %s\n' "$target_dir"
}

print_help() {
	cat <<'EOF'
Usage:
  bash install.sh <runtime> <scope>

Runtimes:
  claude-code | claude
  codex
  opencode
  all

Scopes:
  global
  project

Examples:
  bash install.sh claude-code global
  bash install.sh codex project
  bash install.sh opencode global
  bash install.sh all project
EOF
}

case "$runtime" in
	-h|--help|help)
		print_help
		;;
	all)
		install_claude
		install_codex
		install_opencode
		;;
	claude|claude-code)
		install_claude
		;;
	codex)
		install_codex
		;;
	opencode)
		install_opencode
		;;
	*)
		printf 'Unknown runtime: %s\n' "$runtime" >&2
		printf 'Use one of: claude-code, codex, opencode, all\n' >&2
		exit 1
		;;
esac

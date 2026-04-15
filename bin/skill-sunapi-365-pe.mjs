#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, '..');
const home = process.env.HOME;

const runtimeDefinitions = {
  'claude-code': {
    aliases: ['claude', 'claude-code'],
    source: join(packageRoot, 'claude-code'),
    projectTarget: '.claude/agents',
    globalTarget: home ? join(home, '.claude/agents') : null,
  },
  codex: {
    aliases: ['codex'],
    source: join(packageRoot, 'codex/skills'),
    projectTarget: '.agents/skills',
    globalTarget: home ? join(home, '.agents/skills') : null,
  },
  opencode: {
    aliases: ['opencode'],
    source: join(packageRoot, 'opencode/agents'),
    projectTarget: '.opencode/agents',
    globalTarget: home ? join(home, '.config/opencode/agents') : null,
  },
};

const skills = [
  'sunapi-company-onboarding',
  'sunapi-document-issuer',
  'sunapi-mcp-operator',
  'sunapi-sunat-troubleshooter',
];

const printHelp = () => {
  console.log(`SUNAPI Skills Installer\n\nUsage:\n  skill-sunapi-365-pe install <runtime|all> <project|global>\n  skill-sunapi-365-pe list\n  skill-sunapi-365-pe --help\n\nRuntimes:\n  claude-code | claude\n  codex\n  opencode\n  all\n\nScopes:\n  project\n  global`);
};

const resolveRuntimeKeys = (runtime) => {
  if (runtime === 'all') {
    return Object.keys(runtimeDefinitions);
  }

  const match = Object.entries(runtimeDefinitions).find(([, definition]) =>
    definition.aliases.includes(runtime),
  );

  if (!match) {
    throw new Error(`Unknown runtime: ${runtime}`);
  }

  return [match[0]];
};

const ensureDir = (path) => mkdirSync(path, { recursive: true });

const installRuntime = (runtimeKey, scope) => {
  const runtime = runtimeDefinitions[runtimeKey];
  const target = scope === 'project' ? runtime.projectTarget : runtime.globalTarget;

  if (!target) {
    throw new Error(`Cannot resolve ${scope} install target for ${runtimeKey}.`);
  }

  if (!existsSync(runtime.source)) {
    throw new Error(`Missing runtime source directory: ${runtime.source}`);
  }

  ensureDir(target);
  cpSync(runtime.source, target, { recursive: true, force: true });

  console.log(`Installed ${runtimeKey} skills in ${target}`);
};

const command = process.argv[2] ?? '--help';

if (command === '--help' || command === '-h' || command === 'help') {
  printHelp();
  process.exit(0);
}

if (command === 'list') {
  console.log(skills.join('\n'));
  process.exit(0);
}

if (command !== 'install') {
  console.error(`Unknown command: ${command}`);
  printHelp();
  process.exit(1);
}

const runtimeArg = process.argv[3] ?? 'all';
const scopeArg = process.argv[4] ?? 'global';

if (!['project', 'global'].includes(scopeArg)) {
  console.error(`Unknown scope: ${scopeArg}`);
  process.exit(1);
}

try {
  const runtimeKeys = resolveRuntimeKeys(runtimeArg);
  for (const runtimeKey of runtimeKeys) {
    installRuntime(runtimeKey, scopeArg);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

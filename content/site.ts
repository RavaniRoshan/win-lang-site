import type { ReactNode } from "react";

export type FloatingIcon = {
  src: string;
  label: string;
  top: string;
  left: string;
  size: number;
  rotate: number;
  delay: number;
};

export type FeatureItem = {
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
  visual: {
    type: "logos" | "logic" | "agent";
    items: string[];
  };
};

export type ConstructItem = {
  name: string;
  syntax: string;
  summary: string;
};

export type McpTool = {
  name: string;
  purpose: string;
  detail: string;
};

export type PipelineStep = {
  name: string;
  summary: string;
  detail: string;
};

export type ReleaseFeature = {
  title: string;
  summary: string;
  detail: string;
  impact: string;
};

export type ReleaseEntry = {
  id: string;
  label: string;
  version: string;
  releasedOn: string;
  headline: string;
  summary: string;
  spotlightTitle: string;
  spotlightBody: string;
  highlights: string[];
  features: ReleaseFeature[];
  statusTitle: string;
  statusBody: string;
};

export const heroIcons: FloatingIcon[] = [
  {
    src: "/icons/chrome.svg",
    label: "Chrome",
    top: "6%",
    left: "8%",
    size: 54,
    rotate: -12,
    delay: 0
  },
  {
    src: "/icons/vscode.svg",
    label: "VS Code",
    top: "18%",
    left: "84%",
    size: 56,
    rotate: 10,
    delay: 140
  },
  {
    src: "/icons/excel.svg",
    label: "Excel",
    top: "68%",
    left: "10%",
    size: 58,
    rotate: -7,
    delay: 260
  },
  {
    src: "/icons/slack.svg",
    label: "Slack",
    top: "74%",
    left: "82%",
    size: 52,
    rotate: 9,
    delay: 340
  }
];

export const heroCode = `tell application "Chrome"
    open "https://github.com"
    wait until loaded
    click button "Sign in"
    set auth_state to "awaiting_credentials"
    return auth_state
end tell`;

export const wsdictSnippet = `app: Chrome
backend: cdp

commands:
  open:
    mapsTo: CDP.Page.navigate
    args:
      url: string

  click button:
    mapsTo: CDP.DOM.click
    target:
      role: button`;

export const homepageFeatures: FeatureItem[] = [
  {
    eyebrow: "By app",
    title: "Target the surface you actually use.",
    description:
      "Move between Chrome, VS Code, Excel, Slack, and future Windows targets with a dictionary-driven model instead of brittle screen coordinates.",
    visualLabel: "Application icon cluster",
    visual: {
      type: "logos",
      items: ["Chrome", "VS Code", "Excel", "Slack"]
    }
  },
  {
    eyebrow: "By logic",
    title: "Write intent, branches, and recovery in plain language.",
    description:
      "Use tell blocks, variables, waits, and try/catch structures to express the flow of automation the same way you would describe it to a teammate.",
    visualLabel: "Logic block",
    visual: {
      type: "logic",
      items: ["try", "open dashboard", "if contains error", "catch", "return status"]
    }
  },
  {
    eyebrow: "By AI",
    title: "Give agents a language that maps to real APIs.",
    description:
      "WinScript exposes structured MCP tools so agents can validate, inspect, and execute scripts against known application capabilities.",
    visualLabel: "Agent workflow",
    visual: {
      type: "agent",
      items: ["Prompt", "Generate", "Validate", "Run"]
    }
  }
];

export const constructs: ConstructItem[] = [
  {
    name: "tell",
    syntax: "tell application \"Chrome\"",
    summary: "Enters the context of an application and scopes the actions that follow."
  },
  {
    name: "set",
    syntax: "set url to \"https://example.com\"",
    summary: "Captures state in readable variables that can be reused later in the script."
  },
  {
    name: "return",
    syntax: "return auth_state",
    summary: "Emits a final value back to the caller or calling agent."
  },
  {
    name: "wait",
    syntax: "wait until loaded",
    summary: "Coordinates timing without forcing users into fixed sleeps or brittle sequencing."
  },
  {
    name: "try/catch",
    syntax: "try ... catch err",
    summary: "Makes automation resilient by expressing fallback behavior alongside the happy path."
  }
];

export const pipelineSteps: PipelineStep[] = [
  {
    name: "Grammar",
    summary: "A Lark PEG grammar parses `tell/end tell` blocks and natural-syntax instructions.",
    detail:
      "The grammar gives WinScript a readable surface while still preserving enough structure for deterministic parsing."
  },
  {
    name: "AST",
    summary: "Parsed source is transformed into explicit dataclass-style nodes.",
    detail:
      "The AST normalizes human-friendly syntax into a machine-friendly representation the runtime can reason about."
  },
  {
    name: "Resolver",
    summary: "Natural commands are matched to `.wsdict` definitions.",
    detail:
      "This is where community dictionaries become executable capability maps instead of ad hoc prompt instructions."
  },
  {
    name: "Dispatcher",
    summary: "Resolved actions are routed to the correct backend.",
    detail:
      "A single script can stay high-level while the dispatcher decides which adapter should fulfill each command."
  },
  {
    name: "Backends",
    summary: "CDP is active today, with COM and UIA on the roadmap.",
    detail:
      "Chrome and Electron apps are ready now; Office and native Win32 support expand the same model across Windows."
  }
];

export const mcpTools: McpTool[] = [
  {
    name: "run_winscript",
    purpose: "Execute source provided inline.",
    detail: "Best for agents or UIs that assemble scripts dynamically at runtime."
  },
  {
    name: "run_winscript_file",
    purpose: "Execute a script stored on disk.",
    detail: "Keeps larger workflows versionable and easier to reuse across teams."
  },
  {
    name: "list_available_apps",
    purpose: "Discover installed or known `.wsdict` targets.",
    detail: "Lets an agent inspect the current capability surface before choosing a path."
  },
  {
    name: "get_app_commands",
    purpose: "Inspect the command vocabulary for one application.",
    detail: "Turns each supported app into a queryable interface instead of a hidden implementation detail."
  },
  {
    name: "validate_script",
    purpose: "Parse-check a script without running it.",
    detail: "Ideal for editor integrations, agent planning, and safe preflight validation."
  }
];

export const languagePrimitives = [
  "tell/end tell",
  "if/then",
  "try/catch",
  "set",
  "return",
  "wait",
  "contains",
  "is greater than",
  "& concatenation"
];

export const docsIntro =
  "AppleScript had 40 years. Windows had nothing. Until now. WinScript-lang gives Windows automation a natural, structured language designed for humans and AI agents.";

export const footerTags = [
  "Grammar-first",
  "Open dictionary",
  "MCP native",
  "Windows focused"
];

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/updates", label: "Updates" }
];

export const docsSections = [
  {
    title: "Core identity",
    body: "WinScript is a high-level scripting language for Windows automation. It replaces brittle coordinate automation with explicit command resolution, structured execution, and backend-specific integrations."
  },
  {
    title: "Why it matters",
    body: "The language is intentionally readable enough for humans while remaining structured enough for AI agents to validate and run safely."
  }
];

export const footerWordmark = "WINSCRIPT";

export const heroEyebrow = "WinScript-lang";

export const heroSupportingLine =
  "The open scripting language for Windows that bridges the gap between AI agents and application APIs.";

export const pageMetadata = {
  title: "WinScript-lang",
  description:
    "A Cosmos-inspired landing page and technical docs hub for WinScript, the open scripting language for Windows automation."
};

export const docsExampleScript = `tell application "VS Code"
    set project_name to "win-lang-site"
    open folder "C:/projects/" & project_name
    wait 1 second
    return "workspace_ready"
end tell`;

export const docsWsdictExplanation = [
  "`.wsdict` is a YAML-based open dictionary format.",
  "It maps readable commands to backend-specific methods.",
  "The runtime can gain new app support without rewriting the core parser or dispatcher."
];

export const docsStats = [
  { label: "Tests", value: "130" },
  { label: "Modules", value: "10" },
  { label: "Parsing", value: "Sub-ms" }
];

export const docsToolHighlights: Array<{ title: string; body: ReactNode }> = [
  {
    title: "Agent-first runtime",
    body: "Validation, app discovery, command introspection, and execution are exposed through MCP."
  },
  {
    title: "Backend strategy",
    body: "CDP is live for Chrome and Electron apps, with COM and UIA expanding the same mental model across Windows."
  }
];

export const releaseEntries: ReleaseEntry[] = [
  {
    id: "automation-ecosystem-apr-2026",
    label: "Latest update",
    version: "Current milestone",
    releasedOn: "April 2026",
    headline: "WinScript is now a complete Windows automation ecosystem.",
    summary:
      "This release turns WinScript from a promising language runtime into a day-to-day toolchain: shared libraries, an installable CLI, a live REPL, Excel COM routing, and a professional VS Code experience.",
    spotlightTitle: "Major release focus: the language now feels shippable, not experimental.",
    spotlightBody:
      "The biggest shift is product maturity. You can package it, validate it, live-code in it, wire it into Excel through nested COM contexts, and edit it with diagnostics, autocomplete, and hover docs inside VS Code.",
    highlights: ["Shared libraries", "CLI tooling", "Stateful REPL", "Excel COM v2", "VS Code LSP"],
    features: [
      {
        title: "Script Library System",
        summary: "Developers can import reusable `.wslib` modules directly into scripts.",
        detail:
          "A dedicated `LibraryLoader` resolves imports from local paths and standard APPDATA locations, while enforcing that library files only expose reusable function definitions with no dangerous top-level execution.",
        impact: "WinScript now supports real code sharing without giving up runtime safety."
      },
      {
        title: "Installable Command-Line Interface",
        summary: "WinScript now ships as a standard CLI package for execution, validation, and discovery.",
        detail:
          "Running `winscript script.ws` executes a file, while flags like `--validate`, `--apps`, and `--commands Chrome` make the runtime inspectable. CLI arguments also flow into scripts dynamically as `$1`, `$2`, and onward.",
        impact: "The language can now plug into local workflows, demos, and automation pipelines cleanly."
      },
      {
        title: "Interactive REPL Shell",
        summary: "A colorful, stateful terminal interface now supports live-coding WinScript.",
        detail:
          "Invoking `winscript` with no file opens a REPL with multi-line awareness, persistent variables and functions, history, and environment commands such as `:vars`, `:funcs`, `:clear`, and `:load <file>`.",
        impact: "Learning, debugging, and iterating on scripts is dramatically faster."
      },
      {
        title: "Microsoft Excel COM Integration",
        summary: "WinScript now includes the official v2-style COM path for Excel automation.",
        detail:
          "Natural commands like setting a cell value map directly onto `pywin32` COM methods, and the upgraded backend uses nested context routing so `tell Excel` and nested sheet scopes track the correct COM object stack under the hood.",
        impact: "Excel automation feels natural in the language while still routing correctly through COM internals."
      },
      {
        title: "VS Code Extension and Language Server",
        summary: "WinScript now has editor-grade tooling for writing and inspecting scripts.",
        detail:
          "The TypeScript extension and Python `pygls` server add syntax highlighting, live diagnostics, app-aware autocomplete after `tell`, and hover documentation pulled dynamically from `.wsdict` files.",
        impact: "WinScript now behaves like a serious language inside the editor, not just a script format."
      }
    ],
    statusTitle: "Current project status",
    statusBody:
      "WinScript now has a typed runtime, a packaged CLI, live REPL tooling, nested COM integration for Excel, and a VS Code editing surface. The product story has shifted from language concept to robust automation platform."
  }
];

export const latestRelease = releaseEntries[0];

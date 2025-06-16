# Claude Code Workflow Template

A template repository for porting efficient Claude Code development workflows to new projects.

## 🎯 Usage Guide

### 1. Using the Template

How to use this template in a new project:

```bash
# 1. Copy the template to your new project
cp -r .claude /path/to/your/project/

# 2. Run initialization in Claude Code from project root
/init
```

### 2. Initialization Process

When you run the `/init` command:

- **Project Analysis**: Automatically detects current project's language/platform
- **Configuration Collection**: Collects project-specific settings like dev/build/test commands
- **Workflow Generation**: 
  - Creates `.claude/config/project.json` project configuration file
  - Generates `CLAUDE.md` AI agent work guide
  - Creates `.claude/commands/work.md` unified work management commands
- **MCP Tools Setup**: Installs and configures MCP servers suitable for the project
- **Template Cleanup**: Automatically removes `init.md` file after successful initialization

## 🚀 Post-Initialization Workflow

### Unified Work Management System

After initialization, you can use these commands:

#### Core Commands

| Command | Description |
|---------|-------------|
| `/work start "description"` | Start new work |
| `/work` | Check current status and get suggestions |
| `/work done` | Complete work (with quality checks) |
| `/work list` | View all work items and progress |
| `/work help` | Detailed help guide |

#### Example Workflow

```bash
# 1. Start new work
/work start "implement user authentication"

# 2. Development work
# ... coding work ...

# 3. Check current status
/work

# 4. Complete work (automatic quality checks and commit)
/work done
```

### Automated Quality Management

When running `/work done`, automatically:
- ✅ Code formatting (Prettier, Black, etc.)
- ✅ Linting validation (ESLint, Flake8, etc.)
- ✅ Test execution
- ✅ Build verification
- ✅ Conventional commit generation

### Multi-language Support

Automatically detects user language and provides:
- Localized UI (Korean, English, Japanese, Chinese)
- Technical elements kept in English for team compatibility
- Language-appropriate tone adaptation

## 📁 Template Structure

```
.claude/
├── commands/
│   └── init.md                    # Initialization command (auto-deleted after use)
├── templates/
│   ├── claude.md.template         # CLAUDE.md generation template
│   └── commands/
│       └── work.md.template       # Work management command template
└── config/                        # Generated after initialization
    └── project.json               # Project configuration file
```

## ⚙️ Supported Tech Stacks

Auto-detection and optimization support for:
- **Languages**: Python, JavaScript/Node.js, TypeScript, Rust, Go, Java, C++, etc.
- **Frameworks**: React, Vue, Express, FastAPI, Spring Boot, etc.
- **Build Tools**: Vite, Webpack, Cargo, Maven, Gradle, etc.
- **Testing**: Jest, Pytest, Go test, Cargo test, etc.

## 🛠️ Customization

After initialization, you can modify settings as needed:
- `.claude/config/project.json`: Change commands and settings
- `CLAUDE.md`: Adjust AI agent behavior
- `.claude/commands/work.md`: Customize work management workflow

## 🔧 MCP Tools Integration

Automatic recommendation and installation of MCP servers based on project characteristics:
- **Web Development**: playwright, github, browserbase
- **Database**: postgres, sqlite
- **Infrastructure**: docker, cloudflare
- **Documentation**: context7

## 📖 Additional Information

- Check detailed usage with `/work help` after initialization
- Refer to `CLAUDE.md` for project-specific AI guidance
- Manage settings in `.claude/config/project.json`

---

**Start your powerful AI-powered development workflow with simple initialization!**
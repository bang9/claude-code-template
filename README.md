# Claude Code AI Agent Template - Usage Guide

A comprehensive GitHub template for setting up intelligent AI-powered development workflows with Claude Code, featuring automated work management, quality assurance, and seamless integration with modern development stacks.

## 🎯 What This Template Provides

This repository serves as a comprehensive template for implementing Claude Code's advanced AI agent capabilities in your projects. It includes:

- **Intelligent Work Management System** with unified `/work` commands
- **Automated Quality Assurance** workflows
- **Multi-language Support** with smart language detection
- **Professional Development Practices** with conventional commits
- **Sendbird AI Agent Integration** for real-time AI assistance

## 🚀 Quick Setup

### 1. Use This Template

Create a new repository from this template:

```bash
# Using GitHub CLI
gh repo create my-ai-project --template bang9/claude-code-template

# Or click "Use this template" button on GitHub
```

### 2. Initialize Your Project

```bash
# Clone your new repository
git clone https://github.com/your-username/my-ai-project.git
cd my-ai-project

# Install dependencies (if using React/TypeScript)
pnpm install
```

### 3. Setup Claude Code Integration

Copy the `.claude` directory structure to your project:

```bash
# Copy the entire .claude directory
cp -r .claude/* path/to/your/project/.claude/

# Copy CLAUDE.md to your project root
cp CLAUDE.md path/to/your/project/
```

### 4. Initialize Claude Code

Run the initialization command in Claude Code:

```bash
# In Claude Code, run:
/init
```

This will:
- Detect your project type and language
- Generate appropriate configuration files
- Set up work management templates
- Configure quality assurance workflows

## 📁 Template Structure

```
.claude/
├── commands/
│   └── init.md          # Project initialization command
├── templates/
│   ├── claude.md.template    # CLAUDE.md template
│   └── commands/
│       └── work.md.template  # Work management templates
└── config/
    └── project.json     # Project configuration (auto-generated)

CLAUDE.md                # Main project instructions
```

## 🛠️ Core Features

### Unified Work Management

The template provides a comprehensive work management system through `/work` commands:

#### Available Commands

| Command | Description |
|---------|-------------|
| `/work start "description"` | Start new work with automated setup |
| `/work` | Smart context-aware status and suggestions |
| `/work done` | Complete work with quality checks |
| `/work list` | View all work items and progress |
| `/work help` | Comprehensive help system |

#### Example Workflow

```bash
# 1. Start new work
/work start "implement user authentication"

# 2. Development work
# ... write your code ...

# 3. Check current status
/work

# 4. Complete with automated quality checks
/work done
```

### Automated Quality Assurance

Every work completion includes:
- ✅ Code formatting with Prettier
- ✅ Linting validation
- ✅ Test execution
- ✅ Build verification
- ✅ Conventional commit generation

### Multi-Language Support

The template automatically detects user language and provides:
- Localized user interface (Korean, English, Japanese, Chinese)
- Technical elements in English for team compatibility
- Professional tone adaptation per language

## ⚙️ Configuration

### Project Configuration

The template generates `.claude/config/project.json` with your project-specific settings:

```json
{
  "name": "my-project",
  "platform": "React + TypeScript (Vite)",
  "commands": {
    "dev": "npm run dev",
    "build": "npm run build",
    "test": "npm test",
    "lint": "npm run lint"
  },
  "quality_checks": {
    "formatting": "prettier --write .",
    "linting": "npm run lint",
    "testing": "npm test",
    "building": "npm run build"
  }
}
```

### CLAUDE.md Configuration

The template automatically generates a comprehensive `CLAUDE.md` file with:
- Project-specific instructions
- Development workflow guidelines
- Quality assurance rules
- AI agent behavior configuration

## 🔧 Customization

### Adapting to Your Stack

The template supports various technology stacks:

#### React + TypeScript (Vite)
```json
{
  "platform": "React + TypeScript (Vite)",
  "commands": {
    "dev": "pnpm dev",
    "build": "pnpm run build",
    "test": "pnpm test",
    "lint": "pnpm run lint"
  }
}
```

#### Node.js + Express
```json
{
  "platform": "Node.js + Express",
  "commands": {
    "dev": "npm run dev",
    "build": "npm run build",
    "test": "npm test",
    "lint": "eslint ."
  }
}
```

#### Python + FastAPI
```json
{
  "platform": "Python + FastAPI",
  "commands": {
    "dev": "uvicorn main:app --reload",
    "build": "python -m build",
    "test": "pytest",
    "lint": "ruff check ."
  }
}
```

### Custom Work Templates

Create custom work templates in `.claude/templates/`:

```markdown
# Simple Task Template
## Basic Information
- Status: {{STATUS}}
- Priority: {{PRIORITY}}
- Estimated Time: {{ESTIMATED_TIME}}

## Description
{{DESCRIPTION}}

## Completion Criteria
- [ ] {{COMPLETION_CRITERIA}}
```

## 🎨 Usage Examples

### Starting a New Feature

```bash
# Start work on a new feature
/work start "add dark mode toggle to user settings"

# Claude Code will:
# 1. Create a new work document
# 2. Generate a feature branch
# 3. Set up work tracking
# 4. Provide next steps
```

### Bug Fix Workflow

```bash
# Start bug fix work
/work start "fix login redirect issue on mobile"

# After fixing the bug
/work done

# Claude Code will:
# 1. Run all quality checks
# 2. Generate conventional commit
# 3. Update work status
# 4. Provide PR options
```

### Complex Project Planning

```bash
# Start complex work
/work start "implement user authentication system with OAuth"

# Claude Code will:
# 1. Generate comprehensive specification
# 2. Break down into subtasks
# 3. Create detailed documentation
# 4. Set up tracking system
```

## 🌟 Benefits

### For Individual Developers
- Structured task management with AI assistance
- Automated quality checks and documentation
- Intelligent workflow suggestions
- Consistent development practices

### For Teams
- Standardized development workflows
- Multi-language support for global teams
- Automated documentation generation
- Consistent code quality standards

### For Projects
- Rapid setup and configuration
- Professional development practices
- Integrated AI assistance
- Scalable workflow management

## 📚 Advanced Features

### MCP Integration

The template supports Model Context Protocol (MCP) for enhanced AI capabilities:

```bash
# List available MCP servers
claude mcp list

# Add new MCP server
claude mcp add <name> <command>
```

### Custom Slash Commands

Extend the template with custom commands in `.claude/commands/`:

```markdown
# Custom Command Template
## Command: /custom-command
### Description
Custom functionality for your project

### Usage
/custom-command [arguments]
```

## 🔄 Migration Guide

### From Existing Projects

1. **Backup your current configuration**
   ```bash
   cp -r .claude .claude-backup
   cp CLAUDE.md CLAUDE.md.backup
   ```

2. **Copy template files**
   ```bash
   cp -r /path/to/template/.claude/* .claude/
   ```

3. **Run initialization**
   ```bash
   /init
   ```

4. **Merge configurations**
   - Review generated files
   - Merge with your existing settings
   - Test workflows

## 🤝 Contributing

1. Fork this template repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Use the work management system: `/work start "add amazing feature"`
4. Make your changes
5. Complete the work: `/work done`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📖 Documentation

- [Work Management Guide](/.claude/commands/work.md)
- [Template Documentation](/.claude/templates/)
- [Configuration Guide](/.claude/config/)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)

## 🆘 Support

If you encounter issues:

1. Check the [troubleshooting guide](/.claude/docs/troubleshooting.md)
2. Review your configuration in `.claude/config/project.json`
3. Verify your `CLAUDE.md` settings
4. Open an issue in this repository

## 📄 License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Claude Code](https://claude.ai/code) for AI-powered development
- [Anthropic](https://anthropic.com) for Claude AI
- Contributors and the open-source community

---

**Ready to supercharge your development workflow with AI?** Use this template to get started with intelligent task management, automated quality checks, and seamless AI integration in your projects.

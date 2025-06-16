# Project Initialization: $ARGUMENTS

<!--
SYSTEM INSTRUCTION: This template handles project initialization with smart language detection.
LANGUAGE DETECTION: Automatically detect user's preferred language from their first input.
USER CONTENT LOCALIZATION: All initialization dialogs, prompts, and project setup in user's language.
TECHNICAL ELEMENTS: Keep file paths, commands, and configuration in English for consistency.
TONE: Helpful and guiding tone suitable for project setup in the detected language.
SMART DETECTION: Use confidence-based detection with fallback to English if uncertain.
-->

Initialize Claude Code project and configure development environment.

## Initialization Process

### 1. Environment Check
<!-- LOCALIZATION: Check status messages should be in user's language -->
First check current project status:
- Check existence of `.claude/config/project.json` file
- Confirm overwrite if existing configuration exists

### 2. Language & Project Setup
<!-- SYSTEM: Advanced language detection with user confirmation -->
Detect user's preferred language from their input and respond accordingly throughout the initialization process.

Collect following information through user interaction:

#### Essential Information
<!-- LOCALIZATION: Information prompts should be in user's language -->
1. **Project Name**
   - Default: Current directory name
   - Example: "my-awesome-project"

2. **Language/Platform**
   - Examples: "Python", "JavaScript/Node.js", "Rust", "Go", "Java", "C++", "Ruby", etc.
   - Default: Auto-detect by analyzing project files

#### Development Commands
<!-- LOCALIZATION: Command descriptions should be in user's language -->
3. **Development/Execution Commands**
   - Examples:
     - Python: "python main.py", "python -m app"
     - Node.js: "npm run dev", "node server.js"
     - Rust: "cargo run"
     - Go: "go run .", "go run main.go"
     - Java: "mvn spring-boot:run", "gradle bootRun"
     - C++: "./build/app", "make run"

4. **Build/Compile Commands** (if needed)
   - Examples:
     - Rust: "cargo build --release"
     - Go: "go build"
     - Java: "mvn package", "gradle build"
     - C++: "make", "cmake --build build/"
     - Node.js: "npm run build"
   - Optional: Interpreter languages may not need build

5. **Test Commands**
   - Examples:
     - Python: "pytest", "python -m unittest"
     - Node.js: "npm test", "jest"
     - Rust: "cargo test"
     - Go: "go test ./..."
     - Java: "mvn test", "gradle test"

6. **Code Validation Commands**
   - Examples:
     - Python: "flake8", "pylint", "mypy"
     - Node.js: "eslint .", "npm run lint"
     - Rust: "cargo clippy"
     - Go: "go vet", "golint"
     - Java: "checkstyle", "spotbugs"

#### Optional
7. **Formatting Commands**
   - Examples:
     - Python: "black .", "isort ."
     - Node.js: "prettier --write ."
     - Rust: "cargo fmt"
     - Go: "go fmt ./..."
     - Java: "google-java-format"

8. **Dependency Installation Commands**
   - Examples:
     - Python: "pip install -r requirements.txt"
     - Node.js: "npm install", "yarn install"
     - Rust: "cargo build"
     - Go: "go mod download"
     - Java: "mvn install", "gradle build"

### 3. Project Characteristics Detection
<!-- LOCALIZATION: Detection descriptions should be in user's language -->
Automatically detect by analyzing project files:
- **Language Detection**: File extension analysis (.py, .js, .rs, .go, .java, .cpp, etc.)
- **Build System**: package.json, Cargo.toml, go.mod, pom.xml, Makefile, etc.
- **Test Framework**: pytest, jest, cargo test, go test, etc.
- **Code Validation Tools**: Check existence of configuration files for eslint, flake8, clippy, etc.

### 4. MCP Tools Setup
<!-- LOCALIZATION: MCP setup dialogs should be in user's language -->
Check currently installed MCP servers and install additional tools as needed.

#### Interactive MCP Setup Process

**Step 1: Check Current Status**
```bash
claude mcp list  # Check installed MCP servers
```

**Step 2: Identify Work Type**
<!-- LOCALIZATION: Work type inquiry should be in user's language -->
```
🔧 MCP Server Setup # LOCALIZE: Setup header

Currently installed MCP servers: (auto-check) # LOCALIZE: Current status label

What type of work do you mainly plan to do? # LOCALIZE: Work type question
> Web development, database, browser testing
```

**Step 3: Official Documentation Search and Verification**
- Check latest information from official MCP server repository
- Verify installation methods and requirements for each server
- Review project compatibility

**Step 4: Smart Recommendation and User Selection**
<!-- LOCALIZATION: All recommendation dialogs should be in user's language -->
```
🤖 Analysis Result: Analyzed tools suitable for React + TypeScript web development # LOCALIZE: Analysis header

📋 Recommended MCP Servers (Installation Plan): # LOCALIZE: Recommendation header
✅ playwright (already installed) - Browser automation and E2E testing # LOCALIZE: Server descriptions
🔍 github - GitHub repository management
   • Issue creation/viewing, PR management, repository information access
   • Install: npm install -g @modelcontextprotocol/server-github
🔍 browserbase - Cloud browser automation
   • Web navigation, data extraction, form automation
   • Install: npm install -g @browserbase/mcp-server
🔍 cloudflare - Cloudflare platform management
   • DNS, CDN, security configuration management
   • Install: npm install -g @cloudflare/mcp-server

Which servers would you like to install? # LOCALIZE: Installation choice question
1) Install all (github, browserbase, cloudflare) # LOCALIZE: Installation options
2) Selective installation (select by number: e.g., 1,3)
3) Skip (manual installation later)
4) Search other servers

Selection: > # LOCALIZE: Selection prompt 
```

**Step 5: Install After User Confirmation**
<!-- LOCALIZATION: Installation process descriptions should be in user's language -->
For selected servers:
- Explain detailed information and purpose of each server
- Guide installation commands and requirements
- Proceed with installation after final user confirmation
- Verify installation and guide usage

#### Safe Installation Process
1. **Documentation Search First**: Check official MCP server list with WebSearch
2. **Verify Exact Package Names**: Validate installation commands from official repository
3. **Step-by-Step Installation**: Install one by one to prevent errors
4. **Post-Installation Verification**: Confirm installation success with `claude mcp list`

#### Recommended MCP Servers (React + TypeScript Projects)
- **playwright**: Browser automation and E2E testing (already installed)
- **context7**: Library documentation context provider (already installed)
- **github**: GitHub repository management (optional)
- **postgres**: Database operations (if needed)

### 5. Sample Interaction Flow
<!-- LOCALIZATION: All interaction prompts should be in user's language -->
```
🚀 Claude Code Project Initialization # LOCALIZE: Initialization header

Enter project name (default: my-project): # LOCALIZE: Project name prompt
> my-awesome-project

Language/Platform (auto-detected): # LOCALIZE: Language prompt
> [Detected Language/Platform]

Development/execution command: # LOCALIZE: Development command prompt
> [Platform-specific dev command]

Build/compile command (optional): # LOCALIZE: Build command prompt
> [Platform-specific build command or skip]

Test command: # LOCALIZE: Test command prompt
> [Platform-specific test command]

Code validation command: # LOCALIZE: Validation command prompt
> [Platform-specific lint command]

Formatting command (optional): # LOCALIZE: Formatting command prompt
> [Platform-specific format command]

Dependency installation command: # LOCALIZE: Installation command prompt
> [Platform-specific install command]

🔧 MCP Server Setup # LOCALIZE: MCP setup header
Currently installed MCP servers: (none) # LOCALIZE: Current status

💡 Common MCP servers: # LOCALIZE: Common servers header
1. playwright  2. github  3. postgres  4. docker  5. sqlite  6. puppeteer 7. context7

Select desired servers or enter directly: # LOCALIZE: Server selection prompt
> [User selects relevant MCP servers]

🔍 Searching [Selected MCP server] information... # LOCALIZE: Search progress
✅ Found: [Package name] # LOCALIZE: Found message
📦 Installation and registration completed # LOCALIZE: Installation complete

Enter additional notes if any: # LOCALIZE: Additional notes prompt
> [Project description]

✅ Initialization completed! Installed MCP: [Installed servers] # LOCALIZE: Completion message
```

### 6. Configuration File Generation
Create `.claude/config/project.json` with collected information:
```json
{
  "projectName": "user_input_value",
  "languagePlatform": "user_selected_language_platform",
  "commands": {
    "dev": "user_input_dev_command",
    "build": "user_input_build_command (optional)", 
    "test": "user_input_test_command",
    "lint": "user_input_lint_command",
    "format": "user_input_format_command (optional)",
    "install": "user_input_install_command (optional)",
  },
  "features": {
    "hasBuilds": "boolean_build_step_required",
    "hasFormatting": "boolean_formatting_tools_used",
    "hasInstallStep": "boolean_dependency_install_required"
  },
  "metadata": {
    "description": "user_input_description",
    "createdAt": "current_date",
    "version": "1.0.0",
    "language": "detected_user_language (ko|en|ja|etc)"
  }
}
```

#### Language Detection Logic
```javascript
// Detect user's preferred language from their initial input
const detectLanguage = (userInput) => {
  // Korean characters pattern
  if (/[가-힣]/.test(userInput)) return 'ko';
  // Japanese characters pattern  
  if (/[ひらがなカタカナ]/.test(userInput)) return 'ja';
  // Chinese characters pattern
  if (/[一-龯]/.test(userInput)) return 'zh';
  // Default to English
  return 'en';
};

// Use detected language for all AI responses throughout the session
const responseLanguage = detectLanguage(firstUserMessage);
```

Note: MCP server information is checked in real-time via `claude mcp list` command, so no separate storage needed

### 7. CLAUDE.md Generation
Generate project-specific CLAUDE.md using template:
- Read `.claude/templates/claude.md.template`
- Replace template variables with project.json configuration values:
  - `{{PROJECT_NAME}}` → projectName
  - `{{LANGUAGE_PLATFORM}}` → languagePlatform  
  - `{{DEV_COMMAND}}` → commands.dev
  - `{{BUILD_COMMAND}}` → commands.build
  - `{{TEST_COMMAND}}` → commands.test
  - `{{LINT_COMMAND}}` → commands.lint
  - `{{FORMAT_COMMAND}}` → commands.format
  - `{{INSTALL_COMMAND}}` → commands.install
- Generate CLAUDE.md in root directory

#### Template Variable Mapping
```javascript
// Template processing logic
const templateVars = {
  PROJECT_NAME: config.projectName,
  LANGUAGE_PLATFORM: config.languagePlatform,
  DEV_COMMAND: config.commands.dev,
  BUILD_COMMAND: config.commands.build,
  TEST_COMMAND: config.commands.test,
  LINT_COMMAND: config.commands.lint,
  FORMAT_COMMAND: config.commands.format || null,
  INSTALL_COMMAND: config.commands.install || null,
  ADDITIONAL_NOTES: config.metadata.description
};
```

### 8. Command Generation from Templates
Generate project-specific commands using template system:

#### Process Command Templates
```bash
# Process work.md.template with project.json configuration
read_template ".claude/templates/commands/work.md.template"
apply_template_variables "$template_content" "$templateVars"
write_command ".claude/commands/work.md" "$processed_content"
```

#### Template Processing Logic
```javascript
// Generate work command from template
const workTemplate = readFile('.claude/templates/commands/work.md.template');
const processedWorkCommand = workTemplate
  .replace(/{{PROJECT_NAME}}/g, config.projectName)
  .replace(/{{LANGUAGE_PLATFORM}}/g, config.languagePlatform)
  .replace(/{{DEV_COMMAND}}/g, config.commands.dev)
  .replace(/{{BUILD_COMMAND}}/g, config.commands.build)
  .replace(/{{TEST_COMMAND}}/g, config.commands.test)
  .replace(/{{LINT_COMMAND}}/g, config.commands.lint)
  .replace(/{{FORMAT_COMMAND}}/g, config.commands.format);

writeFile('.claude/commands/work.md', processedWorkCommand);
```

#### Generated Commands Structure
```
.claude/commands/
└── work.md              # Project-optimized unified work management
```

### 9. Directory Structure Check/Creation
Create necessary directories if they don't exist:
```
.claude/
├── commands/          # Project-specific optimized commands
├── config/           # project.json configuration
│   └── project.json
├── templates/        # Master templates
│   ├── claude.md.template
│   └── commands/     # Command templates
│       └── work.md.template  # Unified work management
└── work/             # Work documents (replaces issues/ and prd/)
    └── (work files will be created as needed)
```

### 10. Completion Report
<!-- LOCALIZATION: All completion messages should be in user's language -->
Provide following information after initialization completion:
```
✅ {{PROJECT_NAME}} ({{LANGUAGE_PLATFORM}}) initialization completed! # LOCALIZE: Completion header

📁 Created files: # LOCALIZE: Created files header
- .claude/config/project.json (Project configuration) # LOCALIZE: File descriptions
- CLAUDE.md (AI Agent work guide)
- .claude/work/ (Work documents directory)

🛠️ Configured {{LANGUAGE_PLATFORM}} commands: # LOCALIZE: Commands header
- Development/execution: {{DEV_COMMAND}} # LOCALIZE: Command descriptions
{{#if BUILD_COMMAND}}- Build/compile: {{BUILD_COMMAND}}{{/if}}
{{#if TEST_COMMAND}}- Testing: {{TEST_COMMAND}}{{/if}}
{{#if LINT_COMMAND}}- Code validation: {{LINT_COMMAND}}{{/if}}
{{#if FORMAT_COMMAND}}- Formatting: {{FORMAT_COMMAND}}{{/if}}
{{#if TYPE_CHECK_COMMAND}}- Type checking: {{TYPE_CHECK_COMMAND}}{{/if}}

📋 Generated unified work commands: # LOCALIZE: Work commands header
- /work start "description" - {{LANGUAGE_PLATFORM}} optimized work initiation # LOCALIZE: Command descriptions
- /work - Smart context-based action (status check/suggestions)
- /work done - Quality checks with automatic commit/PR
- /work list - {{PROJECT_NAME}} complete work status overview
- /work help - Detailed usage and help guide

🔧 Installed MCP servers: # LOCALIZE: MCP servers header
(Display actual installed server list) # LOCALIZE: Server list description
Check MCP servers: claude mcp list # LOCALIZE: Check command description

🚀 Next steps: # LOCALIZE: Next steps header
1. Check usage with /work help # LOCALIZE: Step descriptions
2. Start first work with /work start "first work description"
3. Check work status with /work list
4. Modify settings: .claude/config/project.json
5. Manage MCP servers: claude mcp list/add/remove
6. Detailed guide: CLAUDE.md reference

💡 All commands are optimized for {{LANGUAGE_PLATFORM}} environment! # LOCALIZE: Optimization message
```

## Error Handling
<!-- LOCALIZATION: Error messages should be in user's language -->
- Request re-input for invalid commands
- Guide permission checking for file creation failures
- Confirm before overwriting existing configuration

## Re-initialization
<!-- LOCALIZATION: Re-initialization prompts should be in user's language -->
When existing configuration exists:
- Display current configuration
- Confirm overwrite
- Provide partial update options

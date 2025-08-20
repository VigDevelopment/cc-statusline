# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-08-19

### Added
- 🧠 **Context Window Tracking** - Dynamic model-aware context window monitoring with progress bars
- 📱 **Multi-line Layout** - Clean separation of core info (line 1) and usage analytics (line 2)  
- 🎯 **TBD Fallback Display** - Shows "Context Left: TBD" when context information unavailable
- 🎨 **Enhanced Color Schemes** - Distinct colors for context (green/yellow/red) vs session time (blue/cyan)
- 📊 **Intelligent Progress Bars** - Visual context depletion bars showing remaining vs used tokens
- 🤖 **Dynamic Model Detection** - Automatic context limits: 200K (modern), 100K (legacy Claude 3 Haiku)

### Changed
- **Core Features**: Context window tracking now included as default core feature
- **Display Format**: More intuitive "Context Left: X%" instead of token fractions
- **Progress Bar Logic**: Bars now show depletion (filled = remaining) instead of usage
- **Layout Organization**: Usage analytics moved to dedicated second line for better readability
- **CLI Prompts**: Enhanced feature selection with context window prominently featured
- **Logging**: Debug logging now off by default, configurable during setup

### Technical Improvements
- Enhanced `generateUsageLineContent()` function for organized analytics display
- Improved bash script generation with model-aware context calculation
- Updated README with multi-line examples and comprehensive feature documentation
- Added `get_max_context()` function with pattern matching for all Claude model variants
- Refined color management with context-aware schemes

## [1.0.1] - 2025-08-13

### Added
- CONTRIBUTING.md with comprehensive contribution guidelines
- Development workflow documentation
- Code standards and testing guidelines

### Changed
- Updated package name to unscoped `cc-statusline`
- Enhanced README contributing section with better guidance

## [1.0.0] - 2025-08-13

### Added
- Initial release of cc-statusline
- Interactive configuration wizard with 2 simple prompts
- Bash script generation with optimized performance
- Real-time ccusage integration for usage statistics
- Preview mode for testing statusline scripts with mock data
- Auto-installation with settings.json configuration
- Support for directory, git, model, usage, session, token, and burn rate features
- TTY-aware color support with NO_COLOR environment variable respect
- Manual configuration instructions when auto-update fails
- Comprehensive documentation and examples
- Performance analysis and validation in preview mode
- Timestamp and npm URL in generated script headers

### Features
- 📁 Working Directory display with `~` abbreviation
- 🌿 Git Branch integration
- 🤖 Model Name & Version display
- 💵 Real-time Usage & Cost tracking
- ⌛ Session Time Remaining with progress bars
- 📊 Token Statistics (optional)
- ⚡ Burn Rate monitoring (optional)

### Technical
- TypeScript with strict type checking
- ESM module support
- Commander.js for CLI interface
- Inquirer.js for interactive prompts
- Chalk for colorized output
- Ora for loading spinners
- Comprehensive error handling and validation
- Modular architecture for easy maintenance

[1.0.0]: https://github.com/chongdashu/cc-statusline/releases/tag/v1.0.0
# Contributing to Nexus Hugo Theme

First off, thank you for considering contributing to the Nexus Hugo theme! It's people like you that make this theme great. Here are the guidelines for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand what kind of behavior will and will not be tolerated.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Nexus theme. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**

* Check the [issues](https://github.com/yourusername/hugo-nexus-theme/issues) to see if the problem has already been reported.
* Ensure you're using the latest version of the theme.
* Check if the issue is with Hugo itself rather than the theme.

**How Do I Submit A Good Bug Report?**

Bug reports are tracked as [GitHub issues](https://github.com/yourusername/hugo-nexus-theme/issues). Create an issue and provide the following information:

* Use a clear and descriptive title
* Describe the exact steps to reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed and what you expected to see
* Include screenshots or animated GIFs if applicable
* Include your Hugo version (`hugo version`)
* Include your browser and operating system information

### Suggesting Features

This section guides you through submitting a feature suggestion for Nexus theme.

**Before Submitting A Feature Suggestion:**

* Check the [issues](https://github.com/yourusername/hugo-nexus-theme/issues) to see if the feature has already been suggested.
* Consider whether your feature would be beneficial to most users.

**How Do I Submit A Good Feature Suggestion?**

Feature suggestions are tracked as [GitHub issues](https://github.com/yourusername/hugo-nexus-theme/issues). Create an issue and provide the following information:

* Use a clear and descriptive title
* Provide a detailed description of the suggested feature
* Explain why this feature would be useful to most users
* Include mockups or examples if applicable
* Specify which version of Hugo you're using

### Pull Requests

* Fill in the required [pull request template](PULL_REQUEST_TEMPLATE.md)
* Do not include issue numbers in the PR title
* Include screenshots or animated GIFs in your pull request whenever possible
* Follow the [coding guidelines](#coding-guidelines)
* Include tests when adding features
* Document new code with comments
* End all files with a newline

## Development Setup

To set up the project for development:

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/hugo-nexus-theme.git
   cd hugo-nexus-theme
   ```
3. Create a branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Set up a Hugo test site to work with:
   ```bash
   # From outside the theme directory
   hugo new site test-site
   cd test-site
   git init
   git submodule add ../hugo-nexus-theme themes/nexus
   cp -r themes/nexus/exampleSite/content .
   cp themes/nexus/config.toml.example config.toml
   hugo server
   ```

## Coding Guidelines

### HTML

* Use semantic HTML elements
* Include appropriate ARIA attributes for accessibility
* Use proper indentation (2 spaces)

### CSS/SCSS

* Follow the BEM (Block Element Modifier) naming convention
* Organize styles logically by component
* Use variables for colors, spacing, etc. defined in `_variables.scss`
* Add comments for complex selectors or rules

### JavaScript

* Follow ES6 standards
* Use vanilla JavaScript where possible
* Comment your code when adding complex functionality
* Ensure scripts are accessible and work without JavaScript when possible

### Hugo Templates

* Use lowercase for custom variable names
* Include comments for complex logic
* Organize partial templates by functionality
* Follow Hugo best practices for performance

## Testing

When contributing code, please make sure to test your changes in the following environments:

* Latest version of Hugo
* Multiple browsers (Chrome, Firefox, Safari, Edge)
* Mobile and desktop views
* Different screen sizes
* With JavaScript disabled (for basic functionality)
* With high contrast mode and other accessibility tools

## Documentation

* Update documentation when adding or modifying features
* Write clear, concise comments in code
* Follow Markdown guidelines for documentation files

## Community and Communication

* Join our [Discord server](https://discord.gg/yourdiscordlink) for real-time communication
* Subscribe to the [mailing list](https://yourwebsite.com/subscribe) for updates
* Follow the project on Twitter [@HugoNexusTheme](https://twitter.com/yourhandle)

## Recognition

Contributors who submit significant improvements may be invited to join the core team. All contributors will be acknowledged in the project's README.

Thank you for contributing to Nexus!

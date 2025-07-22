# Installing the Nexus Hugo Theme

This guide provides concise instructions for installing and setting up the Nexus Hugo theme.

## Quick Installation

### Prerequisites

- Hugo Extended v0.110.0 or later
- Git (optional, for methods 1 and 2)

### Installation Methods

#### Method 1: Git Submodule (Recommended)

```bash
# Navigate to your Hugo site
cd my-hugo-site

# Add the theme as a submodule
git submodule add https://github.com/avadlapatla/nexus-hugo-theme.git themes/nexus
```

#### Method 2: Clone Repository

```bash
# Navigate to your Hugo site
cd my-hugo-site

# Clone the theme
git clone https://github.com/avadlapatla/nexus-hugo-theme.git themes/nexus
```

#### Method 3: Manual Download

1. Download the latest release from [GitHub](https://github.com/avadlapatla/nexus-hugo-theme/releases)
2. Extract the archive to `themes/nexus` in your Hugo site directory

### Setup

1. **Configure your theme**

   Edit your `config.toml` file to use the theme:

   ```toml
   theme = "nexus"
   ```

   Or for a quick start, copy the example configuration:

   ```bash
   cp themes/nexus/config.toml.example config.toml
   ```

2. **Add example content** (optional)

   ```bash
   # Copy example content from the theme
   cp -r themes/nexus/exampleSite/content/* content/
   ```

3. **Start the Hugo server**

   ```bash
   hugo server -D
   ```

4. **Access your site** at http://localhost:1313/

## Next Steps

- Customize your site by editing `config.toml`
- Add your own content to the `content/` directory
- Modify styling in `assets/scss/` if needed
- See [USAGE.md](USAGE.md) for detailed customization options

## Troubleshooting

If you encounter issues during installation:

- Ensure you're using Hugo Extended version 0.110.0 or later
- Check that all paths and configuration settings are correct
- For theme-specific issues, refer to our [GitHub issues](https://github.com/avadlapatla/nexus-hugo-theme/issues)

# Getting Started with the Nexus Hugo Theme

This guide will help you quickly set up and start using the Nexus Hugo theme for your website.

## Quick Start Guide

### Prerequisites

- Hugo Extended v0.110.0 or later
- Git (optional)

### 1. Install the Theme

Choose one of these methods:

**Option A: Git Submodule (Recommended)**

```bash
cd my-hugo-site
git submodule add https://github.com/avadlapatla/nexus-hugo-theme.git themes/nexus
```

**Option B: Direct Download**

1. Download the latest release from [GitHub](https://github.com/avadlapatla/nexus-hugo-theme/releases)
2. Extract to `themes/nexus` in your Hugo site directory

### 2. Configure Your Site

Copy the example configuration:

```bash
cp themes/nexus/config.toml.example config.toml
```

Edit the `config.toml` file to customize:
- Site title, description, and language
- Navigation menus
- Theme parameters and sections
- Social media links

### 3. Add Content

Create basic content structure:

```bash
# Create content directories
mkdir -p content/about content/blog content/services content/contact

# Create basic pages
hugo new about/_index.md
hugo new blog/_index.md
hugo new services/_index.md
hugo new contact/_index.md
```

Or copy example content from the theme:

```bash
cp -r themes/nexus/exampleSite/content/* content/
```

### 4. Create Blog Posts

```bash
hugo new blog/my-first-post.md
```

Then edit the generated file, adding your content after the front matter.

### 5. Create Services

```bash
hugo new services/my-service.md
```

### 6. Launch Development Server

```bash
hugo server -D
```

Visit http://localhost:1313/ to see your site.

## Homepage Customization

The homepage is built from sections defined in your `config.toml`:

1. **Hero Section** - Main banner with headline, subheadline, and call to action
2. **Services Section** - Overview of your services/offerings
3. **About Section** - Brief introduction to your company
4. **Team Section** - Team member profiles
5. **Testimonials** - Client testimonials
6. **Blog Section** - Recent blog posts
7. **Contact Section** - Contact form and information

Enable/disable sections and customize their content in your `config.toml`:

```toml
[params.hero]
  enable = true
  title = "Your Headline Here"
  subtitle = "Your subheading goes here"
  # Other hero settings...

[params.services]
  enable = true
  title = "Our Services"
  # Service items configuration...
```

## Next Steps

- Read [USAGE.md](USAGE.md) for detailed customization options
- Check [INSTALLATION.md](INSTALLATION.md) for advanced installation instructions
- Explore the `exampleSite` directory for configuration examples

## Common Customizations

### Change Colors

```toml
[params.colors]
  primary = "#1a365d"    # Your primary brand color
  secondary = "#2d3748"  # Secondary color
  accent = "#3182ce"     # Accent color for buttons, etc.
```

### Add a Custom Logo

1. Add your logo to `static/images/logo/`
2. Update the logo path in `config.toml`:

```toml
[params]
  logo = "images/logo/your-logo.svg"
```

### Customize Navigation

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Services"
    url = "/services"
    weight = 2
  # Add more menu items...
```

## Support

If you encounter any issues or have questions, refer to:

- [Theme Documentation](https://github.com/avadlapatla/nexus-hugo-theme)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [GitHub Issues](https://github.com/avadlapatla/nexus-hugo-theme/issues)

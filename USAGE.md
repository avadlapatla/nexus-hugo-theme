# Using the Nexus Hugo Theme

This guide provides detailed instructions on how to set up, customize, and use the Nexus Hugo theme for your website.

## Table of Contents

- [Installation](#installation)
- [Basic Configuration](#basic-configuration)
- [Theme Structure](#theme-structure)
- [Customization](#customization)
- [Content Management](#content-management)
- [Shortcodes](#shortcodes)
- [Development](#development)
- [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

- Hugo Extended v0.110.0 or later
- Git (for method 1 and 2)

### Method 1: Add as Git Submodule (Recommended)

```bash
# Navigate to your Hugo project
cd my-hugo-site

# Add the theme as a submodule
git submodule add https://github.com/avadlapatla/nexus-hugo-theme.git themes/nexus
```

### Method 2: Clone the Repository

```bash
# Navigate to your Hugo project
cd my-hugo-site

# Clone the theme
git clone https://github.com/avadlapatla/nexus-hugo-theme.git themes/nexus
```

### Method 3: Download Manually

1. Download the latest release from [GitHub](https://github.com/avadlapatla/nexus-hugo-theme/releases)
2. Extract the archive to `themes/nexus` in your Hugo site directory

## Basic Configuration

After installing the theme, enable it in your site's configuration:

### For config.toml

```toml
theme = "nexus"
```

### For config.yaml

```yaml
theme: nexus
```

### Complete Example Configuration

For a quick start, copy the example configuration file:

```bash
cp themes/nexus/config.toml.example config.toml
```

Then customize the configuration according to your needs.

## Theme Structure

The theme follows the standard Hugo directory structure:

```
├── archetypes/          # Content templates
├── assets/              # Processing assets (SCSS, JS)
│   ├── js/              # JavaScript files
│   └── scss/            # SCSS stylesheets
├── layouts/             # Hugo templates
│   ├── _default/        # Default templates
│   ├── partials/        # Reusable template parts
│   ├── shortcodes/      # Custom shortcodes
│   └── index.html       # Homepage template
├── static/              # Static assets
│   ├── images/          # Images
│   └── favicon/         # Favicon files
├── theme.toml           # Theme metadata
└── config.toml.example  # Example configuration
```

## Customization

### Site Parameters

The theme includes many customization options through the `params` section in your `config.toml`:

```toml
[params]
  # Site Information
  description = "Your site description"
  author = "Your Name"
  
  # Contact Information
  email = "info@example.com"
  phone = "+1 (123) 456-7890"
  address = "123 Main Street, City, State, ZIP"
  
  # Social Media
  twitter = "yourusername"
  facebook = "yourusername"
  instagram = "yourusername"
  linkedin = "yourusername"
  github = "yourusername"

[params.colors]
  primary = "#1a365d"    # Deep navy
  secondary = "#2d3748"  # Charcoal
  accent = "#3182ce"     # Professional blue
```

### Homepage Sections

The homepage is built using sections defined in your `config.toml`:

```toml
[params.hero]
  enable = true
  title = "Modern Solutions for Modern Businesses"
  subtitle = "Strategic consulting and technology services to transform your business"
  buttonPrimary = "Our Services"
  buttonPrimaryLink = "/services"
  buttonSecondary = "Contact Us"
  buttonSecondaryLink = "/contact"
  image = "images/hero/hero-image.jpg"

[params.services]
  enable = true
  title = "Our Services"
  subtitle = "Comprehensive solutions to help your business grow"
  
  [[params.services.items]]
    name = "Web Development"
    icon = "images/icons/development.svg"
    description = "Modern, responsive websites built with the latest technologies"
    link = "/services/web-development"
  
  [[params.services.items]]
    name = "Digital Marketing"
    icon = "images/icons/marketing.svg"
    description = "Strategic campaigns that drive growth and engagement"
    link = "/services/digital-marketing"
```

### Navigation Menus

Configure the main navigation and footer menus in your `config.toml`:

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
  [[menu.main]]
    name = "About"
    url = "/about"
    weight = 3
  [[menu.main]]
    name = "Blog"
    url = "/blog"
    weight = 4
  [[menu.main]]
    name = "Contact"
    url = "/contact"
    weight = 5
```

### Styling

You can customize styles by modifying the SCSS files in the `assets/scss/` directory:

- `_variables.scss` - Color schemes, typography, spacing, etc.
- `_base.scss` - Base HTML element styles
- `_components.scss` - Component-specific styles
- `_layouts.scss` - Layout-specific styles

## Content Management

### Creating Pages

Basic pages can be created using:

```bash
hugo new about.md
```

This will create a new page using the default archetype.

### Blog Posts

Create a new blog post with:

```bash
hugo new blog/my-post.md
```

The default front matter for blog posts includes:

```yaml
---
title: "My Post Title"
date: 2023-01-01T12:00:00-00:00
draft: true
description: "Brief description of the post"
categories: ["Category1", "Category2"]
tags: ["tag1", "tag2"]
image: "images/blog/featured-image.jpg"
---
```

### Services

Create a new service page with:

```bash
hugo new services/my-service.md
```

The default front matter for service pages includes:

```yaml
---
title: "My Service"
date: 2023-01-01T12:00:00-00:00
draft: true
description: "Brief description of the service"
icon: "images/icons/service-icon.svg"
weight: 1
---
```

## Shortcodes

This theme provides several shortcodes to enhance your content:

### Button

```go
{{< button href="/contact" text="Contact Us" class="btn-primary" >}}
```

### Card

```go
{{< card title="Service Title" image="images/service.jpg" >}}
Service description goes here
{{< /card >}}
```

### Feature

```go
{{< feature icon="images/icons/feature.svg" title="Feature Title" >}}
Feature description goes here
{{< /feature >}}
```

## Development

### Running the Development Server

```bash
# Start the Hugo development server
hugo server -D
```

The site will be available at http://localhost:1313/

### Building for Production

```bash
# Build the site for production
hugo --minify
```

The generated site will be in the `public` directory.

## Troubleshooting

### Common Issues

#### Images Not Displaying

- Check that the image paths in your configuration and content are correct
- Verify that images exist in the specified locations
- Image paths in the config should be relative to the `static` directory

#### Styling Issues

- If styles are not applying correctly, ensure you're using Hugo Extended version
- Check that SCSS files are being properly compiled

#### Missing Content

- Make sure your content files have the correct front matter
- Verify that the content is not marked as draft (or use `-D` flag when developing)

For more help, please [open an issue](https://github.com/avadlapatla/nexus-hugo-theme/issues) on GitHub.

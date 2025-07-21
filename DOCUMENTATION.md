# Nexus Theme Documentation

This comprehensive guide will help you get started with the Nexus Hugo theme and customize it to fit your specific needs.

## Table of Contents

1. [Installation](#installation)
2. [Basic Configuration](#basic-configuration)
3. [Content Structure](#content-structure)
4. [Theme Features](#theme-features)
5. [Homepage Configuration](#homepage-configuration)
6. [Navigation Menus](#navigation-menus)
7. [Customization](#customization)
8. [Shortcodes](#shortcodes)
9. [Templates](#templates)
10. [Performance Optimization](#performance-optimization)
11. [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

- Hugo Extended version 0.110.0 or later
- Git (if using Git installation methods)

### Installation Methods

#### Option 1: Git Submodule (recommended)

```bash
cd themes
git submodule add https://github.com/yourusername/hugo-nexus-theme.git nexus
```

#### Option 2: Git Clone

```bash
cd themes
git clone https://github.com/yourusername/hugo-nexus-theme.git nexus
```

#### Option 3: Manual Download

1. Download the latest release from the [releases page](https://github.com/yourusername/hugo-nexus-theme/releases)
2. Extract the archive into the `themes/nexus` directory

### Activating the Theme

Edit your site's configuration file (`config.toml` or `config.yaml`):

For `config.toml`:
```toml
theme = "nexus"
```

For `config.yaml`:
```yaml
theme: nexus
```

## Basic Configuration

### Example Configuration

The theme includes an example configuration file that you can use as a starting point:

```bash
cp themes/nexus/config.toml.example config.toml
```

### Essential Settings

```toml
# Site Settings
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Your Company Name"
theme = "nexus"

# Enable Hugo features
enableRobotsTXT = true
enableGitInfo = false
enableEmoji = true

# Site parameters
[params]
  description = "Your site description"
  copyright = "© 2025 Your Company. All rights reserved."
  author = "Your Company"
  logo = "/images/logo/logo.svg"  # Path relative to static folder
  
  # Theme colors
  [params.colors]
    primary = "#1a365d"    # Deep navy
    secondary = "#2d3748"  # Charcoal
    accent = "#3182ce"     # Professional blue
```

## Content Structure

### Directory Organization

The theme expects your content to be organized in the following structure:

```
content/
├── about/
│   └── _index.md          # About page
├── blog/                 
│   ├── _index.md          # Blog landing page
│   └── post-title.md      # Individual blog posts
├── contact/
│   └── _index.md          # Contact page
├── services/
│   ├── _index.md          # Services landing page
│   └── service-name.md    # Individual service pages
└── _index.md              # Homepage
```

### Content Front Matter

Each content file should include front matter to define its properties:

```yaml
---
title: "Page Title"
date: 2025-01-01T12:00:00-07:00
description: "Page description for SEO"
draft: false
featured_image: "/images/featured/page-image.jpg"
categories: ["Category"]
tags: ["tag1", "tag2"]
---
```

## Theme Features

### SEO Optimization

The theme includes built-in SEO features:

- Semantic HTML structure
- Proper meta tags
- Structured data
- Open Graph and Twitter card support
- Canonical URLs

Configure SEO settings in your `config.toml`:

```toml
[params.seo]
  [params.seo.meta]
    keywords = ["keyword1", "keyword2"]
    
  [params.seo.social]
    twitter_handle = "@yourusername"
```

### Search Functionality

The theme includes a built-in search feature. Enable it in your configuration:

```toml
[params.search]
  enabled = true
```

### Responsive Design

The theme is fully responsive and works on all device sizes. The responsive behavior can be customized in:

- `assets/scss/_mixins.scss`
- `assets/scss/_variables.scss`

### Accessibility

The theme follows WCAG 2.1 accessibility guidelines. Accessibility features include:

- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
- High contrast support
- Screen reader compatibility

### Contact Form

The contact form can be configured in your `config.toml`:

```toml
[params.contact]
  formAction = "https://formspree.io/f/your-form-id"
  showMap = true
  mapIframe = '<iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
```

## Homepage Configuration

The homepage is built using sections defined in your `config.toml`:

### Hero Section

```toml
[params.hero]
  heading = "Professional Solutions for Modern Businesses"
  subheading = "We deliver cutting-edge solutions that help businesses thrive in the digital age."
  buttonText = "Learn More"
  buttonURL = "#about"
  secondaryButtonText = "Contact Us"
  secondaryButtonURL = "#contact"
  image = "/images/hero/hero-image.jpg"
```

### Services Section

```toml
[params.services]
  title = "Our Services"
  subtitle = "We offer a comprehensive range of services"
  
  [[params.services.items]]
    name = "Service Name"
    description = "Service description"
    icon = "/images/icons/service-icon.svg"
    link = "/services/service-name"
```

### About Section

```toml
[params.about]
  title = "About Us"
  subtitle = "Learn more about our company"
  content = "Company description goes here..."
  image = "/images/about/about-image.jpg"
  
  [[params.about.features]]
    title = "Feature Title"
    description = "Feature description"
    icon = "/images/icons/feature-icon.svg"
```

### Team Section

```toml
[params.about.team]
  title = "Our Team"
  subtitle = "Meet our leadership"
  
  [[params.about.team.members]]
    name = "Person Name"
    position = "Position Title"
    image = "/images/team/person.jpg"
    bio = "Brief biography"
    
    [params.about.team.members.social]
      linkedin = "https://linkedin.com/in/username"
      twitter = "twitter_handle"
```

### Testimonials Section

```toml
[params.testimonials]
  title = "Testimonials"
  subtitle = "What our clients say"
  layout = "carousel"  # Options: carousel, grid
  
  [[params.testimonials.items]]
    quote = "Testimonial quote"
    name = "Client Name"
    position = "Position"
    company = "Company Name"
    image = "/images/testimonials/client.jpg"
```

### Blog Section

```toml
[params.blog]
  title = "Latest News"
  subtitle = "Read our latest articles"
  limit = 3  # Number of posts to display
  buttonText = "View All"
  buttonURL = "/blog"
```

### Contact Section

```toml
[params.contact]
  title = "Contact Us"
  subtitle = "Get in touch with our team"
  formTitle = "Send a message"
  infoTitle = "Contact Information"
  address = "123 Business St, Suite 100, City, Country"
  phone = "+1 (555) 123-4567"
  email = "info@example.com"
```

## Navigation Menus

### Main Menu

```toml
[[menu.main]]
  identifier = "home"
  name = "Home"
  url = "/"
  weight = 1
  
[[menu.main]]
  identifier = "services"
  name = "Services"
  url = "/services"
  weight = 2

  [[menu.main]]
    parent = "services"
    name = "Service Name"
    url = "/services/service-name"
    weight = 1
```

### Footer Menu

```toml
[[menu.footer]]
  identifier = "about"
  name = "About"
  url = "/about"
  weight = 1
```

### Services Menu

```toml
[[menu.services]]
  identifier = "service-name"
  name = "Service Name"
  url = "/services/service-name"
  weight = 1
```

### Legal Links

```toml
[[menu.legal]]
  identifier = "privacy"
  name = "Privacy Policy"
  url = "/privacy-policy"
  weight = 1
```

## Customization

### Colors

The main theme colors can be configured in your `config.toml`:

```toml
[params.colors]
  primary = "#1a365d"    # Deep navy
  secondary = "#2d3748"  # Charcoal
  accent = "#3182ce"     # Professional blue
```

For more advanced color customization, modify the `assets/scss/_variables.scss` file:

```scss
// Brand Colors
$primary: #1a365d;
$secondary: #2d3748;
$accent: #3182ce;

// Neutrals
$white: #ffffff;
$light: #f7fafc;
$light-gray: #edf2f7;
$medium-gray: #e2e8f0;
$dark-gray: #4a5568;
$black: #1a202c;
```

### Typography

For typography customization, modify the `assets/scss/_variables.scss` file:

```scss
// Font Families
$font-family-heading: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', sans-serif;

// Font Sizes
$font-size-base: 1rem;
$font-size-sm: 0.875rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;
$font-size-2xl: 1.5rem;
$font-size-3xl: 1.875rem;
$font-size-4xl: 2.25rem;
```

### Spacing and Layout

Adjust spacing variables in `assets/scss/_variables.scss`:

```scss
$spacer: 1rem;

$spacers: (
  0: 0,
  1: ($spacer * 0.25),
  2: ($spacer * 0.5),
  3: $spacer,
  4: ($spacer * 1.5),
  5: ($spacer * 2),
  6: ($spacer * 3),
  7: ($spacer * 4),
  8: ($spacer * 5),
);
```

### Custom CSS

To add custom CSS, create a file in `assets/scss/custom.scss` and import it in `assets/scss/main.scss`.

## Shortcodes

### Button Shortcode

```go
{{< button href="/contact" text="Contact Us" class="btn-primary" >}}
```

Parameters:
- `href`: URL the button links to
- `text`: Button text
- `class`: Additional CSS classes (optional)
- `target`: Link target, e.g. "_blank" (optional)

### Card Shortcode

```go
{{< card title="Card Title" image="/images/card-image.jpg" link="/more-info" >}}
Card content goes here
{{< /card >}}
```

Parameters:
- `title`: Card title
- `image`: Image URL (optional)
- `link`: URL the card links to (optional)
- `class`: Additional CSS classes (optional)

### Feature Shortcode

```go
{{< feature icon="/images/icons/feature.svg" title="Feature Title" >}}
Feature description
{{< /feature >}}
```

Parameters:
- `icon`: Icon URL
- `title`: Feature title
- `class`: Additional CSS classes (optional)

### Icon Shortcode

```go
{{< icon name="mail" size="24" color="#3182ce" >}}
```

Parameters:
- `name`: Icon name (from included icon set)
- `size`: Icon size in pixels (optional, default: 24)
- `color`: Icon color (optional, default: currentColor)
- `class`: Additional CSS classes (optional)

## Templates

The theme includes several customizable templates:

### Base Templates

- `layouts/_default/baseof.html`: Base template for all pages
- `layouts/_default/single.html`: Template for single pages
- `layouts/_default/list.html`: Template for list pages (categories, tags)

### Section Templates

- `layouts/about/single.html`: About page template
- `layouts/blog/single.html`: Blog post template
- `layouts/blog/list.html`: Blog index template
- `layouts/services/single.html`: Service page template
- `layouts/services/list.html`: Services index template
- `layouts/contact/single.html`: Contact page template

### Partial Templates

Reusable components are in the `layouts/partials/` directory:

- `head.html`: Document head with meta tags
- `header.html`: Site header with navigation
- `footer.html`: Site footer
- `navigation.html`: Main navigation menu
- Various section partials (hero.html, about.html, etc.)

## Performance Optimization

### Image Optimization

The theme uses Hugo's image processing for optimized images:

```go
{{ $image := resources.Get "images/hero.jpg" }}
{{ $image := $image.Resize "1200x" }}
<img src="{{ $image.RelPermalink }}" alt="Description">
```

### Asset Bundling and Minification

CSS and JavaScript are bundled and minified using Hugo Pipes:

```go
{{ $styles := resources.Get "scss/main.scss" | toCSS | minify | fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">

{{ $scripts := resources.Get "js/main.js" | minify | fingerprint }}
<script src="{{ $scripts.RelPermalink }}"></script>
```

### Lazy Loading

Images use native lazy loading:

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

## Troubleshooting

### Common Issues

1. **Images not showing**: Check the path in your configuration and ensure the images exist in the static directory
2. **CSS not applying**: Check if you're using the correct variables in your SCSS files
3. **Menu items not appearing**: Verify your menu configuration in config.toml
4. **Hugo build errors**: Make sure you're using Hugo Extended version 0.110.0 or later

### Debugging

Enable verbose output when running Hugo server:

```bash
hugo server --verbose
```

### Getting Help

If you encounter issues or need help:

1. Check the [GitHub issues](https://github.com/yourusername/hugo-nexus-theme/issues) for similar problems
2. Review the [Hugo documentation](https://gohugo.io/documentation/)
3. [Open a new issue](https://github.com/yourusername/hugo-nexus-theme/issues/new) with:
   - Detailed description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Hugo version and operating system
   - Screenshots if applicable

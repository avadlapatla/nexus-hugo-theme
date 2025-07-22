# Nexus Hugo Theme Documentation

## Overview

Nexus is a highly customizable Hugo theme designed for businesses, agencies, and portfolios. This theme allows you to customize nearly every aspect of your site from a single configuration file, without having to edit HTML or CSS directly.

## Table of Contents

- [Configuration Basics](#configuration-basics)
- [Layout Customization](#layout-customization)
- [Section Customization](#section-customization)
  - [Hero Section](#hero-section)
  - [Services Section](#services-section)
  - [About Section](#about-section)
  - [Testimonials Section](#testimonials-section)
  - [Blog Section](#blog-section)
  - [Contact Section](#contact-section)
- [Colors and Typography](#colors-and-typography)
- [Best Practices](#best-practices)
- [Advanced Customization](#advanced-customization)

## Configuration Basics

The Nexus theme is primarily configured through your site's `config.toml` file. A comprehensive example configuration file is provided at `config.toml.example`. Copy this file to your site's root directory, rename it to `config.toml`, and customize it to fit your needs.

### Basic Site Settings

```toml
baseURL = "/"
languageCode = "en-us"
title = "Your Company Name"

# Enable Hugo features
enableRobotsTXT = true
enableGitInfo = false
enableEmoji = true

# Site parameters
[params]
  description = "Description of your site"
  copyright = "© 2025 Your Company. All rights reserved."
  author = "Your Company"
  logo = "/images/logo/logo.svg"
```

## Layout Customization

### Section Ordering and Visibility

You can control which sections appear on your homepage and in what order by editing the `params.layout.sections` array in your config file:

```toml
[params.layout]
  sections = [
    "hero",      # Hero/banner section
    "services",  # Services section
    "about",     # About section
    "testimonials", # Testimonials section
    "blog",      # Blog posts section
    "contact"    # Contact form section
  ]
```

To disable a section, remove it from this array or set `enabled = false` in the section's parameters:

```toml
[params.services]
  enabled = false
```

## Section Customization

Each section of your site can be extensively customized through the configuration file.

### Hero Section

The hero section is the main banner at the top of your homepage.

```toml
[params.hero]
  enabled = true
  layout = "standard"  # Options: standard, centered, content-right, full-width
  heading = "Your Main Headline"
  subheading = "Your subheading text goes here"
  buttonText = "Primary Button"
  buttonURL = "#about"
  secondaryButtonText = "Secondary Button"
  secondaryButtonURL = "#contact"
  image = "/images/hero/hero-image.jpg"
  imageAlt = "Alt text for image"
  pattern = "/images/patterns/hero-pattern.svg"  # Background pattern
  backgroundColor = "#f8fafc"  # Custom background color
  textColor = "#1a202c"        # Custom text color
```

#### Hero Layout Options

1. **standard**: Content on the left, image on the right
2. **centered**: Content centered, optional image below
3. **content-right**: Content on the right, image on the left
4. **full-width**: Full-width content with a background image

### Services Section

```toml
[params.services]
  enabled = true
  layout = "grid"       # Options: grid, list, features, compact
  style = "cards"       # Options: cards, minimal, boxed, bordered
  columns = "3"         # Options: 2, 3, 4
  iconStyle = "default" # Options: default, circle, square, outline
  hoverEffect = "shadow" # Options: shadow, scale, border, none
  title = "Our Services"
  subtitle = "Services subtitle"
  buttonText = "View All Services"
  buttonURL = "/services"
  backgroundColor = ""  # Optional custom background color
  textColor = ""        # Optional custom text color

[[params.services.items]]
  name = "Service Name"
  description = "Service description"
  icon = "/images/icons/service-icon.svg"
  link = "/services/service-name"
  linkText = "Learn More"
```

#### Services Layout Options

1. **grid**: Services displayed in a grid (2-4 columns)
2. **list**: Services displayed as horizontal list items
3. **features**: Larger feature cards with more prominent icons
4. **compact**: Condensed view with minimal details

### About Section

```toml
[params.about]
  enabled = true
  layout = "standard"         # Options: standard, full-content, stacked
  imagePosition = "left"      # Options: left, right (for standard layout)
  contentWidth = "normal"     # Options: narrow, normal, wide
  showTeam = true             # Whether to show team members
  teamLayout = "grid"         # Options: grid, list
  teamColumns = "4"           # Options: 2, 3, 4 
  title = "About Us"
  subtitle = "About subtitle"
  image = "/images/about/about.jpg"
  imageAlt = "About image alt text"
  buttonText = "Learn More"
  buttonURL = "/about"
  content = """
    Your about content here.
    Multiple paragraphs are supported.
  """

[[params.about.features]]
  title = "Feature Title"
  description = "Feature description"
  icon = "/images/icons/feature-icon.svg"
```

#### Team Members

```toml
[params.about.team]
  title = "Our Team"
  subtitle = "Meet our team"
      
[[params.about.team.members]]
  name = "Team Member Name"
  position = "Position Title"
  image = "/images/team/member1.jpg"
  bio = "Brief biography."
  [params.about.team.members.social]
    linkedin = "https://linkedin.com/in/username"
    twitter = "twitterusername"
    email = "email@example.com"
```

### Testimonials Section

```toml
[params.testimonials]
  enabled = true
  layout = "carousel"          # Options: carousel, grid, simple
  style = "standard"           # Options: standard, modern, minimal
  autoplay = true              # Whether to auto-rotate testimonials
  delay = 5000                 # Delay between slides in ms
  title = "Client Testimonials"
  subtitle = "What our clients say"
  backgroundColor = ""         # Optional custom background color
  textColor = ""               # Optional custom text color
  cardBackgroundColor = ""     # Optional custom card background color
    
[[params.testimonials.items]]
  quote = "Testimonial quote text"
  name = "Client Name"
  position = "Position"
  company = "Company Name"
  image = "/images/testimonials/client.jpg"
```

### Blog Section

```toml
[params.blog]
  enabled = true
  layout = "featured"           # Options: featured, grid, list
  style = "cards"               # Options: cards, minimal
  section = "posts"             # Content section to pull posts from
  limit = 3                     # Number of posts to display
  title = "Latest News"
  subtitle = "Blog subtitle"
  buttonText = "View All Posts"
  buttonURL = "/blog"
  showImages = true             # Whether to show post images
  showAuthors = true            # Whether to show post authors
  showDate = true               # Whether to show post dates
  showCategories = true         # Whether to show post categories
  showExcerpts = true           # Whether to show post excerpts
  excerptLength = 180           # Length of excerpts for main posts
  dateFormat = "January 2, 2006" # Date format
  featuredLabel = "Featured"     # Label for featured posts
```

### Contact Section

```toml
[params.contact]
  enabled = true
  layout = "split"              # Options: split, centered, info-above
  style = "standard"            # Options: standard, modern, minimal
  formPosition = "left"         # Options: left, right (for split layout)
  title = "Contact Us"
  subtitle = "Get in touch"
  formTitle = "Send us a message"
  formAction = "#"              # Replace with your form handling endpoint
  infoTitle = "Contact Information"
  showSocial = true             # Whether to show social links
  showMap = true                # Whether to show map
  address = "123 Street, City, Country"
  phone = "+1 (555) 123-4567"
  email = "info@example.com"
  hours = "Monday-Friday: 9AM-5PM"
  mapIframe = '<iframe src="..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
```

## Colors and Typography

### Theme Colors

You can customize the color scheme of your site:

```toml
[params.colors]
  primary = "#1a365d"     # Primary brand color
  secondary = "#2d3748"   # Secondary brand color
  accent = "#3182ce"      # Accent color for highlights
  background = "#ffffff"  # Site background
  text = "#1a202c"        # Main text color
  headings = "#1a202c"    # Headings text color
  light = "#f7fafc"       # Light backgrounds
  dark = "#2d3748"        # Dark backgrounds
  borders = "#e2e8f0"     # Border color
  success = "#48bb78"     # Success messages
  error = "#f56565"       # Error messages
  warning = "#ed8936"     # Warning messages
  info = "#4299e1"        # Info messages
```

### Typography

```toml
[params.typography]
  headingFont = "Poppins, sans-serif"  # Font for headings
  bodyFont = "Inter, sans-serif"       # Font for body text
  baseSize = "16px"                    # Base font size
  scaleRatio = "1.2"                   # Scale between heading sizes
```

## Best Practices

1. **Start with the example config**: Begin by copying the `config.toml.example` to your `config.toml` and then customize it.
2. **Test one section at a time**: Make changes to one section, preview your site, and then move on to the next section.
3. **Use provided options**: Stick to the provided options for layouts and styles to ensure compatibility.
4. **Optimize images**: Compress and optimize your images to improve site performance.
5. **Use relative URLs**: For internal links, use relative URLs (e.g., `/about`) instead of absolute URLs.

## Advanced Customization

### Custom CSS

You can add custom CSS to further customize your site:

1. Create a file at `assets/scss/custom.scss`
2. Add your custom CSS rules to this file
3. They will be automatically included in your site's CSS

### Custom JavaScript

To add custom JavaScript:

1. Create a file at `assets/js/custom.js`
2. Add your JavaScript code to this file
3. It will be automatically included in your site

### Custom Layout Partials

To create custom layouts for specific pages:

1. Create a new file in `layouts/partials/custom/your-partial-name.html`
2. Create a corresponding section in your content files to use this partial

## Troubleshooting

### Common Issues

1. **Configuration syntax errors**: Make sure your TOML syntax is correct, with proper quotes and indentation.
2. **Missing images**: Ensure all referenced images exist in your static directory.
3. **Form submission failures**: Test your contact form action URL to ensure it's working correctly.

For more help, please consult the Hugo documentation or file an issue on the theme's GitHub repository.

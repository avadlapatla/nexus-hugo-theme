# Nexus - A Professional Hugo Theme

A modern, professional Hugo theme designed for businesses, agencies, and portfolios. Nexus provides a sleek, minimalist aesthetic with a focus on readability and user experience.

![Nexus Hugo Theme](screenshot.jpeg)

## Features

- 🔍 **SEO Optimized** - Meta tags, structured data, and proper markup
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🌐 **Modern Design** - Clean, minimalist aesthetic with professional styling
- ⚡ **Fast Performance** - Optimized assets and minimal dependencies
- ♿ **Accessibility Compliant** - Follows WCAG 2.1 guidelines
- 🧩 **Modular Components** - Easily customizable sections and layouts
- 📝 **Blog Ready** - Beautiful blog layouts with category and tag support
- 🔎 **Search Functionality** - Built-in content search capability
- 📊 **Contact Form** - Integrated contact form with validation
- 🚀 **Smooth Animations** - Subtle transitions and micro-animations

## Components

- ✅ Hero Section with CTA buttons
- ✅ Services/Features Grid
- ✅ About Section with Team Profiles
- ✅ Testimonials Carousel/Grid
- ✅ Blog Section
- ✅ Contact Section with Form & Map
- ✅ Sticky Header with Dropdown Navigation
- ✅ Multi-column Footer

## Installation

### Option 1: Add as a Git Submodule (recommended)

```bash
cd themes
git submodule add https://github.com/avadlapatla/nexus-hugo-theme.git nexus
```

### Option 2: Clone the Repository

```bash
cd themes
git clone https://github.com/avadlapatla/nexus-hugo-theme.git nexus
```

### Option 3: Download

Download the latest release and extract it into the `themes/nexus` folder.

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

## Complete Example Configuration

We provide a sample configuration file that you can use as a starting point:

```bash
cp themes/nexus/config.toml.example config.toml
```

Then customize the configuration according to your needs.

## Quick Start

1. Install Hugo (see [Hugo Installation Guide](https://gohugo.io/installation/))
2. Create a new site: `hugo new site my-site`
3. Navigate to your site: `cd my-site`
4. Add the Nexus theme (using one of the methods above)
5. Copy the example content: `cp -r themes/nexus/exampleSite/content .`
6. Copy the example configuration: `cp themes/nexus/config.toml.example config.toml`
7. Start the Hugo server: `hugo server`
8. Open your browser at http://localhost:1313/

## Demo

Visit the [Nexus Theme Demo](https://avadlapatla.github.io/nexus-hugo-theme/) to see the theme in action.

## File Structure

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

## Usage

### Homepage Sections

The homepage is built using sections defined in your `config.toml`:

1. **Hero Section**: Customize the heading, subheading, buttons, and image
2. **Services Section**: Add your services with icons and descriptions
3. **About Section**: Company information with key features highlight
4. **Team Section**: Leadership team profiles with social links
5. **Testimonials Section**: Client testimonials in carousel or grid layout
6. **Blog Section**: Latest posts from your blog
7. **Contact Section**: Contact form with company information and map

### Content Organization

- **Blog Posts**: Create blog posts in the `content/blog/` directory
- **Services**: Create service pages in the `content/services/` directory
- **About**: Customize the about page in `content/about/_index.md`
- **Contact**: Configure the contact page in `content/contact/_index.md`

### Navigation Menus

The theme supports multiple navigation areas:

1. **Main Navigation**: Primary navigation in the header
2. **Footer Navigation**: Links in the footer
3. **Services Menu**: Services list in the footer
4. **Legal Links**: Legal pages in the footer

## Customization

### Colors

You can customize the color scheme in your `config.toml`:

```toml
[params.colors]
  primary = "#1a365d"    # Deep navy
  secondary = "#2d3748"  # Charcoal
  accent = "#3182ce"     # Professional blue
  # accent = "#059669"   # Alternative: Emerald
```

### Typography

The theme uses modern typography with:
- **Headings**: Inter, Poppins, or similar modern sans-serif
- **Body**: System font stack or Open Sans for optimal readability
- **Font weights**: 400 (regular), 600 (semi-bold), 700 (bold)

To customize fonts, modify the `assets/scss/_variables.scss` file.

### Icons

The theme includes inline SVG icons for optimal performance. You can replace or add custom icons by:

1. Adding SVG files to `static/images/icons/`
2. Referring to them in your configuration or content

### Creating New Pages

To create a new page:

```bash
hugo new my-page.md
```

The new page will use the default single page template.

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- [Hugo](https://gohugo.io/) - The world's fastest framework for building websites
- [Google Fonts](https://fonts.google.com/) - Inter and Poppins fonts
- [Feather Icons](https://feathericons.com/) - Simple, beautiful icons

## License

This theme is released under the [MIT license](LICENSE).

## Support

For questions, bug reports, or feature requests, please [open an issue](https://github.com/avadlapatla/nexus-hugo-theme/issues).

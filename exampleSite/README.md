# Nexus Hugo Theme - Example Site

This directory contains an example site for the Nexus Hugo theme. It serves as both a demo and a starting point for your own website using this theme.

## Structure

```
exampleSite/
├── config.toml          # Example site configuration
├── content/             # Sample content
│   ├── about/           # About page content
│   ├── blog/            # Blog posts
│   ├── contact/         # Contact page
│   └── services/        # Service pages
└── static/              # Static assets
    └── images/          # Example images
```

## How to Use

### Option 1: As a Reference

You can use this example site as a reference for how to structure your own site:

1. Look at the `config.toml` file to understand the available configuration options
2. Examine the content files to see how front matter is structured
3. Use it as a guide for creating your own pages and sections

### Option 2: Copy as a Starting Point

You can also copy this example site as a starting point for your own site:

```bash
# From your Hugo project root
cp -r themes/nexus/exampleSite/content/* content/
cp themes/nexus/exampleSite/config.toml .
```

## Content Structure

### About Section
- `about/_index.md` - Main about page with company information

### Blog Section
- `blog/_index.md` - Blog section landing page
- `blog/welcome-to-nexus.md` - Sample blog post

### Services Section
- `services/_index.md` - Services section landing page
- `services/web-development.md` - Web development service details
- `services/digital-marketing.md` - Digital marketing service details

### Contact Section
- `contact/_index.md` - Contact page with form and information

## Customization

Once you've copied the example site, you should customize:

1. **Site Information** - Update site title, description, and other metadata in `config.toml`
2. **Content** - Replace example content with your actual content
3. **Images** - Replace placeholder images with your own images
4. **Colors and Styling** - Adjust theme colors and styling through `config.toml`
5. **Navigation** - Customize the navigation menus to fit your site structure

## Running the Example Site

To run this example site:

```bash
# Navigate to the example site directory
cd exampleSite

# Run Hugo server with the theme
hugo server --themesDir ../..
```

The site will be available at http://localhost:1313/

## Learn More

For more information on how to use and customize the Nexus theme, refer to:

- [README.md](../README.md) - Main theme documentation
- [USAGE.md](../USAGE.md) - Detailed usage instructions
- [INSTALLATION.md](../INSTALLATION.md) - Installation guide
- [GETTING_STARTED.md](../GETTING_STARTED.md) - Quick start guide

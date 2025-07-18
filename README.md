# Personal Website

A modern, responsive personal website built with semantic HTML5 and CSS3. The site features a clean, accessible design with a dark theme inspired by the Mariana Pro color scheme.

## Features

- **Responsive Design**: Mobile-first approach with fluid layouts
- **Performance Optimized**: WebP images with JPEG fallbacks, lazy loading
- **Accessibility**: WCAG compliant with skip links, proper ARIA labels, and keyboard navigation
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Modern CSS**: Custom properties, modern layout techniques, and reduced motion support

## Development

This is a static HTML site with modern CSS styling. No build process required - simply serve the files from any static web server.

### Local Development

```bash
# Serve locally with Docker
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro --name personal-site nginx:alpine

# Access the site at http://localhost:8080

# Stop the container
docker stop personal-site && docker rm personal-site
```

## Technical Details

- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Custom properties, flexbox, and responsive design
- **Images**: WebP format with JPEG fallbacks for optimal performance
- **Accessibility**: WCAG 2.1 AA compliant

## License

This project is open-source and available under the MIT License.

# Apex Commercial Flooring — Static Site

Built with Nuxt 3 and Vue 3. Generates fully static HTML for FTP deployment.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
# → http://localhost:3000
```

## Build for Production

```bash
npx nuxi generate
```

Output goes to `.output/public/` — upload its contents to your server's web root via FTP.

---

## Customization Checklist

### 1. Business Info
Search and replace placeholder values in components:

| Placeholder | Replace With |
|---|---|
| `Apex Commercial Flooring` | Your business name |
| `(555) 123-4567` | Your phone number |
| `info@apexflooring.com` | Your email |
| `123 Industry Blvd...` | Your address |
| `Lic #000000` | Your license number |

### 2. Images
Replace placeholder `<div>` blocks with real `<img>` tags:

- **Hero**: `public/images/hero-flooring.jpg` (1920×1080 recommended)
- **About primary**: `public/images/about-team.jpg` (800×600)
- **About secondary**: `public/images/about-work.jpg` (600×500)
- **Gallery items**: Add `img` property to each object in `GallerySection.vue`

### 3. Contact Form
The form uses [Formspree](https://formspree.io) (free tier supports 50 submissions/month).

1. Sign up at formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in `ContactSection.vue` with your form ID
4. Remove the `@submit.prevent` handler to allow native form POST

### 4. Google Fonts
Fonts are loaded via Google Fonts CDN in `nuxt.config.ts`. Current choices:
- **Display**: Barlow Condensed (headings, nav, labels)
- **Body**: Lora (body copy, italic accents)

---

## File Structure

```
flooring-site/
├── app.vue                    # Root layout
├── nuxt.config.ts             # Nuxt configuration (static preset)
├── package.json
├── assets/
│   └── css/
│       └── main.css           # Global styles, CSS variables
├── components/
│   ├── AppNav.vue             # Fixed navigation bar
│   ├── HeroSection.vue        # Hero with stats
│   ├── ServicesSection.vue    # 6-up service cards
│   ├── GallerySection.vue     # Filterable gallery + lightbox
│   ├── AboutSection.vue       # Two-column about with image stack
│   ├── ContactSection.vue     # Contact info + form
│   └── AppFooter.vue          # Footer with sitemap
└── public/
    └── images/                # Add your images here
```

## FTP Deployment

After `npx nuxi generate`:

1. Open FileZilla (or your FTP client)
2. Connect to your hosting server
3. Navigate to your web root (`public_html/` or `www/`)
4. Upload all contents of `.output/public/`

No server-side runtime required. Pure HTML/CSS/JS.

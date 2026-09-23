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

## Forms

The site has two Formspree-backed forms, both submitted via `fetch` (JSON) rather than a native POST, so the page can show inline validation and a success state without navigating away.

| Form | Component | Formspree endpoint |
|---|---|---|
| Request an Estimate | `components/ContactSection.vue` | `https://formspree.io/f/meaoeeqa` |
| Installer Interest | `components/InstallerModal.vue` | `https://formspree.io/f/xjykggvl` |

To point either form at a different Formspree form, update the `action` attribute on the `<form>` element in the corresponding component.

### Submission flow
1. Client-side `validate()` checks required fields (and email/phone format) and populates `errors` — submission is blocked until these pass.
2. On success, a Google reCAPTCHA v3 token is fetched (see below) and blocked on failure.
3. The form data plus `g-recaptcha-response` is POSTed as JSON to the Formspree `action` URL with `Accept: application/json`.
4. On a non-OK response, a fallback message is shown pointing the user to `CONTACT_EMAIL` (`utils/constants.js`) instead of the form.

### Spam protection
- **Honeypot**: both forms include a hidden `_gotcha` field. Formspree silently drops any submission where it's filled in, which real users never do.
- **reCAPTCHA v3**: `composables/useRecaptcha.js` lazy-loads the Google reCAPTCHA script and exposes `getToken()`, used by both forms before submitting. The site key lives in `RECAPTCHA_SITE_KEY` (`utils/constants.js`) and must match the key configured in your Formspree/reCAPTCHA account.

### Configuration
- `utils/constants.js` — `CONTACT_EMAIL` (used in mailto links and error fallback text) and `RECAPTCHA_SITE_KEY`.
- Formspree's free tier supports 50 submissions/month; upgrade the plan if volume exceeds that.

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

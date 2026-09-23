# Owens Flooring Co. — Static Site

Built with Nuxt 3 and Vue 3. Generates fully static HTML for FTP deployment.

## Environments

| Environment | URL | Hosting | How it deploys | Analytics |
|---|---|---|---|---|
| **Dev** | http://localhost:3000 | Local (`npm run dev`) | Runs on your machine | Not tracked |
| **QA** | https://brian-odonnell.github.io/owens-flooring/ | GitHub Pages | Automatically on every push to `main` | Not tracked |
| **Prod** | https://owensflooring.net | Web host (FTP) | Manually (see [FTP Deployment](#ftp-deployment)) | Tracked in Umami |

### QA pipeline
`.github/workflows/deploy.yml` runs on every push to `main`, and can also be started manually from the repo's **Actions** tab (`workflow_dispatch`). It:
1. Installs dependencies with `npm ci` (Node 24)
2. Runs `npm run generate` with `NUXT_APP_BASE_URL=/owens-flooring/`, because GitHub Pages serves the site from a subpath
3. Publishes `.output/public` to GitHub Pages

Deployment status and logs are under the repo's **Actions** tab.

> **Note:** Paths hard-coded to the site root (the favicons in `nuxt.config.ts` and the footer's `/privacy-policy.html` link) don't include the `/owens-flooring/` base path, so they 404 on QA. They work correctly on Dev and Prod.

### Promoting to Prod
Pushing to `main` updates QA only. Once QA looks good, build locally without a base path (`npx nuxi generate`) and upload `.output/public/` to Prod via FTP.

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

## Analytics

The site uses [Umami Cloud](https://umami.is) (free Hobby plan) for cookieless, privacy-friendly visitor analytics. The dashboard is at [cloud.umami.is](https://cloud.umami.is).

### Setup
The tracking script is added to every page via `app.head.script` in `nuxt.config.ts`:

| Setting | Value |
|---|---|
| Script | `https://cloud.umami.is/script.js` (loaded with `defer`) |
| `data-website-id` | `eace8485-9ab0-4d80-8332-321ea91cc197` |
| `data-domains` | `owensflooring.net,www.owensflooring.net` |

`data-domains` restricts tracking to the live site. Visits on `localhost` and the GitHub Pages QA site are **not** recorded: the script loads, but it sends no data. To confirm tracking is working, check Umami's **Realtime** view while visiting the live site.

### Custom events
Both forms send an event to Umami only after a **successful** Formspree submission. Failed or invalid attempts are not counted, and no form contents are sent apart from the property listed below.

| Event | Component | Property |
|---|---|---|
| `Estimate Request Submitted` | `components/ContactSection.vue` | `service`: the service selected |
| `Installer Interest Submitted` | `components/InstallerModal.vue` | `experience`: Apprentice / Journeyman |

These appear under **Events** in the Umami dashboard. The calls use `window.umami?.track(...)`, so a blocked or missing script never breaks form submission.

### Excluding your own visits
To stop a browser from being counted, open the live site, open the browser console and run:

```js
localStorage.setItem('umami.disabled', 1)
```

To start counting that browser again, run `localStorage.removeItem('umami.disabled')`.

### Privacy policy
Umami is disclosed in Section 1 of `public/privacy-policy.html`. If you add tracked events that collect new kinds of data, or switch analytics providers, update the policy and its effective date.

---

## File Structure

```
owens-flooring/
├── app.vue                    # Root layout
├── nuxt.config.ts             # Nuxt configuration (static preset, meta/OG tags, fonts, analytics)
├── package.json
├── assets/
│   ├── css/
│   │   └── main.css           # Global styles, CSS variables
│   ├── img/                   # Site photography
│   └── logos/                 # Logo variants (svg/png/jpg)
├── components/
│   ├── AppNav.vue             # Fixed navigation bar
│   ├── HeroSection.vue        # Hero with stats
│   ├── ServicesSection.vue    # Service cards
│   ├── AboutSection.vue       # Two-column about with image stack
│   ├── InstallersSection.vue  # Installer recruitment section
│   ├── InstallerModal.vue     # Installer interest form (modal)
│   ├── ContactSection.vue     # Contact info + estimate request form
│   ├── AppFooter.vue          # Footer with sitemap
│   └── LogoSvg.vue            # Inline logo SVG component
├── composables/
│   └── useRecaptcha.js        # reCAPTCHA v3 token loader (see Forms)
├── utils/
│   ├── constants.js           # CONTACT_EMAIL, RECAPTCHA_SITE_KEY
│   └── phone.js               # Phone input formatting
└── public/
    ├── favicon.svg / favicon.png
    └── privacy-policy.html
```

## FTP Deployment

After `npx nuxi generate`:

1. Open FileZilla (or your FTP client)
2. Connect to your hosting server
3. Navigate to your web root (`public_html/` or `www/`)
4. Upload all contents of `.output/public/`

No server-side runtime required. Pure HTML/CSS/JS.

// https://nuxt.com/docs/api/configuration/nuxt-config

// Live site address, used for Open Graph (link preview) tags, which require full URLs
const SITE_URL = 'https://owensflooring.net'
const SITE_TITLE = 'Owens Flooring Co. | Commercial Flooring | Willoughby, OH'
const SITE_DESCRIPTION = 'Owens Flooring Co. installs commercial carpet, tile, hardwood, resilient flooring & more across Northeast Ohio. Family owned, union installed since 1965.'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESCRIPTION },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Owens Flooring Co.' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: `${SITE_URL}/` },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Owens Flooring Co. office in Willoughby, Ohio' },
        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap'
        }
      ],
      script: [
        // Umami analytics (cookieless). data-domains limits tracking to the live site,
        // so local dev and GitHub Pages preview visits aren't counted.
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': 'eace8485-9ab0-4d80-8332-321ea91cc197',
          'data-domains': 'owensflooring.net,www.owensflooring.net'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

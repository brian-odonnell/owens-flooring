// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Owens Flooring Company | Willoughby, OH',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional commercial flooring installation and services. Hardwood, tile, LVP, carpet, and epoxy for businesses across the region.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/leaflet/leaflet.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/leaflet/leaflet.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-markdown-simple.js', ssr: false },
    '~/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {
      accessToken: 'AXmqHfr1CwvQG6Mh2XbuNgtt',
      cacheProvider: 'memory'
    }]
  ],
  router: {
    linkActiveClass: 'border-textPink border-b border-solid',
    linkExactActiveClass: 'border-textPink border-b border-solid'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  generate: {
    routes () {
      const services = ['/sluzby/ostatne-pravne-suzby', '/sluzby/nahrada-skody-na-zdravi', '/sluzby/spracovanie-zmluv-a-dohod', '/sluzby/e-commerce', '/sluzby/zakladanie-a-spravovanie-obchodnych-spolocnosti', '/sluzby/servis-autorskych-prav', '/sluzby/pracovnopravny-servis', '/sluzby/danovo-pravny-servis', '/sluzby/pravne-analyzy', '/sluzby/zastupovanie-pred-organmi-verejnej-spravy', '/sluzby/ekonomicko-pravna-optimalizacia', '/sluzby/ochrana-pred-nekalou-sutazou', '/sluzby/rodinne-pravo', '/sluzby/zastupovanie-pred-sudmi']
      return [
        '/profil/juhas',
        '/profil/szaboova',
        '/profil/brandoburova',
        '/profil/halaburkova',
        ...services
      ]
    }
  }
}

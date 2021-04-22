const pkg = require('./package')
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Rio Karim | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experienced Developer with a demonstrated history of engineering applications. Skilled in Laravel, Vue.js, Node.JS, SQL, PHP, MongoDB, AWS, JavaScript.' },
      { hid: 'title', name: 'title', content: 'Rio Karim | Web Developer' },
      { name: 'theme-color', content: '' },
      { name: 'msapplication-TileColor', content: '' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script|Raleway|Ubuntu:300,400,500,700' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3FC4E4' },

  /*
   ** Global CSS
   */
  css: [
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/google-maps", ssr: false },
    { src: "~/plugins/vue-notification", ssr: true },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    'nuxt-svg-loader',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt'
  ],
  styleResources: {
    // your settings here
    scss: ['@/vendor/scss/variables.scss'],
    less: [],
    stylus: []
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-106792423-2'
    }]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [/^vue2-google-maps($|\/)/],
  }
}

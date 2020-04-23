require('dotenv').config();
const axios = require('axios');
import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.SITE_TITLE,
    title: process.env.SITE_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/rich-text-editor'
  ],
  serverMiddleware: [
    '~/middleware/server/sitemap.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/auth',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n', {
        locales: [
          {
            code: 'en',
            file: 'en-US.js'
          },
          {
            code: 'es',
            file: 'es-ES.js'
          },
          {
            code: 'fr',
            file: 'fr-FR.js'
          },
          {
            code: 'it',
            file: 'it-IT.js'
          },
          {
            code: 'de',
            file: 'de-DE.js'
          },
          {
            code: 'pl',
            file: 'pl-PL.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
      },
    ],
    '@nuxtjs/sitemap',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          logout: { url: 'logout', method: 'delete' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },

    transpile: ['rich-text-editor']
  },
  // Sitemap configurations
  sitemap: {
    hostname: process.env.HOST_NAME,
    gzip: true,
    exclude: [
      'admin',
      '/admin',
      '/admin/**',
      '**/admin',
      '**/admin/**',

    ],
    routes: async () => {
      const { data } = await axios.get('http://localhost:3333/api/blog');
      return data;
    }

  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    timing: false
  }
};

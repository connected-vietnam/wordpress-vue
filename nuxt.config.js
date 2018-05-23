require('dotenv').config()
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins =
  process.env.NODE_ENV === 'production'
    ? [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      }),
    ]
    : []

module.exports = {
  head: {
    titleTemplate: '%s - Wordpress Vue',
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=latin-ext,vietnamese' },
    ],
  },
  env: {
    AUDIENCE: process.env.AUDIENCE,
    ENDPOINT: process.env.ENDPOINT,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_DOMAIN: process.env.AUTH0_CLIENT_DOMAIN,
  },
  modules: [
    '@nuxtjs/router',
    process.env.NODE_ENV === 'production' && '@nuxtjs/pwa',
  ].filter(x => x),

  router: {
    middleware: ['i18n'],
  },

  css: [
    'tachyons/css/tachyons.min.css',
  ],

  plugins: ['~/plugins/i18n.js', '~/plugins/components.js'],

  build: {
    plugins,
    babel: {
      presets: ['vue-app', 'flow'],
      plugins: [
        [
          'component',
          [
            {
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk',
            },
          ],
        ],
      ],
    },
  },
}

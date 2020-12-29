export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'PicoTorrent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PicoTorrent is a tiny, hackable BitTorrent client.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://sa.picotorrent.org/latest.js', async: true, defer: true }
    ],
    noscript: [
      { innerHTML: '<img src="https://sa.picotorrent.org/noscript.gif" alt="">' }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  router: {
    trailingSlash: false
  },
  sitemap: {
    hostname: 'https://picotorrent.org',
    trailingSlash: false
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#35b1e1' },
  /*
  ** Global CSS
  */
  css: [
    '~/static/css/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/redirect-module',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'https://api.picotorrent.org', pathRewrite: { '^/api/': '' } }
  },
  redirect: [
    {
      // eslint-disable-next-line
      from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, ''); // We take pathname instead of req.url because of the query parameters
        const search = req._parsedUrl.search;
        return base + (search != null ? search : '');
      },
      statusCode: 301
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.resolve.symlinks = false;
    }
  },

  publicRuntimeConfig: {
    stripePriceId: 'price_1H6xmGKv9Cuy2oQpLUsjM01t',
    stripePublishableKey: 'pk_live_51H6vAqKv9Cuy2oQpPJqhfX7xp2hcNyqD20CJZfyLkTThowt3B9qJAl4F7Swqo2ux1JG2lbl7VQs1UrzRzdpozf0J00u2NEghxP'
  }
};

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/hello-project-one/'
        }
      }
    : {}
const SITE_NAME = 'ハロプロワン'
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '「ハロプロワン」はハロー!プロジェクトの各種リンクをまとめたサイトです'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: SITE_NAME },
      { hid: 'twitter:site', name: 'twitter:site', content: '@razokulover' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: SITE_NAME },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '「ハロプロワン」はハロー!プロジェクトの各種リンクをまとめたサイトです'
      },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'og:url', name: 'og:url', content: '' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: SITE_NAME },
      { hid: 'application-name', name: 'application-name', content: SITE_NAME }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `/apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/favicon-16x16.png` },
      { rel: 'mask-icon', href: `/safari-pinned-tab.svg`, color: '#000000' },
      { rel: 'shortcut icon', href: `/favicon.ico` },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/persistedstate.js', ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  ...routerBase
}

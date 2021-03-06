const baseAssetsDir = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/hello-project-one/' : ''
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/hello-project-one/'
        }
      }
    : {}
const SITE_NAME = 'ハロプロワン'
const description = '「ハロプロワン」はハロー!プロジェクトの各種リンクをまとめたサイトです'
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
      { hid: 'description', name: 'description', content: description },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@razokulover' },
      { hid: 'twitter:title', name: 'twitter:title', content: SITE_NAME },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https://yuheinakasaka.github.io${baseAssetsDir}logo.png`
      },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'og:site_name', name: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: SITE_NAME },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:image', name: 'og:image', content: `${baseAssetsDir}logo.png` },
      { hid: 'og:url', name: 'og:url', content: 'https://yuheinakasaka.github.io/hello-project-one/' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: SITE_NAME },
      { hid: 'application-name', name: 'application-name', content: SITE_NAME }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${baseAssetsDir}favicon.ico` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseAssetsDir}apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseAssetsDir}favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseAssetsDir}favicon-16x16.png` },
      { rel: 'shortcut icon', href: `${baseAssetsDir}favicon.ico` },
      {
        rel: 'stylesheet',
        href: `${baseAssetsDir}css/font-awesome.min.css`
      }
    ]
  },
  manifest: {
    name: SITE_NAME,
    short_name: SITE_NAME,
    lang: 'ja'
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
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-32830984-19',
        debug: false
      }
    ]
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

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Lif",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/main.css",
    "~assets/css/fonts.css"
  ],

  // Global SCSS
  styleResources: {
    scss: [
      "~assets/scss/mixins.scss",
      "~assets/scss/variables.scss",
      "~assets/scss/fonts.scss",
      "~assets/scss/global.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios", ssr: true },
    { src: "./plugins/plugins.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/gtm", "@nuxtjs/auth", '@nuxtjs/i18n'],

  gtm: {
    
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "",
  },

  // Nuxt auth options
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "idToken",
          maxAge: 1800,
          global: true,
        },
        refreshToken: {
          property: "refreshToken",
          data: "refresh_token",
          maxAge: 60 * 60 * 1,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: `/auth/login`,
            method: "post",
            propertyName: "idToken",
          },
          user: {
            url: `/user`,
            method: "get",
            propertyName: false,
          },
        },
        tokenType: "",
      },
    },
    redirect: {
      login: "/",
      logout: "/",
      home: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Customize progress bar color
  loading: {
    color: "#0082CB",
  },

  // Configure page transition
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
}

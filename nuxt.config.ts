// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
    componentIslands: true
  },
  runtimeConfig:{
    SERVER_SIDE_SDK_KEY: process.env.SERVER_SIDE_SDK_KEY,

    public:{
        CLIENT_SIDE_ID: process.env.CLIENT_SIDE_ID
    }
  },

    modules: [
    '@nuxt/image-edge',
  ]
})

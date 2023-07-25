import { LDPlugin } from "launchdarkly-vue-client-sdk";

export default defineNuxtPlugin((nuxtApp) => {
  const clientSideID = useRuntimeConfig().public.CLIENT_SIDE_ID;

  const userContext = {
    kind: "multi",
    user: {
      key: "f9f060ac-6d4f-4827-a74c-de01f8842b29",
      name: "Dr. Raquel Lindgren",
      state: "Oregon",
      city: "Reinamouth",
      country: "Sweden",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "4.8.5",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "Huel, Johns and Hodkiewicz",
    },
  };

  nuxtApp.vueApp.use(LDPlugin, { clientSideID, user: userContext });
});

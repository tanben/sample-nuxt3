import * as LaunchDarkly from "launchdarkly-node-server-sdk";

let ldClient;

async function getLDClient() {
  if (ldClient) {
    return ldClient;
  }

  const sdkKey = useRuntimeConfig().SERVER_SIDE_SDK_KEY;
  ldClient = LaunchDarkly.init(sdkKey);
  await ldClient.waitForInitialization();

  console.log("initialized server sdk");

  return ldClient;
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const ldClient = await getLDClient();

  // make LD helper available across all composables and components
  nuxtApp.provide("getLDClient", () => ldClient);
});

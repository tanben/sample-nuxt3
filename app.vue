
<template>
    <div class="main">
        <div>
            <FrontendRenderedLogo :flagKey="frontendKey"/>
        </div>
        <div>
            <div class="logo">
                <nuxt-img :src="(flagValue)?'/img/ldLogo.png' : '/img/nuxtLogo.png'" width="120px" class="App-logo"/>
            </div>
            <div>Universal Rendered (Server+Client)</div>
        </div>
        <div>
            <BackendRenderedLogo :flagKey="backendKey"/>
        </div>
        
    </div>
</template>

<style>
@import url("~/assets/css/logo.css");
@import url("~/assets/css/styles.css");
</style>


<script setup>
import { useLDFlag } from "launchdarkly-vue-client-sdk";

// Create these flags on LaunchDarkly
// or update with your own key
const frontendKey = 'frontend-toggle';
const backendKey = 'backend-toggle';

const nuxtApp = useNuxtApp();
let flagValue;



if (process.server) {
    // server-side rendered
    
    const { data } = await useAsyncData('backendsvc', async () => {
        const context = { key: "nuxt-node-server-sdk" }
        
        // from Nuxt app context, 
        // call the LD helper function set by the ld-node-sdk.server plugin
        const ldClient = nuxtApp.$getLDClient();
        return ldClient.variation(frontendKey, context, false)
    })

    flagValue = data._value;
}


if (process.client)
{ 
    // check if rendering on the client side
    // call Vue.js SDK
    flagValue = useLDFlag(frontendKey, false)
}


</script>


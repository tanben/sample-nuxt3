
<template>
    <div class="logo">
        <nuxt-img :src="(flagValue) ? '/img/ldLogo.png' : '/img/nuxtLogo.png'" width="120px" class="App-logo"/>
    </div>
    <div>Client-side Rendered</div>
</template>


<script setup>
    import { useLDFlag } from "launchdarkly-vue-client-sdk";
    const props = defineProps({
        flagKey: String
    });
    const { flagKey } = props;
    
    const flagValue= useLDFlag(flagKey, false)

</script>

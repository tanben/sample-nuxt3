<template>

    <div class="logo">
        <nuxt-img :src="imgFile" width="120px" class="App-logo"/>
    </div>
    <div>Server-side Rendered</div>
</template>

<script setup>
    const props=defineProps({
        flagKey:String
    });
    const { flagKey } = props;
    const context = { key: "nuxt-node-server-sdk" }
    

    const {data} = await useAsyncData('backendsvc', async () => {
        const ldClient = useNuxtApp().$getLDClient();
        return ldClient.variation(flagKey, context, false)
    })
    const flagValue = data._value;
    
    const imgFile =(flagValue)?"/img/ldLogo.png":"/img/nuxtLogo.png";
    
</script>

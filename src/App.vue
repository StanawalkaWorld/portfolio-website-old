<script setup>
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';
    
</script>

<template>
    <NavBar />
    <div class="content">
        <router-view></router-view>
    </div>
    <SiteFooter />
</template>

<style lang="scss">
</style>

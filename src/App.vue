<script setup>
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';
import LandingBlock from './components/LandingBlock.vue';
    
</script>

<template>
    <NavBar />
    <div class="content">
        <LandingBlock />
    </div>
    <SiteFooter />
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
a, a:active, a:visited {
    color: $text-color;
    text-decoration: none;
}

body {
    background: $background-color;
    color: $text-color;
    font-family: $fonts;
}

.content {
    margin: $big-margin auto;
    width: 80%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: $small-margin;
    }
}
</style>

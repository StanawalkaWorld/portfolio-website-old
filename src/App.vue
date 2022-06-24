<script setup>
import NavBar from './components/StructureBlocks/Navbar.vue';
import SiteFooter from './components/StructureBlocks/SiteFooter.vue';
import LandingBlock from './components/StructureBlocks/LandingBlock.vue';
import ContactBlock from './components/StructureBlocks/ContactBlock.vue';
    
</script>

<template>
    <NavBar />
    <div class="content">
        <LandingBlock />
        <div class="separator"></div>
        <ContactBlock />
        <div class="separator"></div>
    </div>
    <SiteFooter />
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
a, a:active {
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
        padding: $standard-margin;
    }
}

.separator {
    margin-bottom: 20vw;
}
</style>

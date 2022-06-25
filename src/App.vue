<script setup>
import NavBar from './components/StructureBlocks/NavBar.vue';
import SiteFooter from './components/StructureBlocks/SiteFooter.vue';
import LandingBlock from './components/StructureBlocks/LandingBlock.vue';
import ContactBlock from './components/StructureBlocks/ContactBlock.vue';
import SkillsBlock from './components/StructureBlocks/SkillsBlock.vue';

import { ArrowUpIcon } from "@vue-icons/feather";
import { useSmoothScroll } from './composables/scroll';
const scroll = useSmoothScroll();

</script>

<template>
    <NavBar />
    <div class="content">
        <LandingBlock />
        <div class="separator"></div>
        <SkillsBlock />
        <div class="separator"></div>
        <ContactBlock />
        <div class="separator"></div>
    </div>
    <SiteFooter />
    <div class="home-button" @click="scroll.scrollTo('.navbar')">
        <ArrowUpIcon />
    </div>
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
    margin-bottom: 40vh;
}

.home-button {
    position: fixed;
    right: 20px;
    bottom: 20px;

    padding: 20px;
    border-radius: 20px;
    font-size: 0%;

    background: lighten($secondary-color, 20);

    &:hover {
        background: lighten($secondary-color, 40);
        cursor: pointer;
    }
}
</style>

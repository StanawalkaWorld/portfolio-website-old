<script setup>
import NavBar from "./components/StructureBlocks/NavBar.vue";
import LandingBlock from "./components/StructureBlocks/LandingBlock.vue";
import ContactBlock from "./components/StructureBlocks/ContactBlock.vue";
import SkillsBlock from "./components/StructureBlocks/SkillsBlock.vue";

import { ArrowUpIcon } from "@vue-icons/feather";
import { useSmoothScroll } from "./composables/scroll";
const scroll = useSmoothScroll();
</script>

<template>
    <NavBar />
    <main class="content">
        <section>
            <LandingBlock />
        </section>
        <section>
            <SkillsBlock />
        </section>
        <section class="flex-center">
            <ContactBlock />
        </section>
    </main>
    <div class="home-button" @click="scroll.scrollTo('.navbar')">
        <ArrowUpIcon />
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
a,
a:active {
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

section,
section.flex-center {
    height: 100vh;
}
.separator {
    height: 40vh;
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

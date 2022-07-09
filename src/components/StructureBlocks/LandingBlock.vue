<script setup lang="ts">
import TwoColumnContent from "../TwoColumnContent.vue";
import LandingPicture from "../../assets/landing-picture.svg";

import { useLanguageStore } from "../../store/lang";
const lang = useLanguageStore();
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <img
                :src="LandingPicture"
                alt="Simple drawing of a man looking at a PC monitor."
                class="landing-picture"
            />
        </template>
        <template #second>
            <h1 class="prominent-header text-left">
                {{ lang.translationFor("content", "landing.mainheader") }}
            </h1>
            <p class="content-paragraph text-justify">
                {{ lang.translationFor("content", "landing.paragraph") }}
            </p>
        </template>
    </TwoColumnContent>
</template>

<style lang="scss" scoped>
.content-paragraph {
    color: $dimmed-color;
}

.landing-picture {
    width: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
}
</style>

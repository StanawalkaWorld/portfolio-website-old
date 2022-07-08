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
                alt="Simple drawing of a man looking at a laptop."
            />
        </template>
        <template #second>
            <h1 class="prominent-header text-left">
                {{ lang.translationFor("content", "landing.mainheader") }}
            </h1>
            <p class="prominent-paragraph text-justify">
                {{ lang.translationFor("content", "landing.paragraph") }}
            </p>
        </template>
    </TwoColumnContent>
</template>

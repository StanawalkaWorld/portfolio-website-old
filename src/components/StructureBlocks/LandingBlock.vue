<script setup lang="ts">
import TwoColumnContent from '../TwoColumnContent.vue';

import { useLanguageStore } from '../../store/lang';
const lang = useLanguageStore();
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <!-- TODO: Place a fitting image -->
        </template>
        <template #second>
            <h1 class="prominent-header text-left">{{ lang.translationFor("content", "landing.mainheader") }}</h1>
            <p class="prominent-paragraph text-justify">{{ lang.translationFor("content", "landing.paragraph") }}</p>
        </template>
    </TwoColumnContent>
</template>
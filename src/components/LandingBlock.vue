<script setup lang="ts">
import TwoColumnContent from './TwoColumnContent.vue';
import TitledContent from './UIElements/TitledContent.vue';

import { useLanguageStore } from '../store/lang';
const lang = useLanguageStore();
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <!-- TODO: Place a fitting image -->
        </template>
        <template #second>
            <TitledContent 
                :title="lang.translationFor('content', 'landing.mainheader')" 
                header-align="left"
                paragraph-align="justify"
            >
                {{ lang.translationFor("content", "landing.paragraph") }}
            </TitledContent>
        </template>
    </TwoColumnContent>
</template>
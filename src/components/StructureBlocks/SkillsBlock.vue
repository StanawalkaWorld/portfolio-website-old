<script lang="ts" setup>
import TwoColumnContent from '../TwoColumnContent.vue';
import TitledContent from '../UIElements/TitledContent.vue';

import { useLanguageStore } from '../../store/lang';

const lang = useLanguageStore();
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <TitledContent
                :title="lang.translationFor('content', 'skills.header')"
                header-align="right"
                paragraph-align="justify"
            >
                <div id="skills"></div>
                {{ lang.translationFor('content', 'skills.paragraph') }}
            </TitledContent>
        </template>
        <template #second>
            <div class="flex-center">
                <ul>
                    <li></li>
                </ul>
            </div>
        </template>
    </TwoColumnContent>
</template>

<style lang="scss" scoped>

</style>
<script setup>
import TwoColumnContent from '../TwoColumnContent.vue';

import { useLanguageStore } from '../../store/lang';
const lang = useLanguageStore();
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <div id="contact" class="flex-center">
                <h2 class="content-header text-center">{{ lang.translationFor("content", "contact.context") }}</h2>
            </div>
        </template>
        <template #second>
            <div class="flex-center">
                <div>
                    <p class="content-paragraph">
                        E-mail: <a class="standard-link" href="mailto:dawid.baranski.ti@gmail.com">dawid.baranski.ti@gmail.com</a>
                    </p>
                    <p class="content-paragraph">
                        Github: <a class="standard-link" href="https://github.com/StanawalkaWorld">StanawalkaWorld</a>
                    </p>
                </div>
            </div>
        </template>
    </TwoColumnContent>
</template>

<style lang="scss" scoped>

</style>
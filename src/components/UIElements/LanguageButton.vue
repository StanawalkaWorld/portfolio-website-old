<script setup lang="ts">

import { useLanguageStore } from '../../store/lang';
const lang = useLanguageStore();

</script>

<template>
    <button class="langbutton" @click="lang.switchLanguage">
        <span :class="['fi', lang.current_lang == 'pl' ? 'fi-us' : 'fi-pl']"></span>
    </button>
</template>

<style lang="scss" scoped>
.langbutton {
    outline: 0;
    border: 0;

    border-radius: 100%;
    padding: $small-margin;
    background: rgba(255, 255, 255, 0.2);

    &:hover {
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
}
</style>
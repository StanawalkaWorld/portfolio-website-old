<script setup lang="ts">

import { useLanguageStore } from '../../store/lang';
const lang = useLanguageStore();

</script>

<template>
    <button class="langbutton" @click="lang.switchLanguage">
        <span :class="['fi', lang.current_lang == 'pl' ? 'fi-gb' : 'fi-pl']"></span>
        Switch language
    </button>
</template>

<style lang="scss" scoped>
.langbutton {
    outline: 0;
    border: 0;

    transition: $standard-transition_length;
    border-radius: $big-margin;
    padding: $small-margin + 0.2em;
    background: rgba(255, 255, 255, 0.2);
    color: $text-color;

    &:hover {
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
}

.fi {
    border-radius: $small-margin - 0.1em;
    margin-right: 5px;
}
</style>
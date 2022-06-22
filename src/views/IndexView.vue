<script setup>
import { useLanguageStore } from '../store/lang';

const lang = useLanguageStore();
</script>

<template>
    <!-- TODO: Introduction to who I am and stuff -->
    <h1>{{ lang.translationFor("content", "testing.header") }}</h1>
    <p>{{ lang.translationFor("content", "testing.paragraph") }} <a class="mail" href="mailto:dawid.baranski.ti@gmail.com">dawid.baranski.ti@gmail.com</a></p>
    <button @click="lang.switchLanguage">{{ lang.translationFor("content", "testing.langbutton") }}</button>
</template>

<style lang="scss" scoped>
a.mail {
    color: $accent-color;
}
</style>
<script setup>
import { useLanguageStore } from '../store/lang';
import LandingBlock from '../components/LandingBlock.vue';

const lang = useLanguageStore();
</script>

<template>
    <LandingBlock />
</template>

<style lang="scss" scoped>
a.mail {
    color: $accent-color;
}
</style>
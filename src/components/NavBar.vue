<script setup>
import Logo from '../assets/Logo.png';

import OutlineButton from './UIElements/OutlineButton.vue';
import { useLanguageStore } from '../store/lang';

const lang = useLanguageStore();

</script>

<template>
    <nav class="navbar">
        <router-link to="/" class="logo-container">
            <img :src="Logo" alt="✔" class="logo">
            <h1 class="logo-caption">Dawid Barański</h1>
        </router-link>
        
        <div class="navlinklist">
            <!-- TODO: Use component based links for better look and active route styling -->
            <router-link class="navlink" to="/">
                {{ lang.translationFor("navlink.home") }}
            </router-link>
            <router-link class="navlink" to="/about">
                {{ lang.translationFor("navlink.about") }}
            </router-link>
            <router-link class="navlink" to="/contact">
                {{ lang.translationFor("navlink.contact") }}
            </router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    padding: $standard-margin;
    display: flex;
    align-items: center;

    .logo-container {
        display: flex;
        align-items: center;
    }

    * {
        margin-right: $small-margin;
    }
}
.logo {
    max-height: 40px;
}
.logo-caption {
    margin-right: $big-margin;
}
</style>
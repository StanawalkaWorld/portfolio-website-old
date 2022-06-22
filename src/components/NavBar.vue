<script setup>
import Logo from '../assets/Logo.png';

import { useLanguageStore } from '../store/lang';

const lang = useLanguageStore();

</script>

<template>
    <nav class="navbar">
        <a href="#" class="logo-container">
            <img :src="Logo" alt="✔" class="logo">
            <h1 class="logo-caption">Dawid Barański</h1>
        </a>
        
        <div class="navlinklist">
            <a class="navlink" href="#">
                {{ lang.translationFor("navlink.home") }}
            </a>
            <a class="navlink" href="#about">
                {{ lang.translationFor("navlink.about") }}
            </a>
            <a class="navlink" href="#contact">
                {{ lang.translationFor("navlink.contact") }}
            </a>
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

    .navlinklist {
        .navlink {
            margin-right: $standard-margin;
        }
    }
}
.logo {
    max-height: 40px;
}
.logo-caption {
    margin-right: $big-margin;
}
</style>
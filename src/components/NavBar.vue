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
    justify-content: center;

    background: $secondary-color;
    .logo-container {
        display: flex;
        align-items: center;
    }

    * {
        margin-right: $small-margin;
    }

    .navlinklist {
        .navlink {
            display: block;
            margin-right: $big-margin;
            padding: $standard-margin;
            border-radius: $small-margin;

            &:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        }
    }
}
.logo {
    max-height: 40px;
}
.logo-caption {
    margin-right: $big-margin;
}

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;

        * {
            margin: 0;
        }

        .navlinklist {
            display: block;
            width: 100%;
            margin-top: $small-margin;
            // flex-direction: column;

            .navlink {
                width: 100%;
                border-radius: 0;
                text-align: center;
            }
        }
    }
}
</style>
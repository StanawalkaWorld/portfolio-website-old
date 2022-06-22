<script setup>
import Logo from '../assets/Logo.png';

import { useLanguageStore } from '../store/lang';
import LanguageButton from './UIElements/LanguageButton.vue';

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
                {{ lang.translationFor("skeleton", "navlink.home") }}
            </a>
            <a class="navlink" href="#about">
                {{ lang.translationFor("skeleton", "navlink.about") }}
            </a>
            <a class="navlink" href="#contact">
                {{ lang.translationFor("skeleton", "navlink.contact") }}
            </a>
        </div>

        <LanguageButton class="langbutton" />
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
        display: flex;
        .navlink {
            display: block;
            margin-right: $big-margin;
            padding: $standard-margin;
            border-radius: $small-margin;
            transition: $standard-transition_length background;

            &:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        }
    }

    .langbutton {
        position: fixed;
        top: 20px;
        right: 20px;
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

        .langbutton {
            top: unset;
            bottom: 20px;
            right: 20px;

            padding: $standard-margin;
        }
    }
}
</style>
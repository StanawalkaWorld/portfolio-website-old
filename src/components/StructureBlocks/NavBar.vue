<script setup>
import Logo from "../../assets/Logo.png";
import LanguageButton from "../UIElements/LanguageButton.vue";

import { useSmoothScroll } from "../../composables/scroll";
import { useLanguageStore } from "../../store/lang";

const scroll = useSmoothScroll();
const lang = useLanguageStore();
</script>

<template>
    <nav class="navbar">
        <div class="logo-container">
            <img :src="Logo" alt="✔" class="logo" />
            <div class="logo-caption">Dawid Barański</div>
        </div>

        <div class="navlinklist">
            <a
                class="navlink"
                href="#about"
                @click.prevent="scroll.scrollTo('#about')"
            >
                <nobr>{{
                    lang.translationFor("skeleton", "navlink.about")
                }}</nobr>
            </a>
            <a
                class="navlink"
                href="#skills"
                @click.prevent="scroll.scrollTo('#skills')"
            >
                <nobr>{{
                    lang.translationFor("skeleton", "navlink.skills")
                }}</nobr>
            </a>
            <a
                class="navlink"
                href="#contact"
                @click.prevent="scroll.scrollTo('#contact')"
            >
                <nobr>{{
                    lang.translationFor("skeleton", "navlink.contact")
                }}</nobr>
            </a>
        </div>

        <LanguageButton class="langbutton" />
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
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
            transition: $standard-transition_length background;

            font-size: 1.2em;

            &:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        }
    }

    .langbutton {
        position: fixed;
        bottom: 100px;
        right: 20px;
        margin: 0;
    }
}
.logo {
    max-height: 40px;
}
.logo-caption {
    margin-left: $small-margin;
    font-size: 2.5em;
    font-weight: bold;

    @media screen and (min-width: 1024px) {
        margin-right: $big-margin;
    }
}

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;

        // * {
        //     margin: 0;
        // }

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

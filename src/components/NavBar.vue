<script setup>
import Logo from '../assets/Logo.png';
</script>

<template>
    <nav class="navbar">
        <router-link to="/" class="logo-container">
            <img :src="Logo" alt="✔" class="logo">
            <h2 class="logo-caption">Dawid Barański</h2>
        </router-link>
        
        <div class="navlinklist">
            <router-link class="navlink" to="/">Home</router-link>
            <router-link class="navlink" to="/projects">Projects</router-link>
            <router-link class="navlink" to="/about">About me</router-link>
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
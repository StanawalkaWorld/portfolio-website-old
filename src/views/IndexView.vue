<script setup>
    import { ref } from 'vue';

    const testval = ref(0);

    function onclk() {
        testval.value++;
    }
</script>

<template>
    <h1>test</h1>
    <button @click="onclk">adding! {{ testval }}</button>
</template>
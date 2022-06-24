<script lang="ts" setup>
type alignement = "left" | "center" | "right" | "justify" | undefined;

const props = defineProps<{
    title: string
    headerAlign: alignement
    paragraphAlign: alignement
}>();

</script>

<template>
    <h2 :class="['content-header', headerAlign ? `text-${headerAlign}` : '']">
        {{ title }}
    </h2>
    <p :class="['content-paragraph', paragraphAlign ? `text-${paragraphAlign}` : '']">
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>

</style>
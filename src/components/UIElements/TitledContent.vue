<script lang="ts" setup>
type alignement = "left" | "center" | "right" | "justified";

const props = defineProps<{
    title: string
    headerAlign: alignement
    paragraphAlign: alignement
}>();

const headerStyle = {
    textAlign: props.headerAlign
};

const paragraphStyle = {
    textAlign: props.paragraphAlign
}

</script>

<template>
    <h2 class="content-header" :style="headerStyle">
        {{ title }}
    </h2>
    <p class="content-paragraph">
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
.content-header {

}
</style>
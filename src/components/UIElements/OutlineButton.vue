<script setup lang="ts">
defineProps<{
    active?: Boolean,
    accented?: Boolean
}>()

defineEmits<{
    (e: "click", event: MouseEvent): void
}>();
</script>

<template>
    <button 
        @click="$emit('click', $event)" 
        :class="{ btn_outline: true, btn_active: active, btn_accented: accented }">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn_outline {
    outline: 0;
    border-radius: 10px;
    padding: 5px 20px;

    font-weight: 400;
    font-size: 1.2em;

    @include hover_bg($background-color);
    @include outlined($text-color, 2px);

    &:hover {
        cursor: pointer;
    }
}

.btn_active {
    border-color: $active-color;
    color: $active-color;
}

.btn_accented {
    border-color: $accent-color;
    color: $accent-color;
}
</style>
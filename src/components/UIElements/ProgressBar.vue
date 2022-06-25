<script setup>
import { computed } from '@vue/reactivity';


const props = defineProps({
    value: {
        required: true,
        type: Number,

        validator(value) {
            return value > 0 && value <= 100;
        }
    },
    progessColor: {
        required: false,
        default: "#C00",
        type: String
    },

    prominent: {
        required: false,
        default: false
    }
});

const propHeight = computed(() => {
    return ((prominent) ? "20px" : "10px");
});

</script>

<template>
    <div class="bar">
        <div 
            class="bar-progress" 
            :style="{ width: value, backgroundColor: progessColor, height: propHeight }">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bar {
    border-radius: 10px;
    background: $cm-light-accent;

    width: 100%;
}
.bar-progress {
    border-radius: 10px;
}

</style>
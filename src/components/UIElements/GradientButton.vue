<template>
    <button class="btn btn-gradient">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn-gradient {
    transition: $standard-transition_length;
    background: linear-gradient(
        139deg,
        rgba(224, 210, 73, 1) 0%,
        rgba(180, 60, 223, 1) 100%
    );
    color: $background-color;

    border-radius: 20px;
    padding: $small-margin * 1.5 $standard-margin * 1.5;
    font-size: 1.3em;

    &:hover {
        background: linear-gradient(
            139deg,
            rgba(180, 60, 223, 1) 0%,
            rgba(224, 210, 73, 1) 100%
        );
        cursor: pointer;
    }
}
</style>

<template>
    <slot></slot>
    <div class="two-column-container">
        <div class="two-column">
            <slot name="first"></slot>
        </div>
        <div class="two-column">
            <slot name="second"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.two-column-container {
    display: flex;
    justify-content: center;
    width: 100%;

    .two-column {
        width: 50%;
        padding: $small-margin;
    }

}
@media screen and (max-width: 1024px) {
    .two-column-container{
        flex-direction: column;

        .two-column {
            width: 100%;
        }
    }
}
</style>
<template>
    <div class="c-divider">
        <p class="divider-text text-center position-relative py-20">
            <span class="divider-line line-left position-absolute"></span>
            <span class="divider-point point-left position-absolute"></span>
            <slot></slot>
            <span class="divider-line line-right position-absolute"></span>
            <span class="divider-point point-right position-absolute"></span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'CDivider'
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.divider-text {
    font-size: 16px;
    font-weight: bold;
}
.divider-line {
    display: inline-block;
    top: 30px;
    width: 30px;
    height: 1px;
    font-size: 28px;
    color: $primary;
    background-color: $primary;
}
.divider-point {
    display: inline-block;
    top: 28px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: $primary;
}
.line-left {
    left: 30%;
}
.point-left {
    left: 37%;
}
.line-right {
    right: 30%;
}
.point-right {
    right: 37%;
}
</style>

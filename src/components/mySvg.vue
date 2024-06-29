<script setup>
defineProps({
    name: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
})
</script>
<template>
    <svg :style="`width:${size};height:${size}`">
        <use :xlink:href="`#icon-${name}`" :fill="color"></use>
    </svg>
</template>
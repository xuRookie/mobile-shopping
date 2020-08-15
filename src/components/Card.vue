<template>
  <div class="c-card"></div>
</template>

<script>
export default {
    name: 'CCard',
    props: {
        title: {
            type: String,
            default: '标题'
        },
        src: {
            type: String,
            default: '',
            required: true
        }
    }
}
</script>

<style>

</style>

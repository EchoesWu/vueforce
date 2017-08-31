<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'EsTable',
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    watch: {
    }
  }
</script>

<style>
  /* CSS */
</style>

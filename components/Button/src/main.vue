<template>
  <button class="slds-button"
    :class="[ 'slds-button_' + type ]"
    @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script type="text/babel">
  export default {
    name: 'EsButton',
    props: {
      type: {
        type: String,
        default: 'neutral'
      },
      label: {
        type: String,
        default: 'default label'
      }
    }
  }
</script>

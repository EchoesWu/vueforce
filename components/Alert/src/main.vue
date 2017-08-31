<template>
  <div 
    class="slds-notify slds-notify_alert slds-theme_alert-texture"
      :class="[ 'slds-theme_' + type ]">
    <span 
      class="slds-icon_container slds-icon-utility-user slds-m-right_x-small" title="Description of icon when needed">
      <svg 
        class="slds-icon slds-icon_x-small">
        <use 
          xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
      </svg>
    </span>
    <h2>
      {{ content }}
    </h2>
    <button 
      class="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse">
      <svg 
        class="slds-button__icon">
        <use 
          xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
      </svg>
    </button>
  </div>
</template>

<script type="text/babel">
  export default {
    name: '',
    props: {
      type: {
        type: String,
        default: 'info'
      },
      content: {
        type: String,
        default: 'Please set content val'
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

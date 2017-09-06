<template>
  <div class="slds-notify slds-notify_alert slds-theme_alert-texture"
    :class="[ 'slds-theme_' + type ]"
    v-if="visiable">
    <span class="slds-icon_container slds-icon-utility-user slds-m-right_x-small"
      v-if="hasIcon">
      <svg class="slds-icon slds-icon_x-small">
        <use :xlink:href="[ assets + '/assets/icons/svg/utility/symbols.svg#' + icon ]"></use>
      </svg>
    </span>
    <h2>
      {{ content }}
    </h2>
    <button class="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse"
      @click="visiable=false">
      <svg class="slds-button__icon">
        <use :xlink:href="[ assets + '/assets/icons/svg/utility/symbols.svg#close' ]"></use>
      </svg>
    </button>
  </div>
</template>

<script type="text/babel">

  import store from '../../../src/store'

  export default {
    name: 'EsAlert',
    props: {
      type: {
        type: String,
        default: 'info'
      },
      content: {
        type: String,
        default: 'Please set content val'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visiable: true
      }
    },
    computed: {
      assets () {
        return store.getters.assets
      }
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

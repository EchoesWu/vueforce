<template>
  <button class="slds-button"
    :class="[
      type === 'icon' ? 'slds-button--icon-border' : 'slds-button_' + theme 
    ]"
    @click="$emit('click')">
    <svg class="slds-button__icon"
      :class="[
        size !== 'medium' ? 'slds-button__icon_' + size : '',
        hasIcon ? 'slds-button__icon_' + direction : ''
      ]"
      v-if="hasIcon || type ==='icon'">
      <use 
        :xlink:href="[assets + '/assets/icons/svg/utility/symbols.svg#' + icon]">
      </use>
    </svg>
    {{ label }}
  </button>
</template>

<script type="text/babel">

  import store from '../../../src/store'

  export default {
    name: 'EsButton',
    props: {
      type: {
        type: String,
        default: 'standard'
      },
      theme: {
        type: String,
        default: 'neutral'
      },
      label: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium'
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      direction: {
        type: String,
        default: 'left'
      }
    },
    computed: {
      assets () {
        return store.getters.assets
      }
    }
  }
</script>

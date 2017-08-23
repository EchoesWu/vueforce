<template>
  <div>
    <!-- Editable -->
    <div
      v-if="!editable"
      class="slds-form-element slds-hint-parent slds-form-element_edit"
      @dblclick="edit"
      >
      <span 
        class="slds-form-element__label"
        > {{ label }}
      </span>
      <div 
        class="slds-form-element__control slds-border_bottom"
        >
        <span 
          class="slds-form-element__static"
          > {{ model }}
        </span>
        <button 
          class="slds-button slds-button_icon slds-float_right slds-button_icon slds-button_icon-small"
          >
          <svg 
            class="slds-button__icon slds-button__icon_hint"
            >
            <use :xlink:href="[assets + '/assets/icons/svg/utility/symbols.svg#edit']"></use>
          </svg>
        </button>
      </div>
    </div>
    <!-- Inputable -->
    <div 
      v-else
      class="slds-form-element"
      >
      <label 
        v-if="label"
        class="slds-form-element__label"
        > {{ label }}
      </label>
      <div 
        class="slds-form-element__control"
        >
        <!-- Text -->
        <input 
          v-if=" type === 'text' "
          class="slds-input"
          type="text"
          v-model="model"
          :placeholder="placeholder">
        <!-- Text Area -->
        <textarea 
          v-if=" type === 'textarea' "
          class="slds-textarea" 
          v-model="model"
          :placeholder="placeholder">
        </textarea>
        <!-- Select -->
        <div 
          v-else-if=" type === 'select' "
          class="slds-select_container">
          <select 
            class="slds-select"
            v-model="selector"
            @change="toggle">
            <option v-for="option in options">{{ option }}</option>
          </select>
        </div>
        <!-- Date Picker -->
        <div
          v-else-if=" type === 'datepicker' ">
          <input
            class="slds-input" 
            type="date"
            v-model="model">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

  import store from '../../../src/store'

  export default {
    /* Name */
    name: 'EsFormElement',
    /* Props */
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: ''
      },
      labelPosition: {
        type: String,
        default: 'left'
      },
      status: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: 'input something...'
      },
      options: {
        type: Array,
        default: function () {
          return []
        }
      },
      defaultOption: {
        type: String,
        default: ''
      },
      cleanable: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      },
      value: {
        type: [String, Number, Boolean, Date],
        default: ''
      }
    },
    /* Data */
    data () {
      return {
        selector: this.defaultOption
      }
    },
    /* Computed */
    computed: {
      model: {
        get: function () {
          return this.value
        },
        set: function (val) {
          if (this._events.change) this.$emit('change', val, this.label)
        }
      },
      assets () {
        return store.getters.assets
      }
    },
    /* Methods */
    methods: {
      toggle (event) {
        if (this._events.toggle) this.$emit('toggle', this.selector)
      },
      edit (event) {
        if (this._events.dblclick) this.$emit('dblclick')
      }
    },
    /* Watch */
    watch: {
      /* Nothing */
    }
  }
</script>

<style>
  ::-webkit-inner-spin-button { visibility: hidden; } 
  ::-webkit-calendar-picker-indicator { 
    border: 1px solid #ccc; 
    border-radius: 2px; 
    box-shadow: inset 0 1px #fff, 0 1px #eee; 
    background-color: #eee; 
    background-image: -webkit-linear-gradient(top, #f0f0f0, #e6e6e6); 
    color: #666; 
  }
</style>
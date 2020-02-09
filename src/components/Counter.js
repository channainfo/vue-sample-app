const Counter = {
  template: `<div>
    <input 
      v-model='amount' 
      v-on:change='onChange()' />
    {{ count }}
    <slot></slot>
    <button v-on:click='onIncrease()'> + </button>
    <button v-on:click='onDecrease()'> - </button>
  </div>
  `,
  computed: {
    count: function () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      amount: this.$store.state.amount
    }
  },
  methods: {
    onIncrease () {
      console.log('increase in component')
      // this.$emit('increase')
      this.$store.dispatch('onIncreaseInParent')
    },
    onDecrease () {
      console.log('decrease in component')
      // this.$emit('decrease')
      this.$store.dispatch('onDecreaseInParent')
    },
    onChange () {
      // console.log('value', this.amount)
      this.$emit('amount-set', this.amount)
      this.$store.dispatch('onAmountSet', this.amount)
    }
  }
}

export default Counter

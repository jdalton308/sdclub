
<template>

<button
  class="button is-primary is-outlined smile-button"
  @click="onClick"
>
  <slot></slot>
</button>

</template>



<script>

export default {
  name: 'smile-button',

  props: {
    onClick: {
      type: Function,
      required: true
    },
  },
}

</script>



<style lang="scss">

.smile-button {
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.4em;
  border-radius: 24px;
  height: auto;
}

</style>
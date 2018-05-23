<template lang="pug">
  div(:class='theme.root')
    div(v-for='(item, idx) of items' :class="theme.itemWrapper" :key='idx')
      key-value(v-bind='item', :theme='theme.item')
</template>

<script>
import KeyValue from '../KeyValue/index.vue'

export default {
  name: 'KeyValueList',
  components: {
    KeyValue,
  },
  props: {
    items: { type: Array, required: true, default: () => [] },
    theme: { type: Object, default: () => ({}) },
  },
}
</script>

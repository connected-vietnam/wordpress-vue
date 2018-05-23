<template>
  <div :class="theme.root">
    <div
      v-for="(item, idx) of items"
      :key="idx"
    >
      <icon-item
        v-bind="item"
        :theme="theme.item"
      />
    </div>
  </div>
</template>

<script>
import IconItem from '../IconItem/index.vue'

export default {
  name: 'IconItemList',
  components: {
    IconItem,
  },
  props: {
    items: { type: Array, required: true, default: () => [] },
    theme: { type: Object, default: () => ({}) },
  },
}
</script>

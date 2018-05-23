<template lang="pug">
div(:class='theme.root')
  div(:class='theme.labelWrapper')
    icon(v-if="icon" :class='theme.icon', icon='icon')
    div(v-if='!!label', :class='theme.label') {{ label }}
  div(:class='theme.valueWrapper')
    div(v-if='!!value', :class='theme.value') {{ value }}
</template>

<script>
import Icon from '../Icon/index.vue'

export default {
  name: 'KeyValue',
  components: {
    Icon,
  },
  props: {
    icon: { type: String, default: null },
    label: { type: String, default: null },
    value: { type: String, default: null },
    theme: { type: Object, default: () => ({}) },
  },
}
</script>

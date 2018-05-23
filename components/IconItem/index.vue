<template>
  <div :class="theme.root">
    <div :class="theme.iconWrapper">
      <icon
        :class="theme.icon"
        icon="icon"
      />
    </div>
    <div :class="theme.contentWrapper">
      <div
        v-if="!!title"
        :class="theme.title"
      >{{ title }}</div>
      <div
        v-if="!!subtitle"
        :class="theme.subtitle"
      >{{ subtitle }}</div>
      <div
        v-if="!!description"
        :class="theme.description"
      >{{ description }}</div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/index.vue'

export default {
  name: 'IconItem',
  components: {
    Icon,
  },
  props: {
    icon: { type: String, required: true },
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    description: { type: String, default: null },
    theme: { type: Object, default: () => ({}) },
  },
}
</script>

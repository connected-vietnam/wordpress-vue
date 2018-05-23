<template>
  <span>
    <i :class="[{ fa: isFontAwesome }, icon]" />
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: { type: String, required: true },
  },
  computed: {
    isFontAwesome() {
      return /(fa-)/i.test(this.icon)
    },
  },
}
</script>

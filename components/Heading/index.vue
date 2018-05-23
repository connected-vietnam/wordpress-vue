<template lang="pug">
  div
    h1(class="f3 f2-l tc lh-title pt3 pt5-ns") {{ title }}
    h3(class="f6 f5-l fw4 tc lh-copy pb3 pb5-ns") {{ description }}
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: { type: String, required: true },
    description: { type: String, default: null },
  },
}
</script>

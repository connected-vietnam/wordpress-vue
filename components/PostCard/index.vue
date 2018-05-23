<template lang="pug">
nuxt-link.pc-dark.hover-pc.link(:to='link')
  .br1.grow.pa2
    .w-100.aspect-ratio--4x3.cover(:style='backgroundStyle')
      img.dn(:src='`https://res.cloudinary.com/nhavungtau/image/upload/w_300/${entity.image.public_id}`', :alt='entity.title')
    .w-100.pa3.pt3.mb3.h3s-l.overflow-hidden.bg-white.diffused-shadow
      span.f5-ns.f6.fw6.lh-copy {{ entity.title }}

</template>

<script>
import utilsMixins from '~/mixins/utils-mixins'

export default {
  mixins: [utilsMixins],
  props: {
    ellipseTitle: { type: Boolean, default: false },
    ellipseSubtitle: { type: Boolean, default: false },
    showReadMore: { type: Boolean, default: false },
    entity: { type: Object, required: true },
  },
  computed: {
    link() {
      return `/bai-viet/${this.entity.slug}`
    },
    title() {
      return this.truncate(this.entity.title, this.ellipseTitle)
    },
    subtitle() {
      return this.truncate(this.entity.subtitle, this.ellipseSubtitle)
    },
    backgroundStyle() {
      if (!this.entity) return {}
      const style = {
        backgroundImage: `url("https://res.cloudinary.com/nhavungtau/image/upload/w_300/${this.entity.image.public_id}")`,
      }
      return style
    },
  },
}
</script>

<style scoped>
.bg {
  background: linear-gradient(to top, rgba(0, 0, 10, 0.8), rgba(0, 0, 0, 0.1));
}
</style>

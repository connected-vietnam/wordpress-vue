<template lang="pug">
  .bg-white.diffused-shadow.br1.ma0-ns.ma2.grow
    nuxt-link.link(data-component='RouterLink', :to='link')
      div.aspect-ratio--4x3.cover(
        :style='imageStyle'
        :href='link'
      )
      .ph3.pv3
        .h3-l.h2-m.overflow-hidden
          span.fw6.f6.f5-ns.dark-gray {{ entity.name }}
        .f6.pt2.pb1.truncate.pc-dark.lh-copy.pt2 {{ address }}

</template>

<script>
import utilsMixins from '~/mixins/utils-mixins'

export default {
  mixins: [utilsMixins],
  props: {
    entity: { type: Object, required: true },
  },
  computed: {
    link() {
      return `/du-an/${this.entity.slug}`
    },
    title() {
      return this.truncate(this.entity.title, this.ellipseTitle)
    },
    subtitle() {
      return this.truncate(this.entity.subtitle, this.ellipseSubtitle)
    },
    imageStyle() {
      if (!this.entity.image) return {}
      return {
        backgroundImage: `url(https://res.cloudinary.com/nhavungtau/image/upload/w_375/${this.entity.image.public_id})`,
      }
    },
    address() {
      return [
        this.entity.street,
        this.entity.region && this.entity.region.name,
        this.entity.city && this.entity.city.name,
      ].join(', ')
    },
  },
}
</script>

<style scoped>
.bg {
  background: linear-gradient(to top, rgba(0, 0, 10, 0.8), rgba(0, 0, 0, 0.1));
}
</style>

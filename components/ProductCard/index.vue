<template lang="pug">
.bg-white.diffused-shadow.br1.ma0-ns.ma2.ba.b--near-white.grow
  nuxt-link.link(:to='link')
    span.db.aspect-ratio--6x4.cover(:style='imageStyle')
      .pa2.absolute.top-1.left-1
        span.bg-pc.ph2.pv1.f7.white.dib.mr2.ttu {{ category }}
    .ph3-l.ph2.pv3
      div
        span.gray.f6.ttu {{ entity.code }}
      .h3.overflow-y-hidden
        span.fw6.dark-gray.f6.f5-ns {{ title }}
      .flex.flex-wrap.pt3
        .w-third
          .flex.f6-l.f7.justify-center.items-center
            div
              span.mid-gray
                i.fa.fa-arrows
            div
              span.pl1.flex-auto.mid-gray {{ entity.area }} m2
        .w-third
          .flex.f6-l.f7.justify-center.items-center
            div
              span.mid-gray
                i.fa.fa-bed
            div
              span.pl1.flex-auto.mid-gray {{ entity.bedRoomCount }}
        .w-third
          .flex.f6-l.f7.justify-center.items-center
            div
              span.mid-gray
                i.fa.fa-dollar
            div
              span.pl1.flex-auto.mid-gray {{ amount }}

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
      return `/nha-dat/${this.entity.slug}`
    },
    title() {
      return this.truncate(this.entity.name, this.ellipseTitle)
    },
    subtitle() {
      return this.truncate(this.entity.subtitle, this.ellipseSubtitle)
    },
    category() {
      return this.entity.category && this.entity.category.name
    },
    imageStyle() {
      if (!this.entity.image) return {}
      return {
        backgroundImage: `url(https://res.cloudinary.com/nhavungtau/image/upload/w_375/${
          this.entity.image.public_id
        })`,
      }
    },
    amount() {
      return this.formatCurrency({
        value: this.entity.price,
        currency: this.entity.currency,
      })
    },
  },
}
</script>

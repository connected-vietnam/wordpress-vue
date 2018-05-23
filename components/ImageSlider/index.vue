<template lang="pug">
  flickity(ref='flickity', :options='flickityOptions')
    div(
      v-for="item of imageItems"
      class="aspect-ratio--16x9 w-100 relative"
    )
      //- Image Cover
      div(
        class="absolute absolute--fill z-0 cover tc"
      )
        img.h-100(:src="item.image.url")
      //- Overlay with text
      div(class="absolute absolute--fill flex items-center justify-center z-1")
        p(class="white") {{ item.caption }}
</template>

<script>
export default {
  components: {
    Flickity: () => import('vue-flickity'),
  },
  props: {
    imageItems: { type: Array, default: () => [] },
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
      },
    }
  },
}

</script>

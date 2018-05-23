<template lang="pug">
div
  desktop-navigation(class="bg-white dn flex-l" :nav-items="navItems")
  mobile-navigation(class="bg-white dn-l" :nav-items="navItems")
  div(class="")
    nuxt
</template>

<script>
import DesktopNavigation from '~/components/DesktopNavigation/index.vue'
import MobileNavigation from '~/components/MobileNavigation/index.vue'

export default {
  head: {
    title: 'Wordpress Vue',
    meta: [
      {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
      },
    ],
  },
  components: {
    DesktopNavigation,
    MobileNavigation,
  },
  computed: {
    navItems() {
      return [
        {
          title: 'Trang chủ',
          to: '/',
        },
      ]
    },
  },
}
</script>

<style src="./style.css" />

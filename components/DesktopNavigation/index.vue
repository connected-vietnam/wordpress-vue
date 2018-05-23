<template lang="pug">
div(class="ph3 ph4-l items-center justify-between")
  div(class="flex items-center justify-between pt1")
    nuxt-link(to="/" class="flex-none mr2 link")
      span.ttu Vue Wordpress
    my-menu(mode="horizontal" :nav-items="navItems" :theme="theme")
  div(class="flex")
    nuxt-link(
      class="pointer link pc hover-pc dib f6 fw6 ph3"
      to="/lien-he"
    ) Liên hệ
</template>

<script>
import Menu from '~/components/Menu'

export default {
  name: 'DesktopNavgation',
  components: {
    MyMenu: Menu,
  },
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      theme: {
        item: 'itemNav',
        link: 'link pc hover-pc dib f6 fw6',
        subItem: 'childNav ph2',
        subLink: 'link pc-dark db f6 fw6 pa2',
      },
    }
  },
}
</script>

<style scoped>
.logo {
  width: 10rem;
}
</style>

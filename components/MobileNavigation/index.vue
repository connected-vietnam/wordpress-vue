<template lang="pug">
div(class="h3")
  div(class="fixed top-0 w-100 ph3 pv1 flex items-center justify-between bg-white shadow-1 z-3")
    span(@click="show = !show")
      icon(icon="fa-bars" class="f4")
    nuxt-link(to="/")
      img(
        class="logo"
        src="//res.cloudinary.com/nhavungtau/image/upload/c_fit,h_100,q_80,w_100/fdvdlxiqmxiu5ryvj3t8"
      )
    icon(icon="fa-search" class="f4")
  transition(name="slide-fade")
    div(
      v-if="show"
      v-prevent-parent-scroll
      class="fixed top-0 w-100 vh-100 overflow-y-auto pt5 z-2 bg-white"
    )
      my-menu(
        mode="vertical"
        :nav-items="navItems"
        :theme="theme"
        @close="show = false"
      )
</template>

<script>
import Menu from '~/components/Menu'
import Icon from '~/components/Icon/index.vue'

export default {
  name: 'MobileNavgation',
  components: {
    Icon,
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
      show: false,
      theme: {
        item: 'bb b--light-gray',
        link: 'link ttu gray f6 fw4',
        subItem: 'bb b--light-gray',
        subLink: 'link ttu gray f6 fw4',
      },
    }
  },
}
</script>

<style scoped>
.logo {
  width: 3rem;
}

.menu {
  border-bottom: none;
}
</style>

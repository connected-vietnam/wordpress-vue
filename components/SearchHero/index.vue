<template lang="pug">
  div(class="mh-600 overflow-hidden flex items-center")
    div(class="w-100 relative aspect-ratio--1x1 aspect-ratio--16x9-ns")
      div(class="bg absolute absolute--fill cover z-0")
      div(class="absolute absolute--fill z-1 flex items-center justify-center bg-black-30")
        div(class="w-100 mw6 pa3")
          nav(class="pv2")
            a(class="dib pv1 mr3 f4 white-80 pointer bb bw2") Mua bán
            a(class="dib pv1 mr3 f4 white-80 pointer") Cho thuê
          div(class="ph3 pv2 bg-white ba b--light-gray br2")
            input(class="w-100 bn f4 outline-0")

</template>

<style scoped>
.mh-600 {
  max-height: 600px;
}
.bg {
  background-image: url("https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b749ef140950edd755a159baaca6b6f0&auto=format&fit=crop&w=1650&q=80")
}
</style>

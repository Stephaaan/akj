<template>
  <div class="w-full max-w-full flex justify-between absolute z-10 pt-8">
    <div>
      <nuxt-link to="/">
        <img class="px-8 h-12 md:h-20 cursor-pointer" src="~/assets/imgs/logo.png" alt="logo">
      </nuxt-link>
    </div>
    <div>
      <TheMenu />
    </div>
  </div>
</template>

<script>
import TheMenu from '~/components/menu/TheMenu.vue'

export default {
  components: {
    TheMenu
  }
}
</script>

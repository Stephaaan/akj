<template>
  <div class="w-screen flex justify-between z-10 pt-8">
    <div>
      <img class="px-8 h-12 md:h-20 cursor-pointer" src="~/assets/imgs/logo.png" alt="logo">
    </div>
    <div>
      <TheMenu active="o-nas" />
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

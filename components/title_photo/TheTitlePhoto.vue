<template>
  <div class="w-full max-w-full sm:h-550 h-80">
    <div v-if="settings" v-editable="settings" class="w-full sm:h-550 h-80 relative">
      <img :src="settings.page_title_photo" width="auto" height="320" class="h-full w-full object-cover block" alt="Titulna fotka">
      <div id="title_photo_after" />
      <div v-html="settings.page_title" class="absolute bottom-40 sm:bottom-180 w-full text-center sm:w-auto sm:right-40 text-white font-worksans text-4xl sm:text-6xl" />
      <div class="absolute font-worksansLight text-center hidden sm:bottom-100 sm:block text-white w-80 left-40 sm:right-40 sm:left-auto">
        {{ settings.page_subtitle }}
      </div>
      <div class="absolute hidden left-60 sm:bottom-40 justify-around sm:flex w-64 sm:right-60 sm:left-auto">
        <a :href="settings.facebook_link.url" target="_blank" class="cursor-pointer">
          <img src="~/assets/imgs/icons/facebook_pink.png" alt="fb" class="w-8">
        </a>
        <a :href="`mailto:${settings.email}`" class="cursor-pointer">
          <img src="~/assets/imgs/icons/mail_pink.png" alt="mail" class="w-8">
        </a>
        <a :href="`tel:${settings.phone}`" class="cursor-pointer">
          <img src="~/assets/imgs/icons/phone_pink.png" alt="phone" class="w-8">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      settings: null
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.settings,
      (newVal, oldVal) => { this.settings = newVal }
    )
  }
}
</script>
<style scoped>
  .heading {
    bottom: 180px;
    right: 40px;
  }
  #title_photo_after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
}
</style>

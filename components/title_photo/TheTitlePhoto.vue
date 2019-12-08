<template>
  <div class="w-full max-w-full sm:h-550 h-80">
    <div v-if="titleData" class="w-full sm:h-550 h-80 relative">
      <img :src="titleData.foto" width="auto" height="320" class="h-full w-full object-cover block" alt="Titulna fotka">
      <div v-html="titleData.nadpis" class="absolute bottom-100 sm:bottom-180 right-10 sm:right-40 text-white font-worksans text-3xl sm:text-6xl" />
      <div class="absolute font-worksansLight text-center hidden sm:bottom-100 sm:block text-white w-80 right-10 sm:right-40">
        {{ titleData.podnadpis }}
      </div>
      <div class="absolute hidden sm:bottom-40 justify-around sm:flex w-64 sm:right-60">
        <a v-if="footerData" :href="footerData.facebook_link.url" target="_blank" class="cursor-pointer">
          <img src="~/assets/imgs/icons/facebook_pink.png" alt="fb" class="w-8">
        </a>
        <a v-if="footerData" :href="`mailto:${footerData.mail}`" class="cursor-pointer">
          <img src="~/assets/imgs/icons/mail_pink.png" alt="mail" class="w-8">
        </a>
        <a v-if="footerData" :href="`tel:${footerData.telefonne_cislo_klikatelne}`" class="cursor-pointer">
          <img src="~/assets/imgs/icons/phone_pink.png" alt="phone" class="w-8">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { actionTypes } from '~/store/actionTypes.js'
export default {
  data () {
    return {
      titleData: null,
      footerData: null
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_TITLE_PAGE_DATA, this)
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.title_page,
      (newVal, oldVal) => { this.titleData = newVal }
    )
    this.$store.watch(
      (state, getters) => getters.footer,
      (newVal, oldVal) => { this.footerData = newVal }
    )
  }
}
</script>
<style scoped>
  .heading {
    bottom: 180px;
    right: 40px;
  }
</style>

<template>
  <div class="w-full font-semibold h-auto bg-bgPink text-white flex flex-col font-worksans pt-8">
    <div class="w-full h-auto text-center sm:text-4xl text-2xl mb-4">
      {{ $t('footer.where_you_can_find_us') }}
    </div>
    <div class="w-full flex justify-center">
      <div class="w-2/3 md:w2/3 border-white border-b-2" />
    </div>
    <div v-if="settings" class="w-100 flex flex-col sm:flex-row items-center justify-center my-8">
      <div class="flex flex-col sm:flex-row sm:mr-8">
        <div class="flex justify-center mb-4 sm:mb-0 sm:mr-8 items-center">
          <img class="h-20" src="~/assets/imgs/icons/location.png" alt="location">
        </div>
        <div class="flex flex-col">
          <div class="max-w-3xs sm:max-w-2xs text-base sm:text-xl text-center">
            {{ settings.company_name }}
          </div>
          <div class="max-w-3xs sm:max-w-2xs font-worksansLight font-hairline text-base sm:text-xl text-center">
            {{ settings.company_address }}
          </div>
        </div>
      </div>
      <div class="w-full sm:hidden  my-8 flex justify-center">
        <div class="w-2/3 md:w2/3 border-white border-b-2" />
      </div>
      <div class="flex h-full flex-col justify-around font-hairline">
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/facebook.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a :href="settings.facebook_link.url" target="_blank" class="cursor-pointer">{{ settings.facebook_page_name }}</a>
          </div>
        </div>
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/phone.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a :href="`tel:${settings.phone}`" class="cursor-pointer">{{ settings.phone_readable }}</a>
          </div>
        </div>
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/mail.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a :href="`mailto:${settings.email}`" class="cursor-pointer">{{ settings.email }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-2/3 md:w2/3 border-white border-b-2" />
    </div>
    <div v-if="settings" class="font-hairline w-full flex justify-center my-8">
      {{ settings.copyright }}
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

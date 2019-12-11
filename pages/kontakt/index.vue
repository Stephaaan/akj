<template>
    <div v-if="settings" class="font-worksans font-light my-8 flex flex-col items-center">
      <div class="w-full text-center text-textPink text-title mb-8"> {{ $t("contact.title") }} </div>
      <div class="flex flex-col mdx:flex-row mdx:justify-around mdx:items-center w-content mdx:w-full">
        <div class="flex flex-row h-full w-full justify-center w-content mdx:w-auto mb-8">
          <div class="flex justify-center items-center mr-2">
            <img class="h-20" src="~/assets/imgs/icons/location_pink.png" alt="location">
          </div>
          <div class="flex flex-col h-full">
            <div class="max-w-3xs mdx:max-w-2xs text-xl mdx:text-2xl text-left text-textPink">
              {{ $t("contact.workplace") }}
            </div>
            <div class="max-w-3xs mdx:max-w-2xs font-worksansLight text-gray font-hairline text-base mdx:text-xl text-center">
              <div class="text-left">
                  {{ settings.company_address }}
              </div>
              <div class="text-left">
                  {{ settings.country }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full w-content mb-8 mdx:mb-0">
          <div class="max-w-3xs mdx:max-w-2xs font-worksansLight text-gray font-hairline text-base mdx:text-xl text-center">
            <div class="flex">
                <div class="w-16  mdx:w-20 text-left font-bold">
                  {{ $t("contact.fields.ico") }}:
                </div>
                <div>
                  {{ settings.ico }}
                </div>
            </div>
            <div class="flex">
                <div class="w-16 mdx:w-20 text-left font-bold">
                  {{ $t("contact.fields.dic") }}:
                </div>
                <div>
                  {{ settings.dic }}
                </div>
            </div>
             <div class="flex">
                <div class="w-16  mdx:w-20 text-left font-bold">
                  {{ $t("contact.fields.skype") }}:
                </div>
                <div>
                  {{ settings.skype }}
                </div>
            </div>
          </div>
        </div>
        <div class="flex h-full flex-col justify-around font-hairline h-full w-content mb-8">
          <div class="flex flex-row my-2">
            <div>
              <img class="h-8 mr-2" src="~/assets/imgs/icons/facebook_pink.png" alt="" srcset="">
            </div>
            <div class="flex items-center">
              <a :href="settings.facebook_link.url" target="_blank" class="cursor-pointer">{{ settings.facebook_page_name }}</a>
            </div>
          </div>
          <div class="flex flex-row my-2">
            <div>
              <img class="h-8 mr-2" src="~/assets/imgs/icons/phone_pink.png" alt="" srcset="">
            </div>
            <div class="flex items-center">
              <a :href="`tel:${settings.phone}`" class="cursor-pointer">{{ settings.phone_readable }}</a>
            </div>
          </div>
          <div class="flex flex-row my-2">
            <div>
              <img class="h-8 mr-2" src="~/assets/imgs/icons/mail_pink.png" alt="" srcset="">
            </div>
            <div class="flex items-center">
              <a :href="`mailto:${settings.email}`" class="cursor-pointer">{{ settings.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      settings: this.$store.getters.settings || null
    }
  },
  mounted () {
    console.log('mounted')
    this.$store.watch(
      (state, getters) => getters.settings,
      (newVal, oldVal) => { this.settings = newVal }
    )
  }
}
</script>

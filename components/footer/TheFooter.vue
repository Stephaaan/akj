<template>
  <div class="w-screen font-semibold h-auto bg-bgPink text-white flex flex-col font-worksans pt-8">
    <div class="w-full h-auto text-center sm:text-4xl text-2xl mb-4">Kde nás nájdete</div>
    <div class="w-full flex justify-center">
      <div class="w-2/3 md:w2/3 border-white border-b-2"></div>
    </div>
    <div v-if="footerData" class="w-100 flex flex-col sm:flex-row items-center justify-center my-8">
      <div class="flex flex-col sm:flex-row mr-8">
        <div class="flex justify-center mb-4 sm:mb-0 sm:mr-8 items-center">
          <img class="h-20" src="~/assets/imgs/icons/location.png" alt="location" />
        </div>
        <div class="flex flex-col">
          <div class="max-w-xxs text-base sm:text-xl text-center">
              {{footerData.adresa_nazov_firmy}}
          </div>
          <div class="max-w-xxs font-worksansLight font-hairline text-base sm:text-xl text-center">
              {{footerData.adresa_adresa}}
          </div>
        </div>
      </div>

      <div class="w-full sm:hidden  my-8 flex justify-center">
        <div class="w-2/3 md:w2/3 border-white border-b-2"></div>
      </div>

      <div class="flex h-full flex-col justify-around font-hairline">
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/facebook.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a class="cursor-pointer" :href="footerData.facebook_link.url">{{ footerData.facebook_nazov_stranky }}</a>
          </div>
        </div>
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/phone.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a class="cursor-pointer" :href="`tel:${footerData.telefonne_cislo_klikatelne}`">{{ footerData.telefonne_cislo_citatelne }}</a>
          </div>
        </div>
        <div class="flex flex-row my-2">
          <div>
            <img class="h-8 mr-2" src="~/assets/imgs/icons/mail.png" alt="" srcset="">
          </div>
          <div class="flex items-center">
            <a class="cursor-pointer" :href="`mailto:${footerData.mail}`">{{ footerData.mail }}</a>
          </div>
        </div>

      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-2/3 md:w2/3 border-white border-b-2"></div>
    </div>
    <div v-if="footerData" class="font-hairline w-full flex justify-center my-8">
      {{ footerData.copyright }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerData: null
    }
  },
  mounted () {
    console.log('mounted')

    return this.$storyapi.get('cdn/stories/main-page/footer', {
      version: 'draft'
    }).then((data) => {
      this.footerData = data.data.story.content
    })
    // eslint-disable-next-line
      .catch(err => console.log('data' + err))
  },
  watch: {
    footerData: newVal => console.log(newVal)
  }
}
</script>

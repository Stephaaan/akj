<template>
  <div>
    <div class="w-full mt-8 text-center text-textPink text-title">
      {{ $t('services.title') }}
    </div>
    <div class="flex justify-around bg-bgLight my-8">
      <div class="w-full md:w-3/4 grid justify-around">
        <div
          v-for="service in services"
          :key="service.slug"
          class="shadow my-4 font-worksansLight text-white font-hairline uppercase bg-textPink w-64 mx-auto md:w-72 h-16 flex justify-center items-center text-center"
        >
          <nuxt-link :to="`sluzby/${service.slug}`">
            {{ service.content.heading }}
          </nuxt-link>
        </div>
      </div>
      <div class="relative w-1/4 hidden xl:block">
        <img
          src="~/assets/imgs/services.png"
          alt="services"
          class="hidden xl:flex absolute -top-16 img-height"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from '~/store/actionTypes'
export default {
  data () {
    return {
      services: []
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_SERVICES, this.$storyapi)
    this.$store.watch(
      (state, getters) => getters.services,
      (newVal, oldVal) => {
        this.services = newVal
      }
    )
  }
}
</script>
<style >
.skew {
  transform: skew(-9deg);
}
.shadow {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.2);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}
.img-height {
  height: 108%;
}
</style>

<template>
  <div class="w-full px-8 sm:px-16 xl:px-20 flex flex-col my-8">
    <div v-if="quote" class="w-full mb-8 text-center text-gray font-worksans text-sm sm:text-lg">
      {{quote.popis_stranky}}
    </div>
    <div class="flex flex-col-reverse lg:flex-row justify-between">
      <div v-if="quote" class="mt-8 flex-1 font-satisfy text-lightGray text-3xl font-medium md:w-full xl:w-2/5 text-center self-center">
        {{ quote.Text }}
      </div>
      <img v-if="quote" :src="quote.Fotka" alt="book">
    </div>
  </div>
</template>
<script>
import { actionTypes } from '~/store/actionTypes.js'

export default {
  data () {
    return {
      quote: null
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_QUOTE, this)
    this.$store.watch(
      (state, getters) => getters.quote,
      (newVal, oldVal) => {
        this.quote = newVal
      }
    )
  }
}
</script>

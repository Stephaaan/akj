<template>
  <div v-if="home" v-editable="home" class="w-full px-8 sm:px-16 xl:px-20 flex flex-col my-8">
    <div v-if="home" class="w-full mb-8 text-center text-gray font-worksans text-sm sm:text-lg">
      {{ home.page_description }}
    </div>
    <div class="flex flex-col-reverse lg:flex-row justify-between">
      <div v-if="home" class="mt-8 flex-1 font-satisfy text-lightGray text-3xl font-medium md:w-full xl:w-2/5 text-center self-center">
        {{ home.quote_text }}
      </div>
      <img v-if="home" :src="home.quote_image" alt="book">
    </div>
  </div>
</template>
<script>
// TODO: recreate
export default {
  data () {
    return {
      home: null
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.home,
      (newVal, oldVal) => { this.home = newVal }
    )
  }
}
</script>

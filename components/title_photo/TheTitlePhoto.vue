<template>
  <div class="w-full max-w-full sm:h-550 h-80">
    <div v-if="titleData" class="w-full sm:h-550 h-80 relative">
      <img :src="titleData.foto" width="auto" height="320" class="h-full w-full object-cover block" alt="Titulna fotka">
      <div v-html="titleData.nadpis" class="absolute bottom-100 sm:bottom-180 right-10 sm:right-40 text-white font-worksans text-3xl sm:text-6xl" />
      <div class="absolute font-worksansLight text-center hidden sm:bottom-100 sm:block text-white w-80 right-10 sm:right-40">
        {{ titleData.podnadpis }}
      </div>
    </div>
  </div>
</template>
<!-- TODO: Add FB Links
-->
<script>
import { actionTypes } from '~/store/actionTypes.js'
export default {
  data () {
    return {
      titleData: null
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
  }
}
</script>
<style scoped>
  .heading {
    bottom: 180px;
    right: 40px;
  }
</style>

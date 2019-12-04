<template>
  <div v-if="titleData" class="w-screen sm:h-550 h-80 relative">
    <img :src="titleData.foto" class="h-full w-full object-cover block" alt="Titulna fotka">
    <div v-html="titleData.nadpis" class="absolute bottom-100 sm:bottom-180 right-10 sm:right-40 text-white font-worksans text-3xl sm:text-6xl" />
    <div class="absolute font-worksansLight text-center hidden sm:bottom-100 sm:block text-white w-80 right-10 sm:right-40">
      {{ titleData.podnadpis }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titleData: null
    }
  },
  mounted () {
    return this.$storyapi.get('cdn/stories/main-page/titulka', {
      version: 'draft'
    }).then((data) => {
      // eslint-disable-next-line
      console.log(data)
      this.titleData = data.data.story.content
    })
    // eslint-disable-next-line
      .catch(err => console.log('data' + err))
  }
}
</script>
<style scoped>
  .heading {
    bottom: 180px;
    right: 40px;
  }
</style>

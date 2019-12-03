<template>
  <div class="w-screen sm:h-550 h-80 relative" v-if="titleData">
    <img  class="h-full w-full object-cover block" :src="titleData.foto" alt="Titulna fotka" srcset="">
    <div class="absolute bottom-100 sm:bottom-180 right-40  left-8 text-white font-worksans text-3xl sm:text-6xl" v-html="titleData.nadpis">

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

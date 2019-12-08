<template>
  <div class="font-worksans">
    <div v-bind:key="profile.slug" v-for="profile in profiles" class="flex to-reverse items-center px-4 sm:px-20 xl:px-40 py-8">
      <img :src="profile.content.fotka" alt="profile_photo" class="h-24 md: h-56">
      <div class="items-center xs:ml-8 h-20 sm:h-48 skew overflow-hidden">
        <div class="text-textPink font-bold text-base md:text-3xl second_to_end">{{ profile.content.Meno }}</div>
        <div class="text-textPink text-sm md:text-2xl" >{{ profile.content.profesia }}</div>
        <div v-html="markdownToHTML(profile.content.Text)" class="w-full h-17 hidden xs:block sm:w-3/4 text-gray text-xs sm:text-base sm:h-24 text-overflow-ellipsis overflow-hidden after-dots"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import { actionTypes } from '~/store/actionTypes.js'
export default {
  data () {
    return {
      profiles: []
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_PROFILES, this)
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.profiles,
      (newVal, oldVal) => {
        console.log(newVal)
        this.profiles = newVal
      }
    )
  },
  methods: {
    markdownToHTML (markdown) {
      return marked(markdown)
    }
  }
}
</script>
<style scoped>
.text-overflow-ellipsis{
  text-overflow: ellipsis;
}
.after-dots::after{
  content: "..."
}
.skew {
  transform: skew(-9deg);
}
.to-reverse:nth-child(2n){
  flex-direction: row-reverse;
}
.to-reverse:nth-child(2n) > div{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.to-reverse:nth-child(2n) > div > .second_to_end {
  text-align: right;
}

</style>

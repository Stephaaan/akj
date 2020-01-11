<template>
  <div class="font-worksans mb-8" v-if="profiles">
    <div v-for="(profile, index) in profiles" :key="index">
      <!-- eslint-disable-next-line -->
     <component v-if="profile.content.smallProfile"  :blok="profile.content.smallProfile[0]" :is="profile.content.smallProfile[0].component" :slug="profile.slug"/>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import ProfileSmall from '~/components/profile_small/ProfileSmall'
export default {
  components: {
    // eslint-disable-next-line
    ProfileSmall
  },
  data () {
    return {
      profiles: []
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.profiles,
      (newVal, oldVal) => {
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
.to-center {
  top: 50%;
  transform: translateY(-50%);
  background: rgb(214,212,212);
background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(226,226,226,1) 100%);
}

.to-reverse:nth-child(2n) > .to-center {
  background: rgb(244,244,244);
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(241, 240, 240) 100%);
}
</style>

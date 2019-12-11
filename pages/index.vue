<template>
  <div>
    <TheTitleBanner />
    <TheProfiles />
  </div>
</template>

<script>
import TheProfiles from '~/components/profiles/TheProfiles.vue'
import TheTitleBanner from '~/components/title_banner/TheTitleBanner.vue'
import { actionTypes } from '~/store/actionTypes'

export default {
  components: {
    TheProfiles,
    TheTitleBanner
  },
  created () {
    this.$store.dispatch(actionTypes.GET_HOME, this.$storyapi)
  }
}
</script>
<style>
</style>

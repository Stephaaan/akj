<template>
  <div>
    <TheTitleBanner />
    <TheProfiles />
    <TheMap />
  </div>
</template>

<script>
import TheMap from '~/components/map/TheMap.vue'
import TheProfiles from '~/components/profiles/TheProfiles.vue'
import TheTitleBanner from '~/components/title_banner/TheTitleBanner.vue'
import { actionTypes } from '~/store/actionTypes'

export default {
  components: {
    TheMap,
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

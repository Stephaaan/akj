<template>
  <div>
    <TheHeader />
    <TheTitlePhoto />
    <TheServicesScroller />
    <nuxt />
    <TheMap class="mb-8"/>
    <TheFooter />
  </div>
</template>

<script>
import TheMap from '~/components/map/TheMap.vue'
import TheHeader from '~/components/header/TheHeader.vue'
import TheFooter from '~/components/footer/TheFooter.vue'
import TheTitlePhoto from '~/components/title_photo/TheTitlePhoto.vue'
import TheServicesScroller from '~/components/services_scroller/TheServicesScroller.vue'
import { actionTypes } from '~/store/actionTypes'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheTitlePhoto,
    TheServicesScroller,
    TheMap
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_SETTINGS, this.$storyapi)
  }
}
</script>
<style>
</style>

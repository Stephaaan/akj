<template>
  <div>
    <TheHeader />
    <TheTitlePhoto />
    <TheMap />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/header/TheHeader.vue'
import TheFooter from '~/components/footer/TheFooter.vue'
import TheTitlePhoto from '~/components/title_photo/TheTitlePhoto.vue'
import TheMap from '~/components/map/TheMap.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    TheTitlePhoto,
    TheMap
  }
}
</script>
<style>
</style>

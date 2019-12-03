<template>
  <div class="container">
    <TheHeader />
    <TheTitlePhoto />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/header/TheHeader.vue'
import TheFooter from '~/components/footer/TheFooter.vue'
import TheTitlePhoto from '~/components/title_photo/TheTitlePhoto.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    TheTitlePhoto
  }
}
</script>
<style>
</style>

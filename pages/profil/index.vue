<template>
  <div>
    <div class="w-full mt-8 text-center text-textPink text-title">
      {{ $t('profiles.title') }}
    </div>
    <TheProfiles />
  </div>
</template>
<script>
import TheProfiles from '~/components/profiles/TheProfiles.vue'
import { actionTypes } from '~/store/actionTypes.js'
export default {
  components: {
    TheProfiles
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_PROFILES, this.$storyapi)
  }
}
</script>

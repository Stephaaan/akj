<template>
  <div>
    <div class="w-full mt-8 text-center text-textPink text-3xl">{{ $t('profiles.title') }}</div>
    <TheProfiles />
  </div>
</template>
<script>
import TheProfiles from '~/components/profiles/TheProfiles.vue'
export default {
  components: {
    TheProfiles
  }
}
</script>

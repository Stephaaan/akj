<template>
  <div
    class="max-w-full text-xs sm:text-base flex font-worksans font-semibold items-center border-totalLightGray border-b"
  >
    <img @click="swipeLeft" src="~/assets/imgs/icons/arrow_left.svg" alt="icon_left" class="ml-2 sm:ml-6 cursor-pointer h-6">
    <div
      id="scroller"
      ref="scroller"
      v-if="scrollerData"
      class="flex my-2 sm:my-6 text-textPink overflow-hidden"
    >
      <div
        v-bind:key="item.name"
        v-for="item in scrollerData"
        class="uppercase h-auto text-center flex justify-center items-center"
        style="min-width: 450px;"
      >
        <nuxt-link :to="`/sluzby/${item.slug}`">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <img
      @click="swipeRight"
      src="~/assets/imgs/icons/arrow_left.svg"
      alt="icon_right"
      class="h-6 mr-2 sm:mr-6 icon_rotate cursor-pointer"
    >
  </div>
</template>

<script>
import { actionTypes } from '~/store/actionTypes.js'

export default {
  data () {
    return {
      scrollerData: null
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_SERVICES_SCROLLER_DATA, this)
    this.$store.watch(
      (state, getters) => getters.services_scroller,
      (newVal, oldVal) => {
        this.scrollerData = newVal
      }
    )
  },
  methods: {
    scrollTo: (element, scrollPixels, duration) => {
      const scrollPos = element.scrollLeft
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        const startTime =
          'now' in window.performance
            ? performance.now()
            : new Date().getTime()
        // eslint-disable-next-line
        function scroll(timestamp) {
          const timeElapsed = timestamp - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          element.scrollLeft = scrollPos + scrollPixels * progress
          if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll)
          }
        }
        window.requestAnimationFrame(scroll)
      }
    },
    swipeLeft () {
      const content = this.$refs.scroller
      this.scrollTo(content, -300, 500)
    },
    swipeRight () {
      const content = this.$refs.scroller
      this.scrollTo(content, 300, 500)
    }
  }
}
</script>

<style scoped>
.icon_rotate {
  transform: rotate(180deg);
}
</style>

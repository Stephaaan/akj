<template>
  <nuxt-link :to="'/profil/' + slug">
    <div v-editable="blok" class="flex h-48 sm:h-72 root items-center relative mb-4">
      <div
        :class="!blok.reversed ? 'justify-start' : 'justify-end'"
        :style="`background-color: ${blok.backgroundColor.color}` "
        class="w-full flex mb-2"
      >
        <div :class="!blok.reversed && 'flex-row-reverse'" class="flex w-3/4 sm:w-3/4 items-center">
          <div
            :style="blok.reversed && 'text-align: left'"
            :class="blok.reversed?'sm:mr-6 justify-start':'sm:ml-6 justify-end'"
            class="w-full h-32 sm:h-64 sm:mb-4 overflow-hidden whitespace-no-wrap text-overflow-dots text-right skewer flex items-center"
          >
            <div>
              <div
                class="w-full sm:mt-8 text-textPink text-sm xs:text-base base:text-xl sm:text-3xl"
              >
                {{ blok.name }}
              </div>
              <div
                class="w-full my-2 text-textPink text-xs xs:text-sm base:text-base sm:text-xl"
              >
                {{ blok.profesion }}
              </div>
              <div
                class="whitespace-normal text-xl overflow-hidden break-normal text-overflow-ellipsis h-32 hidden sm:block text-gray"
              >
                {{ blok.text }}
              </div>
            </div>
          </div>
          <div :class="blok.reversed ? 'mr-4 xl:mr-8' : 'ml-4 xl:ml-8'">
            <img :class="blok.reversed ? '' : ' rotate180'" src="~/assets/imgs/icons/arrow_white.png" class="w-10 sm:w-12">
          </div>
        </div>
        <div
          :class="!blok.reversed ? 'right-0': 'left-0'"
          class="w-1/4 sm:w-1/4 flex justify-center absolute top-10 sm:-top-20"
        >
          <img :src="blok.Photo" alt="Photo" class="h-40 sm:h-80">
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import Heading from '~/components/heading/Heading'
import TextBlock from '~/components/TextBlock/TextBlock'
export default {
  components: {
    // eslint-disable-next-line
    Heading, TextBlock
  },
  props: {
    blok: {
      type: Object,
      default: () => ({})
    },
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.text-overflow-dots {
  text-overflow: ellipsis;
}
.TextBlock {
  color: #757575;
}
.TextBlock > p {
  text-align: left;
  font-size: 1.2rem;
}
.skewer {
  transform: skew(-8deg);
}
.rotate180 {
  transform: rotate(180deg)
}
</style>

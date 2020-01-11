<template>
  <nuxt-link :to="'/profil/' + slug">
    <div v-editable="blok" class="flex h-48 sm:h-72 root items-center relative mb-4">
      <div :class="!blok.reversed ? 'justify-start' : 'justify-end'" class="w-full flex mb-2" :style="`background-color: ${blok.backgroundColor.color}` ">
        <div class="w-2/3 sm:w-3/4 h-32 sm:h-64 mb-4 overflow-hidden whitespace-no-wrap text-overflow-dots text-right skewer" :style="blok.reversed && 'text-align: left'">
          <div>
            <div class="w-full mt-8 text-textPink text-base xs:text-2xl sm:text-3xl">
              {{ blok.name }}
            </div>
            <div class="w-full my-2  text-textPink text-sm xs:text-base sm:text-xl">
              {{ blok.profesion }}
            </div>
            <div class="whitespace-normal text-sm overflow-hidden break-normal text-overflow-ellipsis h-32 hidden sm:block mr-4 text-gray">
              {{blok.text}}
            </div>
          </div>
        </div>
      </div>
      <div :class="!blok.reversed && 'right-0'" class="w-1/3 sm:w-1/4 flex justify-center absolute sm:-top-12">
        <img :src="blok.Photo" alt="Photo" class="h-40 sm:h-80">
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
    blok: Object,
    slug: String
  },
  mounted () {
    console.log('blok', this.blok)
  }
}
</script>
<style scoped>
.root > div > div > div{
    margin: 0px
}
.text-overflow-dots {
  text-overflow: ellipsis
}
.TextBlock {
  color: #757575;
}
.TextBlock > p {
  text-align: left;
  font-size: 1.20rem;
}
.skewer {
  transform: skew(-9deg)
}
</style>

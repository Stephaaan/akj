<template>
    <div v-editable="blok" :style="`background-color: ${blok.backgroundColor.color}`" class="flex items-stretch">
        <div class="w-2/3">
          <!-- eslint-disable-next-line -->
          <component v-for="(textBlok, index) in blok.text" v-bind:is="textBlok.component" :blok="textBlok" :key="index"/>
        </div>
        <div class="w-1/3 relative h-auto">
          <div class="absolute w-full h-full">
            <img :src="blok.photo" id="photo" alt="Profile Photo" class="h-full">
          </div>
        </div>
    </div>
</template>
<script>
import { markedToHTML } from '~/helpers/marked'
import TextBlock from '~/components/TextBlock/TextBlock'
export default {
  components: {
    // eslint-disable-next-line
    TextBlock
  },
  props: {
    blok: Object
  },
  computed: {
    html () {
      return markedToHTML(this.blok.text)
    }
  }
}
</script>
<style scoped>
#photo {
  height: fit-content;
  transform: translate(0%,-10%)
}
</style>

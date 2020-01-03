<template>
    <div v-editable="blok" :style="`background-color: ${blok.backgroundColor.color}`" class="flex">
        <div class="w-2/3">
          <!-- eslint-disable-next-line -->
          <component v-for="(textBlok, index) in blok.text" v-bind:is="textBlok.component" :blok="textBlok" :key="index"/>
        </div>
        <div class="w-1/3">
          <img :src="blok.photo" alt="Profile Photo" class="h-auto">
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
  },
  mounted () {
    console.log(this.blok)
  }
}
</script>

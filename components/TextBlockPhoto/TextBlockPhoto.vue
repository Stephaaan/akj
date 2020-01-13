<template>
  <div v-editable="blok" :style="`background-color: ${blok.backgroundColor.color}`" class="flex flex-col-reverse mdx:flex-row items-stretch relative">
    <div class="mdx:w-2/3 lg:w-3/4">
      <!-- eslint-disable-next-line -->
          <component v-for="(textBlok, index) in blok.text" v-bind:is="textBlok.component" :blok="textBlok" :key="index"/>
    </div>
    <div class="mdx:w-1/3 lg:w-1/4">
      <div :style="backgroundStyle" class="h-60 mdx:h-full w-full min-w-full mdx:min-h-full top-0 bottom-0">
            &nbsp;
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
    },
    backgroundStyle () {
      return `
        background: url(${this.blok.photo}) no-repeat center top;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        -o-background-size: contain;
        background-size: contain;
      `
    }
  }
}
</script>

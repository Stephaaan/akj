<template>
  <div v-editable="blok" :style="`background-color:${background ? background : blok.color}; ${blok.TextAlign && 'text-align:' + blok.TextAlign + ';'} height: ${height ? height: 'auto'}; ${padding && 'padding: ' + padding}; color: ${blok.textColor ? blok.textColor.color: ''};`" v-html="html" class="TextBlock text-center p-4 whitespace-normal lg:mx-10" />
</template>
<script>
import { markedToHTML } from '~/helpers/marked'
export default {
  props: {
    blok: Object,
    background: String,
    height: String,
    padding: String
  },
  computed: {
    html () {
      return markedToHTML(this.blok.text)
    }
  }
}
</script>

<style>
ul > li {
  list-style-type: none;
}
p {
  overflow-y: hidden;
  text-overflow: ellipsis;
}
ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-size: 1.2em;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em;  /* Also needed for space (tweak if needed) */
}
</style>

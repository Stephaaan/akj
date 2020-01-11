<template>
  <div v-if="carrer" class="mb-8">
    <div v-editable="carrer" class="flex flex-col">
      <!-- eslint-disable-next-line vue/require-component-is -->
      <component v-for="(block, index) in carrer.text" v-bind:key="index" v-bind:is="block.component" :blok="block" />
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import TextBlock from '~/components/TextBlock/TextBlock'
import Heading from '~/components/heading/Heading'
export default {
  components: {
    // eslint-disable-next-line
    TextBlock, Heading
  },
  data () {
    return {
      carrer: null
    }
  },
  mounted () {
    const link = this.$store.getters.lang !== 'sk' ? `cdn/stories/${this.$store.getters.lang}/carrer` : `cdn/stories/carrer`
    this.$storyapi.get(link, {
      version: 'draft'
    }).then((data) => {
      this.carrer = data.data.story.content
    })
  },
  methods: {
    markdownToHTML (markdown) {
      return marked(markdown)
    }
  }
}
</script>
<style>
h1 {
    margin: 2rem 0 !important;
    color: #af0d45 !important;
    font-size: 30px;
}
ul > li {
  list-style-type: none;
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

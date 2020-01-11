<template>
  <div v-if="content" class="mb-8">
    <div v-editable="content">
      <!-- eslint-disable-next-line -->
      <component v-for="(blok, index) in content.text" v-bind:is="blok.component" :blok="blok" :key="index"/>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import Heading from '~/components/heading/Heading'
import TextBlock from '~/components/TextBlock/TextBlock'
import TextBlockPhoto from '~/components/TextBlockPhoto/TextBlockPhoto'
export default {
  components: {
    // eslint-disable-next-line
    Heading, TextBlock, TextBlockPhoto
  },
  data () {
    return {
      content: null
    }
  },
  mounted () {
    const slug = this.$route.params.profileID
    const link = this.$store.getters.lang !== 'sk' ? `cdn/stories/${this.$store.getters.lang}/profiles/${slug}` : `cdn/stories/profiles/${slug}`
    this.$storyapi.get(link, {
      version: 'draft'
    }).then((data) => {
      this.content = data.data.story.content
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
  .linear-bg {
    background: rgb(214,212,212);
    background: linear-gradient(90deg, rgba(214,212,212,1) 0%, rgba(229,227,227,1) 100%);
  }
</style>

<template>
  <div v-if="content">
    <div v-editable="content">
      <!-- eslint-disable-next-line vue/require-component-is -->
      <component v-for="(block, index) in content.text" v-bind:key="index" v-bind:is="block.component" :blok="block" />
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
      content: null
    }
  },
  mounted () {
    const slug = this.$route.params.serviceID
    const link = this.$store.getters.lang !== 'sk' ? `cdn/stories/${this.$store.getters.lang}/services/${slug}` : `cdn/stories/services/${slug}`
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

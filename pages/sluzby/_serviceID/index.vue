<template>
    <div v-if="content">
        <div v-editable="content">
            <div class="w-full mt-8 text-center text-textPink text-title">
                {{ content.heading }}
            </div>
            <div v-html="markdownToHTML(content.text)" class="w-full px-20  my-8 py-4 font-worksans text-center" />
        </div>
    </div>
</template>
<script>
import marked from 'marked'
export default {
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
      console.log('content', this.content)
    })
  },
  methods: {
    markdownToHTML (markdown) {
      return marked(markdown)
    }
  }
}
</script>

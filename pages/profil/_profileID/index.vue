<template>
  <div v-if="content" class="mb-8">
    <div v-editable="content">
      <div class="w-full font-worksans font-bold flex justify-center text-textPink text-title my-4">
        {{ content.name }}
      </div>
      <div class="w-full flex justify-center font-worksans text-2xl text-textPink my-4">
        {{ content.profession }}
      </div>
      <div class="relative flex linear-bg">
        <!--<div class="linear-bg w-full h-88 absolute left-0 top-10 -z-1"></div> -->
        <div v-html="markdownToHTML(content.text)" class="w-full px-20  my-8 py-4 font-worksans" />
        <img :src="content.photo" class="h-104" alt="profile photo" >
      </div>
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

<template>
  <div>
    <div v-if="about">
      <div v-editable="about">
        <div class="w-full mt-8 text-center text-textPink text-title">
          {{ about.title }}
        </div>
        <div v-html="markdownToHTML(about.text)" class="w-full px-20  my-8 py-4 font-worksans text-center text-gray" />
      </div>
    </div>
    <ThePhotoGrid />
  </div>
</template>
<script>
import marked from 'marked'
import ThePhotoGrid from '../../components/photo_grid/ThePhotoGrid.vue'
import { actionTypes } from '../../store/actionTypes'
export default {
  components: {
    ThePhotoGrid
  },
  data () {
    return {
      about: null
    }
  },
  mounted () {
    this.$store.dispatch(actionTypes.GET_ABOUT_PAGE, this.$storyapi)
    this.$store.watch(
      (state, getters) => getters.about,
      (newVal, oldVal) => { this.about = newVal }
    )
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

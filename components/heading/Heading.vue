<template>
  <div v-editable="blok" :style="`color: ${blok.textColor.color}; font-size: ${blok.size}; margin-top: ${margin||'1.5rem'}; margin-bottom: ${margin||'1.5rem'}; --font-small:${blok.sizeMobile || blok.size} `" class="w-full my-8 text-center text-title">
    {{ blok.text }}
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    },
    margin: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 768px){
  div {
    font-size: var(--font-small) !important;
  }
}
</style>

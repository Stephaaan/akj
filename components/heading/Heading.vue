<template>
    <div v-editable="blok" :style="`color: ${blok.textColor.color}; font-size: ${blok.size}; margin-top: ${margin||'2rem'}; margin-bottom: ${margin||'2rem'}; --font-small:${this.blok.sizeMobile || this.blok.size} `" class="w-full my-8 text-center text-title">
        {{ blok.text }}
    </div>
</template>
<script>
export default {
  props: {
    blok: Object,
    margin: String
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

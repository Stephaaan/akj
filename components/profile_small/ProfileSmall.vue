<template>
    <div v-editable="blok" class="flex h-48 sm:h-72 root items-center relative mb-4">
      <div :class="!blok.reversed ? 'justify-start' : 'justify-end'" class="w-full flex mb-2" :style="`background-color: ${blok.backgroundColor.color}` ">
        <div class="w-2/3 h-32 sm:h-64 mb-4 overflow-hidden whitespace-no-wrap text-overflow-dots">
          <div>
              <!-- eslint-disable-next-line -->
              <component v-for="(item, index) in blok.text" :key="index" :blok="item" :is="item.component" :background="blok.backgroundColor.color" margin="1rem" />
          </div>
        </div>
      </div>
      <div :class="!blok.reversed && 'right-0'" class="w-1/3 flex justify-center absolute -top-12">
        <img :src="blok.Photo" alt="Photo" class="h-48 sm:h-80">
      </div>
    </div>
</template>
<script>
import Heading from '~/components/heading/Heading'
import TextBlock from '~/components/TextBlock/TextBlock'
export default {
  components: {
    // eslint-disable-next-line
    Heading, TextBlock
  },
  props: {
    blok: Object
  },
  mounted () {
    console.log('blok', this.blok)
  }
}
</script>
<style scoped>
.root > div > div > div{
    margin: 0px
}
.text-overflow-dots {
  text-overflow: ellipsis
}
.TextBlock {
  color: #757575;
}
.TextBlock > p {
  text-align: left;
  font-size: 1.20rem;
}
</style>
<style>
@media screen and (max-width: 768px) {
  .TextBlock > p {
    display: none;
  }
}
</style>

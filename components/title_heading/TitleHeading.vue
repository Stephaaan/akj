<template>
  <div class="relative">
    <div class="w-full flex justify-center my-4">
        <div class="flex flex-col font-worksans text-textPink justify-center skew items-end  base:mr-4">
            <div class="text-md xs:text-xl base:text-2xl font-semibold">{{blok.Name}}</div>
            <div class="text-base base:text-xl font-worksansLight">{{blok.profesion}}</div>
        </div>
        <div>
            <img :src="blok.photo" alt="photo" class="h-32 base:h-40">
        </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-24 base:h-32 -z-1 bottom-0 my-auto" :style="'background-color: ' + blok.bgColor.color ">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    console.log(this.blok)
  }
}
</script>
<style>
    .skew{
        transform: skew(-9deg)
    }
</style>

<template>
  <div class="w-screen h-104 bg-black max-w">
     <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  components: { LMap, LTileLayer, LMarker },
  data () {
    return {
      zoom: 18,
      center: [0, 0],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '',
      marker: [0, 0]
    }
  },
  mounted () {
    return this.$storyapi.get('cdn/stories/main-page/mapa', {
      version: 'draft'
    }).then((data) => {
      const { Latitude, Longtitude } = data.data.story.content
      this.center = [Latitude, Longtitude]
      this.marker = [Latitude, Longtitude]
    })
  }
}
</script>
<style>
  .w-screen {
    width: 100vw;
    max-width: 100%;
  }
</style>

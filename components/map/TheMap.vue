<template>
  <div class="w-screen h-104 bg-black max-w">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="marker" />
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
  created () {
    this.$store.watch(
      (state, getters) => getters.settings,
      (newVal, oldVal) => {
        this.center = [newVal.latitude, newVal.longtitude]
        this.marker = [newVal.latitude, newVal.longtitude]
      }
    )
  }
}
</script>
<style scoped>
  .w-screen {
    width: 100vw;
    max-width: 100%;
  }
</style>

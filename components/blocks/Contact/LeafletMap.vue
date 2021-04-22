<template lang="html">
  <div class="GoogleMaps" >
  <client-only>
   <l-map :zoom=14 :center="[51.437780,-2.603180]">
     <l-tile-layer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"></l-tile-layer>
     <l-marker :lat-lng="[51.437780,-2.603180]"></l-marker>
   </l-map>
</client-only>

  </div>
</template>

<script>
import { latLng } from 'leaflet'

export default {
  data() {
    return {
      map: null,
    }
  },
  components: {},
  methods: {
    onMapReady() {},
  },
}
</script>

<style lang="scss" scoped>
.GoogleMaps {
  height: 100vh;
  width: 100%;
  &__map {
    height: 100%;
    width: 100%;
  }
}

@media (max-width: 991px) {
  .GoogleMaps {
    height: 460px;
    &__map {
      height: 100%;
      width: 100%;
    }
  }
}
</style>

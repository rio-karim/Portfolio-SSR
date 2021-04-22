<template lang="html">
  <div class="GoogleMaps" >
  <client-only>

    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="center">

      </l-marker>

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
      center: latLng(51.43778, -2.60318),
      url:
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a href="https://stadiamaps.com/products/map-tiles/>Stadia Maps</a> contributors',
      zoom: 14,
      mapOptions: {
        zoomSnap: 0.5,
      },
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

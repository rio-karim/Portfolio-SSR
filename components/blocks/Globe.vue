<template lang="html">
  <div
    id="ajaxsass"
    :class="{ active: !loader }"
    class="col col-media col-logo flex-center"
  >
    <canvas id="tagcanvas" width="650" height="650">
      <p>
        Anything in here will be replaced on browsers that support the canvas
        element
      </p>
    </canvas>
    <div id="tags" class="d-none">
      <ul>
        <li><a href="">Nginx</a></li>
        <li><a href="">SASS</a></li>
        <li><a href="">JSON</a></li>
        <li><a href="">REST</a></li>
        <li><a href="">Node JS</a></li>
        <li><a href="">jQuery</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">Git</a></li>
        <li><a href="">ES6</a></li>
        <li><a href="">MongoDB</a></li>
        <li><a href="">MySQL</a></li>
        <li><a href="">BEM</a></li>
        <li><a href="">Agile</a></li>
        <li><a href="">Bootstrap</a></li>
        <li><a href="">AWS</a></li>
        <li><a href="">Route53</a></li>
        <li><a href="">Express</a></li>
        <li><a href="">_underscore</a></li>
        <li><a href="">EC2</a></li>
        <li><a href="">HTML 5</a></li>
        <li><a href="">PHP</a></li>
        <li><a href="">CSS 3</a></li>
        <li><a href="">Vue</a></li>
        <li><a href="">React</a></li>
        <li><a href="">TypeScript</a></li>
        <li><a href="">NestJS</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('skills', {
    loader: (state) => state.loader,
  }),
}
</script>

<style lang="scss" scoped>
canvas {
  width: 700px;
  height: 700px;
}

@media (max-width: 991px) {
  canvas {
    width: 90%;
    height: auto;
  }
}
</style>

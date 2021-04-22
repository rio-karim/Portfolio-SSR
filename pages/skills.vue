<template>
  <div class="Skills py-lg-5 d-flex align-items-center">
    <div class="container-fluid py-lg-4">
      <div class="row">
        <div
          class="Skills__item hero-unit col-12 col-md-6 col-lg-5 pl-lg-5 d-flex align-items-center"
        >
          <div class="pl-lg-4">
            <div class="pb-4 pb-lg-5 pt-lg-5 Skills__item-header">
              <h1 class="mb-1 primary">Skills & Expertise</h1>
            </div>
            <p class="mb-3">
              My primary area of expertise as a young developer was first
              front-end development, but as I grew and became more exposed and
              experienced with tech, I regularly maintain and build APIs and
              backend services - integrated with MySQL or Mongo.
            </p>
            <p class="mb-3">
              I am also capable in basic DevOps duties, such as creating or
              connecting to EC2 instances, setting up Nginx or running Node
              scripts with PM2 - setting up environments and working with both
              Git and Docker.
            </p>
            <p class="mb-3">
              My primary framework of choice for frontend development is VueJS
              or ReactJS, using Express (ES) or NestJS (TypeScript) as a backend
              service. With these two I have built authentication APIs,
              server-side rendered operations interfaces and fluid websites. I
              am able to use Node to build any application front to back.
            </p>
            <p class="mb-3">
              I have also made open-source contributions to Vuestorefront, an
              e-commerce pwa platform for Magento store. Having previously used
              both PHP and Laravel too, i'm always willing to work with
              different stacks.
            </p>
            <nuxt-link to="/contact" class="btn btn-primary btn-large ml-1">
              Contact me
            </nuxt-link>
          </div>
        </div>
        <div class="Skills__item col-12 col-md-6 col-lg-7 relative">
          <Loader v-if="loader" />
          <globe />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loader from '~/components/blocks/Loader'
import Globe from '~/components/blocks/Globe'

export default {
  head() {
    return {
      title: 'Rio Knightley | Skills',
    }
  },
  components: {
    Loader,
    Globe,
  },
  computed: mapState('skills', {
    loader: (state) => state.loader,
  }),
  mounted() {
    this.startGlobe()
  },
  beforeDestroy() {
    this.stopGlobe()
  },
  methods: mapActions('skills', {
    stopGlobe: 'stop',
    startGlobe: 'start',
  }),
}
</script>

<style lang="scss" scoped>
.Skills {
  &__item {
    .col-media {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
    &-header {
      position: relative;
      &::before {
        background: transparent;
        content: '<h1>';
        position: absolute;
        top: 17%;
        left: 0;
        width: 50px;
        color: #595959;
        font-style: italic;
        font-size: 16px;
        opacity: 0.3;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
      &::after {
        background: transparent;
        content: '</h1>';
        position: absolute;
        bottom: 17%;
        opacity: 0.3;
        left: 0;
        width: 50px;
        color: #595959;
        font-style: italic;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
    }
  }
}
img {
  width: 85%;
  height: auto;
}
@media (max-width: 991px) {
  .Skills {
    &__item {
      &-header {
        &::before {
          top: -25%;
          left: 10%;
        }
        &::after {
          bottom: 17%;
        }
      }
    }
  }
}
</style>

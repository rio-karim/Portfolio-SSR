<template>
  <div class="default">
    <div id="__app" v-cloak class="App d-flex flex-column flex-lg-row">
      <notifications
        :speed="500"
        group="default"
        class="Notifications"
        animation-name="v-fade-left"
      />
      <sidebar />
      <nuxt id="__viewport" />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Sidebar from '~/layouts/sidebar'
export default {
  components: {
    Sidebar,
  },
  watch: {
    $route: {
      handler: function (to) {
        this.setView(to.name)
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {})
  },
  methods: mapActions('ui', {
    setView: 'view',
  }),
}
</script>
<style lang="scss">
@import '~/vendor/scss/reset.scss';
@import '~/vendor/scss/global.scss';
html,
body {
  width: 100%;
  background: $c-bg;
  height: 100%;
  #__app,
  #__nuxt,
  #__layout {
    width: 100%;
    height: 100%;
    overflow: hidden;
    #__viewport {
      flex: 1;
      overflow: hidden;
      padding-left: 60px;
      position: relative;
      height: 100vh;
      &::before {
        background: transparent;
        content: '<body>';
        position: absolute;
        top: 3%;
        left: 7%;
        width: 50px;
        color: #595959;
        font-style: italic;
        opacity: 0.3;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
      &::after {
        background: transparent;
        content: '<<</body> </html>';
        position: absolute;
        bottom: 3%;
        left: 7%;
        width: 50px;
        color: #595959;
        opacity: 0.3;
        font-style: italic;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
    }
  }
  .vue-notification-group {
    z-index: 0 !important;
  }
  .Notifications {
    position: fixed;
    right: 0;
    z-index: -10000;
    top: 0;
    height: 100vh;
    width: 200px;
    .vue-notification {
      padding: 10px;
      z-index: 10000;
      margin: 0 5px 5px;
      position: relative;
      font-size: 12px;

      color: #ffffff;
      background: #44a4fc;
      border-left: 5px solid #187fe7;
      .notification-title {
        font-weight: bold;
        padding-bottom: 7px;
      }
      &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
      }

      &.error {
        background: #e54d42;
        border-left-color: #b82e24;
      }

      &.success {
        background: #68cd86;
        border-left-color: #42a85f;
      }
    }
  }
  #__app {
    position: relative;
  }
}
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(500px) scale(0.2);
}

@media (max-width: 991px) {
  html,
  body {
    #__app,
    #__nuxt,
    #__layout {
      #__viewport {
        padding-top: 60px;
        padding-left: 0;
        height: unset;
        min-height: 100vh;
        &::before {
          top: 1%;
          left: 7%;
        }
        &::after {
          bottom: 1%;
          left: 7%;
        }
      }
    }

    #__layout {
      overflow-y: auto;
    }
  }
}
</style>

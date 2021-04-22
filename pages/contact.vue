<template>
  <div class="Contact">
    <div class="container-fluid">
      <div class="row">
        <div
          class="Contact__item hero-unit px-4 col-12 col-lg-5 d-flex align-items-center"
        >
          <div class="pl-lg-4 mx-auto px-4 px-lg-0">
            <div class="pb-4 pb-lg-5 pt-lg-5 Contact__item-header">
              <h1 class="mb-1 primary">Contact me</h1>
            </div>
            <p class="mb-2">
              If you have any questions or would like a chat, please don't
              hesitate to contact me below...
            </p>
            <email-form />
          </div>
        </div>
        <div class="Contact__item col-12 col-lg-7 pb-5 pb-lg-0">
          <leaflet-map class="p-4 p-lg-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeafletMap from '~/components/blocks/Contact/LeafletMap'
import EmailForm from '~/components/blocks/Contact/EmailForm'

export default {
  head() {
    return {
      title: 'Rio Knightley | Contact',
    }
  },
  components: {
    LeafletMap,
    EmailForm,
  },
}
</script>

<style lang="scss" scoped>
.Contact {
  &__item {
    &-header {
      position: relative;
      &::before {
        background: transparent;
        content: '<h1>';
        position: absolute;
        top: 17%;
        left: 0;
        opacity: 0.3;
        width: 50px;
        color: #595959;
        font-style: italic;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
      &::after {
        background: transparent;
        content: '</h1>';
        position: absolute;
        bottom: 17%;
        left: 0;
        width: 50px;
        color: #595959;
        font-style: italic;
        opacity: 0.3;
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
  .Contact {
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

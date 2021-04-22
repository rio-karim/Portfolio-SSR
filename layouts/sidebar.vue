<template lang="html">
  <div class="Sidebar d-flex flex-row flex-lg-column">
    <div class="Sidebar-item flex-center">
      <nuxt-link v-show="hasMounted" to="/" class="Sidebar-item__brand">
        <img src="~/assets/logo/initial.png" alt="Logo" />
        <span class="pt-1">Rio</span>
      </nuxt-link>
    </div>
    <div
      :class="{ active: menu }"
      class="Sidebar-item d-flex align-items-center"
    >
      <nav class="Sidebar-item__nav d-flex flex-row d-lg-block">
        <li
          :class="{ active: view === 'index' }"
          class="Sidebar-item__nav-item d-inline-block d-lg-block"
        >
          <nuxt-link to="/" class="Sidebar-item__nav-item-link"
            ><sidebar-icon type="home"
          /></nuxt-link>
        </li>
        <li
          :class="{ active: view === 'about' }"
          class="Sidebar-item__nav-item d-inline-block d-lg-block"
        >
          <nuxt-link to="/about" class="Sidebar-item__nav-item-link"
            ><sidebar-icon type="about"
          /></nuxt-link>
        </li>
        <li
          :class="{ active: view === 'skills' }"
          class="Sidebar-item__nav-item d-inline-block d-lg-block"
        >
          <nuxt-link to="/skills" class="Sidebar-item__nav-item-link"
            ><sidebar-icon type="skills"
          /></nuxt-link>
        </li>
        <li
          :class="{ active: view === 'gallery' }"
          class="Sidebar-item__nav-item d-inline-block d-lg-block"
        >
          <nuxt-link to="/gallery" class="Sidebar-item__nav-item-link"
            ><sidebar-icon type="portfolio"
          /></nuxt-link>
        </li>
        <li
          :class="{ active: view === 'contact' }"
          class="Sidebar-item__nav-item d-inline-block d-lg-block"
        >
          <nuxt-link to="/contact" class="Sidebar-item__nav-item-link"
            ><sidebar-icon type="contact"
          /></nuxt-link>
        </li>
      </nav>
    </div>
    <div
      @click="openMenu"
      class="Sidebar__mobile-menu absolute px-2 d-flex d-lg-none flex-center"
    >
      <div :class="{ active: menu }" class="Sidebar__mobile-menu__widget">
        <div class="Sidebar__mobile-menu__widget-bar"></div>
        <div class="Sidebar__mobile-menu__widget-bar"></div>
        <div class="Sidebar__mobile-menu__widget-bar"></div>
      </div>
    </div>
    <div class="Sidebar-item d-none d-lg-block">
      <ul class="Sidebar-item__social-list d-flex flex-column py-5">
        <li class="Sidebar-item__social-list-item">
          <a
            target="_blank"
            href="https://www.github.com/rio-Knightley"
            class="flex-center"
            ><social-icon type="github"
          /></a>
        </li>
        <li class="Sidebar-item__social-list-item">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rioKnightley/"
            class="flex-center"
            ><social-icon type="linkedin"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SidebarIcon from '~/components/blocks/Sidebar/Icons'
import SocialIcon from '~/components/blocks/Sidebar/SocialIcons'
export default {
  components: {
    SidebarIcon,
    SocialIcon,
  },
  data() {
    return {
      hasMounted: false,
    }
  },
  computed: mapState('ui', {
    view: (state) => state.view,
    menu: (state) => state.menu,
  }),
  mounted() {
    this.hasMounted = true
  },
  methods: mapActions('ui', {
    openMenu: 'menu',
  }),
}
</script>

<style lang="scss" scoped>
.Sidebar {
  min-width: 60px;
  width: 60px;
  max-width: 60px;
  height: 100vh;
  z-index: 11119;
  background: $c-menu;
  position: fixed;
  &-item {
    flex: 1;
    &:first-child {
      background: black;
      height: 80px;
      max-height: 80px;
      cursor: pointer;
      .Sidebar-item__brand {
        img {
          width: auto;
          height: 24px;
          margin: auto;
          display: block;
        }
        span {
          display: block;
          color: #ffffff;
          width: 100%;
          text-align: center;
          font-weight: bold;
          letter-spacing: 2px;
          font-size: 13px;
        }
      }
    }
    &:last-child {
      height: 160px;
      max-height: 160px;
    }
    &__nav {
      width: 100%;
      &-item {
        height: 60px;
        width: 100%;
        filter: grayscale(1);
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
        &.active,
        &:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        &-link {
          height: 100%;
          width: 100%;
        }
      }
    }
    &__social-list {
      height: 100%;
      &-item {
        flex: 1;
        filter: grayscale(1);
        opacity: 0.4;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
          filter: unset;
        }
        a {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  a {
    color: $c-primary;
    font-size: $f-nav;
    &:hover {
      text-decoration: none !important;
    }
  }
}

@media (max-width: 991px) {
  .Sidebar {
    height: 60px;
    max-height: 60px;
    width: 100vw;
    max-width: unset;
    &__mobile-menu {
      right: 0;
      position: absolute;
      height: 100%;
      &__widget {
        overflow: hidden;
        position: relative;
        margin: auto;
        transition: all 180ms ease-in-out;
        cursor: pointer;
        transform: scale(0.7);
        &-bar {
          height: 5px;
          width: 55px;
          display: block;
          margin: 10px auto;
          position: relative;
          background-color: #fff;
          border-radius: 10px;
          transition: all 200ms ease-in-out;
        }
        &:after {
          content: '';
          width: 90%;
          height: 90%;
          left: 0;
          top: 0;
          position: absolute;
          border: 5px solid transparent;
        }
        &.active {
          .Sidebar__mobile-menu__widget-bar {
            background-color: $c-primary;
          }
          &:after {
            animation: circle-creation 1s forwards;
          }
          .Sidebar__mobile-menu__widget-bar {
            &:nth-of-type(1) {
              transform: translateY(15px) rotate(45deg);
            }
            &:nth-of-type(2) {
              transform: translateX(100px);
              transition: all 0.6s;
            }
            &:nth-of-type(3) {
              transform: translateY(-15px) rotate(-45deg);
            }
          }
        }
      }
    }
    &-item {
      &:first-child {
        height: 100%;
        max-height: unset;
        width: 60px;
        max-width: 60px;
        .Sidebar-item__brand {
          img {
            width: auto;
          }
        }
      }
      &:nth-child(2) {
        position: fixed;
        background: $c-menu;
        height: 60px;
        max-height: 60px;
        top: 59px;
        width: 100vw;
        left: 100%;
        transition: left 0.2s ease-in-out;
        &.active {
          left: 0;
        }
      }
      &__nav {
        width: 100%;
        height: 100%;
        &-item {
          height: 100%;
          width: unset;
          flex: 1;
        }
      }
    }
  }
}
</style>

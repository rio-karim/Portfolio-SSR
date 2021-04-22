<template>
  <div class="About py-lg-5 d-flex align-items-center">
    <div class="container-fluid py-lg-4">
      <div class="row">
        <div
          class="About__item hero-unit col-12 col-md-6 col-lg-5 pl-lg-5 d-flex align-items-center"
        >
          <div class="pl-lg-4">
            <div class="pb-4 pb-lg-5 pt-lg-5 About__item-header">
              <h1 class="mb-1 primary">About Me</h1>
            </div>
            <p class="mb-3">
              Since I began my career 5 years ago I have built and collaborated
              on open-source projects, microservices front-to-back, and designed
              several great websites.
            </p>
            <p class="mb-3">
              In 2016 I went to
              <a href="https://www.cardiff.ac.uk/computer-science"
                >Cardiff University</a
              >
              to study post-graduate Computer Science, where I learned a variety
              of languages - including Java, Assembly, Python and JavaScript.
              Following the support, communication and collaboration of fellow
              graduates, I began working in a startup with some of my university
              alumni. In those 6 months we built, marketed and launched a CRM
              SaaS service called
              <a href="https://datalyse.io/en/" target="_blank">Datalyse</a>.
            </p>
            <p class="mb-3">
              I then began working as a freelancer and contractor for several
              clients and companies in the
              <a
                href="https://www.business.natwest.com/business/business-services/entrepreneur-accelerator.html"
                >Natwest Entrepreneur Accelerator</a
              >
              at Cardiff's Central Square. Being self-employed for a year, and
              having collaborated and worked solo on multiple CRM systems and
              frontends, I then began working for
              <a href="https://pilltime.co.uk/">PillTime (Online Pharmacy)</a>,
              using a mixture of Laravel and JavaScript supporting their
              internal operations, and NHS guidelines.
            </p>
            <p class="mb-3">
              In early 2019, my CTO and team began to work with another startup
              pharmacy
              <a href="https://www.instantecare.co.uk/">Instant eCare (IEC)</a>,
              to migrate their Magento services from PHP to VueStoreFront. Since
              2020 I have worked a more Data Science centric roll as a
              Full-stack developer, working on ethical data services for
              <a href="https://2132.io/">21:32</a> - working with clients such
              as McDonalds, Starbucks and other huge franchises.
            </p>
          </div>
        </div>
        <div class="About__item col-12 col-md-6 col-lg-7">
          <websoar-logo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebsoarLogo from '~/components/blocks/About/WebsoarLogo'
export default {
  head() {
    return {
      title: 'Rio Knightley | About',
    }
  },
  components: {
    WebsoarLogo,
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.About {
  &__item {
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
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
        opacity: 0.3;
      }
      &::after {
        background: transparent;
        opacity: 0.3;
        content: '</h1>';
        position: absolute;
        bottom: 17%;
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
  .About {
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

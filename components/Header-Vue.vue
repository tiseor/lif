<template>
  <header :class="bg ? 'scroll' : ''">
    <div class="container">
      <div class="row">
        <a href="" class="logo">
          <img src="/header/logo-lif.png" alt="">
        </a>

        <nav>
          <a href="#como-funciona">
            COMO FUNCIONA
          </a>

          <a href="#vantagens">
            VANTAGENS
          </a>

          <a href="#planos">
            PLANOS
          </a>

          <a href="#fale-conosco">
            FALE CONOSCO
          </a>
        </nav>

        <nav class="social">
          <a href="" target="_blank">
            <img src="/header/ico-twitter.png" alt="">
          </a>

          <a href="" target="_blank">
            <img src="/header/ico-facebook.png" alt="">
          </a>

          <a href="" target="_blank">
            <img src="/header/ico-youtube.png" alt="">
          </a>
        </nav>

        <a href="" class="btn">
          Contratar
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-vue",

  data() {
    return {
      scroll: "",
      bg: false
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scroll = window.scrollY;

      if (this.scroll > 150) {
        this.bg = true
      }

      if (this.scroll < 149) {
        this.bg = false
      }
    },
  },
};
</script>

<style lang="scss">
header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  
  z-index: 50;

  padding: 35px 0;

  transition: all .3s ease;

  &.scroll {
    // padding: 10px 0;
    background: #797979;

    .container {
      .logo {
        // max-width: 60px;
      }

      .row {
        nav {
          a {
            color: #FFFFFF !important;
          }
        }
      }
    }
  }

  .logo {
    width: 110px;
    transition: all .3s ease;

    img {
      width: 100%;
      transition: all .3s ease;
    }
  }

  nav {
    a {
      padding: 0 10px;

      &:hover {
        color: #00FF00 !important;
      }
    }

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  .social {
    display: flex;

    a {
      padding: 0;
      margin: 0 10px;
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }
}
</style>

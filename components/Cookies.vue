<template>
  <div
    class="cookies"
    :class="cookiesAccepted ? '' : 'active'"
  >
    <div class="container">
      <p class="content">
        Nossa plataforma utiliza cookies e outras tecnologias semelhantes para garantir que você tenha a melhor experiência. Você concorda em compartilhar seu dados?
      </p>

      <div class="buttons-wrapper">
        <button
          class="btn"
          @click="aceitarCookies()"
        >
          Sim
        </button>

        <button
          class="btn"
          @click="recusarCookies()"
        >
          Não
        </button>
      </div>

      <a href="" class="politica">
        Veja nossa Política de Privacidade
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cookies',

  props: {
  	
  },

  components: {

  },

  data() {
    return {
      cookiesAccepted: true,
    };
  },

  mounted() {
    this.verificarCookies()
  },

  watch: {
    
  },

  methods: {
    aceitarCookies() {
      this.cookiesAccepted = !this.cookiesAccepted
      this.$cookies.set('cookiesAccepted', true);
    },

    recusarCookies() {
      this.cookiesAccepted = !this.cookiesAccepted
    },

    verificarCookies() {
      this.cookiesAccepted = this.$cookies.get("cookiesAccepted")
    }
  },
}
</script>

<style scoped lang="scss">
.cookies {
  opacity: 0;
  pointer-events: none;

  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  transition: all .5s ease;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  .container {
    background: #FFFFFF;
    box-shadow: 0px 8px 12px #0000004D;
    border-radius: 5px;

    margin: 0 25px;
    padding: 15px 25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100vw;
    max-width: 920px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      max-width: 600px;
    }

    p {
      font-size: 12px;
      margin: 0;

      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 10px;

      .btn {
        color: #03E101;
        margin: 10px;
      }
    }

    .politica {
      white-space: nowrap;
      text-decoration: underline;
    }
  }
}
</style>

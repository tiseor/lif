<template>
  <div class="cadastro">
    <div class="timeline">
      <div class="container">
        <p class="title">
          Cadastro
        </p>
        
        <div class="row">
          <a href="" class="active">
            <p>
              <span>
                1
              </span>
            </p>

            <span>
              Plano
            </span>
          </a>

          <a href="" class="active">
            <p>
              <span>
                2
              </span>
            </p>

            <span>
              Acesso
            </span>
          </a>

          <a href="" class="active">
            <p>
              <span>
                3
              </span>
            </p>

            <span>
              Dados
            </span>
          </a>

          <a href="" class="active">
            <p>
              <span>
                4
              </span>
            </p>

            <span>
              Aceite
            </span>
          </a>

          <a href="" class="active">
            <p>
              <span>
                5
              </span>
            </p>

            <span>
              Pagamento
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="finalizacao-wrapper">
      <div class="container">
        <p class="title">
          Parabéns, a sua assinatura do Lif foi efetuada com sucesso.
        </p>
      </div>

      <div class="container">
        <div class="plan">
          <p>
            <span>
              Plano 
              <span>
                {{ plan.replace('-', ' ') }}
              </span>
            </span>

            <span>
              {{ price }}
            </span>
          </p>

          <p>
            Você receberá no seu e-mail uma cópia dos dados da sua assinatura assim como sua nota fiscal.
          </p>

          <p>
            <span>
              Comece a usufruir da sua assinatura baixando o nosso aplicativo
            </span>
          </p>

          <div class="buttons-wrapper">
            <button>
              <img src="/cadastro/google-play.png" alt="">
            </button>

            <button>
              <img src="/cadastro/app-store.png" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="notification-wrapper"
      :class="notificationMessage ? 'active' : ''"
    >
      <div
        class="notification"
        :class="notificationClass"
      >
        {{ notificationMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'cadastro',
  
  components: {
    
  },

  data() {
    return {
      lif: "",

      notificationMessage: '',
      notificationClass: '',

      isInactive: true,

      plan: '',
      price: '',
    };
  },

  mounted() {
    this.plan = localStorage.getItem('lifPlan')
    this.price = localStorage.getItem('lifPrice')
  },

  watch: {
    titular: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    numeroDoCartao: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    validade: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    cvv: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
  },

  methods: {
    goToNextPage() {
      if (
        this.titular != '' &&
        this.numeroDoCartao != '' &&
        this.validade != '' &&
        this.cvv != ''
      ) {
        this.$router.push('finalizado')
      } else {
        this.notificationMessage = 'Você precisa preencher todos os campos'
        this.notificationClass = 'error'
      }
    }
  }
};
</script>

<style scoped lang="scss">
.cadastro {
  .finalizacao-wrapper {
    max-width: 550px;
    margin: auto;
    padding: 90px 0 120px 0;

    .plan {
      span {
        span {
          text-transform: capitalize;
        }
      }
    }

    p {
      text-align: center;
    }

    .title {
      font-size: 35px;
      text-align: center;

      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 20px;
      text-align: center;
    }

    .btn {
      padding: 25px;
      margin-bottom: 40px;
    }

    .buttons-wrapper {
      margin-top: 40px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 50%;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

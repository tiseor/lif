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

          <a href="">
            <p>
              <span>
                4
              </span>
            </p>

            <span>
              Aceite
            </span>
          </a>

          <a href="">
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

    <div class="pagamento-wrapper">
      <div class="container">
        <p class="title">
          Pagamento
        </p>

        <p class="subtitle">
          Informe abaixo os dados do cartão de crédito correspondente ao titular do endereço informado nos dados.
        </p>
      </div>

      <div class="container">
        <input
          type="text"
          v-model="titular"
          placeholder="Titular"
          class="btn titular"
        >

        <input
          type="text"
          v-model="numeroDoCartao"
          placeholder="Número do Cartão"
          class="btn numero-do-cartao"
          v-mask="'####-####-####-####'"
        >

        <div class="input-wrapper">
          <input
            type="text"
            v-model="validade"
            placeholder="Validade (MM/AAAA)"
            class="btn validade"
            v-mask="'##/####'"
          >

          <input
            type="text"
            v-model="cvv"
            placeholder="Código (CVV)"
            class="btn cvv"
            v-mask="'###'"
          >
        </div>

        <button
          @click="goToNextPage()"
          class="btn green-bg"
          :class="isInactive ? 'inactive' : ''"
        >
          Confirmar Pagamento
        </button>
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

      titular: '',
      numeroDoCartao: '',
      validade: '',
      cvv: '',
    };
  },

  mounted() {
    
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
        this.$router.push('finalizacao')
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
  .pagamento-wrapper {
    max-width: 550px;
    margin: auto;
    padding: 90px 0 120px 0;

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
  }
}
</style>

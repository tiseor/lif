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

    <div class="aceite-wrapper">
      <div class="container">
        <p class="title">
          Aceite
        </p>

        <p class="subtitle">
          Confirme as informações e os termos antes de seguir
        </p>
      </div>

      <div class="container">
        <div class="plan">
          <p class="title">
            {{ plan.replace('-', ' ') }}
          </p>

          <p class="price">
            {{ price }}
          </p>
        </div>

        <div class="user">
          <div class="col">
            <p class="title">
              {{ nomeCompleto }}
            </p>

            <p>
              <span>E-mail: </span>
              {{ email }}
            </p>
          </div>

          <a href="/acesso">
            Alterar acesso
          </a>
        </div>

        <div class="user">
          <div class="col">
            <p>
              <span v-if="cpfCNPJ.length <= 14">CPF: </span>
              <span v-else>CNPJ: </span>
              {{ cpfCNPJ }}
            </p>

            <p>
              <span>Data de nascimento: </span>
              {{ dataDeNascimento }}
            </p>

            <p>
              <span>Gênero: </span>
              {{ genero }}
            </p>

            <p>
              <span>Telefone: </span>
              ({{ ddd }}) {{ telefone }}
            </p>
          </div>

          <a href="/dados">
            Alterar dados
          </a>
        </div>

        <div class="user">
          <p>
            <span>Endereço:</span>

            <br />

            {{ endereco }}, {{ numero }}

            <span
              class="no-style"
              v-if="complemento"
            >
              - {{ complemento }}
            </span>

            <br />

            {{ bairro }}, {{ cidade }} - {{ estado }}

            <br />

            {{ cep }}
          </p>
        </div>

        <div class="accept">
          <label for="accept">
            <input
              type="checkbox"
              id="accept"
              v-model="accept"
            >

            <p>
              Li e estou de acordo com os 

              <a href="">
                Termos do Plano
              </a>

              BrSaúde 

              <span>
                {{ plan.replace('-', ' ') }}
              </span>
            </p>
          </label>
        </div>

        <button
          @click="goToNextPage()"
          class="btn green-bg"
          :class="isInactive ? 'inactive' : ''"
        >
          Ir para o pagamento
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

      plan: '',
      price: '',
      nomeCompleto: '',
      cpfCNPJ: '',
      dataDeNascimento: '',
      genero: '',
      ddd: '',
      telefone: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: '',

      accept: false,
    };
  },

  mounted() {
    this.plan = localStorage.getItem('lifPlan')
    this.price = localStorage.getItem('lifPrice')
    this.email = localStorage.getItem('lifEmail')
    this.nomeCompleto = localStorage.getItem('lifNomeCompleto')
    this.cpfCNPJ = localStorage.getItem('lifcpfCNPJ')
    this.dataDeNascimento = localStorage.getItem('lifDataDeNascimento')
    this.genero = localStorage.getItem('lifGenero')
    this.ddd = localStorage.getItem('lifDDD')
    this.telefone = localStorage.getItem('lifTelefone')
    this.cep = localStorage.getItem('lifCEP')
    this.endereco = localStorage.getItem('lifEndereco')
    this.numero = localStorage.getItem('lifNumero')
    this.complemento = localStorage.getItem('lifComplemento')
    this.bairro = localStorage.getItem('lifBairro')
    this.estado = localStorage.getItem('lifEstado')
    this.cidade = localStorage.getItem('lifCidade')
  },

  watch: {
    accept: function (e) {
      if (this.accept) {
        this.isInactive = false
      }
    },
  },

  methods: {
    goToNextPage() {
      if (this.accept === true) {
        this.$router.push('pagamento')
      } else {
        this.notificationMessage = 'Para continuar você deve aceitar os Termos.'
        this.notificationClass = 'error'
      }
    }
  }
};
</script>

<style scoped lang="scss">
.cadastro {
  .aceite-wrapper {
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

    .plan {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      margin-bottom: 30px;

      .title {
        font-size: 22px;
        text-transform: capitalize;
      }

      .price {
        font-size: 20px;
        margin: 0;
      }
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 30px;

      .col {
        width: 70%;

        .title {
          font-size: 18px;
          text-align: left;
        }
      }

      a {
        text-decoration: underline;
      }

      p {
        margin: 0;
        margin-bottom: 5px;

        span {
          margin-right: 10px;
          font-weight: 600;

          &.no-style {
            font-weight: unset;
            margin: unset;
          }
        }
      }
    }

    .accept {
      margin-bottom: 30px;

      label {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          margin-left: 10px;

          a {
            text-decoration: underline;
          }

          span {
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>

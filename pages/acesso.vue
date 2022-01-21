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

          <a href="">
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

    <div class="acesso-wrapper">
      <div class="container">
        <p class="title">
          Defina seu acesso
        </p>

        <!--<p class="subtitle">
          Entre com sua rede social
        </p>

        <button class="btn fb">
          Facebook
        </button>

        <button class="btn goo">
          Google
        </button> -->
      </div>

      <div class="container form">
        <!-- <p class="subtitle">
          Ou com seu e-mail
        </p> -->

        <input
          type="text"
          v-model="email"
          placeholder="Informe seu e-mail"
          class="btn email"
        >

        <input
          type="password"
          v-model="senha"
          placeholder="Crie uma senha"
          class="btn senha"
        >

        <p class="description">
          Crie uma senha segura com ao menos uma letra maiúscula, um caracter especial, números e ao menos 8 caracteres.
        </p>

        <input
          type="password"
          v-model="senhaConfirma"
          placeholder="Confirme sua senha"
          class="btn senha-confirma"
        >

        <button
          @click="goToNextPage()"
          class="btn green-bg"
          :class="isInactive ? 'inactive' : ''"
        >
          Seguir para os dados
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
      email: '',
      senha: '',
      senhaConfirma: '',
    };
  },

  mounted() {
    this.plan = localStorage.getItem('lifPlan')
    this.price = localStorage.getItem('lifPrice')
  },

  watch: {
    email: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    senha: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    senhaConfirma: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    }
  },

  methods: {
    goToNextPage() {
      if (
        this.email != '' &&
        this.senha != '' &&
        this.senhaConfirma != ''
      ) {
        if (this.senha =! this.senhaConfirma) {
          this.notificationMessage = 'A senha e a confirmação precisam ser iguals'
          this.notificationClass="error"
        } else {
          localStorage.setItem('lifEmail', this.email)
          this.$router.push('dados')
        }
      } else {
        this.notificationMessage = 'Você precisa preencher todos os campos'
        this.notificationClass = 'error'
      }
    }
  },
};
</script>

<style scoped lang="scss">
.cadastro {
  .acesso-wrapper {
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

      &.fb {
        color: #0099DD;
        border: 2px solid #0099DD;
      }

      &.goo {
        color: #ED8C00;
        border: 2px solid #ED8C00;
      }
    }

    .senha {
      margin-bottom: 10px;

      & > .subtitle {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

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

    <div class="dados-wrapper">
      <div class="container">
        <p class="title">
          Dados
        </p>

        <p class="subtitle">
          Seus dados pessoais
        </p>
      </div>

      <div class="container form">
        <input
          type="text"
          v-model="nomeCompleto"
          placeholder="Seu nome completo"
          class="btn nome-completo"
        >

        <input
          type="text"
          v-model="cpfCNPJ"
          placeholder="CPF / CNPJ"
          class="btn cpf-cnpj"
          v-mask="['###.###.###-##', '##.###.###/####-##']"
        >

        <input
          type="text"
          v-model="dataDeNascimento"
          placeholder="Sua data de nascimento"
          class="btn data-de-nascimento"
          v-mask="'##/##/####'"
        >

        <input
          type="text"
          v-model="genero"
          placeholder="Gênero"
          class="btn genero"
        >

        <div class="input-wrapper">
          <input
            type="text"
            v-model="ddd"
            placeholder="DDD"
            class="btn ddd"
            v-mask="'##'"
          >

          <input
            type="text"
            v-model="telefone"
            placeholder="Número"
            class="btn numero"
            v-mask="['####-####', '#-####-####']"
          >
        </div>

        <p class="subtitle">
          Endereço
        </p>

        <div class="input-wrapper">
          <input
            type="text"
            v-model="cep"
            placeholder="CEP"
            class="btn cep"
            v-mask="'#####-###'"
          >

          <a href="">
            Não sei o CEP
          </a>
        </div>

        <input
          type="text"
          v-model="endereco"
          placeholder="Rua, Av, Logradouro"
          class="btn endereco"
        >

        <div class="input-wrapper">
          <input
            type="text"
            v-model="numero"
            placeholder="Número"
            class="btn numero"
          >

          <input
            type="text"
            v-model="complemento"
            placeholder="Complemento"
            class="btn complemento"
          >
        </div>

        <input
          type="text"
          v-model="bairro"
          placeholder="Bairro"
          class="btn bairro"
        >

        <select
          name="estado"
          class="btn estado"
          v-model="estado"
        >
          <option
            v-for="item in estados"
            :value="item"
          >
            {{ item }}
          </option>
        </select>

        <input
          type="text"
          v-model="cidade"
          placeholder="Cidade"
          class="btn cidade"
        >

        <button
          @click="goToNextPage()"
          class="btn green-bg"
          :class="isInactive ? 'inactive' : ''"
        >
          Seguir para o aceite
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

      estados: [
        "Rondônia",
        "Acre",
        "Amazonas",
        "Roraima",
        "Pará",
        "Amapá",
        "Tocantins",
        "Maranhão",
        "Piauí",
        "Ceará",
        "Rio Grande do Norte",
        "Paraíba",
        "Pernambuco",
        "Alagoas",
        "Sergipe",
        "Bahia",
        "Minas Gerais",
        "Espírito Santo",
        "Rio de Janeiro",
        "São Paulo",
        "Paraná",
        "Santa Catarina",
        "Rio Grande do Sul",
        "Mato Grosso do Sul",
        "Mato Grosso",
        "Goiás",
        "Distrito Federal"
      ],

      cidades: [],
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
    nomeCompleto: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    cpfCNPJ: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    dataDeNascimento: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    genero: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    ddd: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    telefone: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    cep: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    endereco: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    numero: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    bairro: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    estado: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
    cidade: function (e) {
      if (e.length > 0) {
        this.isInactive = false
      }
    },
  },

  methods: {
    goToNextPage() {
      if (
        this.nomeCompleto != '' &&
        this.cpfCNPJ != '' &&
        this.dataDeNascimento != '' &&
        this.genero != '' &&
        this.ddd != '' &&
        this.telefone != '' &&
        this.cep != '' &&
        this.endereco != '' &&
        this.numero != '' &&
        this.bairro != '' &&
        this.estado != '' &&
        this.cidade != ''
      ) {
        localStorage.setItem('lifNomeCompleto', this.nomeCompleto)
        localStorage.setItem('lifcpfCNPJ', this.cpfCNPJ)
        localStorage.setItem('lifDataDeNascimento', this.dataDeNascimento)
        localStorage.setItem('lifGenero', this.genero)
        localStorage.setItem('lifDDD', this.ddd)
        localStorage.setItem('lifTelefone', this.telefone)
        localStorage.setItem('lifCEP', this.cep)
        localStorage.setItem('lifEndereco', this.endereco)
        localStorage.setItem('lifNumero', this.numero)
        localStorage.setItem('lifComplemento', this.complemento)
        localStorage.setItem('lifBairro', this.bairro)
        localStorage.setItem('lifEstado', this.estado)
        localStorage.setItem('lifCidade', this.cidade)

        this.$router.push('aceite')
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
  .dados-wrapper {
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

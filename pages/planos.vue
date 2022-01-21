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

          <a href="">
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

    <div class="planos">
      <div class="container">
        <div class="row">
          <button
            @click="goToNextPage('individual-simples', 'R$ 29,90 / MÊS')"
            class="block"
            :class="plan === 'individual-simples' ? 'selected' : ''"
          >
            <div class="row">
              <img src="/cadastro/ico-individual-simples.png" alt="">

              <div class="col">
                <p class="title">
                  Individual simples <br />
                  R$ 29,90 / MÊS
                </p>

                <a href="">
                  <span>
                  +
                  </span>

                  Mais sobre o plano
                </a>
              </div>
            </div>
          </button>

          <button
            @click="goToNextPage('individual-top', 'R$ 39,90 / MÊS')"
            class="block green"
            :class="plan === 'individual-top' ? 'selected' : ''"
          >
            <div class="row">
              <img src="/cadastro/ico-individual-top.png" alt="">

              <div class="col">
                <p class="title">
                  Individual top <br />
                  R$ 39,90 / MÊS
                </p>

                <a href="">
                  <span>
                  +
                  </span>

                  Mais sobre o plano
                </a>
              </div>
            </div>
          </button>
        </div>

        <div class="row">
          <button
            @click="goToNextPage('familiar-simples', 'R$ 99,90 / MÊS')"
            class="block"
            :class="plan === 'familiar-simples' ? 'selected' : ''"
          >
            <div class="row">
              <img src="/cadastro/ico-familiar-simples.png" alt="">

              <div class="col">
                <p class="title">
                  Familiar simples <br />
                  R$ 99,90 / MÊS
                </p>

                <a href="">
                  <span>
                  +
                  </span>

                  Mais sobre o plano
                </a>
              </div>
            </div>
          </button>

          <button
            @click="goToNextPage('familiar-top', 'R$ 99,90 / MÊS')"
            class="block green no-img"
            :class="plan === 'familiar-top' ? 'selected' : ''"
          >
            <div class="row">
              <img src="/cadastro/ico-familiar-top.png" alt="">

              <div class="col">
                <p class="title">
                  Familiar top <br />
                  R$ 99,90 / MÊS
                </p>

                <a href="">
                  <span>
                  +
                  </span>

                  Mais sobre o plano
                </a>
              </div>
            </div>
          </button>
        </div>

        <div class="row">
          <button
            @click="goToNextPage('empresarial-simples', 'R$ 499,90 / MÊS')"
            class="block empresarial"
            :class="plan === 'empresarial-simples' ? 'selected' : ''"
          >
            <div class="row">
              <img src="/cadastro/ico-empresarial.png" alt="">

              <div class="col">
                <p class="title">
                  Empresarial simples <br />
                  <sup>
                    a partir de
                  </sup>
                  <br />
                  <span>
                    R$ 499,90 / MÊS
                  </span>
                </p>

                <a href="">
                  <span>
                  +
                  </span>

                  Mais sobre o plano
                </a>
              </div>
            </div>
          </button>

          <div class="block white">
            <div class="row">
              <div class="col">
                <p>
                  Entre em contato para planos empresariais personalizados pelo telefone 0800 10 123 987
                </p>
              </div>
            </div>
          </div>
        </div>
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
      
      plan: '',
      price: '',
    };
  },

  mounted() {
    this.plan = localStorage.getItem('lifPlan')
    this.price = localStorage.getItem('lifPrice')
  },

  methods: {
    goToNextPage(plan, price) {
      localStorage.setItem('lifPlan', plan)
      localStorage.setItem('lifPrice', price)
      this.$router.push('acesso')
    }
  },
};
</script>

<style scoped lang="scss">
.cadastro {
  .planos {
    padding: 100px 0 250px 0;
    max-width: 950px;
    margin: auto;

    .row {
      @media only screen and (max-width: 425px) {
        flex-wrap: wrap;
      }
    }
    
    .block {
      border-radius: 17px;
      background: #EFEFEF;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      padding: 30px;
      margin: 0 15px;
      margin-bottom: 30px;

      width: 50%;

      @media only screen and (max-width: 768px) {
        justify-content: center;
      }

      @media only screen and (max-width: 425px) {
        width: 100%;
      }

      .row {
        @media only screen and (max-width: 768px) {
          flex-direction: column;
          margin-top: 40px;
        }
      }

      img {
        margin-right: 30px;

        @media only screen and (max-width: 768px) {
          margin: auto;
        }
      }

      .title { 
        color: #797979;
        font-size: 22px;
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
      }

      a {
        color: #797979;
        font-size: 16px;
        text-align: center;
        margin-bottom: 50px;

        span {
          color: #00FF00;
        }
      }

      &.green {
        background: #00FF00;
        position: relative;

        &:before {
          content: '';

          position: absolute;
          top: -50px;
          right: 40px;

          background-image: url('/home/block-brsaude.png');

          width: 90px;
          height: 90px;

          display: block;
        }

        &.no-img {
          &:before {
            display: none;
          }
        }

        a {
          span {
            color: #FFFFFF;
          }
        }
      }

      &.white {
        background: transparent;

        padding: 40px 40px 40px 20px;

        .row {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          width: 100%;
        }

        p {
          font-size: 19px;
          max-width: 290px;
        }
      }

      &.empresarial {
        .title {
          text-align: left;

          sup {
            text-transform: lowercase;
            font-size: 14px;
          }
        }
      }

      &.selected {
        box-shadow: -5px 5px 5px 5px rgba(0,0,0,0.2);
        transform: translate(10px, -10px);
      }
    }
  }
}
</style>

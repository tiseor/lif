<template>
  <div class="index">
    <div class="carousel">
      <carousel
        :autoplay="true"
        :autoplayHoverPause="true"
        :autoplayTimeout="5000"
        :loop="true"
        :navigationEnabled="true"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide>
          <div class="banner">
            <div class="container left">
              <img src="/home/logo-medex.png" alt="">
              
              <p>
                Cuide da sua saúde de um jeito totalmente novo. A Lif é uma plataforma de cuidados acessíveis de bem-estar e saúde.
              </p>

              <a href="/planos" class="btn">
                Quero começar agora
              </a>
            </div>
          </div>
        </slide>

        <slide>
          <div class="banner">
            <div class="container center">
              <img src="/home/logo-medex.png" alt="">
              
              <p>
                Chegou um novo jeito de cuidar da sua saúde pelo celular. Você resolve tudo o que precisa em nosso app e conta com milhares de parceiros em todo o Brasil. 
              </p>

              <a href="/cadastro-planos" class="btn">
                Quero começar agora
              </a>
            </div>
          </div>
        </slide>

        <!--<slide>
          <div class="banner">
            <div class="container right">
              <img src="/home/logo-medex.png" alt="">
              
              <p>
                Mais de 1000 farmácias com desconto por todo Brasil
              </p>

              <a href="/planos" class="btn">
                Quero começar agora
              </a>
            </div>
          </div>
        </slide> -->
      </carousel>
    </div>

    <div class="cartao">
      <div class="container">
        <div class="row">
          <img src="/home/cartoes.png" alt="">

          <div class="col">
            <p>
              O cartão que vai mudar a forma de você cuidar da sua saúde
            </p>

            <a href="" class="btn green-bg">
              Quero saber mais
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="como-funciona" class="como-funciona">
      <div class="container">
        <p class="title">
          Como funciona
        </p>

        <div class="row">
          <div class="col">
            <img src="/home/ico-escolha.png" alt="">

            <p class="title">
              Escolha um plano
            </p>

            <p>
              Aqui você encontra opções para diferentes necessidades. Porque a Lif é para todo mundo que quer cuidar da saúde de forma prática e democrática.
            </p>
          </div>

          <div class="col">
            <img src="/home/ico-assinatura.png" alt="">

            <p class="title">
              Faça a sua Assinatura
            </p>

            <p>
              Preencha os dados de cadastro e aguarde o contato de um colaborador em, no máximo, 48 horas.
            </p>
          </div>

          <div class="col">
            <img src="http://placehold.it/200x200" alt="">

            <p class="title">
              Baixe o APP
            </p>

            <p>
              Com o cartão em mãos, já pode começar a usar os benefícios e vantagens!
            </p>
          </div>

          <div class="col">
            <img src="http://placehold.it/200x200" alt="">

            <p class="title">
              Comece a cuidar de você
            </p>

            <p>
              São centenas de serviços relacionados à sua saúde. Farmácias, médicos, laboratórios, clínicas parceiras, consultas online onde, quem é Lif, ganha descontos especiais!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="vantagens" class="motivos-para-assinar">
      <div class="container">
        <p class="title">
          Muitos motivos para assinar
        </p>

        <div class="row">
          <img src="/home/motivos-img.jpg" alt="">

          <div class="col">
            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                Acesso a profissionais de 500 especialidades.
              </p>
            </div>

            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                Uma equipe multidisciplinar à disposição do seu bem-estar.
              </p>
            </div>

            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                Descontos especiais em mais de 30.000 farmácias parceiras.
              </p>
            </div>

            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                Facilidade de encontrar especialistas em todas as regiões do Brasil.
              </p>
            </div>

            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                A gente cuida de você e dos seus o tempo todo.
              </p>
            </div>

            <div class="list">
              <!--<p class="title">
                Programa Lif
              </p>-->

              <p>
                Nossa plataforma facilita os cuidados com a saúde e concentra tudo o que você precisa, em um só lugar.
              </p>
            </div>
          </div>
        </div>

        <div class="row second">
          <div class="text">
            <p class="title">
              Planos a partir de
            </p>

            <p class="price">
              R$ 29,90
            </p>
          </div>

          <a href="" class="btn green-bg">
            Aproveitar os benefícios
          </a>
        </div>
      </div>
    </div>

    <div class="faixa">
      <img src="/home/banner-lh.png" alt="">
    </div>

    <div id="planos" class="conheca-nossos-planos">
      <div class="container">
        <p class="title">
          Conheça nossos planos
        </p>

        <p class="subtitle">
          Individual ou familiar, pessoa jurídica ou física: temos soluções para todo mundo. Porque a única coisa que importa para nós, é cuidar do seu bem-estar em todos os momentos!
        </p>

        <div class="tabs-wrapper">
          <tabs :options="{ useUrlFragment: false }">
            <tab name="Individual">
              <div class="row">
                <div class="block">
                  <p class="title">
                    Simples
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 29,90 / MÊS
                  </p>

                  <button
                    @click="selectPlan('individual-simples', 'R$ 29,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>

                <div class="block green">
                  <p class="title">
                    Top
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 39,90 / MÊS
                  </p>

                  <button
                    @click="selectPlan('individual-top', 'R$ 39,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>
              </div>
            </tab>

            <tab name="Familiar">
              <div class="row">
                <div class="block">
                  <p class="title">
                    Simples
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 99,90 / MÊS
                  </p>

                  <button
                    @click="selectPlan('familiar-simples', 'R$ 99,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>

                <div class="block green">
                  <p class="title">
                    Top
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 99,90 / MÊS
                  </p>

                  <button
                    @click="selectPlan('familiar-top', 'R$ 99,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>
              </div>
            </tab>

            <tab name="Empresarial">
              <div class="row">
                <div class="block">
                  <p class="title">
                    Simples
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 499,90 / MÊS <br />
                    até 20 beneficiários
                  </p>

                  <button
                    @click="selectPlan('empresarial-simples', 'R$ 499,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>

                <div class="block green">
                  <p class="title">
                    Top
                  </p>

                  <p class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>

                  <ul>
                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>

                    <li>
                      <p>
                        Clínica Geral
                      </p>

                      <p>
                        Sim
                      </p>
                    </li>
                  </ul>

                  <p class="price">
                    R$ 499,90 / MÊS
                  </p>

                  <button
                    @click="selectPlan('empresarial-top', 'R$ 499,90 / MÊS')"
                    class="btn green-bg"                  
                  >
                    Escolher
                  </button>
                </div>
              </div>
            </tab>
          </tabs>
        </div>
      </div>
    </div>

    <div id="fale-conosco" class="fale-conosco">
      <div class="container">
        <p class="title">
          Fale com a gente!
        </p>

        <p class="subtitle">
          Dúvidas? É só chamar nossa equipe!
        </p>

        <div class="sep"></div>        

        <div class="tabs-wrapper">
          <tabs :options="{ useUrlFragment: false }">
            <tab name="Geral">
              <p class="subtitle">
                As 10 mais perguntadas aqui
              </p>

              <Accordion
                v-for="questao in geral"
                :key="questao.message"
                :pergunta="questao.pergunta"
                :resposta="questao.resposta"
              />
            </tab>

            <!--<tab name="Cobertura">
              <p class="subtitle">
                as 10 mais perguntadas aqui
              </p>

              <Accordion
                v-for="questao in cobertura"
                :key="questao.message"
                :pergunta="questao.pergunta"
                :resposta="questao.resposta"
              />
            </tab>-->
          </tabs>
        </div>

        <button class="whatsapp">
          <p>
            Ainda tem dúvida? Chama no WhatsApp
          </p>

          <img src="/home/ico-whatsapp.png" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  
  components: {
    
  },

  data() {
    return {
      lif: "",

      geral: [
        {
          pergunta: 'A BR Saúde é um plano de saúde?',
          resposta: 'Não. Não somos um plano de saúde. Não oferecemos coberturas para internação ou reembolso de consultas e exames. Oferecemos rede de consultas, exames e medicamentos com preços reduzidos, além de muitos outros serviços que nos tornam únicos.'
        },
        {
          pergunta: 'Quais os serviços da BR Saúde?',
          resposta: 'A BR Saúde oferece orientação por vídeo com médicos, nutricionistas, psicólogos, orientadores esportivos e enfermeiros, benefícios na compra de medicamentos, orientação com assistentes sociais, descontos em checkups e procedimentos médicos e odontologia de urgência, descontos em redes de médicos especialistas e laboratórios para realização de diversos exames. Os serviços podem variar de acordo com o plano escolhido.'
        },
        {
          pergunta: 'A BR Saúde tem rede presencial no Brasil todo?',
          resposta: 'Temos redes presenciais em todas as capitais e nas maiores cidades do Brasil.'
        },
        {
          pergunta: 'Qualquer pessoa pode contratar a Br Saúde?',
          resposta: 'Sim! Não temos limite de idade, barreiras de doenças pré-existentes ou período de carência. Qualquer um pode contratar e começar a usar os nossos benefícios. Nosso objetivo maior é cuidar de você.'
        },
        {
          pergunta: 'O Atendimento é 24h?',
          resposta: 'O pronto atendimento virtual com médicos e odontologia de urgência é 24h por dia, todos os dias da semana.'
        },
        {
          pergunta: 'A BR Saúde tem cobertura para internação hospitalar?',
          resposta: 'Não. Como não somos um plano de saúde, não temos cobertura caso o usuário precise de internação hospitalar.'
        },
        {
          pergunta: 'Como posso utilizar os serviços da BR Saúde?',
          resposta: 'É muito fácil. A escolha do plano é feita através do nosso site e, a partir daí, todos os nossos benefícios podem ser acessados através do aplicativo, disponível no google play e apple store.'
        },
      ],
      cobertura: [
        {
          pergunta: 'Lorem Ipsum?',
          resposta: 'Lorem Ipsum Dolor Sit Amet Consectetur'
        },
      ],
    };
  },

  methods: {
    selectPlan(plan, price) {
      localStorage.setItem('lifPlan', plan)
      localStorage.setItem('lifPrice', price)
      this.$router.push('planos')
    }
  },
};
</script>

<style scoped lang="scss">
.index {
  .carousel {
    margin-top: -150px;

    ::v-deep .VueCarousel-dot-container {
      .VueCarousel-dot {
        background-color: #E5E8E9 !important;

        &--active {
          background-color: #0084CC !important;
        }
      }
    }

    ::v-deep .VueCarousel-navigation {
      @media only screen and (max-width: 768px) {
        display: none;
      }

      .VueCarousel-navigation-button {
        width: 30px;
        height: 30px;
        border-top: 3px solid #0084CC;

        overflow: hidden;
        text-indent: -9999px;

        &.VueCarousel-navigation-prev {
          margin-left: -50px;
          border-left: 3px solid #0084CC;
          transform: rotate(-45deg);
        }

        &.VueCarousel-navigation-next {
          margin-right: -50px;
          border-right: 3px solid #0084CC;
          transform: rotate(45deg);
        }
      }
    }

    .banner {
      padding: 300px 0 220px 0;

      background-image: url('/home/header-banner.jpg');
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;

      border-bottom: 5px solid #00FF00;

      position: relative;

      &:before {
        content: '';

        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        width: 100%;
        height: 100%;

        background: linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 100%);
      }

      .container {
        position: relative;
        z-index: 2;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &.left {
          align-items: flex-start;

          p {
            text-align: left;
          }
        }

        &.center {
          align-items: center;

          p {
            text-align: center;
          }
        }

        &.right {
          align-items: flex-end;

          p {
            text-align: right;
          }
        }

        img { 
          max-width: 270px;
          max-height: 90px;
        }

        p { 
          color: #FFFFFF;
          font-size: 75px;

          margin-top: 40px;

          @media only screen and (max-width: 768px) {
            font-size: 45px;
            max-width: 500px;
          }
        }

        a { 
          font-size: 14px;
          margin-top: 160px;

          padding: 20px 60px;

          @media only screen and (max-width: 425px) {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }

  .cartao {
    background-image: url('/home/cartao-bg.jpg');
    background-position: center center;
    background-size: cover;

    padding: 80px 0;

    .container {
      .row {
        @media only screen and (max-width: 425px) {
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        img {
          max-width: 70%;

          @media only screen and (max-width: 768px) {
            width: 50%;
          }
        }

        .col {
          p { 
            color: #FFFFFF;
            font-size: 33px;

            max-width: 340px;
          }

          a { 
            margin-top: 45px;
          }
        }
      }
    }
  }

  .como-funciona {
    padding: 60px 0;

    .container { 
      .title { 
        color: #1D1D1B;
        font-size: 34px;
        text-align: center;
        text-transform: uppercase;

        margin-bottom: 80px;
      }

      .row {
        display: flex;
        align-items: flex-start;
        justify-content: center;

        @media only screen and (max-width: 768px) {
          flex-wrap: wrap;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          width: 25%;
          min-height: 300px;

          @media only screen and (max-width: 768px) {
            width: 50%;
            margin-bottom: 30px;
            padding: 25px;
          }

          @media only screen and (max-width: 425px) {
            width: 100%;
          }

          img { 
            border-radius: 50%;
            border: 2px solid #00FF00;
            margin-bottom: 20px;
          }

          p { 
            color: #797979;
            font-size: 16px;
            text-align: center;
            margin: 0;

            &.title { 
              font-size: 28px;
              margin: 0;
              margin-bottom: 3px;
            }
          }
        }
      }
    }
  }

  .motivos-para-assinar {
    padding: 60px 0 95px 0;

    .container {
      .title { 
        color: #1D1D1B;
        font-size: 34px;
        text-align: center;
        text-transform: uppercase;
      }

      .row {
        @media only screen and (max-width: 425px) {
          flex-wrap: wrap;
        }

        img { 
          width: 50%;

          border: 20px solid #FFFFFF;
          
          position: relative;

          &:before {
            content: '';

            position: absolute;
            top: -15px;
            left: -15px;
            z-index: -10;

            width: 100%;
            height: 100px;

            box-shadow: -30px 30px 30px 10px rgba(0,0,0,0.4);

            display: block;
          }

          @media only screen and (max-width: 425px) {
            width: 100%;
          }
        }

        .col { 
          width: 50%;

          @media only screen and (max-width: 425px) {
            width: 100%;
          }

          &:last-child {
            margin-left: 50px;
          }

          .list { 
            .title { 
              color: #797979;
              font-size: 21px;
              text-align: left;
            }

            p { 
              font-size: 14px;
            }
          }
        }
      }

      .second {
        max-width: 550px;
        margin: auto;
        margin-top: 50px;

        .text {
          margin-right: 40px;

          @media only screen and (max-width: 425px) {
            margin: auto;
            margin-bottom: 40px;
          }

          .title { 
            color: #000000;
            font-size: 16px;
            text-transform: unset;

            margin: 0;
          }

          .price { 
            color: #797979;
            font-size: 27px;
            text-align: right;
            margin: 0;
          }
        }

        a { 
          white-space: nowrap;

          @media only screen and (max-width: 425px) {
            margin: auto;
          }
        }
      }
    }
  }

  .faixa { 
    img { 
      width: 100%;
    }
  }

  .conheca-nossos-planos {
    padding: 60px 0 120px 0;

    .container { 
      .title { 
        color: #1D1D1B;
        font-size: 34px;
        text-align: center;
        text-transform: uppercase;

        margin-bottom: 20px;
      }

      .subtitle { 
        font-size: 20px;
        text-align: center;

        margin: 0;
        margin-bottom: 90px;
      }

      .tabs-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ::v-deep .tabs-component {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .tabs-component-tabs {
            display: inline-flex;
            
            background: #797979;
            border-radius: 35px;

            margin: auto;
            padding: 0;

            li {
              list-style-type: none;

              &.is-active {
                a {
                  color: #797979;
                  background: #00FF00;
                }
              }

              a {
                color: #00FF00;
                text-transform: uppercase;
                text-align: center;

                padding: 18px 45px;
                border-radius: 35px;

                display: block;

                @media only screen and (max-width: 425px) {
                  padding: 8px 20px;
                  font-size: 18px;
                }

                @media only screen and (max-width: 425px) {
                  padding: 5px 10px;
                }

                &:hover {
                  color: #FFFFFF;
                }
              }
            }
          }
        }

        .row {
          padding: 30px;

          @media only screen and (max-width: 425px) {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
        }

        .block {
          border-radius: 17px;
          background: #EFEFEF;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 40px 80px;
          margin: 0 15px;
          margin-top: 140px;

          width: 100%;
          max-width: 430px;

          @media only screen and (max-width: 768px) {
            padding: 20px 40px;
          }

          @media only screen and (max-width: 425px) {
            width: 100%;
            max-width: 100%;
            padding: 10px 20px;
            margin: 60px auto;
          }

          .title { 
            color: #797979;
            font-size: 33px;
            text-align: center;
          }

          .subtitle {
            color: #797979;
            font-size: 16px;
            text-align: center;
            margin-bottom: 50px;
          }

          ul {
            margin: 0;
            padding: 0;
            
            li {
              list-style-type: none;
              border-bottom: 1px solid #797979;

              display: flex;
              align-items: center;
              justify-content: center;

              p { 
                padding: 5px 15px;

                &:last-child {
                  margin-left: 40px;
                }
              }
            }
          }

          .price { 
            color: #797979;
            font-size: 27px;
          }

          .btn { 
            background: #00FF00;

            font-size: 25px;
            padding: 20px 60px;
            margin-top: 40px;
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
            .title { 
              color: #FFFFFF;
            }

            .btn {
              background: #FFFFFF;
            }
          }
        }
      }
    }
  }

  .fale-conosco {
    background: #EFEFEF;
    padding: 70px 0 140px 0;

    .container { 
      .title { 
        color: #1D1D1B;
        font-size: 34px;
        text-decoration: uppercase;
        text-align: center;

        margin-bottom: 0;
      }

      .subtitle { 
        color: #797979;
        font-size: 20px;
        text-align: center;

        margin-top: 5px;
      }

      .sep { 
        width: 100%;
        border: 1px solid #797979;

        margin-bottom: 60px;
      }

      .tabs-wrapper {
        ::v-deep .tabs-component {
          .tabs-component-tabs {
            /*
            display: flex;
            Remover depois que tiver os conteúdos das outras perguntas e respostas
            */

            display: none;
            
            border-radius: 35px;
            border: 2px solid #00FF00;

            margin: auto;
            padding: 0;

            max-width: 550px;

            li {
              list-style-type: none;

              &.is-active {
                a {
                  color: #797979;
                  background: #00FF00;
                }
              }

              a {
                color: #797979;
                text-align: center;

                padding: 18px 45px;
                border-radius: 35px;

                display: block;

                &:hover {
                  color: #FFFFFF;
                }
              }
            }
          }

          .tabs-component-panel {
            .subtitle {
              margin-top: 40px;
            }
          }
        }
      }

      .whatsapp {
        @extend .btn;
        @extend .green-bg;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: auto;
        margin-top: 85px;

        p { 
          color: #1D1D1B;
          font-size: 16px;
          text-transform: capitalize;

          margin-right: 40px;
        }

        img { 

        }
      }
    }
  }
}
</style>

<template>
  <div class="accordion">
    <div
      class="pergunta"
      :class="isActive ? 'active' : ''"
    >
      <button
        @click="toggleAccordion()"
      >
        <p>
          {{ pergunta }}
        </p>
        <i></i>
      </button>
    </div>

    <div
      class="resposta"
      :class="isActive ? 'active' : ''"
    >
      <div
        class="content"
        v-html="resposta"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',

  props: {
  	pergunta: {
      type: String,
  	},
    resposta: {
      type: String,
  	},
  },

  components: {},

  data() {
    return {
      isActive: false
    };
  },

  mounted() {

  },

  watch: {
    
  },

  methods: {
    toggleAccordion() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;

  max-width: 550px;
  margin: auto;

  border-bottom: 1px solid #797979;

  .pergunta {
    &.active {
      i {
        transform: rotate(45deg);
      }
    }

    button {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 20px;

      p {
        font-size: 16px;
        margin: 0;
      } 

      i {
        background-image: url('/accordion/ico-plus.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 16px;
        height: 16px;
      }
    }
  }

  .resposta {
    height: 0;
    overflow: hidden;

    font-size: 16px;

    &.active {
      height: auto;
    }

    .content {
      padding: 0 60px 20px 20px;
    }
  }
}
</style>

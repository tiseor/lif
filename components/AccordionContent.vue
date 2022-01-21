<template>
  <div class="accordion-content">
    <div
      class="titulo"
      :class="isActive ? 'active' : ''"
    >
      <button
        @click="toggleAccordionContent()"
      >
        <p>
          {{ titulo }}
        </p>
        <i></i>
      </button>
    </div>

    <div
      class="conteudo"
      :class="isActive ? 'active' : ''"
    >
      <div class="content">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordionContent',

  props: {
  	titulo: {
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
    toggleAccordionContent() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<style scoped lang="scss">
.accordion-content {
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #71818B;

  .titulo {
    &.active {
      i {
        
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

  .conteudo {
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

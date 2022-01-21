<template>
  <div class="layout-error">
    <div class="container">
      <h1>
        404
      </h1>
      <h4>
        Página não encontrada
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',

  props: {
    
  },

  components: {},

  data() {
    return {
      
    };
  },

  mounted() {

  },

  watch: {
    
  },

  methods: {
    
  },
}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;

    h1 {
      color: #71818B;
      font-weight: 700;
      margin: 0;
    }

    h4 {
      color: #71818B;
      font-weight: 700;
      margin: 0;
    }
  }
</style>

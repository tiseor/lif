<template>
  <div class="layout-cadastro">
    <Header-Vue/>
    <nuxt/>
    <Footer-Vue/>
    <Cookies/>
  </div>
</template>

<script>
export default {
  name: 'layout-cadastro',

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
  .layout-cadastro {
    header {
      background: #797979;

      ::v-deep nav {        
        a {
          color: #FFFFFF;
        }
      }
    }
  }
</style>

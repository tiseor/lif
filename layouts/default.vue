<template>
  <div class="layout-default">
    <Header-Vue/>
    <nuxt/>
    <Footer-Vue/>
    <Cookies/>
  </div>
</template>

<script>
export default {
  name: 'layout-default',

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
  .layout-default {
    header {
      border-bottom: 2px solid #FFFFFF;
    }
  }
</style>

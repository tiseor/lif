<template>
  <footer>
    <div class="container">
      <div class="row">
        <img src="/header/logo-lif.png" alt=""> 
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",

  props: {},

  components: {},

  data() {
    return {
      
    };
  },

  mounted() {},

  watch: {},

  methods: {
    
  },
};
</script>

<style scoped lang="scss">
footer {
  background: #797979;
  padding: 40px 0;
  
  .row {
    align-items: flex-start;

    img {
      max-width: 110px;
    }
  }
}
</style>

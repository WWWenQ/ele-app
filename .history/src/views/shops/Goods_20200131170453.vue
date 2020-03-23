<template>
    <div>Goods</div>
</template>

<script>
export default {
    name:"Goods",
      data() {
    return {
      shopInfo: null,
      showInfoModel: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/profile/batch_shop").then(res => {
        console.log(res.data);
        this.shopInfo = res.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
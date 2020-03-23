<template>
  <div class="Rating-gray">
    <i class="fa fa-star" v-for="(item,index) in itemClasses" :key="index" :class="item"></i>
  </div>
</template>
<script>
// 星星长度
const LENGTH = 5;
// 星星对应的Class
const CLS_ON = "fa-star";
const CLS_HALF = "fa-star-half-empty";
const CLS_OFF = "fa-star-o";
export default {
  name: "Rating",
  props: {
    rating: Number
  },
  computed: {
    itemClasses() {
      let result = [];
      // 4.8 就是4个全星 1个半星
      const zhengshu = Math.floor(this.rating);
      for (var i = 0; i < zhengshu; i++) {
        result.push(CLS_ON);
      }
      // 小数
      const xiaoshu = Math.floor(this.rating * 2) / 2;
      if (xiaoshu % 1 !== 0) {
        result.push(CLS_HALF);
      }
      // 补全
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    }
  }
};
</script>
<style scoped>
.Rating-gray {
  margin-right: 1.066667vw;
  color: #ffbe00;
  display: inline-block;
}
</style>
<template>
  <div class="goods" v-if="shopInfo">
      <!-- 商家推荐 -->
      <div class="recommend" v-for="(recommend,index) in shopInfo.recommend" :key="index">
          <p class="recommend-name">{{recommend.name}}</p>
          <div class="recommend-wrap">
              <ul>
                  <li v-for="(item,index) in recommend.items" :key="index">
                      <img :src="item.image_path" alt="">
                      <div class="recommend-food">
                          <p class="recommend-food-name">{{item.name}}</p>
                          <p class="recommend-food-zm">月售{{item.month_sales}}好评率{{item.satisfy_rate}}</p>
                      </div>
                      <div class="recommend-food-price">
                          <p>￥{{item.activity.fixed_price}}</p>
                          <CartControll :food="item"/>
                      </div>
                      
                  </li>
              </ul>
          </div>
      </div>
      <!-- 商品分类 -->
      <div class="menuview">
          <!-- 左侧分类列表 -->
          <div class="menu-wrapper">
              <ul>
                  <li v-for="(item,index) in shopInfo.menu" :key="index">
                      <img v-if="item.icon_url" :src="item.icon_url" alt="">
                      <span>{{item.name}}</span>
                  </li>
              </ul>
          </div>
          <!-- 右侧商品内容 -->
          <div class="foods-wrapper">
              <ul>
                  li.food-list-hook
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import CartControll from "../../components/shops/CartControll"
export default {
  name: "Goods",
  components:{
      CartControll
  },
  data() {
    return {
      shopInfo: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/profile/batch_shop").then(res => {
        res.data.recommend.forEach(recommend=>{
            recommend.items.forEach(item=>{
                item.count = 0
            })
        })
        this.shopInfo = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
.goods {
  position: relative;
  height: calc(100% - 10.666667vw);
}

.recommend {
  padding-top: 4.266667vw;
  background-color: #fff;
}
.recommend-name {
  padding-left: 4.266667vw;
  color: #333;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2.666667vw;
}
.recommend-wrap {
  overflow-x: scroll;
  display: flex;
  width: 100%;
}
.recommend-wrap ul {
  display: flex;
  padding-left: 4.266667vw;
}
.recommend-wrap ul li {
  flex: none;
  width: 32vw;
  margin-right: 2.666667vw;
}
.recommend-wrap li img {
  display: block;
  width: 32vw;
  height: 32vw;
  border-top-left-radius: 0.8vw;
  border-top-right-radius: 0.8vw;
  max-width: 100%;
}
.recommend-food .recommend-food-name {
  color: #333;
  font-size: 0.8rem;
  margin: 1.866667vw 0 1.233333vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.recommend-food .recommend-food-zm {
  color: #999;
  font-size: 0.6rem;
  margin-bottom: 1.866667vw;
  min-height: 1em;
}
.recommend-food-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.266667vw;
}
.recommend-food-price p {
  font-size: 1rem;
  color: #ff5339;
}

::-webkit-scrollbar {
  width: 0 !important;
}

.menuview {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 10.8vw;
  background-color: #fff;
  display: flex;
}
.menu-wrapper {
  overflow-y: hidden;
  /* height: 100%; */
  height: calc(100% - 12.8vw);
  background-color: #f8f8f8;
  padding-bottom: 10.666667vw;
  width: 20.533333vw;
}
.menu-wrapper li {
  padding: 4.666667vw 2vw;
  font-size: 0.6rem;
  color: #666;
  line-height: 1.2;
}
.menu-wrapper li img {
  max-width: 100%;
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: top;
  margin-right: 0.8vw;
}

.foods-wrapper {
  overflow-y: hidden;
  /* height: 100%; */
  height: calc(100% - 12.8vw);
  width: 79.466667vw;
  padding-bottom: 10.666667vw;
}
.category-title {
  margin-left: 2.666667vw;
  padding: 2vw 8vw 2vw 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.category-title strong {
  margin-right: 1.333333vw;
  font-weight: 700;
  font-size: 0.8rem;
  color: #666;
  flex: none;
}
.category-title span {
  flex: 1;
  color: #999;
  font-size: 0.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fooddetails {
  min-height: 30.666667vw;
  padding: 2.666667vw 0 2.666667vw 2.666667vw;
  margin-bottom: 0.133333vw;
  display: flex;
}
.fooddetails img {
  width: 25.333333vw;
  height: 25.333333vw;
  flex: none;
  margin-right: 2.666667vw;
  border-radius: 0.533333vw;
}
.fooddetails-info {
  flex: 1;
  padding-bottom: 6.666667vw;
  padding-right: 4vw;
}
.fooddetails-info h4 {
  padding-right: 4vw;
  font-weight: 700;
  overflow: hidden;
  font-size: 1rem;
  white-space: nowrap;
  width: 40vw;
  text-overflow: ellipsis;
  color: #333;
}
.fooddetails-des {
  margin: 1.333333vw 0;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 42.666667vw;
}
.fooddetails-sales {
  margin: 1.733333vw 0 !important;
  color: #999;
  font-size: 0.6rem;
  line-height: 1;
  min-height: 1em;
}
.fooddetails-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.733333vw;
}
.fooddetails-price .price {
  font-size: 1rem;
  line-height: 4.266667vw;
  color: #ff5339;
  padding-bottom: 0.933333vw;
  display: flex;
  align-items: baseline;
}

.menu-wrapper .current {
  background-color: #fff !important;
  color: #333 !important;
}
</style>
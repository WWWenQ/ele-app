<template>
    <div class="shop" v-if="shopInfo">
        <nav class="header-">
            <div class="nav_bg">
                <img :s="shopInfo.rst.scheme" alt="">
            </div>
            <div class="nav_back">
                <i class="fa fa-chevron-left"></i>
            </div>
            <div class="shop_image">
                <img :src="shopInfo.rst.image_path" alt="">
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:"Shop",
    data(){
        return{
            shopInfo:null
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get("/api/profile/batch_shop").then(res=>{
                console.log(res.data)
                this.shopInfo= res.data
            })
        }
    }
}
</script>
<style scoped>

</style>
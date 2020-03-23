<template>
    <div class="shop">
        订餐
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
                this.shopInfo
            })
        }
    }
}
</script>
<style scoped>

</style>
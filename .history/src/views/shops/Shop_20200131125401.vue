<template>
    <div class="shop">
        <nav class="header-">
            <div class="nav_bg">
                <img src="" alt="">
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
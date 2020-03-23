<template>
    <div>Comments</div>
</template>

<script>
export default {
    name:"Comments",
    created(){
        this.getData()
    },
    data
    methods:{
        getData(){
            this.$axios.get("/api/profile/comments").then(res=>{
                console.log(res.data);
                this.evaluation = res.data;
            })
        }
    }
}
</script>

<style scoped>

</style>
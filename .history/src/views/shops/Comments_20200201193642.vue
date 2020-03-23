<template>
    <div>Comments</div>
</template>

<script>
export default {
    name:"Comments",
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get("/api/profile/comments")
        }
    }
}
</script>

<style scoped>

</style>
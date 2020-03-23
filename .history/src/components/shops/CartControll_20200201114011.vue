<template>
    <div class="cartcontroll">
        <span class="cartbutton button-minus" v-if="food.count>0"></span>
    </div>
</template>

<script>
export default {
    name:"CartControll",
    props:{
        goods:Object
    }
}
</script>

<style scoped>

</style>
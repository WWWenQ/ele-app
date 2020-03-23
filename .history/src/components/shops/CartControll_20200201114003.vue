<template>
    <div class="cartcontroll">
        <span class="cartbutton button-minus" v-if="food.count"></span>
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
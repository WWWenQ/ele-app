<template>
    <div class="cartcontroll">
        <span class="cartbutton button-minus" v-if="food.count>0">
            <i class="fa fa-minus"></i>
        </span>
        <span class="cartcount"></span>
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
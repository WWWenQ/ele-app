<template>
    <div class="cartcontroll">
        <span class="cartbutton button-minus" v-if="food.count>0">
            <i class="fa fa-minus"></i>
        </span>
        <span class="cartcount" v-if="food.count>0">{{food.count}}</span>
        <span class="cartbutton">
            <i class="fa fa-plus-circle"></i>
        </span>
    </div>
</template>

<script>
export default {
    name:"CartControll",
    props:{
        good:Object
    }
}
</script>

<style scoped>

</style>
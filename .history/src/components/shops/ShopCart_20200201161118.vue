<template>
    <div class="shopcart">
        <div class="bottomNav-cartfooter">
            <span class="bottomNav-carticon">
                <i class="fa fa-cart-plus"></i>
            </span>
            <div class="bottomNav-cartInfo">
                <p class="bottomNav-cartTotal">
                    <span></span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ShopCart",
    props:{
        shopInfo:Object
    }
}
</script>

<style scoped>

</style>
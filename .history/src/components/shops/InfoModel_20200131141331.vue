<template>
    <div class="info-model">
        <div class="brief-model">
            <h2>
                <i v-if="rst.is_premium">品牌</i>
                <span>{{}}</span>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        rst:Object
    }
}
</script>

<style lang="stylus" scoped>

</style>
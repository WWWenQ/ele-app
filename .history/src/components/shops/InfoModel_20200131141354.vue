<template>
    <div class="info-model">
        <div class="brief-model">
            <h2>
                <i v-if="rst.is_premium">品牌</i>
                <span>{{rst.name}}</span>
            </h2>
            <ul>
                <li>
                    <h3>{</h3>
                </li>
            </ul>
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
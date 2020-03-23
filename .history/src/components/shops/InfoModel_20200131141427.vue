<template>
    <div class="info-model">
        <div class="brief-model">
            <h2>
                <i v-if="rst.is_premium">品牌</i>
                <span>{{rst.name}}</span>
            </h2>
            <ul>
                <li>
                    <h3>{{rst.rating}}</h3>
                    <p>评分</p>
                </li>
                li>
                    <h3>{{rst.rating}}</h3>
                    <p>评分</p>
                </li>
                li>
                    <h3>{{rst.rating}}</h3>
                    <p>评分</p>
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
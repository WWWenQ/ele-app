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
                <li>
                    <h3>{{rst.recent_order_num}}</h3>
                    <p>月售</p>
                </li>
                <li 
                    <h3>蜂鸟专送</h3>
                    <p>约{{}}分钟</p>
                </li>
                <li>
                    <h3>{{rst.rating}}</h3>
                    <p>配送费</p>
                </li>
                <li>
                    <h3>{{rst.rating}}</h3>
                    <p>距离</p>
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
<template>
   <div class="rst-activity">
       <div class="activity-txt">
           <span :style="{background:'#' + activities[0].icon_color}">{{activities[0].description}}</span>
       </div>
       <div class="activity-count">
           <span>{{activities.length}}个优惠</span>
           
       </div>
   </div>
</template>

<script>
export default {
    name:"Activity",
    props:{
        activities:Array
    }
}
</script>

<style scoped>

</style>
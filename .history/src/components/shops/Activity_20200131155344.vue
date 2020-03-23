<template>
   <div class="rst-activity">
       <div class="activity-txt">
           <span :style="{background:'#' + activities[0].icon_color}">{{activities[0].icon_name}}</span>
           <span>{{activities[0]}}</span>
       </div>
       <div class="activity-count">
           <span>{{activities.length}}个优惠</span>
           <i class="fa fa-caret-down"></i>
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
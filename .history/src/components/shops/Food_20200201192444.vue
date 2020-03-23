<template>
  <div v-if="isShow" class="food"></div>
</template>

<script>
export default {
  name: "Food",
  props: {
    food: Object,
    isShow: Boolean
  }
};
</script>

<style scoped>
</style>
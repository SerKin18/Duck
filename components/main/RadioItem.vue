<template>
  <div class="radio-items" v-bind:style="itemHeight">
    <div :class="isActive ? 'active' : 'radio-item'" v-bind:style="itemHeight">
	</div>
  </div>
</template>
<script>
export default {
  name: "radio-item",
  props: {
    isActive: {
      type: Boolean,
    },
    itemHeight: {
      type: String,
    },
  },
};
</script>
<style scoped>
.radio-items {
  width: 10.5px;
  height: 200px;
  margin: 7px ;
  background:transparent
}
.radio-item {
	height: 100%;
  background: rgba(248, 248, 248, 1);
}
.active {
  background: linear-gradient(0deg, #ea5a25, #ea5a25),
    linear-gradient(180.02deg, #ed5d28 46.79%, #ffbb0d 99.77%);
}
</style>

<template>
  <div class="radio-items" v-bind:style="itemHeight">
    <div
      :class="isActive ? 'radio-item active' : 'radio-item'"
      v-bind:style="`height:${itemHeight}`"
    ></div>
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
  margin: 7px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.radio-item {
  width: 10.5px;
  background: rgba(248, 248, 248, 1);
}
.active {
  background: linear-gradient(0deg, #e74206, #ffbb0d),
    linear-gradient(180.02deg, #ed5d28 46.79%, #ff7a0d 99.77%);
}
</style>

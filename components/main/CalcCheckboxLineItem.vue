<template>
  <div
    class="calc_checkbox__Item"
    :class="isActive ? 'activeBtnCalc' : ''"
    v-bind:style="widthItem"
  >
    <div class="calc_checkbox__line" v-bind:style="widthLine"></div>
    <div
      class="calc_checkbox__circle"
      @click.prevent="$emit('getIndexCircle', indexCircle)"
    >
      <div class="calc_checkbox__name" v-bind:style="widthName">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "calc-checkbox",
  props: {
    widthItem: {
      type: String,
      required: false,
    },
    widthLine: {
      type: String,
      required: false,
    },
    widthName: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
    },
    value: {
      type: Number,
      required: false,
    },
    indexCircle: {
      type: Number,
    },
  }
  
};
</script>
<style scoped>
.calc_checkbox__Item {
  width: 100%;
  display: flex;
  align-items: center;
}
.calc_checkbox__line {
  width: 100%;
  height: 1px;
  background: rgb(136, 137, 138);
  z-index: 93;
}

.activeBtnCalc .calc_checkbox__circle {
  scale: 1.2;
  border: 1px solid #fff;
  border-radius: 12.5px;
  box-shadow: 0px 0px 15px 3px rgba(234, 90, 37, 0.7);
  background: linear-gradient(0deg, #ea5a25, #ea5a25),
    linear-gradient(0deg, #ffffff, #ffffff);
}
.activeBtnCalc .calc_checkbox__line {
  z-index: 94;
  background: linear-gradient(
    270deg,
    #ac3206 1.18%,
    rgba(43, 19, 11, 0.1) 100%
  );
}

.calc_checkbox__circle {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #fff;
  position: relative;
  z-index: 95;
}
.calc_checkbox__name {
  position: absolute;
  text-align: center;
  text-wrap: nowrap;
  top: 25px;
  left: 0%;
  opacity: 50%;

  font-size: 12px;
}
</style>

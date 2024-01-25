<template>
  <div class="calc_body_item_calc">
    <CalcCheckboxLineItem
      v-for="(circle, index) in checkBoxArray"
      :indexCircle="index"
      :widthName="circle.widthName"
      :widthLine="circle.widthLine"
      :widthItem="circle.widthItem"
      :key="circle[index]"
      :value="circle.value"
      :isActive="circle.isActive"
      @getIndexCircle="activeCalc"
      >{{ circle.title }}</CalcCheckboxLineItem
    >
  </div>
</template>
<script>
import CalcCheckboxLineItem from "./CalcCheckboxLineItem.vue";
export default {
  components: { CalcCheckboxLineItem },
  name: "calk-checkbox-item-line",
  props:{
checkBoxArray:{
	type:Array
}
  },
  data() {
    return {
      valueCircle: 0,
    };
  },
  methods: {
    activeCalc(i) {
      this.$props.checkBoxArray.forEach((element) => (element.isActive = false));
      this.$props.checkBoxArray[i].isActive = true;
      this.valueCircle = this.$props.checkBoxArray[i].value;
      console.log(this.valueCircle);
		this.$emit('valueItem2',this.valueCircle)
    },
  },
};
</script>
<style scoped>
.calc_body_item_calc {
  display: flex;
  font-family: var(--classic);
  font-size: 16px;
  position: relative;
  align-items: center;
  justify-content: center;
  max-height: 350px;
}
.calc_body_item_calc .calc_checkbox__Item {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

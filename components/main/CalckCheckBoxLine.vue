<template>
  <div class="calc_body_item_calc">
    <CalcCheckboxItem
      v-for="(circle, index) in check"
      :indexCircle="index"
      :widthName="circle.widthName"
      :widthLine="circle.widthLine"
      :widthItem="circle.widthItem"
      :key="circle[index]"
      :value="circle.value"
      :isActive="circle.isActive"
      @getIndexCircle="activeCalc"
      >{{ circle.title }}</CalcCheckboxItem
    >
  </div>
</template>
<script>
import CalcCheckboxItem from "./CalcCheckboxItem.vue";
export default {
  components: { CalcCheckboxItem },
  name: "calk-checkbox-item-line",
  data() {
    return {
      valueCircle: 0,
      check: [
        {
          title: "Виберіть",
          widthName: "left:-150%",
          widthLine: "display:none",
          value: 0,
          isActive: false,
        },
        {
          title: "Простий дизайн",
          widthName: "left:-260%",
          widthItem: "width:25%",
          value: 10,
          isActive: false,
        },
        {
          title: "Середній",
          widthName: "left:-150%",
          widthItem: "width:50%",
          value: 20,
          isActive: false,
        },
        {
          title: "Складний",
          widthName: "left:-150%",
          widthItem: "width:75%",
          value: 30,
          isActive: false,
        },
        {
          title: "Wow дизайн",
          widthName: "left:-150%",
          value: 40,
          isActive: false,
        },
      ],
    };
  },
  methods: {
    activeCalc(i) {
      this.check.forEach((element) => (element.isActive = false));
      this.check[i].isActive = true;
      this.valueCircle = this.check[i].value;
      console.log(this.valueCircle);
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

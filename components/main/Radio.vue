<template>
  <div class="radio_block">
    <div class="container">
      <div class="radio_title">
        <h2>Крядио</h2>
        <div class="radio__btn_header">
          <button><span></span></button>
        </div>
      </div>
      <div class="radio_body">
        <div class="radio__btn_prev">
          <button><span></span></button>
        </div>
        <div class="radio_value">
          <div class="radio_value_item">
            <RadioItem
              v-for="item in valueItemsBody"
              :id="item.id"
              :key="item.id"
              :isActive="item.isActive"
              :itemHeight="item.height"
              >{{ item }}</RadioItem
            >
          </div>
          <div class="radio__value_duck">
            <div class="radio_value_disc">
              <img
                src="../../static/image/radio-disc.svg"
                class="radio_value_disc_img1"
                alt="img-disk"
              />
              <img
                src="../../static/image/radio-Duck.svg"
                class="radio_value_disc_img2"
                alt="img-duck"
              />
            </div>
          </div>
        </div>
        <div class="radio__btn_next">
          <button><span></span></button>
        </div>
      </div>
      <div class="radio_footer">
        <div class="radio_footer__music">
          <img src="../../static/image/radio-singer.png" alt="singer-img" />
        </div>
        <div class="radio_footer__value">
          <div class="radio_footer__value_item">
            <CalcCheckboxLineItem
              v-for="(circle, index) in valueFooter"
              :indexCircle="index"
              :widthName="circle.widthName"
              :widthLine="circle.widthLine"
              :widthItem="circle.widthItem"
              :key="circle[index]"
              :value="circle.value"
              :isActive="circle.isActive"
              @getIndexCircle="activeValue"
              >{{ circle.title }}</CalcCheckboxLineItem
            >
          </div>
          <div class="radio_footer__value_img">
            <img
              src="../../static/image/radio-Vector-Value.png"
              alt="img-value"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CalcCheckboxLineItem from "./CalcCheckboxLineItem.vue";
import RadioItem from "./RadioItem.vue";
export default {
  components: { CalcCheckboxLineItem, RadioItem },
  name: "radio",
  data() {
    return {
      valueFooter: [
        {
          title: " ",
          widthName: "left:-150%",
          widthLine: "display:none",
          value: 1,
          isActive: false,
        },
        {
          title: " ",
          widthName: "left:-260%",
          widthItem: "width:33.3%",
          value: 1,
          isActive: false,
        },
        {
          title: " ",
          widthName: "left:-150%",
          widthItem: "width:66.6%",
          value: 2,
          isActive: false,
        },
        {
          title: " ",
          widthName: "left:-150%",
          value: 3,
          isActive: false,
        },
      ],
      valueItemsBody: [
        { id: 1, height: "58.13px", isActive: false },
        { id: 2, height: "85.57px", isActive: false },
        { id: 3, height: "105.28px", isActive: false },
        { id: 4, height: "180.97px", isActive: false },
        { id: 5, height: "150.42px", isActive: false },
        { id: 6, height: "78.95px", isActive: false },
        { id: 7, height: "120.53px", isActive: false },
        { id: 8, height: "150.42px", isActive: false },
        { id: 9, height: "58.13px", isActive: false },
        { id: 10, height: "85.57px", isActive: false },
        { id: 11, height: "105.28px", isActive: false },
        { id: 12, height: "180.97px", isActive: false },
        { id: 13, height: "150.42px", isActive: false },
        { id: 14, height: "78.95px", isActive: false },
        { id: 15, height: "120.53px", isActive: false },
        { id: 16, height: "150.42px", isActive: false },
        { id: 17, height: "120.53px", isActive: false },
        { id: 18, height: "150.42px", isActive: false },
        { id: 19, height: "150.42px", isActive: false },
        { id: 20, height: "150.42px", isActive: false },
        { id: 21, height: "120.53px", isActive: false },
        { id: 22, height: "150.42px", isActive: false },
        { id: 23, height: "120.53px", isActive: false },
        { id: 24, height: "78.95px", isActive: false },
        { id: 25, height: "150.42px", isActive: false },
        { id: 26, height: "180.97px", isActive: false },
        { id: 27, height: "105.28px", isActive: false },
        { id: 28, height: "85.57px", isActive: false },
        { id: 29, height: "58.13px", isActive: false },
        { id: 30, height: "150.42px", isActive: false },
        { id: 31, height: "120.53px", isActive: false },
        { id: 32, height: "78.95px", isActive: false },
        { id: 33, height: "150.42px", isActive: false },
        { id: 34, height: "180.97px", isActive: false },
        { id: 35, height: "105.28px", isActive: false },
        { id: 36, height: "85.57px", isActive: false },
        { id: 37, height: "58.13px", isActive: false },
      ],
    };
  },
  methods: {
    activeValue(i) {
      this.valueFooter.forEach((element) => (element.isActive = false));
      this.valueFooter[i].isActive = true;
    },
  },
};
</script>
<style scoped>
.radio_block {
  padding: 100px 0px 100px 0px;
  background: rgba(32, 63, 106, 1);
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.radio_title {
  font-family: var(--title-font);
  font-size: 42px;
  line-height: 58px;
}
.radio__btn_header {
}
.radio_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 528px;
}
.radio__btn {
}
.radio__btn_prev,
.radio__btn_next {
  position: relative;
  width: 44px;
  height: 44px;
  background: transparent;
}
.radio__btn_prev span::before,
.radio__btn_prev span::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 13px;
  width: 20px;
  height: 4px;
  background-color: rgb(255, 255, 255);
}
.radio__btn_prev span::before {
  top: 30px;
  left: 17px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: left bottom;
}
.radio__btn_prev span::after {
  top: 4px;
  left: 14px;
  transform: translateX(10px) rotate(135deg);
  transform-origin: left bottom;
}
.radio__btn_next span::before,
.radio__btn_next span::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 18px;
  width: 20px;
  height: 4px;
  background-color: rgb(255, 255, 255);
}
.radio__btn_next span::before {
  top: 18px;
  left: 23px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: left bottom;
}
.radio__btn_next span::after {
  top: 16px;
  left: 20px;
  transform: translateX(10px) rotate(135deg);
  transform-origin: left bottom;
}

.radio__btn_next:hover {
  span::after,
  span::before {
    background: rgba(234, 90, 37, 1);
  }
}

.radio__btn_prev:hover {
  span::after,
  span::before {
    background: rgba(234, 90, 37, 1);
  }
}
._prev {
}
.radio_value {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.radio_value_item {
  display: flex;
  position: relative;
  z-index: 4;
}
.radio__value_duck {
  position: absolute;
  top: -160px;
  left: 190px;
  z-index: 6;
}
.radio_footer__value_item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 390px;
}

.radio_footer__value_item .calc_checkbox__Item {
  position: absolute;
  left: 0;
  top: 0;
}

.radio_value_disc {
  display: flex;
  max-width: 530px;
  max-height: 530px;
}
.radio_value_disc_img1 {
  position: absolute;
  top: 0;
  left: 0;
}
.radio_value_disc_img2 {
  position: absolute;
  top: 110px;
  left: 100px;
}

._next {
}
.radio_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
}
.radio_footer__music {
}
.radio_footer__value {
  display: flex;
}
.radio_footer__value_img {
  margin-left: 27px;
  padding-bottom: 2px;
  margin-top: -2px;
}
</style>

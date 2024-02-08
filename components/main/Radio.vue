<template>
  <div class="radio_block">
    <div class="container">
      <div class="radio_title">
        <h2 id="radio">Крядио</h2>
        <div class="radio__btn_header">
          <button><span></span></button>
        </div>
      </div>
      <div class="radio_footer__music_mobile">
        <img src="../../static/image/radio-singer.png" alt="singer-img" />
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
            <div class="radio__value_disk">
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
          value: 0,
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
        { id: 1, height: "58.13px", isActive: false, valueid: 1 },
        { id: 2, height: "85.57px", isActive: false, valueid: 1 },
        { id: 3, height: "105.28px", isActive: false, valueid: 1 },
        { id: 4, height: "180.97px", isActive: false, valueid: 1 },
        { id: 5, height: "150.42px", isActive: false, valueid: 1 },
        { id: 6, height: "78.95px", isActive: false, valueid: 1 },
        { id: 7, height: "120.53px", isActive: false, valueid: 1 },
        { id: 8, height: "150.42px", isActive: false, valueid: 1 },
        { id: 9, height: "58.13px", isActive: false, valueid: 1 },
        { id: 10, height: "85.57px", isActive: false, valueid: 1 },
        { id: 11, height: "105.28px", isActive: false, valueid: 1 },
        { id: 12, height: "180.97px", isActive: false, valueid: 1 },
        { id: 13, height: "150.42px", isActive: false, valueid: 2 },
        { id: 14, height: "78.95px", isActive: false, valueid: 2 },
        { id: 15, height: "120.53px", isActive: false, valueid: 2 },
        { id: 16, height: "150.42px", isActive: false, valueid: 2 },
        { id: 17, height: "120.53px", isActive: false, valueid: 2 },
        { id: 18, height: "150.42px", isActive: false, valueid: 2 },
        { id: 19, height: "150.42px", isActive: false, valueid: 2 },
        { id: 20, height: "150.42px", isActive: false, valueid: 2 },
        { id: 21, height: "120.53px", isActive: false, valueid: 2 },
        { id: 22, height: "150.42px", isActive: false, valueid: 2 },
        { id: 23, height: "120.53px", isActive: false, valueid: 2 },
        { id: 24, height: "78.95px", isActive: false, valueid: 2 },
        { id: 25, height: "150.42px", isActive: false, valueid: 2 },
        { id: 26, height: "180.97px", isActive: false, valueid: 2 },
        { id: 27, height: "105.28px", isActive: false, valueid: 2 },
        { id: 28, height: "85.57px", isActive: false, valueid: 3 },
        { id: 29, height: "58.13px", isActive: false, valueid: 3 },
        { id: 30, height: "150.42px", isActive: false, valueid: 3 },
        { id: 31, height: "120.53px", isActive: false, valueid: 3 },
        { id: 32, height: "78.95px", isActive: false, valueid: 3 },
        { id: 33, height: "150.42px", isActive: false, valueid: 3 },
        { id: 34, height: "180.97px", isActive: false, valueid: 3 },
        { id: 35, height: "105.28px", isActive: false, valueid: 3 },
        { id: 36, height: "85.57px", isActive: false, valueid: 3 },
        { id: 37, height: "58.13px", isActive: false, valueid: 3 },
      ],
    };
  },
  methods: {
    activeValue(i) {
      this.valueFooter.forEach((element) => (element.isActive = false));
      this.valueFooter[i].isActive = true;
      this.valueItemsBody.forEach((item) => {
        if (item.valueid <= i) {
          item.isActive = true;
        } else item.isActive = false;
      });
    },
  },
};
</script>
<style scoped>
.radio_block {
  position: relative;
  padding: 100px 14.5px;
  background: rgba(32, 63, 106, 1);
  z-index: 9;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.radio_title {
  display: flex;
  font-family: var(--title-font);
  font-size: 80px;
  line-height: 75.56px;
  margin-bottom: 70px;
}
.radio__btn_header {
}
.radio__btn_header {
  position: relative;
  width: 60px;
  height: 60px;
  background: rgba(234, 90, 37, 1);
  margin: 10px 10px 0px 30px;
}
.radio__btn_header:hover {
  span::before,
  span::after {
    background: rgb(252, 252, 252);
  }
}
.radio__btn_header span::before,
.radio__btn_header span::after {
  content: "";
  position: absolute;
  top: 17px;
  left: 13px;
  width: 17px;
  height: 5px;
  background-color: rgb(10, 10, 10);
  transform: translateX(10px) rotate(90deg);
  transform-origin: left bottom;
}
.radio__btn_header span::before {
  left: 23px;
}
.radio__btn_header span::after {
  left: 12px;
}
.radio_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 528px;
}
.radio__btn {
}
.radio__btn_prev button,
.radio__btn_next button {
  position: relative;
  width: 44px;
  height: 44px;
  background: transparent;
  margin: 5px;
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
  max-width: 100%;
}
.radio_value_item {
  display: flex;
  position: relative;
  z-index: 4;
}
.radio__value_duck {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: block;
  position: relative;
  /* position: absolute;
  top: -75%;
  left: 27.5%; */
  z-index: 6;
  /* -webkit-animation:spin 5s linear infinite;
    -moz-animation:spin 5s linear infinite; */
  animation: spin 5s linear infinite;
}
/* @-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
} */
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.radio_value_disc_img2 {
  display: block;
  position: absolute;
  top: 105px;
  left: 105px;
  z-index: 7;
  /* animation: scale 0.5s linear infinite; */
}

@keyframes scale {
  100% {
    scale: 1.1;
  }
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
.radio_footer__music_mobile {
  display: none;
}
.radio_footer__value {
  display: flex;
}
.radio__value_disk {
  position: relative;
}
.radio_footer__value_img {
  margin-left: 27px;
  padding-bottom: 2px;
  margin-top: -2px;
}

@media (max-width: 1200px) {
  .radio_title {
    font-size: 60px;
  }
}
@media (max-width: 1035px) {
  .radio_value_item {
    scale: 0.9;
  }
  .radio__btn_next button,
  .radio__btn_prev button {
    scale: 0.9;
  }

  .radio_value_disc_img1,
  .radio_value_disc_img1 {
    scale: 0.9;
  }
}
@media (max-width: 970px) {
  .radio_block {
    padding: 70px 14.5px 70px 14.5px;
  }
  .radio_title {
    font-size: 40px;
    margin-bottom: 150px;
  }

  .radio_body {
    height: 100%;
    justify-content: center;
  }
  .radio_value {
    scale: 0.9;
  }
  .radio_footer {
    margin-top: 180px;
  }
}
@media (max-width: 767px) {
  .container {
    margin: 0;
  }
  .radio_footer__music {
    display: none;
  }
  .radio_footer__music_mobile {
    display: block;
    margin-bottom: 40px;
  }
  .radio_block {
    padding: 30px 14.5px 50px 14.5px;
    align-items: center;
  }
  .radio_title {
    font-size: 22px;
    line-height: 21px;
    margin-bottom: 30px;
    align-items: center;
  }
  .radio_title h2 {
    display: inline-block;
    text-align: center;
  }
  .radio__btn_header {
    scale: 0.8;
  }

  .radio_value {
    width: 100%;
    position: relative;
  }

  .radio_value_item {
    scale: 0.5;
  }
  .radio__value_duck img {
    scale: 0.5;
  }

  .radio__btn_prev,
  .radio__btn_next {
    display: none;
  }
  .radio_footer__value {
    width: 100%;
  }
  .radio_footer__value_item {
    max-width: 360px;
  }
  .radio_footer {
    margin-top: 40px;
  }
  /* .radio_footer__value_img{
	display: none;
  } */
}
</style>

<template>
  <div class="service-item">
    <div class="service-item__header">
      <div class="service-item-header__title">
        <span
          ><h4>{{ service.title }}</h4></span
        >
      </div>
      <div class="service-item-header__subtitle">
        <p>{{ service.subtitle }}</p>
      </div>
    </div>
    <div class="service-item__footer">
      <div class="service-item-footer__link">
        <span><a href="#">Дізнатися більше</a></span>
      </div>
      <div class="service-item-footer__price">
        <span>від ${{ service.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-item",
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.service-item {
  display: flex;
  flex-direction: column;
  max-width: 435px;
  padding: 14px 23px;
  margin-bottom: 70px;
}
.service-item__header {
  margin-bottom: 50px;
}
.service-item-header__title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  padding: 0px 0px 0px 26px;
}
.service-item-header__title span {
  position: relative;
  
}
.service-item-header__title span::before,
span::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -20px;
  width: 20px;
  height: 4px;
  background-color: rgba(234, 90, 37, 1);
}
.service-item-header__title span::before {
  top: 7px;
  left: -18px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: left bottom;
}
.service-item-header__title span::after {
  bottom: 5px;
  right: -20px;
  transform: translateX(10px) rotate(135deg);
  transform-origin: left bottom;
}
.service-item-header__subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
.service-item__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.service-item-footer__link a {
  position: relative;
  font-weight: 400;
  font-size: 16px;
  color: rgba(234, 90, 37, 1);
}

.service-item-footer__link span {
  position: relative;
}
.service-item-footer__link span::before,
.service-item-footer__link span::after {
  content: "";
  position: absolute;
  top: 5px;
  right: 0;
  width: 15px;
  height: 2px;
  background-color: rgba(234, 90, 37, 1);
}
.service-item-footer__link span::before {
  top: -1px;
  right: -5px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: right bottom;
}
.service-item-footer__link span::after {
  width: 12px;
  top: 11px;
  right: 0;
  transform: translateX(140px) rotate(180deg);
  transform-origin: right;
}
.service-item-footer__price {
  font-weight: 700;
  font-size: 16px;
  color: white;
}
</style>

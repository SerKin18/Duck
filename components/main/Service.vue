<template>
  <div class="service-item">
    <div class="service-item__header">
      <div class="service-item-header__title">
        <span></span>
        <h4>{{ service.title }}</h4>
      </div>
      <div class="service-item-header__subtitle">
        <p>{{ service.subtitle }}</p>
      </div>
    </div>
    <div class="service-item__footer">
      <div class="service-item-footer__link">
        <a href="#">Дізнатися більше</a><span></span>
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
  justify-content: space-between;
  max-width: 435px;
  height: 214px;
  padding: 14px 23px;
  margin-bottom: 70px;
  flex: 1 0 33.333%;
}
.service-item:hover {
  background-color: rgba(234, 90, 37, 1);
  a {
    color: rgb(7, 7, 7);
  }
  span::before,
  span::after {
    background-color: rgb(7, 7, 7);
  }
}
.service-item__header {
  margin-bottom: 50px;
}
.service-item-header__title {
  font-family: var(--title-font);
  text-transform: uppercase;
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
  line-height: 25px;
  text-align: left;
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
  right: 0px;
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
  left: -138px;
  transform: translateX(140px) rotate(180deg);
  transform-origin: right;
}
.service-item-footer__price {
  font-weight: 700;
  font-size: 16px;
  color: white;
}

@media (max-width: 767px) {
  .service-item {
    max-width: 100%;
    height: 165px;
    flex: 0 0 100%;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    margin-bottom: 0px;
    padding: 20px 11px 20px 11px;
  }
  .service-item__header {
    margin-bottom: 0px;
  }
  .service-item-header__title {
    font-size: 16px;
    margin-bottom: 5px;
    padding: 0px 0px 0px 26px;
  }
  .service-item-header__title span {
    font-family: var(--title-font);
  }

  .service-item-header__title span::before,
  span::after {
    top: 2px;
    left: -20px;
    width: 11px;
    height: 3px;
  }
  .service-item-header__title span::before {
    top: 4px;
    left: -18px;
  }
}
</style>

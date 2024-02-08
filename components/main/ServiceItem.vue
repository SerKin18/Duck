<template>
  <div class="service-item_block" v-bind:class="{ active: showServiceCard }">
    <div class="service-item">
      <div class="service-item__header">
        <div class="service-item-header__title" @click.stop="showCard">
          <span></span>
          <h4 @click.stop="closeCard">{{ service.title }}</h4>
        </div>
        <div class="service-item-header__subtitle" @click.stop="showCard">
          <p>{{ service.subtitle }}</p>
        </div>
        <div class="service-item-body" v-show="showServiceCard">
          <div class="service-item-image">
            <img
              src="../../static/image/Service-portfolio-card1.jpg"
              alt="service-card-img"
            />
          </div>
          <div class="service-item-text">
            <p>
              Впроваджуємо нові "хотілки", розвиваємо функціонал, оптимізуємо
              роботу модулів і плагінів.Впроваджуємо нові "хотілки", розвиваємо
              функціонал, оптимізуємо роботу модулів і плагінівА
            </p>
          </div>
          <div class="service-item-main-bottom">
            <main-button-black @openModal="openModalOrder" :id="service.id"
              >відправити запит</main-button-black
            >
          </div>

          <div class="service-item-body_footer">
            <div class="service-item-body_footer__exit" @click="closeCard">
              <button>Скрыть</button><span></span>
            </div>
            <div class="service-item-body_footer__calc">
              <button @click.prevent>Калькулятор</button>
            </div>
          </div>
        </div>
      </div>
      <div class="service-item__footer" v-if="!showServiceCard">
        <div class="service-item-footer__link">
          <a @click.prevent="showCard" href="#">Дізнатися більше</a
          ><span></span>
        </div>
        <div class="service-item-footer__price">
          <span>від ${{ service.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainButtonBlack from "../button/MainButtonBlack.vue";

export default {
  components: { MainButtonBlack },
  name: "service-item",
  props: {
    service: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      showServiceCard: false,
    };
  },
  methods: {
    showCard() {
      this.showServiceCard = true;
    },
    closeCard() {
      this.showServiceCard = !this.showServiceCard;
    },
    openModalOrder(id) {
      console.log(id);

      this.showServiceCard = false;
      this.$emit("openModalOrder", id);
    },
  },
};
</script>
<style scoped>
.active {
  z-index: 6;
  max-height: 100%;

  background-color: rgba(234, 90, 37, 1);

  .service-item-header__title span::before,
  .service-item-header__title span::after {
    top: 8px;
    left: -25px;
    background-color: rgb(7, 7, 7);
  }
  .service-item {
    height: 100%;
  }
  .service-item-header__title span::before {
    top: 10px;
    left: -22px;
    transform: translateX(0px) rotate(-45deg);
    transform-origin: left bottom;
  }
  .service-item-header__title span::after {
    bottom: 10px;
    right: -2px;
    transform: translateX(0px) rotate(45deg);
    transform-origin: left bottom;
  }
  .service-item__header {
    margin-bottom: 0px;
  }
}

.service-item_block {
  display: flex;
  align-self: start;
  flex-direction: column;
  max-width: 417px;

  height: 100%;
  padding: 14px 23px;
  margin-bottom: 70px;
  flex: 1 1 33.333%;
}
.service-item {
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 186px;
}
.service-item-main-bottom {
  max-width: 100%;
  margin-left: -40px;
}
.service-item_block:hover {
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
  margin-bottom: 20px;
}
.service-item-header__title {
  font-family: var(--title-font);
  text-transform: uppercase;
  text-wrap: nowrap;
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

.service-item-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-item-image {
  margin: 19px 0px 21px 0px;
}
.service-item-image img {
  max-width: 100%;
}
.service-item-text {
  font-style: 16px;
  line-height: 25px;
  margin-bottom: 140px;
}
.service-item-body_footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
}
.service-item-body_footer__exit {
}
.service-item-body_footer__exit span {
  position: relative;
}
.service-item-body_footer__exit span::before,
.service-item-body_footer__exit span::after {
  content: "";
  position: absolute;
  top: 5px;
  right: -10px;
  width: 15px;
  height: 2px;
  background-color: rgb(3, 3, 3);
}
.service-item-body_footer__exit span::before {
  top: 9px;
  right: -5px;
  transform: translateX(0px) rotate(135deg);
  transform-origin: right bottom;
}
.service-item-body_footer__exit span::after {
  width: 12px;
  top: 11px;
  left: -138px;
  transform: translateX(130px) rotate(180deg);
  transform-origin: right;
}
.service-item-body_footer__exit button {
  background-color: transparent;
  color: black;
  font-size: 16px;
  line-height: 25px;
}
.service-item-body_footer__calc {
}
.service-item-body_footer__calc button {
  display: inline-block;
  font-family: var(--title);
  background-color: transparent;
  color: white;
  font-size: 16px;
  line-height: 25px;
}
.service-item__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
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

@media (max-width: 970px) {
  .service-item {
    padding: 20px 11px 20px 11px;
    flex: 1 0 50%;
  }
  .service-item__footer {
    flex-direction: column-reverse;
  }
  .service-item-footer__price {
    margin-bottom: 15px;
  }
}

@media (max-width: 767px) {
  .active {
    .service-item-text {
      margin-bottom: 20px;
    }
    .service-item-header__title span::before,
    .service-item-header__title span::after {
      top: 6px;
      left: -17px;
    }
    .service-item-header__title span::before {
      top: 7px;
      left: -15px;
    }
    .service-item-header__title span::after {
      right: -2px;
    }
  }
  .service-item_block {
    max-width: 100%;
    height: 100%;
    flex: 0 0 100%;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    margin-bottom: 0px;
    padding: 0px 0px;
  }
  .service-item__footer {
    flex-direction: row;
  }
  .service-item-footer__price {
    margin-bottom: 0px;
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

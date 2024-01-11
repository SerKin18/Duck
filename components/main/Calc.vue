<template>
  <div class="calc">
    <div class="container">
      <div class="calc_title">
        <h2>КАЛЬКУЛЯТОР <span>ВАРТОСТІ </span></h2>
      </div>
      <div class="calc_subtitle">
        <p>Розрахуйте орієнтовну вартість робіт</p>
        <span>Сбросить</span>
      </div>
      <div class="calc_tabs">
        <CalcButton
          v-for="service in itemListServices"
          :service="service"
          :key="service[i]"
          >{{ service }}</CalcButton
        >
      </div>
      <div class="calc_body">
        <div class="calc_body__title">
          <h4>РОЗРОБКА САЙТУ:</h4>
        </div>
        <div class="calc_body__checkbox">
          <div
            class="calc_body__checkbox_item"
            :class="activeBtn1 ? 'active' : ''"
          >
            <label for="cmsCheckbox">
              <input type="checkbox" id="cmsCheckbox" name="cmsCheckbox" />
              <span @click="active1"></span>
              <p @click="active1">Рукописна CMS</p>
            </label>
          </div>
          <div
            class="calc_body__checkbox_item"
            :class="activeBtn2 ? 'active' : ''"
          >
            <label for="formCheckbox" @click.stop="active2">
              <input
                type="checkbox"
                id="formCheckbox"
                name="formCheckbox"
                checked
              />
              <span @click="active2"></span>
              <p @click="active2">Форма збору даних</p>
            </label>
          </div>
          <div
            class="calc_body__checkbox_item"
            :class="activeBtn3 ? 'active' : ''"
          >
            <label for="calcCheckbox" @click="active3">
              <input type="checkbox" id="calcCheckbox" name="calcCheckbox" />
              <span @click="active3"></span>
              <p @click="active3">Калькулятор цін</p>
            </label>
          </div>
        </div>
        <div class="calc_body__footer">
          <div class="calc_body__footer_column">
            <div class="calc_body__footer_item">Орієнтовна вартість</div>
            <div class="calc_body__footer_item">Від 0 грн</div>
          </div>
          <div class="calc_body__footer_column">
            <div class="calc_body__footer_item">Термін виконання</div>
            <div class="calc_body__footer_item">Від 0 днів</div>
          </div>
        </div>
      </div>
      <div class="calc_footer">
        <MainButton>Заказати</MainButton>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from "../button/MainButton.vue";
import CalcButton from "../button/CalcButton.vue";
export default {
  components: { MainButton, CalcButton },
  name: "Calc",
  data() {
    return {
      activeBtn1: false,
      activeBtn2: true,
      activeBtn3: false,
      itemListServices: [
        "Розробка сайту",
        "Розробка Landing page",
        "Розробка Iнтернет магазину",
        "Розробка портала",
        "Контекстна реклама",
        "SEO просування",
        "Розробка логотипу",
        "Розробка фiрмового стилю",
      ],
    };
  },
  methods: {
    active1() {
      this.activeBtn1 = !this.activeBtn1;
    },
    active2() {
      this.activeBtn2 = !this.activeBtn2;
    },
    active3() {
      this.activeBtn3 = !this.activeBtn3;
    },
  },
};
</script>
<style scoped>
.calc_body__checkbox {
  display: flex;
  flex-direction: column;
}
.calc_body__checkbox_item {
  max-width: 192px;
  border: 1px solid rgba(220, 223, 230, 1);
  padding: 13px 0px 13px 11px;
  margin-bottom: 15px;
  text-align: flex-start;
}
input[type="checkbox"] {
  height: 0px;
  width: 0px;
}
.calc_body__checkbox_item span {
  height: 14px;
  width: 14px;
  display: inline-block;
  position: relative;
  background-color: #fcfcfc;
  margin: 0px 0px -3px 0px;
}
.calc_body__checkbox_item span::before,
.calc_body__checkbox_item span::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 1.5px;
  width: 8px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.calc_body__checkbox_item span::before {
  width: 6px;
  transform: rotate(-135deg);
}
.calc_body__checkbox_item span::after {
  top: 6px;
  left: 4.5px;
  transform: rotate(135deg);
}
.calc_body__checkbox_item input[type="checkbox"]:checked + span {
  background: rgba(234, 90, 37, 1);
}

.calc_body__checkbox_item p {
	display: inline;
  font-family: var(--classic);
  color: rgb(255, 255, 255);
  opacity: 50%;
  font-size: 12px;
  text-wrap: nowrap;
  font-style: normal;
  margin-left: 6px;
}
.calc_body__checkbox_item:hover {
  span {
    background: rgb(143, 143, 143);
  }
}
.active {
  border: 1px solid rgba(234, 90, 37, 1);
  p {
    color: rgba(234, 90, 37, 1);
    opacity: 100%;
  }
}
.calc_body__title {
  font-family: var(--title-font);
  font-size: 42px;
  line-height: 58px;
}
.calc_body__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px -10px 0px -10px;
  margin: 0px -5px 0px -5px;
}
.calc_body__footer_column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 1 50%;
  margin: 0px 5px 0px 5px;
}
.calc_body__footer_item {
  width: 100%;
  color: #ffffff;
  font-family: var(--title);
  align-items: flex-start;
  background: rgba(248, 248, 248, 0.05);
  margin: 5px 5px;
  padding: 14px 15px;
}
.calc {
  padding: 0px 14.5px 100px 14.5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}

.calc_title {
  font-family: var(--title);
  letter-spacing: -2px;
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  text-align: flex-start;
}
@supports (-webkit-text-stroke: 1px white) {
  .calc_title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    position: relative;
  }
}
.calc_subtitle {
  width: 100%;
  font-size: 12px;
  color: rgba(248, 248, 248, 1);
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.calc_subtitle p {
  font-family: var(--subTitle-font);
  text-transform: uppercase;
}
.calc_subtitle span {
  display: inline-block;
  position: relative;
  opacity: 50%;
  font-size: 16px;
  margin-bottom: 6px;
}
.calc_subtitle span::before,
.calc_subtitle span::after {
  content: "";
  position: absolute;
  top: 40%;
  left: -20px;
  width: 18px;
  height: 2px;
  background: rgb(184, 183, 183);
}

.calc_subtitle span::after {
  transform: rotate(45deg);
}
.calc_subtitle span::before {
  transform: rotate(135deg);
}
.calc_subtitle span:hover {
  opacity: 100%;
}

.calc_tabs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.calc_body {
}
.calc_footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
}
.calc_footer > * {
  width: 170px;
}
@media (max-width: 767px) {
  .calc {
    padding: 0px 14.5px 60px 14.5px;
  }
  .calc_body__title {
    font-family: var(--classic);
    font-size: 22px;
    line-height: 21px;
  }
  .calc_title {
    font-family: var(--classic);

    line-height: 21px;
    font-size: 22px;
    margin-bottom: 20px;
    text-align: flex-start;
  }
  .calc_subtitle {
    margin-bottom: 40px;
  }
  .calc_body__footer_item {
    font-size: 12px;
    line-height: 25px;
  }
  .calc_subtitle p {
    font-size: 10px;
  }
  .calc_subtitle span {
    display: none;
  }
  .calc_tabs {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0px -10px 0px -10px;
  }
}
</style>

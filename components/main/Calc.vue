<template>
  <div :class="!modalCalc ? 'calc' : 'calc_modal'">
    <div class="container">
      <div v-show="!modalCalc" class="calc_title">
        <h2 id="calc">КАЛЬКУЛЯТОР <span>ВАРТОСТІ </span></h2>
      </div>
      <div v-show="!modalCalc" class="calc_subtitle">
        <p>Розрахуйте орієнтовну вартість робіт</p>
        <button @click="cleanTotalValue"><span>Сбросить</span></button>
      </div>
      <div v-show="!modalCalc" class="calc_tabs">
        <CalcButton
          v-for="(tab, index) in tabValue"
          :class="{ selected: selectedIndex === index }"
          :name="tab.tab"
          :key="index"
          :indexTab="index"
          @getIndexTab="selectTab"
          >{{ tab.tab }}</CalcButton
        >
      </div>
      <div class="calc_body">
        <div class="calc_body__calc">
          <div
            class="calc_modalOrder"
            v-show="modalCalc && selectTabModal === 0"
          >
            <div class="calc_body__tab_modal __dev" v-show="activeTab(0)">
              <div class="calc_body__title_modal">
                <h4>{{ tabValue[0].tab }}:</h4>
              </div>

              <div class="calc_body_item_modal">
                <div class="calc_body_item__subtitle_modal">
                  {{ tabValue[0].page.subTitle1 }}
                </div>

                <div
                  class="calc_body_line_modal"
                  v-for="name in tabValue[0].page.check1"
                  :value="name.value"
                  :time="name.time"
                  :isActive="name.isActive"
                  v-bind:style="
                    name.isActive ? 'color:rgba(234, 90, 37, 1)' : ''
                  "
                >
                  {{ name.title }}
                </div>
              </div>
              <div class="calc_body_item_modal">
                <div class="calc_body_item__subtitle_modal">
                  {{ tabValue[0].page.subTitle2 }}
                </div>

                <div
                  class="calc_body_line_modal"
                  v-for="name in tabValue[0].page.check2"
                  :value="name.value"
                  :time="name.time"
                  :isActive="name.isActive"
                  v-bind:style="
                    name.isActive
                      ? 'color:rgba(234, 90, 37, 1)'
                      : 'display:none'
                  "
                >
                  {{ name.title }}
                </div>
              </div>
              <div class="calc_body_item_modal">
                <div class="calc_body_item__subtitle_modal">
                  {{ tabValue[0].page.subTitle3 }}
                </div>

                <div
                  class="calc_body_line_modal"
                  v-for="name in tabValue[0].page.check3"
                  :value="name.value"
                  :time="name.time"
                  :isActive="name.isActive"
                  v-bind:style="
                    name.isActive
                      ? 'color:rgba(234, 90, 37, 1)'
                      : 'display:none'
                  "
                >
                  {{ name.title }}
                </div>
              </div>
              <div class="calc_body__checkbox_modal">
                <CalcCheckboxItem
                  v-for="(checkBox, index) in tabsCheckBox[0]"
                  :indexCheck="index"
                  :value="checkBox.value"
                  :isActive="checkBox.isActive"
                  :key="index"
                  :nameCheck="checkBox.title"
                  @getIndexCheck="getCheckboxValue"
                  >{{ checkBox.title }}</CalcCheckboxItem
                >
              </div>
            </div>
          </div>
          <div
            class="calc_origin_component"
            v-show="!modalCalc && selectedIndex === 0"
          >
            <div class="calc_body__tab __dev" v-show="activeTab(0)">
              <div class="calc_body__title">
                <h4>{{ tabValue[0].tab }}:</h4>
              </div>

              <div class="calc_body_item">
                <div class="calc_body_item__subtitle">
                  {{ tabValue[0].page.subTitle1 }}
                </div>
                <CalcCheckBoxLine1
                  :checkBoxArray="tabValue[0].page.check1"
                  @valueItem1="getValue1"
                />
              </div>
              <div class="calc_body_item">
                <div class="calc_body_item__subtitle">
                  {{ tabValue[0].page.subTitle2 }}
                </div>
                <CalcCheckBoxLine2
                  :checkBoxArray="tabValue[0].page.check2"
                  @valueItem2="getValue2"
                />
              </div>
              <div class="calc_body_item">
                <div class="calc_body_item__subtitle">
                  {{ tabValue[0].page.subTitle3 }}
                </div>
                <CalcCheckBoxLine3
                  :checkBoxArray="tabValue[0].page.check3"
                  @valueItem3="getValue3"
                />
              </div>
              <div class="calc_body__checkbox">
                <CalcCheckboxItem
                  v-for="(checkBox, index) in tabsCheckBox[0]"
                  :indexCheck="index"
                  :value="checkBox.value"
                  :isActive="checkBox.isActive"
                  :key="index"
                  :nameCheck="checkBox.title"
                  @getIndexCheck="getCheckboxValue"
                  >{{ checkBox.title }}</CalcCheckboxItem
                >
              </div>
            </div>
          </div>

          <div class="calc_body__tab __landingPage" v-show="activeTab(1)">
            <div class="calc_body__title">
              <h4>{{ tabValue[1].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[1].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[1].page.check1"
                @valueItem1="getValue1"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[1].page.subTitle2 }}
              </div>
              <CalcCheckBoxLine2
                :checkBoxArray="tabValue[1].page.check2"
                @valueItem2="getValue2"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[1].page.subTitle3 }}
              </div>
              <CalcCheckBoxLine3
                :checkBoxArray="tabValue[1].page.check3"
                @valueItem3="getValue3"
              />
            </div>
            <div class="calc_body__checkbox">
              <CalcCheckboxItem
                v-for="(checkBox, index) in tabsCheckBox[1]"
                :indexCheck="index"
                :value="checkBox.value"
                :isActive="checkBox.isActive"
                :key="index"
                :nameCheck="checkBox.title"
                @getIndexCheck="getCheckboxValue"
                >{{ checkBox.title }}</CalcCheckboxItem
              >
            </div>
          </div>
          <div class="calc_body__tab __onlineStore" v-show="activeTab(2)">
            <div class="calc_body__title">
              <h4>{{ tabValue[2].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[2].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[2].page.check1"
                @valueItem1="getValue1"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[2].page.subTitle2 }}
              </div>
              <CalcCheckBoxLine2
                :checkBoxArray="tabValue[2].page.check2"
                @valueItem2="getValue2"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[2].page.subTitle3 }}
              </div>
              <CalcCheckBoxLine3
                :checkBoxArray="tabValue[2].page.check3"
                @valueItem3="getValue3"
              />
            </div>
            <div class="calc_body__checkbox">
              <CalcCheckboxItem
                v-for="(checkBox, index) in tabsCheckBox[2]"
                :indexCheck="index"
                :value="checkBox.value"
                :isActive="checkBox.isActive"
                :key="index"
                :nameCheck="checkBox.title"
                @getIndexCheck="getCheckboxValue"
                >{{ checkBox.title }}</CalcCheckboxItem
              >
            </div>
          </div>
          <div class="calc_body__tab __portal" v-show="activeTab(3)">
            <div class="calc_body__title">
              <h4>{{ tabValue[3].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[3].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[3].page.check1"
                @valueItem1="getValue1"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[3].page.subTitle2 }}
              </div>
              <CalcCheckBoxLine2
                :checkBoxArray="tabValue[3].page.check2"
                @valueItem2="getValue2"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[3].page.subTitle3 }}
              </div>
              <CalcCheckBoxLine3
                :checkBoxArray="tabValue[3].page.check3"
                @valueItem3="getValue3"
              />
            </div>
            <div class="calc_body__checkbox">
              <CalcCheckboxItem
                v-for="(checkBox, index) in tabsCheckBox[3]"
                :indexCheck="index"
                :value="checkBox.value"
                :isActive="checkBox.isActive"
                :key="index"
                :nameCheck="checkBox.title"
                @getIndexCheck="getCheckboxValue"
                >{{ checkBox.title }}</CalcCheckboxItem
              >
            </div>
          </div>
          <div
            class="calc_body__tab __contextAdvertising"
            v-show="activeTab(4)"
          >
            <div class="calc_body__title">
              <h4>{{ tabValue[4].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[4].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[4].page.check1"
                @valueItem1="getValue1"
              />
            </div>
          </div>
          <div class="calc_body__tab __seo" v-show="activeTab(5)">
            <div class="calc_body__title">
              <h4>{{ tabValue[5].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[5].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[5].page.check1"
                @valueItem1="getValue1"
              />
            </div>
          </div>
          <div class="calc_body__tab __Logo" v-show="activeTab(6)">
            <div class="calc_body__title">
              <h4>{{ tabValue[6].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[6].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[6].page.check1"
                @valueItem1="getValue1"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[6].page.subTitle2 }}
              </div>
              <CalcCheckBoxLine2
                :checkBoxArray="tabValue[6].page.check2"
                @valueItem2="getValue2"
              />
            </div>
          </div>
          <div class="calc_body__tab __corporateStyle" v-show="activeTab(7)">
            <div class="calc_body__title">
              <h4>{{ tabValue[7].tab }}:</h4>
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[7].page.subTitle1 }}
              </div>
              <CalcCheckBoxLine1
                :checkBoxArray="tabValue[7].page.check1"
                @valueItem1="getValue1"
              />
            </div>
            <div class="calc_body_item">
              <div class="calc_body_item__subtitle">
                {{ tabValue[7].page.subTitle2 }}
              </div>
              <CalcCheckBoxLine2
                :checkBoxArray="tabValue[7].page.check2"
                @valueItem2="getValue2"
              />
            </div>
            <div class="calc_body__checkbox">
              <CalcCheckboxItem
                v-for="(checkBox, index) in tabsCheckBox[7]"
                :indexCheck="index"
                :value="checkBox.value"
                :isActive="checkBox.isActive"
                :key="index"
                :nameCheck="checkBox.title"
                @getIndexCheck="getCheckboxValue"
                >{{ checkBox.title }}</CalcCheckboxItem
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="calc_body__checkbox">
				<div class="calc_body__checkbox_item" :class="activeBtn1 ? 'active' : ''">
					<label for="cmsCheckbox" click.stop="active1">
						<input type="checkbox" id="cmsCheckbox" name="cmsCheckbox" />
						<span @click="active1"></span>
						<p @click="active1">Рукописна CMS</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn2 ? 'active' : ''">
					<label for="formCheckbox" @click.stop="active2">
						<input type="checkbox" id="formCheckbox" name="formCheckbox" checked />
						<span @click="active2"></span>
						<p @click="active2">Форма збору даних</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn3 ? 'active' : ''">
					<label for="calcCheckbox" @click="active3">
						<input type="checkbox" id="calcCheckbox" name="calcCheckbox" />
						<span @click="active3"></span>
						<p @click="active3">Калькулятор цін</p>
					</label>
				</div>
			</div> -->
      <div class="calc_body__footer">
        <div class="calc_body__footer_column">
          <div class="calc_body__footer_item">Орієнтовна вартість</div>
          <div class="calc_body__footer_item">
            Від {{ total[selectedIndex].value }} грн
          </div>
        </div>
        <div class="calc_body__footer_column">
          <div class="calc_body__footer_item">Термін виконання</div>
          <div class="calc_body__footer_item">
            Від {{ total[selectedIndex].time }} днів
          </div>
        </div>
      </div>
    </div>
    <div v-show="!modalCalc" class="calc_footer">
      <MainButton>Заказати</MainButton>
    </div>
    <div v-show="modalCalc" class="calc_footer_modalOrder">
      <MainButton>Заказати</MainButton>
    </div>
    <!-- <ModalOrder :modalCalcOpen="openMOdal"></ModalOrder> -->
  </div>
</template>
<script>
import MainButton from "../button/MainButton.vue";
import CalcButton from "../button/CalcButton.vue";
import CalcCheckboxItem from "./CalcCheckboxItem.vue";
import CalcCheckBoxLine1 from "./CalckCheckBoxLine.vue";
import CalcCheckBoxLine2 from "./CalckCheckBoxLine2.vue";
import CalcCheckBoxLine3 from "./CalckCheckBoxLine3.vue";
import Contacts from "./Contacts.vue";

import {
  PAGES,
  PAGES_LANDING,
  PAGES_MARKET_PLACE,
  PAGES_APP,
  PAGES_ADVERTISING,
  PAGES_SEO,
  PAGES_LOGO,
  PAGES_STYLE,
} from "../../data/staticData";
const SEO_MARKETING_PAGES = [4, 5];
const getInitialTotal = () => ({ value: 0, time: 0 });
export default {
  components: {
    MainButton,
    CalcButton,
    CalcCheckboxItem,
    CalcCheckBoxLine1,
    CalcCheckBoxLine2,
    CalcCheckBoxLine3,
    Contacts,
  },
  name: "Calc",
  props: {
    modalCalc: {
      type: Boolean,
    },
    selectTabModal: {
      type: Number,
    },
  },
  data() {
    return {
      openMOdal: false,
      total: Array.from({ length: 8 }).map(getInitialTotal),
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value: 0,
      time1: 0,
      time2: 0,
      time3: 0,
      time4: 0,
      time: 0,
      selectedIndex: 0,
      selectTabPage: [],
      tabs: [
        "Розробка сайту",
        "Розробка Landing page",
        "Розробка Iнтернет магазину",
        "Розробка портала",
        "Контекстна реклама",
        "SEO просування",
        "Розробка логотипу",
        "Розробка фiрмового стилю",
      ],
      tabsCheckBox: [
        [
          { title: "Рукописна CMS", value: 15000, time: 10, isActive: false },
          { title: "Форма збору даних", value: 500, time: 1, isActive: false },
          { title: "Калькулятор цін", value: 1000, time: 1, isActive: false },
        ],
        [
          { title: "Рукописна CMS", value: 15000, time: 10, isActive: false },
          { title: "Форма збору даних", value: 500, time: 1, isActive: false },
          { title: "Калькулятор цін", value: 1000, time: 1, isActive: false },
        ],
        [
          { title: "Форма збору даних", value: 500, time: 1, isActive: false },
          { title: "Рукописна CMS", value: 15000, time: 10, isActive: false },
          { title: "Особистий кабінет", value: 1500, time: 6, isActive: false },
          {
            title: "Імпорт/експорт через Ексель",
            value: 5000,
            time: 4,
            isActive: false,
          },
          { title: "Онлайн оплата", value: 3000, time: 3, isActive: false },
          { title: "Фільтр товарів", value: 1500, time: 3, isActive: false },
          {
            title: "Ярлики товарів(Акції,новинки...)",
            value: 3000,
            time: 3,
            isActive: false,
          },
          {
            title: "Порівняння,рейтинг товарів",
            value: 3000,
            time: 3,
            isActive: false,
          },
        ],
        [
          { title: "Форма збору даних", value: 500, time: 1, isActive: false },
          { title: "Рукописна CMS", value: 15000, time: 10, isActive: false },
          { title: "Особистий кабінет", value: 1500, time: 6, isActive: false },
        ],
        [
          {
            title: "Бренд на аксесуарах",
            value: 500,
            time: 2,
            isActive: false,
          },
          { title: "Бренд на бланках", value: 500, time: 2, isActive: false },
          { title: "Бренд на одягу", value: 500, time: 1, isActive: false },
        ],
      ],
      tabValue: [
        {
          tab: "Розробка сайту",
          page: PAGES,
        },

        {
          tab: "Розробка Landing page",
          page: PAGES_LANDING,
        },
        {
          tab: "Розробка Iнтернет магазину",
          page: PAGES_MARKET_PLACE,
        },
        {
          tab: "Розробка портала",
          page: PAGES_APP,
        },
        {
          tab: "Контекстна реклама",
          page: PAGES_ADVERTISING,
        },
        {
          tab: "SEO просування",
          page: PAGES_SEO,
        },
        {
          tab: "Розробка логотипу",
          page: PAGES_LOGO,
        },
        {
          tab: "Розробка фiрмового стилю",
          page: PAGES_STYLE,
        },
      ],
    };
  },
  methods: {
    cleanTotalValue() {
      if (this.selectedIndex <= 3) {
        this.tabsCheckBox[this.selectedIndex].forEach((item) => {
          if (item.isActive) {
            item.isActive = false;
          }
        });
      }
      if (this.tabValue[this.selectedIndex].page.hasOwnProperty("check1")) {
        this.tabValue[this.selectedIndex].page.check1.forEach((item) => {
          if (item.isActive) {
            item.isActive = false;
          }
        });
      }
      if (this.tabValue[this.selectedIndex].page.hasOwnProperty("check2")) {
        this.tabValue[this.selectedIndex].page.check2.forEach((item) => {
          if (item.isActive) {
            item.isActive = false;
          }
        });
      }
      if (this.tabValue[this.selectedIndex].page.hasOwnProperty("check3")) {
        this.tabValue[this.selectedIndex].page.check3.forEach((item) => {
          if (item.isActive) {
            item.isActive = false;
          }
        });
      }

      this.total[this.selectedIndex].value = 0;
      this.total[this.selectedIndex].time = 0;
    },
    getValue() {
      if (this.selectedIndex === 2) {
        this.value = this.value1 + this.value2 + this.value3 + this.value4;
        this.total[this.selectedIndex].value = this.value;
      } else if (!SEO_MARKETING_PAGES.includes(this.selectedIndex)) {
        this.value = this.value1 * (this.value2 + this.value3) + this.value4;
        this.total[this.selectedIndex].value = this.value;
      } else {
        this.total[this.selectedIndex].value = this.value1;
      }
    },
    getTime() {
      if (!SEO_MARKETING_PAGES.includes(this.selectedIndex)) {
        this.time = this.time1 + this.time2 + this.time3 + this.time4;
        this.total[this.selectedIndex].time = this.time;
      } else {
        this.total[this.selectedIndex].time = 0;
      }
    },
    getValue1(value) {
      console.log("1", value);
      this.value1 = value.valueCircle;
      this.getValue();
      this.time1 = value.timeCircle;
      this.getTime();
    },
    getValue2(value) {
      console.log("2", value);
      this.value2 = value.valueCircle;
      this.getValue();
      this.time2 = value.timeCircle;
      this.getTime();
    },
    getValue3(value) {
      console.log("3", value);
      this.value3 = value.valueCircle;
      this.getValue();
      this.time3 = value.timeCircle;
      this.getTime();
    },
    selectTab(id) {
      this.selectedIndex = id;
      // let dataPage = this.tabValue[this.selectedindex]
    },
    getCheckboxValue(i) {
      this.tabsCheckBox[this.selectedIndex][i].isActive =
        !this.tabsCheckBox[this.selectedIndex][i].isActive;
      let activeCheckValue = 0;
      let activeCheckTime = 0;
      this.tabsCheckBox[this.selectedIndex].forEach((item) => {
        if (item.isActive) {
          activeCheckValue += item.value;
          activeCheckTime += item.time;
        }
      });
      this.value4 = activeCheckValue;
      this.getValue();
      this.time4 = activeCheckTime;
      this.getTime();
    },
    activeTab(i) {
      return this.selectedIndex === i;
    },
  },
};
</script>
<style scoped>
.calc_body__calc {
  width: 100%;
  position: relative;
}

.calc_body_item {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.calc_body_item_modal {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}
.calc_body_line_modal {
  font-weight: 700;
  margin-left: 10px;
}

.calc_body_item__subtitle {
  align-items: flex-start;
  margin: 30px 0px 10px 0px;
}

.calc_body_item__subtitle_modal {
  margin: 10px 0px 10px 0px;
}

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

.calc_body__tab {
  margin-bottom: 80px;
}
.calc_body__tab_modal {
  padding-bottom: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid #fff;
}

.calc_body__checkbox {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  margin-top: 40px;
}

.calc_body__checkbox_modal {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
}
.calc_body__checkbox_modal > * {
  margin-right: 15px;
}

.calc_body__title {
  font-family: var(--title-font);
  font-size: 42px;
  line-height: 58px;
}

.calc_body__title_modal {
  padding: 0px 0px 30px 20px;
  font-family: var(--classic);
  font-size: 16px;
}

.calc_body__subtitle_modal {
  font-family: var(--classic);
  font-size: 12px;
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
.calc_modal {
  padding: 0px;
  width: 100%;
  height: 100%;
}
.calc_modalOrder {
  padding: 0px;
  width: 100%;
  height: 100%;
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

.calc_subtitle button {
  background: transparent;
  width: 110px;
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
  max-height: 100%;
  width: 100%;
}

.calc_footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
}
.calc_footer_modalOrder {
  margin-top: 35px;
  margin-left: 50px;
}
.calc_footer_modalOrder > * {
  width: 170px;
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
    text-wrap: nowrap;
  }

  .calc_subtitle button,
  span {
    display: none;
  }

  .calc_body__tab {
    margin-bottom: 10px;
  }

  .calc_tabs {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0px -10px 0px -10px;
  }

  .calc_footer {
    padding-top: 20px;
  }

  .calc_body__checkbox {
    margin-top: 20px;
  }
}
</style>

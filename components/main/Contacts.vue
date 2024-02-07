<template>
  <div class="contacts container" :style="modalCalc ? 'padding: 0px' : ''">
    <div v-if="modalCalc" class="contacts__title modalCalc">
      <h2>ЗАМОВЛЕННЯ</h2>
      <div
        class="contacts__modal__btn"
        @click.stop="$emit('closeModal')"
        v-show="this.$props.modal"
      >
        <button><span></span></button>
      </div>
    </div>
    <div v-else="!modalCalc" class="contacts__title">
      <h2>Контакти</h2>
      <div
        class="contacts__modal__btn"
        @click.stop="$emit('closeModal')"
        v-show="this.$props.modal"
      >
        <button><span></span></button>
      </div>
    </div>

    <div class="contacts__body">
      <div class="contacts__body_form">
        <form>
          <label for="text">
            <input
              class="contacts__form_inpt"
              type="text"
              placeholder="Введіть ваше ім'я *"
            />
          </label>
          <label for="number">
            <input type="number" placeholder="Номер телефону *" />
          </label>
          <label for="mail">
            <input type="mail" placeholder="Email *" />
          </label>

          <div class="contact_services">
            <div class="contact_services__head">
              <div v-if="selectServices" class="contact_services__items">
                <ServiceButton
                  v-for="(item, index) in itemListServicesSelect"
                  :key="index"
                  :isActive="item.isActive"
                  :itemId="item.type"
                  @itemIdSelect="$emit('selectCalcTabs', index)"
                  @removeItemSelect="removeSelect"
                  >{{ item.type }}</ServiceButton
                >
              </div>
              <div v-else class="contact_services__title">Тип послуги</div>
              <div
                class="contact_item__btn"
                :class="showServices ? 'active_btn' : ''"
              >
                <button @click.prevent="toggleServiceCard">
                  <span></span>
                </button>
              </div>
            </div>
            <div class="contact_services__body" v-show="showServices">
              <ServiceButton
                v-for="(item, index) in itemListServices"
                :key="index"
                :isActive="item.isActive"
                :itemId="item.type"
                @itemIdSelect="toggleListItemActive"
                @removeItemSelect="removeSelect"
                >{{ item.type }}</ServiceButton
              >
            </div>
          </div>
          <div
            v-show="!modalCalc"
            class="contacts__body_form_btn'"
            @click.prevent="$emit('modalClose')"
          >
            <MainButton
              :fontSize="'font-size:20px;padding:7px'"
              :style="'width:200px;margin-top:70px;margin-left:40px;'"
              >надіслати</MainButton
            >
          </div>
        </form>
      </div>
      <div class="contacts__body_info" v-show="!this.$props.modal">
        <div class="info__text">
          <div class="info__text_title">Номер телефону</div>
          <div class="info__text_subtitle">+380633746749</div>
        </div>
        <div class="info__messengers">
          <div class="info__messengers-tlgrm">
            <img
              src="../../static/image/block-7-info-telegram-logo.svg"
              alt="telegram-logo"
            />
            <img
              src="../../static/image/block-7-info-telegram-text.svg"
              alt="telegram-logo-text"
            />
          </div>
          <div class="info__messengers-wtsup">
            <img
              src="../../static/image/block-7-info-whatsapp-logo.svg"
              alt="whatsup-logo"
            />
            <img
              src="../../static/image/block-7-info-whatsapp-text.svg"
              alt="whatsup-logo-text"
            />
          </div>
        </div>
        <div class="info__text">
          <div class="info__text_title">Зв'яжіться з нами!</div>
          <div class="info__text_subtitle">info@brainlab.com.ua</div>
        </div>
        <div class="info__text">
          <div class="info__text_title">Наш офіс</div>
          <div class="info__text_subtitle">
            Україна, Київ<br />
            вулиця Євгена Сверстюка, 19
          </div>
        </div>
        <div class="info__text">
          <div class="info__text_title">Ми в соцмережах</div>
          <div class="info__text_subtitle">
            <ul @click.prevent="" class="info__subtitl_list">
              <li>
                <a href="" class="info__subtitle_link">facebook</a>
              </li>
              <li>
                <a href="" class="info__subtitle_link">instagram</a>
              </li>
              <li>
                <a href="" class="info__subtitle_link">linkedin</a>
              </li>
              <li>
                <a href="" class="info__subtitle_link">behance</a>
              </li>
              <li>
                <a href="" class="info__subtitle_link">vimeo</a>
              </li>
              <li>
                <a href="" class="info__subtitle_link">pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from "../button/MainButton.vue";
import ServiceButton from "../button/ServiceButton.vue";

export default {
  components: { MainButton, ServiceButton },
  name: "Contacts",
  props: {
    modal: {
      type: Boolean,
    },
    modalCalc: {
      type: Boolean,
    },
  },
  data() {
    return {
      showServices: false,
      selectServices: false,
      itemListServices: [
        { type: "Landing page", isActive: false },
        { type: "Корпоративні сайти", isActive: false },
        { type: "Інтернет магазин", isActive: false },
        { type: "Бізнес сайт", isActive: false },
        { type: "Сайт візитка", isActive: false },
        { type: "Дизайн сайту", isActive: false },
        { type: "Розробка сайту", isActive: false },
        { type: "Редизайн сайту", isActive: false },
        { type: "Ecommerce проекти", isActive: false },
      ],
      itemListServicesSelect: [],
    };
  },
  methods: {
    toggleServiceCard() {
      this.showServices = !this.showServices;
    },
    toggleListItemSelect(id) {
      this.itemListServicesSelect.pop((item) => item.type === id);
      if (this.itemListServicesSelect.length === 0) {
        this.selectServices = false;
      }
    },
    toggleListItemActive(name) {
      this.itemListServices.forEach((item, index) => {
        if (item.type === name) {
          item.isActive = true;
          this.selectServices = true;
          this.itemListServicesSelect.push(item);
          this.$emit("selectCalcTabs", index);
          this.toggleServiceCard();
        }
      });
      console.log(this.itemListServices);
      console.log(this.itemListServicesSelect);
    },
    removeSelect(i) {
      this.itemListServicesSelect.filter((item) => item != i);
      this.$emit("removeCalcTabs", i);
    },
  },
};
</script>
<style scoped>
.contacts__modal__btn {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: right;
}
.contacts__modal__btn span::before,
.contacts__modal__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 3px;
  width: 25px;
  height: 3px;
  background-color: rgb(253, 252, 252);
}
.contacts__modal__btn span::after {
  transform: rotate(45deg);
}
.contacts__modal__btn span::before {
  transform: rotate(-45deg);
}
.contacts__modal__btn:hover {
  span::before,
  span::after {
    background-color: rgba(234, 90, 37, 1);
  }
}

.contacts {
  position: relative;
  padding: 0px 14.5px;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 96;
}

/* .contacts::before {
	content: "";
	position: absolute;
	bottom: -170px;
	left: -620px;
	height: 492px;
	width: 842px;
	transform: rotate(133deg);
	opacity: 30%;
	background: linear-gradient(87.08deg, #203f6a 0%, #ea5a25 100%);
	box-shadow: inset 0px 0px 130px 50px black;

	z-index: 1;
} */

/* .contacts::after {
	content: "";
	position: absolute;
	top: 160px;
	right: 0px;
	width: 160px;
	height: 160px;
	background: url(../../static/image/block-7-star.svg) center no-repeat;
} */

.contacts__title {
  font-family: var(--title-font);
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
}
.contacts__title h2 {
  display: inline-block;
  font-family: var(--title-font);
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
}
.modalCalc {
  margin-bottom: 70px;
}

.contacts__body {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
}

.contacts__body_form {
  flex: 0 0 50%;
  max-width: 629px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.contacts__body_form input {
  padding: 3px 0px 22px 20px;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
  margin-bottom: 30px;
}

.contacts__form_inpt {
}

.info__subtitl_list {
  display: flex;
  flex-wrap: wrap;
  max-width: 420px;
  padding-top: 10px;
}

.info__subtitl_list li {
  margin-right: 30px;
  margin-bottom: 6px;
}

.contacts__body_info {
  margin-left: 10px;
}

.contact_services {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
  margin-bottom: 30px;
}

.contact_services__head {
  display: flex;
  justify-content: space-between;
}

.contact_services__title {
  font-size: 16px;
  padding: 3px 0px 22px 20px;
  color: rgba(248, 248, 248, 1);
  opacity: 50%;
}
.contact_services__items {
  margin: 5px;
}

.contact_item__btn,
.contact_item__btn button {
  width: 30px;
  height: 30px;
  background: transparent;
}

.contact_item__btn {
  position: relative;
  padding-right: 20px;
}

.contact_item__btn span::before,
.contact_item__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 15px;
  width: 15px;
  height: 2px;
  background: rgba(234, 90, 37, 1);
}

.contact_item__btn span::after {
  transform: rotate(90deg);
}

.contact_services__head:hover {
  .contact_item__btn span::before,
  .contact_item__btn span::after {
    background: rgb(247, 245, 245);
  }
}

.active_btn {
  span::after {
    top: 18.5px;
    right: 18px;
    width: 8px;
    height: 2px;
    background-color: rgba(234, 90, 37, 1);
  }

  .contact_item__btn span::before,
  .contact_item__btn span::after {
    top: 18px;
    right: 18px;
    width: 8px;
    height: 2px;

    background-color: rgba(234, 90, 37, 1);
  }
}
.info__subtitle_link:hover {
  color: rgba(234, 90, 37, 1);
}
.contact_item__btn {
}

.contact_services__body {
  margin-bottom: 14px;
}

/* .contacts__body_form_btn {
  margin-top: 50px;
  margin-left: 140px;
  width: 200px;
} */

.info__text {
  align-items: flex-start;
  font-size: 16px;
  margin-bottom: 39.5px;
  flex: 0 0 50%;
}

.info__text_title {
  font-size: 15px;
  line-height: 25px;

  margin-bottom: 10px;
}

.info__text_subtitle {
  line-height: 25px;
  opacity: 50%;
}

.info__messengers {
  display: flex;
  flex-direction: row;
  margin-top: -20px;
  margin-bottom: 30px;
}

.info__messengers-tlgrm {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11.5px;
}

.info__messengers-wtsup {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .contacts {
    padding: 0px 14.5px;
  }

  .contacts__title h2 {
    font-size: 60px;
  }
  .contacts__title {
    margin-bottom: 40px;
    margin-top: 50px;
  }

  .contacts__body_form {
  }

  .contacts__body_info {
    max-width: 417px;
  }
}

@media (max-width: 970px) {
  /* .contacts::after {
		content: "";
		position: absolute;
		top: 50px;
		right: 0px;
		scale: 0.7;
		transform: rotate(45deg);
	} */

  .contacts__title h2 {
    font-size: 40px;
  }

  .contacts__body_info {
    align-items: flex-end;
    justify-content: flex-end;
    max-width: 400px;
  }
}

@media (max-width: 767px) {
  .contacts__modal__btn {
    display: none;
  }
  .contacts__title {
    font-size: 22px;
  }

  .contacts__body {
    flex-direction: column;
  }

  .contacts__body_form_btn {
    display: none;
    margin-top: 10px;
    flex: 1 1 100%;
  }

  .contacts__body_info {
    margin-top: 20px;
  }

  .contacts__body_info {
    flex: 1 1 100%;
    align-items: center;
  }
}
@media (max-width: 500px) {
  .contacts__body_form input {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="footer">
    <div class="footer__header">
      <div class="container">
        <div class="footer__head">
          <ClassicButton style="transform: rotate(10.87deg)"
            >написати</ClassicButton
          >
          <ClassicButton style="transform: rotate(-19.8deg)"
            >Чому ми</ClassicButton
          >
          <ClassicButton
            style="
              transform: rotate(9.21deg);
              background-color: rgba(32, 63, 106, 1);
            "
            >Що я хочу</ClassicButton
          >
          <ClassicButton style="transform: rotate(-13.53deg)"
            >підписатися</ClassicButton
          >
          <ClassicButton
            style="
              transform: rotate(22.39deg);
              background-color: rgba(32, 63, 106, 1);
            "
            >дізнатись ціни</ClassicButton
          >
        </div>
        <div class="footer__body">
          <div class="footer__address">
            <div class="footer__address_logo">
              <img src="../../static/image/logo-full.png" alt="Logo" />
            </div>
            <div class="info__text">
              <div class="info__text_title">Адреса:</div>
              <div class="info__text_subtitle">
                Україна, Київ<br />
                вулиця Євгена Сверстюка, 19
              </div>
            </div>
            <div class="info__text">
              <div class="info__text_title">Телефон:</div>
              <div class="info__text_subtitle">+380633746749</div>
            </div>
            <div class="info__text">
              <div class="info__text_title">E-mail:</div>
              <div class="info__text_subtitle">info@brainlab.com.ua</div>
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
          </div>
          <FooterItem :itemList="itemListServices">Послуги</FooterItem>
          <FooterItem :itemList="itemListInfo" class="servises_long-item"
            >Інформація</FooterItem
          >
          <FooterItem :itemList="itemListSocial">Соц. мережі</FooterItem>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2023 kravatka.agency - All right reserved</p>
      <button>
        <nuxt-link
          :to="{ path: '/', hash: 'header' }"
          :v-scroll-to="{ el: '#header' }"
          >до початку</nuxt-link
        >
      </button>
    </div>
  </div>
</template>
<script>
import ClassicButton from "../button/ClassicButton.vue";
import FooterItem from "./FooterItem.vue";
export default {
  components: { ClassicButton, FooterItem },
  name: "Footer",
  data() {
    return {
      itemListServices: [
        { title: "Landing page", path: "calc" },
        { title: "Корпоративні сайти", path: "calc" },
        { title: "Інтернет магазин", path: "calc" },
        { title: "Бізнес сайт", path: "calc" },
        { title: "Сайт візитка", path: "calc" },
        { title: "Дизайн сайту", path: "calc" },
        { title: "Розробка сайту", path: "calc" },
        { title: "Редизайн сайту", path: "calc" },
        { title: "Ecommerce проекти", path: "calc" },
      ],
      itemListInfo: [
        { title: "Про нас", path: "" },
        { title: "Послуги", path: "service" },
        { title: "Портфоліо", path: "portfolio" },
        { title: "Блог", path: "" },
        { title: "Створення сайту на WordPress", path: "calc" },
        { title: "Створення сайту на Opencart", path: "calc" },
        { title: "Створення сайтів у Львові", path: "" },
        { title: "Створення сайтів у Харкові", path: "" },
        { title: "Створення сайту у Дніпрі", path: "" },
      ],
      itemListSocial: [
        { title: "Facebook", path: "" },
        { title: "Instagram", path: "" },
        { title: "Linkedin", path: "" },
        { title: "Behance", path: "" },
        { title: "Vimeo", path: "" },
        { title: "Pinterest", path: "" },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  padding: 0px 14.5px;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.footer__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
}
.footer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 213px;
  margin: 0px -30px 70px -30px;
}
.footer__item__btn {
  display: none;
}
.footer__body {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.info__text {
  align-items: flex-start;
  font-size: 16px;
  margin-bottom: 39.5px;
  flex: 0 0 50%;
}
.info__text_title {
  font-size: 15px;
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
.footer__address {
  padding: 0px 20px;
  .info__text {
    margin-bottom: 5px;
  }
  .info__messengers {
    margin-top: 16.28px;
  }
}
.footer__address {
  flex: 0 1 25%;
}
.footer__address img {
  margin-bottom: 39px;
}

.servises_long-item {
  display: block;
  text-align: justify;
}
.footer__bottom p {
  text-align: center;
}
.footer__bottom {
  position: relative;
}

.footer__bottom button {
  position: absolute;
  top: -150px;
  right: 50px;
  width: 80px;
  height: 80px;
  background: transparent;
  border: 1px solid rgba(234, 90, 37, 1);
  text-align: center;
}
.footer__bottom button > * {
  font-family: var(--subTitle-font);
  text-wrap: wrap;
  font-size: 10px;
  line-height: 19px;
}
.footer__bottom button:hover {
  background: rgba(234, 90, 37, 1);
}
@media (max-width: 1200px) {
  .footer__body {
    flex-wrap: wrap;
  }
  .footer__head {
    max-height: 277px;
    margin: 0px 0px 40px 0px;
    flex-wrap: wrap;
  }
}
@media (max-width: 970px) {
}
@media (max-width: 767px) {
  .footer__body {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer__head {
    justify-content: space-around;
  }

  .footer__address {
    flex: 1 0 100%;
    width: 100%;
  }

  .footer__address {
    padding: 0px;
    .info__messengers,
    .info__text {
      display: none;
    }
  }
  .footer__bottom button {
    display: none;
  }
}
</style>

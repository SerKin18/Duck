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
        "Landing page",
        "Корпоративні сайти",
        "Інтернет магазин",
        "Бізнес сайт",
        "Сайт візитка",
        "Дизайн сайту",
        "Розробка сайту",
        "Редизайн сайту",
        "Ecommerce проекти",
      ],
      itemListInfo: [
        "Про нас",
        "Послуги",
        "Портфоліо",
        "Блог",
        "Створення сайту на WordPress",
        "Створення сайту на Opencart",
        "Створення сайтів у Львові",
        "Створення сайтів у Харкові",
        "Створення сайту у Дніпрі",
      ],
      itemListSocial: [
        "Facebook",
        "Instagram",
        "Linkedin",
        "Behance",
        "Vimeo",
        "Pinterest",
      ],
    };
  },
};
</script>
<style>
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
}
</style>

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
          <div class="footer__servises">
            <div class="footer__servises_title">
              <div><h4>Послуги</h4></div>
              <div class="FQS-item__btn footer__item__btn">
                <button><span></span></button>
              </div>
            </div>
            <div class="footer__list_items">
              <nav>
                <ul @click.prevent="" class="footer__list_item">
                  <li><a href="#">Landing page</a></li>
                  <li><a href="#">Корпоративні сайти</a></li>
                  <li><a href="#">Інтернет магазин</a></li>
                  <li><a href="#">Бізнес сайт</a></li>
                  <li><a href="#">Сайт візитка</a></li>
                  <li><a href="#">Дизайн сайту</a></li>
                  <li><a href="#">Розробка сайту</a></li>
                  <li><a href="#">Редизайн сайту</a></li>
                  <li><a href="#">Ecommerce проекти</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="footer__servises servises_long-item">
            <div class="footer__servises_title">
              <h4>Інформація</h4>
              <div class="footer__item__btn">
                <button><span></span></button>
              </div>
            </div>
            <div class="footer__list_items">
              <nav>
                <ul @click.prevent="" class="footer__list_item">
                  <li><a href="#">Про нас</a></li>
                  <li><a href="#">Портфоліо</a></li>
                  <li><a href="#">Блог</a></li>
                  <li><a href="#">Створення сайту на WordPress</a></li>
                  <li><a href="#">Створення сайту на Opencar</a></li>
                  <li><a href="#">Створення сайтів у Львові</a></li>
                  <li><a href="#">Створення сайтів у Харкові</a></li>
                  <li><a href="#">Створення сайту у Дніпрі</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="footer__servises">
            <div class="footer__servises_title">
              <h4>Соц. мережі</h4>
              <div class="footer__item__btn">
                <button><span></span></button>
              </div>
            </div>
            <div class="footer__list_items">
              <nav>
                <ul @click.prevent="" class="footer__list_item">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Блог</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Behance</a></li>
                  <li><a href="#">Vimeo</a></li>
                  <li><a href="#">Pinterest</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2023 kravatka.agency - All right reserved</p>
    </div>
  </div>
</template>
<script>
import ClassicButton from "../button/Classic-Button.vue";
export default {
  components: { ClassicButton },
  name: "Footer",
};
</script>
<style scoped>
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

.footer__servises {
  max-width: 280px;
  white-space: nowrap;
  flex: 0 1 25%;
  padding: 0px 20px;
}
.servises_long-item {
  display: block;
  text-align: justify;
}
.footer__servises_title {
  font-family: var(--title);
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 25.8px;
}
.footer__list_items li {
  display: block;
  margin-bottom: 15px;
}
.servises_long-item li {
  margin-bottom: 19px;
}
.footer__list_item ul li {
  display: inline-block;
}
.footer__bottom {
  text-align: center;
  font-size: 14px;
}
.footer__list_item li a:hover {
  color: rgba(234, 90, 37, 1);
}
.footer__item__btn {
  width: 30px;
  height: 30px;
}
.footer__item__btn {
  position: relative;
}
.footer__item__btn span::before,
.footer__item__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 15px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.footer__item__btn span::after {
  transform: rotate(90deg);
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
    align-items: flex-start;
  }
  .footer__head {
    justify-content: space-around;
  }
  .footer__servises,
  .footer__address {
    flex: 1 0 100%;
    width: 100%;
  }
  .footer__servises_title {
    display: block;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .footer__servises_title {
    padding: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer__item__btn {
    display: block;
  }
  .footer__address {
    padding: 0px;
    .info__messengers,
    .info__text {
      display: none;
    }
  }
  .footer__list_items li {
    margin-bottom: 0px;
  }
  .footer__list_items a {
    font-style: 16px;
    color: rgba(248, 248, 248, 1);
    line-height: 25px;
  }
  .footer__list_items {
    display: none;
  }
}
</style>

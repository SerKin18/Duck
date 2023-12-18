<template>
  <div class="container">
    <div class="footer">
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
            <h4>Послуги</h4>
          </div>
          <div class="footer__list_items">
            <ul @click.prevent="" class="footer__list_item">
              <li>Landing page</li>
              <li>Корпоративні сайти</li>
              <li>Інтернет магазин</li>
              <li>Бізнес сайт</li>
              <li>Сайт візитка</li>
              <li>Дизайн сайту</li>
              <li>Розробка сайту</li>
              <li>Редизайн сайту</li>
              <li>Ecommerce проекти</li>
            </ul>
          </div>
        </div>
        <div class="footer__servises">
          <div class="footer__servises_title">
            <h4>Інформація</h4>
          </div>
          <div class="footer__list_items">
            <ul @click.prevent="" class="footer__list_item">
              <li>Про нас</li>
              <li>Портфоліо</li>
              <li>Блог</li>
              <li>Створення сайту на WordPress</li>
              <li>Створення сайту на Opencart</li>
              <li>Створення сайтів у Львові</li>
              <li>Створення сайтів у Харкові</li>
              <li>Створення сайту у Дніпрі</li>
            </ul>
          </div>
        </div>
        <div class="footer__servises">
          <div class="footer__servises_title">
            <h4>Соц. мережі</h4>
          </div>
          <div class="footer__list_items">
            <ul @click.prevent="" class="footer__list_item">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Блог</li>
              <li>Linkedin</li>
              <li>Behance</li>
              <li>Vimeo</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2023 kravatka.agency - All right reserved</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.footer__body {
  display: flex;
  justify-content: space-between;
}

.footer__servises {
  justify-content: space-between;
}
.footer__servises_title {
}
.footer__list_items {
}
.footer__list_item {
  display: block;
}
.footer__bottom {
  text-align: center;
  font-size: 14px;
}
</style>

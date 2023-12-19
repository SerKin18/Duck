<template>
    <div class="contacts__block">
		<div class="container">
		<div class="contacts">
      <div class="contacts__title"><h2>Контакти</h2></div>
      <div class="contacts__body">
        <div class="contacts__body_form">
          <form>
            <label for="">
              <input
                class="contacts__form_inpt"
                type="text"
                placeholder="Введіть ваше ім'я *"
              />
            </label>
            <label for="">
              <input type="number" placeholder="Номер телефону *" />
            </label>
            <label for="">
              <input type="mail" placeholder="Email *" />
            </label>
            <label for="">
              <input type="select" placeholder="Тип послуги" />
            </label>
            <div class="contacts__body_form_btn">
              <MainButton style="font-size: 20px">надіслати</MainButton>
            </div>
          </form>
        </div>
        <div class="contacts__body_info">
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
	 </div>
	</div>	
  </div>
</template>
<script>
import MainButton from "../button/Main-Button.vue";
export default {
  components: { MainButton },
  name: "block-8",
};
</script>
<style >
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.contacts {
  position: relative;
  padding: 100px 0px;
  background-color: black;
  display: flex;
  flex-direction: column;
  z-index: 5;
}
.contacts::before {
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
}
.contacts::after {
  content: "";
  position: absolute;
  top: 160px;
  right: 0px;
  width: 160px;
  height: 160px;
  background: url(../../static/image/block-7-star.svg) center no-repeat;
}

.contacts__title {
  font-family: var(--title-font);
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
}
.contacts__body {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  z-index: 6;
}
.contacts__body_form {
	
  flex: 0 0 50%;
  max-width: 629px;
  display: flex;
  flex-direction: column;
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
  width: 300px;
  padding-top: 10px;
}
.info__subtitl_list li {
  margin-right: 30px;
  margin-bottom: 6px;
}
.contacts__body_info {
  width: 417px;
}
.contacts__body_form_btn {
  margin-top: 50px;
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
@media (max-width: 1200px) {
  .contacts {
    padding: 50px 0px;
  }
  .contacts__title {
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 60px;
  }
  .contacts__body_form {
  }
  .contacts__body_info {
    max-width: 417px;
  }
}
@media (max-width: 970px) {
  .contacts::after {
    content: "";
    position: absolute;
    top: 50px;
    right: 0px;
    scale: 0.7;
    transform: rotate(45deg);
  }

  .contacts__title {
    font-size: 40px;
  }
  .contacts__body_info {
    align-items: flex-end;
    justify-content: flex-end;
    max-width: 400px;
  }
}
@media (max-width: 767px) {
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
</style>

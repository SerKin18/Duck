<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <a href="#" class="header__logo">
          <img src="../../static/image/logo-full.png" alt="Logo" />
        </a>
        <nav class="header__menu">
          <ul @click.prevent="" class="header__list">
            <li>
              <a href="" class="header__link">Услуги</a>
            </li>
            <li>
              <a href="" class="header__link">Портфолио</a>
            </li>
            <li>
              <a href="" class="header__link">Преимущества</a>
            </li>
            <li>
              <a href="" class="header__link">Калькулятор</a>
            </li>
            <li>
              <a href="" class="header__link">Крядио</a>
            </li>
          </ul>
        </nav>
        <main-button> залишити заявку </main-button>
        <div class="header__lang">
          <span>En</span>
        </div>
        <div class="header__burger">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import MainButton from "../button/Main-Button.vue";
export default {
  components: { MainButton },
  name: "Header",
};
</script>
<style>
.header {
  margin-bottom: 90px;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.header__body {
  display: flex;
  align-items: center;
}
.header__logo {
}
.header__lang {
  margin-left: 96px;
}
.header__menu {
  margin-left: 100px;
}
.header__list {
  display: flex;
}
.header__link {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-right: 40px;
}
.header__link li:last-child {
  margin-right: 0px;
}
.header__link li::before {
  content: "";
  position: absolute;
  /* background: url(../../static/image/Star-hover-text-menu.png) no-repeat; */
}
.header__link:hover {
  background: linear-gradient(90deg, #ed5d28 0%, #ffbb0d 100%);
  font-weight: 600;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header__burger {
  display: none;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.header__burger span {
  width: 30px;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(218, 99, 55, 1);
  transition: all 0.5s;
}
.header__burger span:nth-of-type(2) {
  top: calc(50% - 10px);
}
.header__burger span:nth-of-type(3) {
  top: calc(50% + 10px);
}
</style>

<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="header__body">
          <a href="#" class="header__logo">
            <img src="../../static/image/logo-full.png" alt="Logo" />
          </a>
          <nav class="header__menu">
            <ul @click.prevent="" class="header__list">
              <li>
                <a href="" class="header__link">Услуги<span></span></a>
              </li>
              <li>
                <a href="" class="header__link">Портфолио<span></span></a>
              </li>
              <li>
                <a href="" class="header__link">Преимущества<span></span></a>
              </li>
              <li>
                <a href="" class="header__link">Калькулятор<span></span></a>
              </li>
              <li>
                <a href="" class="header__link">Крядио<span></span></a>
              </li>
            </ul>
          </nav>

          <main-button class="btn-menu"> залишити заявку </main-button>
          <div class="header__lang">
            <span>En</span>
            <div class="header__burger">
              <span></span>
              <span></span>
            </div>
          </div>
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
  justify-content: space-between;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.header__body {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.header__logo {
}
.header__lang {
  display: flex;
  margin-left: 96px;
}
.header__menu {
  margin-left: 100px;
}
.header__list {
  display: flex;
}
.header__list a {
  display: inline-block;
}
.header__link {
  position: relative;
  font-weight: 600;
  line-height: 20px;
  margin-right: 40px;
  font-family: "GothamPro", sans-serif;
}
.header__link li:last-child {
  margin-right: 0px;
}
.header__link span,
.header__link span:before,
.header__link span:after {
  content: "";
  opacity: 0;
  position: absolute;
  bottom: -5px;
  right: 51%;
  width: 9px;
  height: 9px;
  background: url(../../static/image/header-link-star.svg) center no-repeat;
}
.header__link span:after {
  top: -16px;
  right: -35px;
  scale: 0.9;
}
.header__link span::before {
  top: -22px;
  left: -28px;
  scale: 0.7;
}
.header__link:hover {
  background: linear-gradient(90deg, #ed5d28 0%, #ffbb0d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span,
  span::before,
  span::after {
    opacity: 1;
  }
}

.header__burger {
  display: none;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin-left: 15px;
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
@media (max-width: 1200px) {
  .header {
    margin-bottom: 20px;
  }
  .header__menu {
    margin-left: 20px;
  }
  .header__list {
    display: flex;
    flex-wrap: wrap;
  }
  .header__link {
    margin-right: 15px;
  }
  .header__lang {
    margin-left: 36px;
  }
}
@media (max-width: 970px) {
  .header__body {
    justify-content: space-around;
  }
  .header__list {
    align-items: center;
    justify-content: center;
    a {
      margin-top: 20px;
    }
  }
}
@media (max-width: 767px) {
  .header__body {
    margin-top: 40px;
    justify-content: space-between;
  }
  .header__logo {
    height: 40px;
    width: 142px;
  }
  .header__list,
  .btn-menu {
    display: none;
  }
  .header__burger {
    display: block;
  }
}
/* @media (max-width: 479px){

} */
</style>

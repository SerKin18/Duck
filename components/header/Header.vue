<template>
  <header>
    <div class="container">
      <div class="header" id="header">
        <div class="header__body">
          <nuxt-link to="" class="header__logo">
            <img src="../../static/image/logo-full.png" alt="Logo" />
          </nuxt-link>
          <div class="header__menu_items">
            <nav class="header__menu">
              <ul @click.prevent="" class="header__list">
                <li>
                  <nuxt-link
                    class="header__link"
                    :to="{ path: '/', hash: 'service' }"
                    :v-scroll-to="{ el: '#service' }"
                    >Услуги<span></span
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="header__link"
                    :to="{ path: '/', hash: 'portfolio' }"
                    :v-scroll-to="{ el: '#portfolio' }"
                    >Портфолио<span></span
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="header__link"
                    :to="{ path: '/', hash: 'whyus' }"
                    :v-scroll-to="{ el: '#whyus' }"
                    >Преимущества<span></span
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="header__link"
                    :to="{ path: '/', hash: 'calc' }"
                    :v-scroll-to="{ el: '#calc' }"
                    >Калькулятор</nuxt-link
                  >
                  <!-- <nuxt-link href="#calculate" class="header__link"
                    >Калькулятор<span></span
                  ></nuxt-link> -->
                </li>
                <li>
                  <nuxt-link
                    href=""
                    class="header__link"
                    :to="{ path: '/', hash: 'radio' }"
                    :v-scroll-to="{ el: '#radio' }"
                    >Крядио<span></span
                  ></nuxt-link>
                </li>
              </ul>
            </nav>
            <div class="header__button">
              <main-button class="btn-menu" @openModal="openModalWindow">
                залишити заявку
              </main-button>
            </div>
          </div>
          <div class="header__menu_dropdown" v-show="openMenu">
            <div class="header__menu_dropdown__btn" @click.stop="toggleMenu">
              <button><span></span></button>
            </div>
            <div class="header__menu_dropdown_menu">
              <nav class="header__menu">
                <ul class="header__list">
                  <li @click="toggleMenu">
                    <nuxt-link
                      :to="{ path: '/', hash: 'service' }"
                      :v-scroll-to="{ el: '#service' }"
                      class="header__link"
                      >Услуги<span></span
                    ></nuxt-link>
                  </li>
                  <li @click="toggleMenu">
                    <nuxt-link
                      :to="{ path: '/', hash: 'portfolio' }"
                      :v-scroll-to="{ el: '#portfolio' }"
                      class="header__link"
                      >Портфолио<span></span
                    ></nuxt-link>
                  </li>
                  <li @click="toggleMenu">
                    <nuxt-link
                      :to="{ path: '/', hash: 'whyus' }"
                      :v-scroll-to="{ el: '#whyus' }"
                      class="header__link"
                      >Преимущества<span></span
                    ></nuxt-link>
                  </li>
                  <li @click="toggleMenu">
                    <nuxt-link
                      :to="{ path: '/', hash: 'calc' }"
                      :v-scroll-to="{ el: '#calc' }"
                      class="header__link"
                      >Калькулятор<span></span
                    ></nuxt-link>
                  </li>
                  <li @click="toggleMenu">
                    <nuxt-link
                      :to="{ path: '/', hash: 'radio' }"
                      :v-scroll-to="{ el: '#radio' }"
                      class="header__link"
                      >Крядио<span></span
                    ></nuxt-link>
                  </li>
                </ul>
              </nav>
              <div class="header__button">
                <main-button @openModal="openModalWindow" class="btn-menu">
                  залишити заявку
                </main-button>
              </div>
            </div>
          </div>
          <div class="header__lang">
            <span>En</span>
            <div class="header__burger" @click.stop="toggleMenu">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <Modal v-if="openModal" @close="openModalWindow"></Modal>
    </div>
  </header>
</template>
<script>
import MainButton from "../button/MainButton.vue";
import Modal from "../main/Modal.vue";

export default {
  components: { MainButton, Modal },
  name: "Header",
  data() {
    return {
      openMenu: false,
      openModal: false,
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
      console.log(this.openMenu);
    },
    openModalWindow() {
      this.openModal = !this.openModal;
    },
  },
};
</script>
<style scoped>
header {
  padding: 18px 14.5px 0px 14.5px;
}
.header__menu_dropdown {
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 40px 24px;
  background-color: black;
  z-index: 99;
  .header__menu {
    margin-left: 0px;
  }

  .header__menu_dropdown__btn {
    position: relative;
    width: 100%;
    height: 30px;
  }
  .header__menu_dropdown__btn span::before,
  .header__menu_dropdown__btn span::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 3px;
    width: 25px;
    height: 3px;
    background-color: rgba(234, 90, 37, 1);
  }
  .header__menu_dropdown__btn span::after {
    transform: rotate(45deg);
  }
  .header__menu_dropdown__btn span::before {
    transform: rotate(-45deg);
  }
  .header__menu_dropdown_menu {
    width: 100%;
    background-color: black;
    align-items: center;
    justify-content: center;
    .header__link {
      margin: 0px 0px 40px 0px;
    }
    .header__list {
      margin-top: 90px;
    }
    .header__button {
      width: 240px;
      margin: 0 auto;
      .btn-menu {
        margin: 0px 0px 0px 10px;
      }
    }
  }

  .header__list {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.header__menu_items {
  display: flex;
  align-items: center;
  z-index: 97;
}
.header__button {
  width: 180px;
  margin: 0px 0px 0px 30px;
}
.header {
  margin-bottom: 90px;
  justify-content: space-between;
  z-index: 97;
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
  margin-left: 70px;
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
  font-size: 16px;
  z-index: 96;
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
  .header__menu_items {
    display: none;
  }
  .header__burger {
    display: block;
  }
}
/* @media (max-width: 479px){

} */
</style>

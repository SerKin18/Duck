<template>
  <div class="block-1">
    <div class="block-1__body">
      <div class="block-1__body_title">
        <h3>Послуги <span>графічного</span> дизайну</h3>
      </div>
      <div class="block-1__body_text">
        <p>
          Будьте творчими та виділяйтесь в конкурентному бізнес-середовищі за
          допомогою ефективних рішень з графічного дизайну від Wild Web!
        </p>
      </div>
      <main-button
        class="btn-block-1"
        :fontSize="'font-size:18px;padding:8px;max-width:270px'"
        >поговоримо?</main-button
      >
    </div>
    <div class="block-1__image">
      <img src="/image/design-banner.png" alt="image-duck-banner" />
    </div>
    <main-button
      class="btn-block-2"
      :fontSize="'font-size:18px;padding:8px;width: 220px'"
      >поговоримо?</main-button
    >
  </div>
</template>
<script>
import MainButton from "../button/MainButton.vue";

export default {
  components: { MainButton },
  name: "Banner",
};
</script>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.block-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 9;
  margin-bottom: 100px;
  padding: 0px 14.5px;
}
.btn-block-2 {
  display: none;
}

.btn-block-1 {
  width: 240px;
  margin: 0px 0px 0px 50px;
}
.block-1__body {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 535px;
  margin-top: 105px;
  z-index: 5;
}

.block-1__body_title {
  text-transform: uppercase;
  font-size: 42px;
  line-height: 58px;
  margin-bottom: 30px;
  font-family: var(--title-font);
}

.block-1__body_title span {
  position: relative;
  line-height: 70px;
  text-shadow: 0 0 1px #fff;
  color: rgb(0, 0, 0);
}

@supports (-webkit-text-stroke: 1px white) {
  .block-1__body_title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
  }
}

.block-1__body_title span:after {
  content: "";
  position: absolute;
  top: -23px;
  right: 50.5%;
  width: 34.29px;
  height: 34.29px;
  background: url(~/static/image/block-1-snow-i.svg) center;
}

.block-1__body_text {
  padding: 0px 24px 0px 0px;
  font-family: var(--subTitle-font);
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 30px;
}

.block-1__image {
  max-width: 50%;
  z-index: 5;
  position: relative;
}
.block-1__image::before {
  content: "";
  position: absolute;
  bottom: -50px;
  right: 130px;
  height: 400px;
  width: 862px;
  transform: rotate(-47.3deg);
  opacity: 30%;
  background: linear-gradient(87.08deg, #203f6a 0%, #ea5a25 100%);
  box-shadow: inset -10px 0px 100px 90px rgb(5, 5, 5);
  z-index: 1;
}
.block-1__image::after {
  content: "";
  position: absolute;
  top: 20px;
  right: 100px;
  width: 230px;
  height: 230px;
  background: url(~/static/image/bloc-1-image8.png) center no-repeat;
  z-index: 2;
}
.block-1__image img {
  position: absolute;
  top: -100px;
  right: -130px;
  scale: 0.7;
  z-index: 96;
}
.block-1__body::before {
  content: "";
  position: absolute;
  top: 20px;
  right: -170px;
  width: 230px;
  height: 230px;
  background: url(../../static/image/block-1-image3.png) center no-repeat;
  z-index: 1;
}

@media (max-width: 1200px) {
  .block-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .block-1__body {
    max-width: 50%;
  }
  .block-1::after {
    scale: 0.6;
  }

  .block-1__image img {
    scale: 0.6;
  }
  .block-1__body {
    margin-top: 50px;
  }
  .block-1__body::before {
    top: 60px;
    right: -100px;
    scale: 0.9;
    z-index: 1;
  }
}
@media (max-width: 970px) {
  .block-1__body {
    margin-top: 0px;
  }
  .btn-block-1 {
    align-self: center;
  }
  .block-1__body_title {
    font-size: 32px;
    margin-bottom: 15px;
  }
  .block-1__image img {
    top: -150px;
    right: -300px;
    scale: 0.5;
  }
  .block-1__image::before {
    bottom: -50px;
    right: 0px;
    transform: rotate(-47.3deg);
  }
}
@media (max-width: 767px) {
  .block-1 {
    flex-direction: column;
    align-items: center;
  }
  .block-1__body {
    max-width: 100%;
  }
  .block-1__body::before {
    top: 200px;
    left: -30px;
    scale: 0.8;
    z-index: 1;
  }
  .block-1__image {
    align-items: center;
    justify-content: flex-end;
    max-width: 100%;
  }
  .block-1__image img {
    margin-left: 50px;
    z-index: 5;
    position: static;
    scale: 0.4;
    z-index: 5;
  }
  .block-1__image::after {
    top: -40px;
    right: 0px;
    scale: 0.8;
    z-index: 1;
  }
  .block-1__image::before {
    height: 600px;
    width: 662px;
    top: -150px;
    right: -100px;
    transform: rotate(-47.3deg);
  }

  .block-1__body_title {
    font-size: 22px;
  }
  .block-1__body_title span:after {
    scale: 0.5;
    top: -22px;
    right: 47%;
  }
  .block-1__body {
    margin-bottom: 32px;
  }
  .block-1__image img {
    width: 100%;
    scale: 1.3;
  }
  .btn-block-1 {
    display: none;
  }
  .btn-block-2 {
    margin: 30px 0px 0px 0px;
    display: block;
    z-index: 94;
  }
}

/* @media (max-width: 1200px) {

}
@media (max-width: 970px) {

}
@media (max-width: 767px) {

} */
</style>

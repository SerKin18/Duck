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
      <main-button class="btn-block-1">поговоримо?</main-button>
    </div>
    <div class="block-1__image">
      <img src="../../static/image/design-banner.png" alt="image-duck-banner" />
    </div>
  </div>
</template>
<script>
import MainButton from "../button/Main-Button.vue";

export default {
  components: { MainButton },
  name: "block-1",
};
</script>
<style >
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.block-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn-block-1 button {
  width: 180px;
}
.block-1__body {
  display: flex;
  flex-direction: column;
  max-width: 535px;
  margin-top: 105px;
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
  background: url(../../static/image/block-1-snow-i.svg) center;
}

.block-1__body_text {
  padding: 0px 24px 0px 0px;
  font-family: var(--subTitle-font);
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 30px;
}

.block-1__image img {
  max-width: 100%;
}

.block-1__image img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../static/image/bloc-1-image8.png);
  z-index: 5;
}
@media (max-width: 1200px) {
  .block-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .block-1__body {
    margin-top: 50px;
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
    /* font-size: 22px; */
    margin-bottom: 15px;
  }
  /* .block-1__body_title span:after {
    scale: 0.5;
    top: -22px;
    right: 47%;
  } */
}
@media (max-width: 767px) {
  .block-1 {
    flex-direction: column;
  }
  .block-1__body_title {
    font-size: 22px;
  }
  block-1__body_title span:after {
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
}

/* @media (max-width: 1200px) {

}
@media (max-width: 970px) {

}
@media (max-width: 767px) {

} */
</style>

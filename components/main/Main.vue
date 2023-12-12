<template>
  <div class="main">
    <div class="container">
      <div class="block-1">
        <div class="block-1__body">
          <div class="block-1__body_title">
            <h3>Послуги <span>графічного</span> дизайну</h3>
          </div>
          <div class="block-1__body_text">
            <p>
              Будьте творчими та виділяйтесь в конкурентному бізнес-середовищі
              за допомогою ефективних рішень з графічного дизайну від Wild Web!
            </p>
          </div>
          <main-button>поговоримо?</main-button>
        </div>
        <div class="block-1__image">
          <img
            src="../../static/image/design-banner.png"
            alt="image-duck-banner"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from "../button/Main-Button.vue";
export default {
  components: { MainButton },
  name: "Main",
};
</script>
<style scoped>
.main {
  flex: 1 1 auto;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.block-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.block-1__body {
  display: flex;
  flex-direction: column;
  max-width: 535px;
  margin-top: 105px;
}
.block-1__body_title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
}
.block-1__body_text {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 30px;
}
.block-1__image {
  /* background: linear-gradient(87.08deg, #203f6a 0%, #ea5a25 100%); */
}
.block-1__image img {
  width: 634px;
}
.block-1__image img::before {
  content: "";
  position: absolute;
  width: 222px;
  height: 220.5px;
  top: 0;
  left: 0;
  background: url(../../static/image/bloc-1-image8.png);
  z-index: 5;
}
</style>

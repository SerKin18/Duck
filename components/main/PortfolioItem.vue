<template>
  <div class="portfolio-item">
    <!-- <div class="portfolio-item__image">
			<img src="../../static/image/portfolio-card1.jpg" alt="portfolio-card">
		</div> -->
    <span></span>
    <div class="portfolio-item__hide-logo">
      <img
        src="../../static/image/portfolio-card-wrapper.jpg"
        alt="portfolio-logo"
      />
    </div>
    <div class="portfolio-item__footer">
      <div class="portfolio-item__text">
        <div class="portfolio-item__subtitle">Інтернет магазин</div>
        <div class="portfolio-item__title">Fielman</div>
      </div>
      <div class="portfolio-item__link">
        <a @click.prevent href="#">Дивитися кейс</a><span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "portfolio-item",
};
</script>
<style scoped>
.portfolio-item {
  width: 640px;
  height: 500px;
  background: url(../../static/image/portfolio-card1.jpg) center no-repeat;
  position: relative;
  flex: 1 0 33.333%;
  z-index: 3;
}
.portfolio-item__hide-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 18, 0.9);
}
.portfolio-item span,
.portfolio-item span::before,
.portfolio-item span::after {
  content: "";
  position: absolute;
  width: 160px;
  height: 100px;
  z-index: 7;
  opacity: 0;
}
.portfolio-item span::after {
  bottom: -450px;
  left: -44px;
  background: url(../../static/image/Vector2.png) center no-repeat;
}
.portfolio-item span {
  top: -30px;
  left: -63px;
  background: url(../../static/image/Vector.png) center no-repeat;
}
.portfolio-item span::before {
  bottom: -40px;
  right: -575px;
  transform: rotate(180deg);
  background: url(../../static/image/Vector2.png) center no-repeat;
}
.portfolio-item span,
.portfolio-item span::before,
.portfolio-item span::after {
}
.portfolio-item:hover {
  scale: 1.1;
  z-index: 5;
  .portfolio-item__hide-logo {
    opacity: 0;
  }
  .portfolio-item span,
  .portfolio-item span::before,
  .portfolio-item span::after {
    opacity: 1;
  }

  /* .portfolio-item span::before, .portfolio-item span::after {
    content: "";
    position: absolute;
	 width: 160px;
	 height: 100px;
    top: 0;
    left: 0;
	 z-index: 7;

  }
  .portfolio-item span::after {
	background:url(../../static/image/Vector.png) center no-repeat;
  }
  .portfolio-item span::before{

  } */
}
.portfolio-item__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 45px 45px;
}
.portfolio-item__text {
}
.portfolio-item__subtitle {
  font-size: 16px;
  line-height: 25px;
  text-align: left;
}
.portfolio-item__title {
  font-family: var(--title-font);
  text-transform: uppercase;
  font-size: 24px;
  color: white;
}

.portfolio-item__link {
  padding-top: 30px;
  width: 150px;
  text-align: left;
}
.portfolio-item__link a {
  font-weight: 400;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.portfolio-item__link > span {
  position: relative;
}
.portfolio-item__link > span::before,
.portfolio-item__link span::after {
  content: "";
  position: absolute;
  top: 5px;
  right: 0px;
  width: 15px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.portfolio-item__link span::before {
  top: -1px;
  right: -5px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: right bottom;
}
.portfolio-item__link span::after {
  width: 12px;
  top: 11px;
  left: -138px;
  transform: translateX(140px) rotate(180deg);
  transform-origin: right;
}
</style>

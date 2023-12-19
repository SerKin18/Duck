<template>
  <div class="tickers">
    <div class="ticker__string-1">
      <div class="ticker__string-1_show">
        <marquee
          ><span>Інтернет магазин</span>
          <span>Корпоративні сайти</span>
          <span>Landing page</span>
          <span>Бізнес сайт</span>
          <span>Дизайн сайту</span>
          <span>Сайт візитка</span>
          <span>Доопрацювання сайту</span>
          <span>Редизайн сайту</span>
          <span>Технічна підтримка</span>
			 <span>Інтернет магазин</span>
          <span>Корпоративні сайти</span>
          <span>Landing page</span>
          <span>Бізнес сайт</span>
          <span>Дизайн сайту</span>
          <span>Сайт візитка</span>
          <span>Доопрацювання сайту</span>
          <span>Редизайн сайту</span>
          <span>Технічна підтримка</span>
			 </marquee>
      </div>
    </div>
    <div class="ticker__string-2">
      <div class="ticker__string-2_show">
        <marquee direction="right"
          ><span>Бізнес сайт</span>
          <span>Дизайн сайту</span>
          <span>Сайт візитка</span>
          <span>Доопрацювання сайту</span>
          <span>Редизайн сайту</span>
          <span>Технічна підтримка</span>
          <span>Інтернет магазин</span>
          <span>Корпоративні сайти</span>
          <span>Landing page</span>
			 <span>Бізнес сайт</span>
          <span>Дизайн сайту</span>
          <span>Сайт візитка</span>
          <span>Доопрацювання сайту</span>
          <span>Редизайн сайту</span>
          <span>Технічна підтримка</span>
          <span>Інтернет магазин</span>
          <span>Корпоративні сайти</span>
          <span>Landing page</span></marquee
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-tickers",
};
</script>
<style scoped>
.tickers {
  width: 100%;
  z-index: 9;
  margin: 0 auto;
  transform: rotate(1deg);
}
.tickers span {
  text-transform: uppercase;
  font-family: var(--title-font);
  font-weight: 700;
  font-size: 74px;
  margin-right: 120px;
}

@supports (-webkit-text-stroke: 1px white) {
  .ticker__string-1_show span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    position: relative;
  }
}
.ticker__string-1_show span::before {
  content: "";
  position: absolute;
  top: 18px;
  left: -90px;
  width: 67px;
  height: 67px;
  background: url(../../static/image/block-1-ticker-Star.png) center;
}

.ticker__string-2_show {
  background-color: rgba(32, 63, 106, 1);
}
.ticker__string-2_show span {
  position: relative;
}
.ticker__string-1,
.ticker__string-2 {
}
.ticker__string-2_show span::before {
  content: "";
  position: absolute;
  top: 16px;
  right: -100px;
  width: 76px;
  height: 67px;
  background: url(../../static/image/block-1-ticker-element.png) center
    no-repeat;
}

@media (max-width: 767px) {
  .tickers span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 26.7px;
    margin-right: 45px;
  }
  .ticker__string-1_show span::before {
    scale: 0.5;
    top: -17px;
    left: -57px;
  }
  .ticker__string-2_show span::before {
    scale: 0.4;
    top: -17px;
    right: -63px;
  }
}
</style>

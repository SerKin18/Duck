<template>
  <div class="portfolio">
    <div class="container">
      <div class="portfolio__title">
        <h2>портфоліо</h2>
      </div>
    </div>
    <div class="portfolio__body">
      <PortfolioItem v-for="item in portfolioArray"></PortfolioItem>
    </div>
  </div>
</template>
<script>
import PortfolioItem from "./PortfolioItem.vue";
export default {
  components: { PortfolioItem },
  name: "portfolio",
  data() {
    return {
      portfolioArray: 6,
    };
  },
};
</script>
<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 97px;
  margin-bottom: 100px;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.portfolio__title {
  width: 1200px;
  text-transform: uppercase;
  font-family: var(--title);
  font-size: 80px;
  text-align: left;
  margin-bottom: 90px;
}
.portfolio__body {
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>

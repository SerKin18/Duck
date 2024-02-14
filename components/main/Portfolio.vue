<template>
  <div class="portfolio">
    <div class="container">
      <div class="portfolio__title">
        <h2 id="portfolio">портфоліо</h2>
      </div>
    </div>
    <div class="portfolio__body">
      <PortfolioItem
        v-for="item in portfolios"
        :item="item"
        :key="item.id"
		  :id="item.id"
      ></PortfolioItem>
    </div>
  </div>
</template>
<script>
import PortfolioItem from "./PortfolioItem.vue";
import { PORTFOLIO_ITEMS } from "../../data/staticData";
export default {
  components: { PortfolioItem },
  name: "portfolio",
  data() {
    return {
      portfolios: PORTFOLIO_ITEMS,
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
  padding: 0px 14.5px;
}
.portfolio__body {
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 100px;
}
@media (max-width: 1200px) {
  .portfolio {
    margin: 50px 0px 40px 0px;
  }
  .portfolio__body {
    padding: 0px 80px;
  }
  .portfolio__title {
    font-size: 60px;
    margin-bottom: 40px;
  }
}
@media (max-width: 970px) {
  .portfolio__body {
    align-items: center;
    justify-content: center;
  }
  .portfolio__title {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
  .portfolio__title {
    font-size: 22px;
  }
  .portfolio__body {
    padding: 0px 14.5px;
    margin: 0px 20px;
  }
}
</style>

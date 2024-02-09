<template>
  <div class="main">
    <!-- <ModalOrder :modalCalcOpen="true"></ModalOrder> -->
    <Header></Header>
    <div class="container">
      <Banner />
    </div>
    <Tickers />
    <div class="container">
      <Service :services="services"></Service>
    </div>
    <Portfolio />
    <WhyUs :whyUsItems="whyUsItems"></WhyUs>
    <Reviews :reviews="reviews" />
    <Calc></Calc>
    <FQS :FQSItems="FQSItems"></FQS>
    <ContactsBlock></ContactsBlock>
    <Radio />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import Banner from "./Banner.vue";
import Service from "./Service.vue";
import Portfolio from "./Portfolio.vue";
import Tickers from "./Tickers.vue";
import WhyUs from "./WhyUs.vue";
import FQS from "./FQS.vue";
import ContactsBlock from "./ContactsBlock.vue";
import Reviews from "./Reviews.vue";
import Calc from "./Calc.vue";
import Modal from "./Modal.vue";
import ModalOrder from "./ModalOrder.vue";
import Radio from "./Radio.vue";
import {
  PAGES_REVIEWS,
  FQS_ITEMS,
  WHY_US_ITEMS,
  SERVICES_ITEMS,
} from "../../data/staticData";
export default {
  components: {
    Header,
    Banner,
    Tickers,
    Service,
    Portfolio,
    WhyUs,
    FQS,
    ContactsBlock,
    Reviews,
    Calc,
    Modal,
    Radio,
    ModalOrder,
    Footer,
  },
  name: "Main",
  data() {
    return {
      reviews: PAGES_REVIEWS,
      FQSItems: FQS_ITEMS,
      whyUsItems: WHY_US_ITEMS,
      services: SERVICES_ITEMS,
    };
  },
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
</style>

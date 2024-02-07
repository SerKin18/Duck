<template>
  <div class="main">
    <!-- <ModalOrder :modalCalcOpen="true"></ModalOrder> -->
	 <Header ></Header>
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
	 Footer
  },
  name: "Main",
  data() {
    return {
      reviews: [
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень1. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.5,
          id: "1",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "2",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4.3,
          id: "3",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.8,
          id: "4",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "5",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "6",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "7",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "8",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 3.5,
          id: "9",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "10",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "11",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "12",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.4,
          id: "13",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "14",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo3.png",
          rating: 3.5,
          id: "15",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4.5,
          id: "16",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "17",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "18",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.5,
          id: "19",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "20",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4,
          id: "21",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4.5,
          id: "22",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "23",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "24",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 3.8,
          id: "25",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "26",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4,
          id: "27",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4.5,
          id: "28",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 3,
          id: "29",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "30",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "31",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "32",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4,
          id: "33",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4.5,
          id: "34",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "35",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "36",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.3,
          id: "37",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "38",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 3,
          id: "39",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "40",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.5,
          id: "41",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "42",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "43",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "44",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 3,
          id: "45",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4.5,
          id: "46",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4,
          id: "47",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "48",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.5,
          id: "49",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "50",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4,
          id: "51",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "52",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 4.2,
          id: "53",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "54",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 3,
          id: "55",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 5,
          id: "56",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 4.5,
          id: "57",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: "/image/reviews-logo2.png",
          rating: 4,
          id: "58",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "/image/reviews-logo1.png",
          rating: 3.5,
          id: "59",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую10. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "/image/reviews-logo3.png",
          rating: 5,
          id: "60",
        },
      ],
      FQSItems: [
        {
          text: "Скільки часу потрібно для дизайну та розробки веб-сайту?",
          id: "1",
        },
        { text: "Який процес редизайну існуючого веб-сайту?", id: "2" },
        { text: "Що означає адаптивний дизайн веб-сайту?", id: "3" },
        { text: "Що означає SEO-дружній веб-дизайн", id: "4" },
        {
          text: "Яка рекомендована частота оновлення мого веб-сайту?",
          id: "5",
        },
      ],
      whyUsItems: [
        {
          title: "Прозорі умови роботи.",
          subtitle: "Договір з гарантіями і зобов'язаннями.",
          id: "1",
        },
        {
          title: "Гнучка система оплати.",
          subtitle: "70/30, 60/40, 50/50 за етап.",
          id: "2",
        },
        {
          title: "Постійний зворотній зв'язок.",
          subtitle: "В зручних для вас каналах комунікації.",
          id: "3",
        },
        {
          title: "Звітність по етапам робіт.",
          subtitle: "Чи спостерігаєте результат в реальному часі.",
          id: "4",
        },
        {
          title: "Навчання роботи з сайтом, тех. підтримка.",
          subtitle: "Консультації і рекомендації після запуску.",
          id: "5",
        },
        {
          title: "Демо-версія адмін. панелі сайту.",
          subtitle: "В зручних для вас каналах комунікації.",
          id: "6",
        },
        {
          title: "Максимальна залученість в ваш бізнес.",
          subtitle:
            "Вникаємо в бізнес-процеси, проектуємо конверсійний дизайн.",
          id: "7",
        },
        {
          title: "Індивідуальний дизайн і розробка.",
          subtitle: "Чистий і оптимізований код, чуйний дизайн під вашу ЦА.",
          id: "8",
        },
      ],
      services: [
        {
          title: "Інтернет магазин",
          subtitle: "Розробляємо на Laravel, Opencart, WordPress, OkayCMS.",
          price: "2500",
          id: 2,
        },
        {
          title: "Корпоративні сайти",
          subtitle:
            "Корпоративні проекти різної складності на Laravel, WordPress, OkayCMS.",
          price: "2500",
          id: 0,
        },
        {
          title: "Landing page",
          subtitle: "Лендинги що продають на WordPress, Webflow, WIX.",
          price: "2500",
          id: 1,
        },
        {
          title: "Бізнес сайт",
          subtitle: "Сайти послуг та продуктів на WordPress, Webflow, WIX.",
          price: "2500",
          id: 3,
        },
        {
          title: "Дизайн сайту",
          subtitle: `Використовуємо прості і сміливі рішення, які запам'ятаються відвідувачам і виділять вас серед конкурентів.`,
          price: "2500",
          id: 0,
        },
        {
          title: "Сайт візитка",
          subtitle: "Прості сайти на WordPress, OkayCMS, Webflow, WIX.",
          price: "2500",
          id: 6,
        },
        {
          title: "Доопрацювання сайту",
          subtitle: `Впроваджуємо нові "хотілки", розвиваємо функціонал, оптимізуємо роботу модулів 
							і плагінів.`,
          price: "2500",
          id: 7,
        },
        {
          title: "Редизайн сайту",
          subtitle:
            'Допомагаємо клієнтам бути попереду конкурентів. Оновлюємо дизайн, додаємо нові "фішки".',
          price: "2500",
          id: 0,
        },
        {
          title: "Технічна підтримка",
          subtitle: "Підтримуємо та розвиваємо створені та існуючі проекти.",
          price: "2500",
          id: 5,
        },
      ],
      info: [],
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

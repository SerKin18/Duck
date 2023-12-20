<template>
  <div class="main">
    <div class="container">
      <Banner />
    </div>
    <Tickers />
    <div class="container">
      <Service :services="services"></Service>
    </div>
    <WhyUs :whyUsItems="whyUsItems"></WhyUs>
    <Reviews :reviews="reviews" />
    <FQS :FQSItems="FQSItems"></FQS>
    <Contacts />
  </div>
</template>
<script>
import Banner from "./Banner.vue";
import Service from "./Service.vue";
import Tickers from "./Tickers.vue";
import WhyUs from "./WhyUs.vue";
import FQS from "./FQS.vue";
import Contacts from "./Contacts.vue";
import Reviews from "./Reviews.vue";

export default {
  components: { Banner, Tickers, Service, WhyUs, FQS, Contacts, Reviews },
  name: "Main",
  data() {
    return {
      reviews: [
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "../../static/image/reviews-logo1.png",
          rating: 4,
          id: "1",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: ("~static/image/reviews-logo2.png"),
          rating: 5,
          id: "2",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: ("/_nuxt/static/image/reviews-logo3.png"),
          rating: 4,
          id: "3",
        },
        {
          name: "james Dangerous",
          job: "Owner Apple",
          text: "Добрий день! Замовляла щоденники 2023. Щиро дякую за посилочку, все упаковано гарно, якість щоденників порадувала. Особисто вдячна менеджерам за їх привітність, роз’яснення за знижку як оптовому покупцю! Постійних і надійних клієнтів! Гарний магазин, рекомендую!",
          logo: '_nuxt/public/img/reviews-logo2.png',
          rating: 4,
          id: "4",
        },
        {
          name: "Lindsey lohan",
          job: "Owner Clickable Agency",
          text: "Вже й не порахую скільки я тут зробила замовлень. Ну дуже багато. Ціни супер, відношення до клієнта на висоті. Оператори завжди приємні та відповідальні. Дякую,що ви є. Щиро дякую!",
          logo: "../../static/image/reviews-logo1.png",
          rating: 4,
          id: "5",
        },
        {
          name: "james kudriaviy",
          job: "Owner Clickable Agency",
          text: "Дуже дякую. Заказ прийшов за добу. Все добре, швидко. В теперішній час дуже приємно",
          logo: "../../static/image/reviews-logo3.png",
          rating: 5,
          id: "6",
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
          id: "1",
        },
        {
          title: "Корпоративні сайти",
          subtitle:
            "Корпоративні проекти різної складності на Laravel, WordPress, OkayCMS.",
          price: "2500",
          id: "2",
        },
        {
          title: "Landing page",
          subtitle: "Лендинги що продають на WordPress, Webflow, WIX.",
          price: "2500",
          id: "3",
        },
        {
          title: "Бізнес сайт",
          subtitle: "Сайти послуг та продуктів на WordPress, Webflow, WIX.",
          price: "2500",
          id: "4",
        },
        {
          title: "Дизайн сайту",
          subtitle: `Використовуємо прості і сміливі рішення, які запам'ятаються відвідувачам і виділять вас серед конкурентів.`,
          price: "2500",
          id: "5",
        },
        {
          title: "Сайт візитка",
          subtitle: "Прості сайти на WordPress, OkayCMS, Webflow, WIX.",
          price: "2500",
          id: "6",
        },
        {
          title: "Доопрацювання сайту",
          subtitle: `Впроваджуємо нові "хотілки", розвиваємо функціонал, оптимізуємо роботу модулів 
							і плагінів.`,
          price: "2500",
          id: "7",
        },
        {
          title: "Редизайн сайту",
          subtitle:
            'Допомагаємо клієнтам бути попереду конкурентів. Оновлюємо дизайн, додаємо нові "фішки".',
          price: "2500",
          id: "8",
        },
        {
          title: "Технічна підтримка",
          subtitle: "Підтримуємо та розвиваємо створені та існуючі проекти.",
          price: "2500",
          id: "9",
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

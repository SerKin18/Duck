<template>
  <div class="main">
    <div class="container">
      <Block1></Block1>
    </div>
    <Tickers />
	 <div class="container">
    <Block2 :services="services"></Block2>
	</div>
    <Block4 :whyUsItems="whyUsItems"></Block4>
	 <Block7 :FQSItems="FQSItems"></Block7>
	 <Block8></Block8>
  </div>
</template>
<script>
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Tickers from "./Tickers.vue";
import Block4 from "./Block-4.vue";
import Block7 from "./Block-7.vue";
import Block8 from "./Block-8.vue";
export default {
  components: { Block1, Tickers, Block2, Block4,Block7,Block8},
  name: "Main",
  data() {
    return {
		FQSItems:[{text:'Скільки часу потрібно для дизайну та розробки веб-сайту?',id:'1'},
		{text:'Який процес редизайну існуючого веб-сайту?',id:'2'},
		{text:'Що означає адаптивний дизайн веб-сайту?',id:'3'},
		{text:'Що означає SEO-дружній веб-дизайн',id:'4'},
		{text:'Яка рекомендована частота оновлення мого веб-сайту?',id:'5'}
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
		info:[
			
		]
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

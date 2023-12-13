<template>
  <div class="main">
    <div class="container">
      <Block1></Block1>
      <Tickers></Tickers>
		<Block2 :services="services"></Block2>
    </div>
  </div>
</template>
<script>
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Tickers from "./Tickers.vue";
export default {
  components: { Block1, Tickers, Block2 },
  name: "Main",
  data(){
	return{
		services:[
			{ title:'Інтернет магазин',subtitle:'Розробляємо на Laravel, Opencart, WordPress, OkayCMS.',price:'2500',id:'1'},
			{ title:'Корпоративні сайти',subtitle:'Корпоративні проекти різної складності на Laravel, WordPress, OkayCMS.',price:'2500',id:'2'},
			{ title:'Landing page',subtitle:'Лендинги що продають на WordPress, Webflow, WIX.',price:'2500',id:'3'},
			{ title:'Бізнес сайт',subtitle:'Сайти послуг та продуктів на WordPress, Webflow, WIX.',price:'2500',id:'4'},
			{ title:'Дизайн сайту',subtitle:`Використовуємо прості і сміливі рішення, які запам'ятаються відвідувачам і виділять вас серед конкурентів.`,price:'2500',id:'5'},
			{ title:'Сайт візитка',subtitle:'Прості сайти на WordPress, OkayCMS, Webflow, WIX.',price:'2500',id:'6'},
			{ title:'Доопрацювання сайту',subtitle:`Впроваджуємо нові "хотілки", розвиваємо функціонал, оптимізуємо роботу модулів 
							і плагінів.`,price:'2500',id:'7'},
			{ title:'Редизайн сайту',subtitle:'Допомагаємо клієнтам бути попереду конкурентів. Оновлюємо дизайн, додаємо нові "фішки".',price:'2500',id:'8'},
			{ title:'Технічна підтримка',subtitle:'Підтримуємо та розвиваємо створені та існуючі проекти.',price:'2500',id:'9'},
		]
	}
  }
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

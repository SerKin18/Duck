<template>
	<div class="calc">
		<div class="container">
			<div class="calc_title">
				<h2>КАЛЬКУЛЯТОР <span>ВАРТОСТІ </span></h2>
			</div>
			<div class="calc_subtitle">
				<p>Розрахуйте орієнтовну вартість робіт</p>
				<span>Сбросить</span>
			</div>
			<div class="calc_tabs">
				<CalcButton v-for="(tab,index) in tabValue" :class="{ selected: selectedIndex === index}" :name="tab.tab" :key="index"
					 :indexTab="index" @getIndexTab="selectTab" >{{ tab.tab }}</CalcButton>
			</div>
			<div class="calc_body">
				<!-- <div class="calc_body__title">
					<h4>РОЗРОБКА САЙТУ:</h4>
				</div> -->
				<div class="calc_body__calc">

					<div class="calc_body__tab __dev" v-show="activeTab(0)">
						<div class="calc_body__title">
							<h4>Розробка сайту</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<CalcCheckBoxLine>
								
							</CalcCheckBoxLine>
							<!-- <div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Wow дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-260%" widthItem="width:25%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:50%">Середній</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:75%">Складний</CalcCheckboxItem>

							</div> -->
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість унікальних сторінок</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:20%">1-3</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:40%">3-7</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:60%">7-15</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:80%">15-50</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">50 i бiльше</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість мовних версій сайту</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:5px" widthLine="display:none">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">5</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">6 i бiльше</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body__checkbox">
							<!-- <CalcCheckbox v-for="(checkBox, index) in tabsCheckBox[selectedIndex]" :key="index">{{ checkBox }}</CalcCheckbox> -->
							<!-- <div class="calc_body__checkbox_item" :class="activeBtn1 ? 'active' : ''">
					<label for="cmsCheckbox">
						<input type="checkbox" id="cmsCheckbox" name="cmsCheckbox" />
						<span @click="active1"></span>
						<p @click="active1">Рукописна CMS</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn2 ? 'active' : ''">
					<label for="formCheckbox" @click.stop="active2">
						<input type="checkbox" id="formCheckbox" name="formCheckbox" checked />
						<span @click="active2"></span>
						<p @click="active2">Форма збору даних</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn3 ? 'active' : ''">
					<label for="calcCheckbox" @click="active3">
						<input type="checkbox" id="calcCheckbox" name="calcCheckbox" />
						<span @click="active3"></span>
						<p @click="active3">Калькулятор цін</p>
					</label>
				</div> -->
						</div>
					</div>
					<div class="calc_body__tab __landingPage" v-show="activeTab(1)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Wow дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-260%" widthItem="width:25%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:50%">Середній</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:75%">Складний</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість блоків (екранів)</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:10%">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:30%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:50%">5</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">6</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:70%">7</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">8</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:90%">9</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">10 i бiльше</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість мовних версій сайту</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:5px" widthLine="display:none">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">5</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">6 i бiльше</CalcCheckboxItem>
							</div>
						</div>
					</div>
					<div class="calc_body__tab __onlineStore" v-show="activeTab(2)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Wow дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-260%" widthItem="width:25%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:50%">Середній</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:75%">Складний</CalcCheckboxItem>

							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість унікальних сторінок</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:20%">1-3</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:40%">3-7</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:60%">7-15</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:80%">15-50</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">50 i бiльше</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість мовних версій сайту</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:5px" widthLine="display:none">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">5</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">6 i бiльше</CalcCheckboxItem>
							</div>
						</div>
					</div>
					<div class="calc_body__tab __portal" v-show="activeTab(3)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Wow дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-260%" widthItem="width:25%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:50%">Середній</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:75%">Складний</CalcCheckboxItem>

							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість унікальних сторінок</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:20%">1-3</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:40%">3-7</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:60%">7-15</CalcCheckboxItem>
								<CalcCheckboxItem widthItem="width:80%">15-50</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">50 i бiльше</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість мовних версій сайту</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:5px" widthLine="display:none">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">5</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">6 i бiльше</CalcCheckboxItem>
							</div>
						</div>
					</div>
					<div class="calc_body__tab __contextAdvertising" v-show="activeTab(4)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість напрямів діяльності (Ціна за 1 місяць роботи)</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:10%">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:20%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:30%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:40%">4</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:50%">5 i бiльше</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:60%">10 i бiльше</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:70%">20 i бiльше</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:80%">30 i бiльше</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:90%">40 i бiльше</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%">50 i бiльше</CalcCheckboxItem>
							</div>
						</div>

					</div>
					<div class="calc_body__tab __seo" v-show="activeTab(5)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість напрямів діяльності (Ціна за 1 місяць роботи)</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:5px">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:33.3%">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:66.6%">2</CalcCheckboxItem>
							</div>
						</div>
					</div>
					<div class="calc_body__tab __Logo" v-show="activeTab(6)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Складний</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:33.3%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:66.6%">Середній</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість варіантів дизайну</div>
							<div class="calc_body_item_calc">

								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:25%">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:50%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:75%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px">4+</CalcCheckboxItem>
							</div>
						</div>
					</div>
					<div class="calc_body__tab __corporateStyle" v-show="activeTab(7)">
						<div class="calc_body__title">
							<h4>{{ tabs[selectedIndex] }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Складність дизайну</div>
							<div class="calc_body_item_calc">
								<CalcCheckboxItem widthName="left:-150%">Складний</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:33.3%">Простий дизайн</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:-150%" widthItem="width:66.6%">Середній</CalcCheckboxItem>
							</div>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">Кількість варіантів дизайну</div>
							<div class="calc_body_item_calc">

								<CalcCheckboxItem widthName="left:-150%" widthLine="display:none">Виберіть</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:25%">1</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:50%">2</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px" widthItem="width:75%">3</CalcCheckboxItem>
								<CalcCheckboxItem widthName="left:5px">4+</CalcCheckboxItem>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="calc_body__checkbox">

				<div class="calc_body__checkbox_item" :class="activeBtn1 ? 'active' : ''">
					<label for="cmsCheckbox" click.stop="active1">
						<input type="checkbox" id="cmsCheckbox" name="cmsCheckbox" />
						<span @click="active1"></span>
						<p @click="active1">Рукописна CMS</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn2 ? 'active' : ''">
					<label for="formCheckbox" @click.stop="active2">
						<input type="checkbox" id="formCheckbox" name="formCheckbox" checked />
						<span @click="active2"></span>
						<p @click="active2">Форма збору даних</p>
					</label>
				</div>
				<div class="calc_body__checkbox_item" :class="activeBtn3 ? 'active' : ''">
					<label for="calcCheckbox" @click="active3">
						<input type="checkbox" id="calcCheckbox" name="calcCheckbox" />
						<span @click="active3"></span>
						<p @click="active3">Калькулятор цін</p>
					</label>
				</div>
			</div>
			<div class="calc_body__footer">
				<div class="calc_body__footer_column">
					<div class="calc_body__footer_item">Орієнтовна вартість</div>
					<div class="calc_body__footer_item">Від 0 грн</div>
				</div>
				<div class="calc_body__footer_column">
					<div class="calc_body__footer_item">Термін виконання</div>
					<div class="calc_body__footer_item">Від 0 днів</div>
				</div>
			</div>
		</div>
		<div class="calc_footer">
			<MainButton>Заказати</MainButton>
		</div>
	</div>
</div></template>
<script>
import MainButton from "../button/MainButton.vue";
import CalcButton from "../button/CalcButton.vue";
import CalcCheckboxItem from "./CalcCheckboxItem.vue";
import CalcCheckbox from "./CalcCheckbox.vue";
import CalcCheckBoxLine from "./CalckCheckBoxLine.vue";
export default {
	components: { MainButton, CalcButton, CalcCheckboxItem, CalcCheckbox,CalcCheckBoxLine},
	name: "Calc",
	data() {
		return {
			selectedIndex: 0,
			selectTabPage: [],
			selectCheckBox: 0,
			activeBtn1: false,
			activeBtn2: true,
			activeBtn3: false,
			tabs: [
				"Розробка сайту",
				"Розробка Landing page",
				"Розробка Iнтернет магазину",
				"Розробка портала",
				"Контекстна реклама",
				"SEO просування",
				"Розробка логотипу",
				"Розробка фiрмового стилю",
			],
			tabsCheckBox: [['Рукописна CMS', 'Форма збору даних', 'Калькулятор цін'],
			['Форма збору даних', 'Рукописна CMS', 'Калькулятор цін'],
			['Форма збору даних', 'Рукописна CMS', 'Калькулятор цін', 'Імпорт/експорт через Ексель', 'Онлайн оплата', 'Фільтр товарів', 'Ярлики товарів(Акції,новинки...)', 'Порівняння,рейтинг товарів'],
			['Форма збору даних', 'Рукописна CMS', 'Калькулятор цін'],
			['Бренд на аксесуарах', 'Бренд на бланках', 'Бренд на одягу']],
			tabValue: [
				{
					tab: "Розробка сайту",
					page: {
						subTitle: 'Складність дизайну',
						check: [{ title: 'Виберіть',widthName:"left:-150%",widthLine:"display:none", value: 0 }, { title: 'Простий дизайн',widthName:"left:-260%", widthItem:"width:25%", value: 0 }, { title: 'Середній',widthName:"left:-150%", widthItem:"width:50%", value: 0 }, { title: 'Складний',widthName:"left:-150%", widthItem:"width:75%",value: 0 }, { title: 'Wow дизайн',widthName:"left:-150%", value: 0 }],
						subTitle: 'Кількість унікальних сторінок',
						check: [{ title: 'Виберіть', value: 0 }, { title: '1-3', value: 0 }, { title: '3-7', value: 0 }, { title: '7-15', value: 0 }, { title: '15-50', value: 0 }, { title: '50 i бiльше', value: 0 }],
						subTitle: 'Кількість мовних версій сайту',
						check: [{ title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '5', value: 0 }, { title: '6 i бiльше', value: 0 }]
					}
				},
				//  checkbox: [{ title: 'Рукописна CMS', value: 0 }, { title: 'Форма збору даних', value: 0 }, { title: 'Калькулятор цін', value: 0 }],
				{
					tab: "Розробка Landing page", page: {
						subTitle: 'Складність дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: 'Простий дизайн', value: 0 }, { title: 'Середній', value: 0 }, { title: 'Складний', value: 0 }, { title: 'Wow дизайн', value: 0 }],
						subTitle: 'Кількість блоків (екранів)', check: [{ title: 'Виберіть', value: 0 }, { title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4', value: 0 }, { title: '5', value: 0 }, { title: '6', value: 0 }, { title: '7', value: 0 }, { title: '8', value: 0 }, { title: '9', value: 0 }, { title: '10 i бiльше', value: 0 }],
						subTitle: 'Кількість мовних версій сайту', check: [{ title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4', value: 0 }, { title: '5', value: 0 }, { title: '6 i бiльше', value: 0 }]
					}
				},
				{
					tab: "Розробка Iнтернет магазину", page: {
						subTitle: 'Складність дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: 'Простий дизайн', value: 0 }, { title: 'Середній', value: 0 }, { title: 'Складний', value: 0 }, { title: 'Wow дизайн', value: 0 }],
						subTitle: 'Кількість унікальних сторінок', check: [{ title: 'Виберіть', value: 0 }, { title: '1-3', value: 0 }, { title: '3-7', value: 0 }, { title: '7-15', value: 0 }, { title: '15-50', value: 0 }, { title: '50 i бiльше', value: 0 }],
						subTitle: 'Кількість мовних версій сайту', check: [{ title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4', value: 0 }, { title: '5', value: 0 }, { title: '6 i бiльше', value: 0 }]
					}
				},
				{
					tab: "Розробка портала", page: {
						subTitle: 'Складність дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: 'Простий дизайн', value: 0 }, { title: 'Середній', value: 0 }, { title: 'Складний', value: 0 }, { title: 'Wow дизайн', value: 0 }],
						subTitle: 'Кількість унікальних сторінок', check: [{ title: 'Виберіть', value: 0 }, { title: '1-3', value: 0 }, { title: '3-7', value: 0 }, { title: '7-15', value: 0 }, { title: '15-50', value: 0 }, { title: '50 i бiльше', value: 0 }],
						subTitle: 'Кількість мовних версій сайту', check: [{ title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4', value: 0 }, { title: '5', value: 0 }, { title: '6 i бiльше', value: 0 }]
					}
				},
				{
					tab: "Контекстна реклама", page: {
						subTitle: 'Кількість напрямів діяльності (Ціна за 1 місяць роботи)', check: [{ title: 'Виберіть', value: 0 }, { title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4', value: 0 }, { title: '5 i бiльше', value: 0 }, { title: '10 i бiльше', value: 0 }, { title: '20 i бiльше', value: 0 }, { title: '30 i бiльше', value: 0 }, { title: '40 i бiльше', value: 0 }, { title: '50 i бiльше', value: 0 }],
					}
				},
				{
					tab: "SEO просування", page: {
						subTitle: 'Кількість напрямів діяльності (Ціна за 1 місяць роботи)', check: [{ title: 'Виберіть', value: 0 }, { title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }],
					}
				},
				{
					tab: "Розробка логотипу", page: {
						subTitle: 'Складність дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: 'Простий дизайн', value: 0 }, { title: 'Середній', value: 0 }, { title: 'Складний', value: 0 }],
						subTitle: 'Кількість варіантів дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4+', value: 0 }]
					}
				},
				{
					tab: "Розробка фiрмового стилю", page: {
						subTitle: 'Складність дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: 'Простий дизайн', value: 0 }, { title: 'Середній', value: 0 }, { title: 'Складний', value: 0 }],
						subTitle: 'Кількість варіантів дизайну', check: [{ title: 'Виберіть', value: 0 }, { title: '1', value: 0 }, { title: '2', value: 0 }, { title: '3', value: 0 }, { title: '4+', value: 0 }]
					}
				}
			]
		};
	},
	methods: {
		selectTab(id) {
			this.selectedIndex = id;
			// let dataPage = this.tabValue[this.selectedindex]
			console.log({id});
		},
		activeTab(i) {
			return this.selectedIndex === i;
		},
		active1() {
			this.activeBtn1 = !this.activeBtn1;
		},
		active2() {
			this.activeBtn2 = !this.activeBtn2;
		},
		active3() {
			this.activeBtn3 = !this.activeBtn3;
		},
	},
};
</script>
<style scoped>
.calc_body__calc {
	width: 100%;
	position: relative;

}

.calc_body_item {
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
}

.calc_body_item__subtitle {
	align-items: flex-start;
	margin: 30px 0px 10px 0px;
}

.calc_body_item_calc {
	display: flex;
	font-family: var(--classic);
	font-size: 16px;
	position: relative;
	align-items: center;
	justify-content: center;
	max-height: 350px;
}

.calc_body_item_calc .calc_checkbox__Item {
	position: absolute;
	left: 0;
	top: 0;
}

.calc_body__tab {
	margin-bottom: 80px;
}

.__dev {}

.__landingPage {}

.__ContextAdvertising {}

.__Seo {}

.__Logo {}

.__corporateStyle {}

.calc_body__checkbox {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 300px;

}

.calc_body__checkbox_item {
	max-width: 192px;
	border: 1px solid rgba(220, 223, 230, 1);
	padding: 13px 11px 13px 11px;
	margin-bottom: 15px;
	text-align: flex-start;
}

input[type="checkbox"] {
	height: 0px;
	width: 0px;
}

.calc_body__checkbox_item label {
	display: inline-block;
}

.calc_body__checkbox_item span {
	height: 14px;
	width: 14px;
	display: inline-block;
	position: relative;
	background-color: #fcfcfc;
	margin: 0px 0px -3px 0px;
}

.calc_body__checkbox_item span::before,
.calc_body__checkbox_item span::after {
	content: "";
	position: absolute;
	top: 50%;
	left: 1.5px;
	width: 8px;
	height: 2px;
	background-color: rgb(255, 255, 255);
}

.calc_body__checkbox_item span::before {
	width: 6px;
	transform: rotate(-135deg);
}

.calc_body__checkbox_item span::after {
	top: 6px;
	left: 4.5px;
	transform: rotate(135deg);
}

.calc_body__checkbox_item input[type="checkbox"]:checked+span {
	background: rgba(234, 90, 37, 1);
}

.calc_body__checkbox_item p {
	display: inline;
	font-family: var(--classic);
	color: rgb(255, 255, 255);
	opacity: 50%;
	font-size: 12px;
	text-wrap: nowrap;
	font-style: normal;
	margin-left: 6px;
}

.calc_body__checkbox_item:hover {
	span {
		background: rgb(143, 143, 143);
	}
}

.active {
	border: 1px solid rgba(234, 90, 37, 1);

	p {
		color: rgba(234, 90, 37, 1);
		opacity: 100%;
	}
}

.calc_body__title {
	font-family: var(--title-font);
	font-size: 42px;
	line-height: 58px;
}

.calc_body__footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px -10px 0px -10px;
	margin: 0px -5px 0px -5px;
}

.calc_body__footer_column {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 0 1 50%;
	margin: 0px 5px 0px 5px;
}

.calc_body__footer_item {
	width: 100%;
	color: #ffffff;
	font-family: var(--title);
	align-items: flex-start;
	background: rgba(248, 248, 248, 0.05);
	margin: 5px 5px;
	padding: 14px 15px;
}

.calc {
	padding: 0px 14.5px 100px 14.5px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container {
	max-width: 1280px;
	margin: 0 auto;
}

.calc_title {
	font-family: var(--title);
	letter-spacing: -2px;
	line-height: 76px;
	text-transform: uppercase;
	font-size: 80px;
	margin-bottom: 90px;
	text-align: flex-start;
}

@supports (-webkit-text-stroke: 1px white) {
	.calc_title span {
		text-shadow: none;
		color: transparent;
		-webkit-text-stroke: 1px #ffffff;
		position: relative;
	}
}

.calc_subtitle {
	width: 100%;
	font-size: 12px;
	color: rgba(248, 248, 248, 1);
	display: flex;
	justify-content: space-between;
	text-align: center;
}

.calc_subtitle p {
	font-family: var(--subTitle-font);
	text-transform: uppercase;
}

.calc_subtitle span {
	display: inline-block;
	position: relative;
	opacity: 50%;
	font-size: 16px;
	margin-bottom: 6px;
}

.calc_subtitle span::before,
.calc_subtitle span::after {
	content: "";
	position: absolute;
	top: 40%;
	left: -20px;
	width: 18px;
	height: 2px;
	background: rgb(184, 183, 183);
}

.calc_subtitle span::after {
	transform: rotate(45deg);
}

.calc_subtitle span::before {
	transform: rotate(135deg);
}

.calc_subtitle span:hover {
	opacity: 100%;
}

.calc_tabs {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-bottom: 40px;
}

.calc_body {
	max-height: 100%;
}

.calc_footer {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-top: 40px;
}

.calc_footer>* {
	width: 170px;
}

@media (max-width: 767px) {
	.calc {
		padding: 0px 14.5px 60px 14.5px;
	}

	.calc_body__title {
		font-family: var(--classic);
		font-size: 22px;
		line-height: 21px;
	}

	.calc_title {
		font-family: var(--classic);

		line-height: 21px;
		font-size: 22px;
		margin-bottom: 20px;
		text-align: flex-start;
	}

	.calc_subtitle {
		margin-bottom: 40px;
	}

	.calc_body__footer_item {
		font-size: 12px;
		line-height: 25px;
	}

	.calc_subtitle p {
		font-size: 10px;
	}

	.calc_subtitle span {
		display: none;
	}

	.calc_tabs {
		width: 100%;
		height: 100%;
		justify-content: space-between;
		margin-bottom: 40px;
		padding: 0px -10px 0px -10px;
	}
}
</style>

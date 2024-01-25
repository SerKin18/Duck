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
				<CalcButton v-for="(tab, index) in tabValue" :class="{ selected: selectedIndex === index }" :name="tab.tab"
					:key="index" :indexTab="index" @getIndexTab="selectTab">{{ tab.tab }}</CalcButton>
			</div>
			<div class="calc_body">
				<!-- <div class="calc_body__title">
					<h4>РОЗРОБКА САЙТУ:</h4>
				</div> -->
				<div class="calc_body__calc">

					<div class="calc_body__tab __dev" v-show="activeTab(0)">
						<div class="calc_body__title">
							<h4>{{ tabValue[0].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[0].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[0].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[0].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[0].page.check2" @valueItem2="getValue2" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[0].page.subTitle3 }}</div>
							<CalcCheckBoxLine3 :checkBoxArray="tabValue[0].page.check3" @valueItem3="getValue3" />
						</div>
						<div class="calc_body__checkbox">
							<CalcCheckboxItem v-for="(checkBox, index) in tabsCheckBox[0]" :indexCheck="index"
								:value="checkBox.value" :isActive="checkBox.isActive" :key="index" :nameCheck="checkBox.title"
								@getIndexCheck="getCheckboxValue">{{
									checkBox.title }}</CalcCheckboxItem>
						</div>
					</div>
					<div class="calc_body__tab __landingPage" v-show="activeTab(1)">
						<div class="calc_body__title">
							<h4>{{ tabValue[1].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[1].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[1].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[1].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[1].page.check2" @valueItem2="getValue2" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[1].page.subTitle3 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[1].page.check3" @valueItem3="getValue3" />
						</div>
						<div class="calc_body__checkbox">
							<CalcCheckboxItem v-for="(checkBox, index) in tabsCheckBox[1]" :indexCheck="index"
								:value="checkBox.value" :isActive="checkBox.isActive" :key="index" :nameCheck="checkBox.title"
								@getIndexCheck="getCheckboxValue">{{
									checkBox.title }}</CalcCheckboxItem>
						</div>
					</div>
					<div class="calc_body__tab __onlineStore" v-show="activeTab(2)">
						<div class="calc_body__title">
							<h4>{{ tabValue[2].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[2].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[2].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[2].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[2].page.check2" @valueItem2="getValue2" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[2].page.subTitle3 }}</div>
							<CalcCheckBoxLine3 :checkBoxArray="tabValue[2].page.check3" @valueItem3="getValue3" />
						</div>
						<div class="calc_body__checkbox">
							<CalcCheckboxItem v-for="(checkBox, index) in tabsCheckBox[2]" :indexCheck="index"
								:value="checkBox.value" :isActive="checkBox.isActive" :key="index" :nameCheck="checkBox.title"
								@getIndexCheck="getCheckboxValue">{{
									checkBox.title }}</CalcCheckboxItem>
						</div>
					</div>
					<div class="calc_body__tab __portal" v-show="activeTab(3)">
						<div class="calc_body__title">
							<h4>{{ tabValue[3].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[3].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[3].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[3].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[3].page.check2" @valueItem2="getValue2" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[3].page.subTitle3 }}</div>
							<CalcCheckBoxLine3 :checkBoxArray="tabValue[3].page.check3" @valueItem3="getValue3" />
						</div>
						<div class="calc_body__checkbox">
							<CalcCheckboxItem v-for="(checkBox, index) in tabsCheckBox[3]" :indexCheck="index"
								:value="checkBox.value" :isActive="checkBox.isActive" :key="index" :nameCheck="checkBox.title"
								@getIndexCheck="getCheckboxValue">{{
									checkBox.title }}</CalcCheckboxItem>
						</div>
					</div>
					<div class="calc_body__tab __contextAdvertising" v-show="activeTab(4)">
						<div class="calc_body__title">
							<h4>{{ tabValue[4].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[4].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[4].page.check1" @valueItem1="getValue1" />
						</div>

					</div>
					<div class="calc_body__tab __seo" v-show="activeTab(5)">
						<div class="calc_body__title">
							<h4>{{ tabValue[5].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[5].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[5].page.check1" @valueItem1="getValue1" />
						</div>
					</div>
					<div class="calc_body__tab __Logo" v-show="activeTab(6)">
						<div class="calc_body__title">
							<h4>{{ tabValue[6].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[6].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[6].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[6].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[6].page.check2" @valueItem2="getValue2" />
						</div>
					</div>
					<div class="calc_body__tab __corporateStyle" v-show="activeTab(7)">
						<div class="calc_body__title">
							<h4>{{ tabValue[7].tab }}:</h4>
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[7].page.subTitle1 }}</div>
							<CalcCheckBoxLine1 :checkBoxArray="tabValue[7].page.check1" @valueItem1="getValue1" />
						</div>
						<div class="calc_body_item">
							<div class="calc_body_item__subtitle">{{ tabValue[7].page.subTitle2 }}</div>
							<CalcCheckBoxLine2 :checkBoxArray="tabValue[7].page.check2" @valueItem2="getValue2" />
						</div>
						<div class="calc_body__checkbox">
							<CalcCheckboxItem v-for="(checkBox, index) in tabsCheckBox[7]" :indexCheck="index"
								:value="checkBox.value" :isActive="checkBox.isActive" :key="index" :nameCheck="checkBox.title"
								@getIndexCheck="getCheckboxValue">{{
									checkBox.title }}</CalcCheckboxItem>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="calc_body__checkbox">
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
			</div> -->
			<div class="calc_body__footer">
				<div class="calc_body__footer_column">
					<div class="calc_body__footer_item">Орієнтовна вартість</div>
					<div class="calc_body__footer_item">Від {{ value }} грн</div>
				</div>
				<div class="calc_body__footer_column">
					<div class="calc_body__footer_item">Термін виконання</div>
					<div class="calc_body__footer_item">Від {{ time }} днів</div>
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
import CalcCheckBoxLine1 from "./CalckCheckBoxLine.vue";
import CalcCheckBoxLine2 from "./CalckCheckBoxLine2.vue";
import CalcCheckBoxLine3 from "./CalckCheckBoxLine3.vue";
export default {
	components: { MainButton, CalcButton, CalcCheckboxItem, CalcCheckBoxLine1, CalcCheckBoxLine2, CalcCheckBoxLine3 },
	name: "Calc",
	data() {
		return {
			value: 0,
			time: 0,
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
			tabsCheckBox: [[{ title: 'Рукописна CMS', value: 20, isActive: false }, { title: 'Форма збору даних', value: 40, isActive: false }, { title: 'Калькулятор цін', value: 60, isActive: false }],
			[{ title: 'Рукописна CMS', value: 20, isActive: false }, { title: 'Форма збору даних', value: 20, isActive: false }, { title: 'Калькулятор цін', value: 60, isActive: false }],
			[{ title: 'Форма збору даних', value: 20, isActive: false }, { title: 'Рукописна CMS', value: 20, isActive: false }, { title: 'Калькулятор цін', value: 60, isActive: false }, { title: 'Імпорт/експорт через Ексель', value: 60, isActive: false }, { title: 'Онлайн оплата', value: 60, isActive: false }, { title: 'Фільтр товарів', value: 60, isActive: false }, { title: 'Ярлики товарів(Акції,новинки...)', value: 60, isActive: false }, { title: 'Порівняння,рейтинг товарів', value: 60, isActive: false }],
			[{ title: 'Форма збору даних', value: 20, isActive: false }, { title: 'Рукописна CMS', value: 20, isActive: false }, { title: 'Особистий кабінет', value: 60, isActive: false }],
			[{ title: 'Бренд на аксесуарах', value: 20, isActive: false }, { title: 'Бренд на бланках', value: 20, isActive: false }, { title: 'Бренд на одягу', value: 20, isActive: false }]],
			tabValue: [
				{
					tab: "Розробка сайту",
					page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:50%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							widthItem: "width:75%",
							value: 30,
							time: 0,
							isActive: false,
						},
						{
							title: "Wow дизайн",
							widthName: "left:-150%",
							value: 40,
							time: 0,
							isActive: false,
						},
						],
						subTitle2: 'Кількість унікальних сторінок',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1-3',
							widthLine: "width:20%",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '3-7',
							widthLine: "width:40%",
							value: 20,
							time: 0,
							isActive: false
						}, {
							title: '7-15',
							widthLine: "width:60%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '15-50',
							widthLine: "width:80%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '50 i бiльше',
							widthName: "left:-150%",
							value: 50,
							time: 0,
							isActive: false,
						}],
						subTitle3: 'Кількість мовних версій сайту',
						check3: [{
							title: '1',
							widthName: "left:5px",
							widthLine: "display:none",
							value: 10,
							time: 0,
							isActive: false
						},
						{
							title: '2',
							widthName: "left:5px",
							widthItem: "width:20%",
							value: 20,
							time: 0,
							isActive: false
						},
						{
							title: '3', widthName: "left:5px",
							widthItem: "width:40%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4', widthName: "left:5px",
							widthItem: "width:60%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5', widthName: "left:5px",
							widthItem: "width:80%",
							value: 50,
							time: 0,
							isActive: false
						}, {
							title: '6 i бiльше',
							widthName: "left:-150%",
							value: 60,
							time: 0,
							isActive: false
						}]
					}
				},
				//  checkbox: [{ title: 'Рукописна CMS', value: 0 }, { title: 'Форма збору даних', value: 0 }, { title: 'Калькулятор цін', value: 0 }],
				{
					tab: "Розробка Landing page", page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:50%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							widthItem: "width:75%",
							value: 30,
							time: 0,
							isActive: false,
						},
						{
							title: "Wow дизайн",
							widthName: "left:-150%",
							value: 40,
							time: 0,
							isActive: false,
						},
						],
						subTitle2: 'Кількість блоків (екранів)',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1',
							widthItem: "width:10%",
							widthName: "left:5px",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '2',
							widthItem: "width:20%",
							widthName: "left:5px",
							value: 20,
							time: 0,
							isActive: false,
						}, {
							title: '3',
							widthItem: "width:30%",
							widthName: "left:5px",
							value: 30,
							time: 0,
							isActive: false,
						}, {
							title: '4',
							widthItem: "width:40%",
							widthName: "left:5px",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5',
							widthItem: "width:50%",
							widthName: "left:5px",
							value: 50,
							time: 0,
							isActive: false,
						}, {
							title: '6',
							widthItem: "width:60%",
							widthName: "left:5px",
							value: 60,
							time: 0,
							isActive: false
						},
						{
							title: '7',
							widthItem: "width:70%",
							widthName: "left:5px",
							value: 70,
							time: 0,
							isActive: false,
						}, {
							title: '8',
							widthItem: "width:80%",
							widthName: "left:5px",
							value: 80,
							time: 0,
							isActive: false
						},
						{
							title: '9',
							widthItem: "width:90%",
							widthName: "left:5px",
							value: 90,
							time: 0,
							isActive: false
						}, {
							title: '10 i бiльше',
							widthName: "left:-150%",
							value: 50,
							time: 0,
							isActive: false,
						}],
						subTitle3: 'Кількість мовних версій сайту',
						check3: [{
							title: '1', widthLine: "width:60%",
							widthName: "left:5px",
							widthLine: "display:none",
							value: 10,
							time: 0,
							isActive: false
						},
						{
							title: '2',
							widthName: "left:5px",
							widthItem: "width:20%",
							value: 20,
							time: 0,
							isActive: false
						},
						{
							title: '3', widthName: "left:5px",
							widthItem: "width:40%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4', widthName: "left:5px",
							widthItem: "width:60%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5', widthName: "left:5px",
							widthItem: "width:80%",
							value: 50,
							time: 0,
							isActive: false
						}, {
							title: '6 i бiльше',
							widthName: "left:-150%",
							value: 60,
							time: 0,
							isActive: false
						}]
					}
				},
				{
					tab: "Розробка Iнтернет магазину",
					page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:50%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							widthItem: "width:75%",
							value: 30,
							time: 0,
							isActive: false,
						},
						{
							title: "Wow дизайн",
							widthName: "left:-150%",
							value: 40,
							time: 0,
							isActive: false,
						},
						],
						subTitle2: 'Кількість унікальних сторінок',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1-3',
							widthLine: "width:20%",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '3-7',
							widthLine: "width:40%",
							value: 20,
							time: 0,
							isActive: false
						}, {
							title: '7-15',
							widthLine: "width:60%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '15-50',
							widthLine: "width:80%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '50 i бiльше',
							widthName: "left:-150%",
							value: 50,
							time: 0,
							isActive: false,
						}],
						subTitle3: 'Кількість мовних версій сайту',
						check3: [{
							title: '1', widthLine: "width:60%",
							widthName: "left:5px",
							widthLine: "display:none",
							value: 10,
							time: 0,
							isActive: false
						},
						{
							title: '2',
							widthName: "left:5px",
							widthItem: "width:20%",
							value: 20,
							time: 0,
							isActive: false
						},
						{
							title: '3', widthName: "left:5px",
							widthItem: "width:40%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4', widthName: "left:5px",
							widthItem: "width:60%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5', widthName: "left:5px",
							widthItem: "width:80%",
							value: 50,
							time: 0,
							isActive: false
						}, {
							title: '6 i бiльше',
							widthName: "left:-150%",
							value: 60,
							time: 0,
							isActive: false
						}]
					}
				},
				{
					tab: "Розробка портала", page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:50%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							widthItem: "width:75%",
							value: 30,
							time: 0,
							isActive: false,
						},
						{
							title: "Wow дизайн",
							widthName: "left:-150%",
							value: 40,
							time: 0,
							isActive: false,
						},
						],
						subTitle2: 'Кількість унікальних сторінок',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1-3',
							widthLine: "width:20%",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '3-7',
							widthLine: "width:40%",
							value: 20,
							time: 0,
							isActive: false
						}, {
							title: '7-15',
							widthLine: "width:60%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '15-50',
							widthLine: "width:80%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '50 i бiльше',
							widthName: "left:-150%",
							value: 50,
							time: 0,
							isActive: false,
						}],
						subTitle3: 'Кількість мовних версій сайту',
						check3: [{
							title: '1', widthLine: "width:60%",
							widthName: "left:5px",
							widthLine: "display:none",
							value: 10,
							time: 0,
							isActive: false
						},
						{
							title: '2',
							widthName: "left:5px",
							widthItem: "width:20%",
							value: 20,
							time: 0,
							isActive: false
						},
						{
							title: '3', widthName: "left:5px",
							widthItem: "width:40%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4', widthName: "left:5px",
							widthItem: "width:60%",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5', widthName: "left:5px",
							widthItem: "width:80%",
							value: 50,
							time: 0,
							isActive: false
						}, {
							title: '6 i бiльше',
							widthName: "left:-150%",
							value: 60,
							time: 0,
							isActive: false
						}]
					}
				},
				{
					tab: "Контекстна реклама", page: {
						subTitle1: 'Кількість напрямів діяльності (Ціна за 1 місяць роботи)',
						check1: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1',
							widthItem: "width:10%",
							widthName: "left:5px",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '2',
							widthItem: "width:20%",
							widthName: "left:5px",
							value: 20,
							time: 0,
							isActive: false,
						}, {
							title: '3',
							widthItem: "width:30%",
							widthName: "left:5px",
							value: 30,
							time: 0,
							isActive: false,
						}, {
							title: '4',
							widthItem: "width:40%",
							widthName: "left:5px",
							value: 40,
							time: 0,
							isActive: false
						}, {
							title: '5 i бiльше',
							widthItem: "width:50%",
							widthName: "left:5px",
							value: 50,
							time: 0,
							isActive: false,
						}, {
							title: '10 i бiльше',
							widthItem: "width:60%",
							widthName: "left:5px",
							value: 60,
							time: 0,
							isActive: false
						},
						{
							title: '20 i бiльше',
							widthItem: "width:70%",
							widthName: "left:5px",
							value: 70,
							time: 0,
							isActive: false,
						}, {
							title: '30 i бiльше',
							widthItem: "width:80%",
							widthName: "left:5px",
							value: 80,
							time: 0,
							isActive: false
						},
						{
							title: '40 i бiльше',
							widthItem: "width:90%",
							widthName: "left:5px",
							value: 90,
							time: 0,
							isActive: false
						}, {
							title: '50 i бiльше',
							widthName: "left:-150%",
							value: 100,
							time: 0,
							isActive: false,
						}],
					}
				},
				{
					tab: "SEO просування", page: {
						subTitle1: 'Кількість напрямів діяльності (Ціна за 1 місяць роботи)',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: '1',
							widthItem: "width:33.3%",
							widthName: "left:5px",
							value: 10,
							time: 0,
							isActive: false
						},
						{
							title: '2',
							widthName: "left:5px",
							widthItem: "width:66.6%",
							value: 20,
							time: 0,
							isActive: false
						},
						{
							title: '3', widthName: "left:5px",
							value: 30,
							time: 0,
							isActive: false
						},],
					}
				},
				{
					tab: "Розробка логотипу", page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:33.3%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:66.6%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							value: 30,
							time: 0,
							isActive: false,
						}
						],
						subTitle2: 'Кількість варіантів дизайну',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1',
							widthLine: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '2',
							widthLine: "width:50%",
							value: 20,
							time: 0,
							isActive: false
						}, {
							title: '3',
							widthLine: "width:75%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4+',
							value: 40,
							time: 0,
							isActive: false
						}],
					}
				},
				{
					tab: "Розробка фiрмового стилю", page: {
						subTitle1: 'Складність дизайну',
						check1: [{
							title: "Виберіть",
							widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false,
						},
						{
							title: "Простий дизайн",
							widthName: "left:-260%",
							widthItem: "width:33.3%",
							value: 10,
							time: 0,
							isActive: false,
						},
						{
							title: "Середній",
							widthName: "left:-150%",
							widthItem: "width:66.6%",
							value: 20,
							time: 0,
							isActive: false,
						},
						{
							title: "Складний",
							widthName: "left:-150%",
							value: 30,
							time: 0,
							isActive: false,
						}
						],
						subTitle2: 'Кількість варіантів дизайну',
						check2: [{
							title: 'Виберіть', widthName: "left:-150%",
							widthLine: "display:none",
							value: 0,
							time: 0,
							isActive: false
						}, {
							title: '1',
							widthLine: "width:25%",
							value: 10,
							time: 0,
							isActive: false,
						}, {
							title: '2',
							widthLine: "width:50%",
							value: 20,
							time: 0,
							isActive: false
						}, {
							title: '3',
							widthLine: "width:75%",
							value: 30,
							time: 0,
							isActive: false
						}, {
							title: '4+',
							value: 40,
							time: 0,
							isActive: false
						}],
					}
				}
			]
		};
	},
	methods: {
		getValue1(value) {
			console.log('1', value);

		},
		getValue2(value) {
			console.log('2', value);

		},
		getValue3(value) {
			console.log('3', value);
		},
		selectTab(id) {
			this.selectedIndex = id;
			// let dataPage = this.tabValue[this.selectedindex]
		},
		getCheckboxValue(i) {
			this.tabsCheckBox[this.selectedIndex][i].isActive = !this.tabsCheckBox[this.selectedIndex][i].isActive;
			this.tabsCheckBox[this.selectedIndex][i].value
			this.value += this.tabsCheckBox[this.selectedIndex][i].value

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

.calc_body__checkbox {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 300px;
	margin-top: 80px;

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

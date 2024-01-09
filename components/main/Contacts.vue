<template>
	<div class="contacts__block">
		<div class="container">
			<div class="contacts">
				<div class="contacts__title">
					<h2>Контакти</h2>
				</div>
				<div class="contacts__body">
					<div class="contacts__body_form">
						<form>
							<label for="">
								<input class="contacts__form_inpt" type="text" placeholder="Введіть ваше ім'я *" />
							</label>
							<label for="">
								<input type="number" placeholder="Номер телефону *" />
							</label>
							<label for="">
								<input type="mail" placeholder="Email *" />
							</label>
							<!-- <label for="" class="">
								<input type="select" placeholder="Тип послуги" />

							</label> -->
							<div class="contact_services">
								<div class="contact_services__head">
									<div class="contact_services__title">
										Тип послуги
									</div>
									<div class="contact_item__btn" :class="showServices ? 'active_btn' : ''">
										<button @click.prevent="toggleServiceCard"><span></span></button>
									</div>
								</div>
								<div class="contact_services__body" v-show="showServices">
									<ServiceButton v-for="item in itemListServices" :key="item[i]">{{ item }}</ServiceButton>
								</div>
							</div>
							<div class="contacts__body_form_btn" @click.prevent>
								<MainButton @click.prevent :fontSize="'font-size:20px;padding:7px'">надіслати</MainButton>
							</div>
						</form>
					</div>
					<div class="contacts__body_info">
						<div class="info__text">
							<div class="info__text_title">Номер телефону</div>
							<div class="info__text_subtitle">+380633746749</div>
						</div>
						<div class="info__messengers">
							<div class="info__messengers-tlgrm">
								<img src="../../static/image/block-7-info-telegram-logo.svg" alt="telegram-logo" />
								<img src="../../static/image/block-7-info-telegram-text.svg" alt="telegram-logo-text" />
							</div>
							<div class="info__messengers-wtsup">
								<img src="../../static/image/block-7-info-whatsapp-logo.svg" alt="whatsup-logo" />
								<img src="../../static/image/block-7-info-whatsapp-text.svg" alt="whatsup-logo-text" />
							</div>
						</div>
						<div class="info__text">
							<div class="info__text_title">Зв'яжіться з нами!</div>
							<div class="info__text_subtitle">info@brainlab.com.ua</div>
						</div>
						<div class="info__text">
							<div class="info__text_title">Наш офіс</div>
							<div class="info__text_subtitle">
								Україна, Київ<br />
								вулиця Євгена Сверстюка, 19
							</div>
						</div>
						<div class="info__text">
							<div class="info__text_title">Ми в соцмережах</div>
							<div class="info__text_subtitle">
								<ul @click.prevent="" class="info__subtitl_list">
									<li>
										<a href="" class="info__subtitle_link">facebook</a>
									</li>
									<li>
										<a href="" class="info__subtitle_link">instagram</a>
									</li>
									<li>
										<a href="" class="info__subtitle_link">linkedin</a>
									</li>
									<li>
										<a href="" class="info__subtitle_link">behance</a>
									</li>
									<li>
										<a href="" class="info__subtitle_link">vimeo</a>
									</li>
									<li>
										<a href="" class="info__subtitle_link">pinterest</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div></template>
<script>
import MainButton from "../button/MainButton.vue";
import ServiceButton from '../button/ServiceButton.vue'
export default {
	components: { MainButton, ServiceButton },
	name: "Contacts",
	data() {
		return {
			showServices: false,
			itemListServices: [
				"Landing page",
				"Корпоративні сайти",
				"Інтернет магазин",
				"Бізнес сайт",
				"Сайт візитка",
				"Дизайн сайту",
				"Розробка сайту",
				"Редизайн сайту",
				"Ecommerce проекти",
			]
		}
	},
	methods: {
		toggleServiceCard() {
			this.showServices = !this.showServices;
		},
	},
};
</script>
<style scoped>
.container {
	max-width: 1280px;
	margin: 0 auto;
}

.contacts {
	position: relative;
	padding: 100px 14.5px;
	background-color: black;
	display: flex;
	flex-direction: column;
	z-index: 96;
}

.contacts::before {
	content: "";
	position: absolute;
	bottom: -170px;
	left: -620px;
	height: 492px;
	width: 842px;
	transform: rotate(133deg);
	opacity: 30%;
	background: linear-gradient(87.08deg, #203f6a 0%, #ea5a25 100%);
	box-shadow: inset 0px 0px 130px 50px black;

	z-index: 1;
}

.contacts::after {
	content: "";
	position: absolute;
	top: 160px;
	right: 0px;
	width: 160px;
	height: 160px;
	background: url(../../static/image/block-7-star.svg) center no-repeat;
}

.contacts__title {
	font-family: var(--title-font);
	line-height: 76px;
	text-transform: uppercase;
	font-size: 80px;
	margin-bottom: 90px;
}

.contacts__body {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	flex-direction: row;
	justify-content: space-between;
	z-index: 6;
}

.contacts__body_form {

	flex: 0 0 50%;
	max-width: 629px;
	display: flex;
	flex-direction: column;
}

.contacts__body_form input {
	padding: 3px 0px 22px 20px;
	font-size: 16px;
	width: 100%;
	background-color: transparent;
	border-bottom: 1px solid rgba(248, 248, 248, 1);
	margin-bottom: 30px;
}

.contacts__form_inpt {}

.info__subtitl_list {
	display: flex;
	flex-wrap: wrap;
	width: 300px;
	padding-top: 10px;
}

.info__subtitl_list li {
	margin-right: 30px;
	margin-bottom: 6px;
}

.contacts__body_info {
	width: 417px;
}

.contact_services {
	width: 100%;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(248, 248, 248, 1);
	margin-bottom: 30px;
}

.contact_services__head {
	display: flex;
	justify-content: space-between;
}

.contact_services__title {
	font-size: 16px;
	padding: 3px 0px 22px 20px;
	color: rgba(248, 248, 248, 1);
	opacity: 50%;
}

.contact_item__btn,
.contact_item__btn button {
	width: 30px;
	height: 30px;
	background: transparent
}

.contact_item__btn {
	position: relative;
	padding-right: 20px;
}

.contact_item__btn span::before,
.contact_item__btn span::after {
	content: "";
	position: absolute;
	top: 50%;
	right: 15px;
	width: 15px;
	height: 2px;
	background: rgba(234, 90, 37, 1);

}

.contact_item__btn span::after {
	transform: rotate(90deg);
}

.contact_services__head:hover {
	.contact_item__btn span::before,
	.contact_item__btn span::after {
		background: rgb(247, 245, 245);
	}
}

.active_btn {

	span::after {
		top: 18.5px;
		right: 18px;
		width: 8px;
		height: 2px;
		background-color: rgba(234, 90, 37, 1);
	}

	.contact_item__btn span::before,
	.contact_item__btn span::after {
		top: 18px;
		right: 18px;
		width: 8px;
		height: 2px;

		background-color: rgba(234, 90, 37, 1);
	}
}

.contact_item__btn {}

.contact_services__body {
	margin-bottom: 14px;
}

.contacts__body_form_btn {
	margin-top: 50px;
	margin-left: 40px;
	width: 308px;
}

.info__text {
	align-items: flex-start;
	font-size: 16px;
	margin-bottom: 39.5px;
	flex: 0 0 50%;
}

.info__text_title {
	font-size: 15px;
	line-height: 25px;

	margin-bottom: 10px;
}

.info__text_subtitle {
	line-height: 25px;
	opacity: 50%;
}

.info__messengers {
	display: flex;
	flex-direction: row;
	margin-top: -20px;
	margin-bottom: 30px;
}

.info__messengers-tlgrm {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 11.5px;
}

.info__messengers-wtsup {
	display: flex;
	align-items: center;
	justify-content: center;
}

@media (max-width: 1200px) {
	.contacts {
		padding: 0px 14.5px;
	}

	.contacts__title {
		margin-bottom: 40px;
		margin-top: 50px;
		font-size: 60px;
	}

	.contacts__body_form {}

	.contacts__body_info {
		max-width: 417px;
	}
}

@media (max-width: 970px) {
	.contacts::after {
		content: "";
		position: absolute;
		top: 50px;
		right: 0px;
		scale: 0.7;
		transform: rotate(45deg);
	}

	.contacts__title {
		font-size: 40px;
	}

	.contacts__body_info {
		align-items: flex-end;
		justify-content: flex-end;
		max-width: 400px;
	}
}

@media (max-width: 767px) {
	.contacts__title {
		font-size: 22px;
	}

	.contacts__body {
		flex-direction: column;
	}

	.contacts__body_form_btn {
		display: none;
		margin-top: 10px;
		flex: 1 1 100%;
	}

	.contacts__body_info {
		margin-top: 20px;
	}

	.contacts__body_info {
		flex: 1 1 100%;
		align-items: center;
	}
}</style>

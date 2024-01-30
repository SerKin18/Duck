<template>
	<div class="modal-block">
	  <div class="modal-window">
		<div class="calc_title">
        <h2>Замовлення</h2>
      </div>
		 <div class="contacts__modal__btn" @click.stop="$emit('close')">
			<button><span></span></button>
		 </div>
		 <div class="modal container">
			<div class="contacts__body_form">
        <form>
          <label for="text">
            <input
              class="contacts__form_inpt"
              type="text"
              placeholder="Введіть ваше ім'я *"
            />
          </label>
          <label for="number">
            <input type="number" placeholder="Номер телефону *" />
          </label>
          <label for="mail">
            <input type="mail" placeholder="Email *" />
          </label>

          <div class="contact_services">


			 </div>
		  </form>
			</div>
		 </div>
	  </div>
	</div>
 </template>
 <script>
 import Contacts from "./Contacts.vue";
 
 export default {
	components: { Contacts },
	name: "modal-window",
 };
 </script>
 <style scoped>
 .container {
	max-width: 1280px;
	margin: 0 auto;
 }
 .modal-block {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(18, 18, 18, 0.8);
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	overflow-y: hidden;
 }
 .modal-window {
	position: absolute;
	z-index: 100;
	width: 100%;
 }
 .modal {
	background-color: black;
	padding: 50px 35.5px 50px 35.5px;
 }
 .contacts__modal__btn {
	display: none;
	width: 100%;
	height: 30px;
	padding: 0px 14.5px;
	text-align: right;
 }
 .contacts__modal__btn button {
	position: relative;
	width: 30px;
	height: 30px;
	background: transparent;
 }
 .contacts__modal__btn span::before,
 .contacts__modal__btn span::after {
	content: "";
	position: absolute;
	top: 50%;
	right: 3px;
	width: 25px;
	height: 3px;
	background-color: rgb(253, 252, 252);
 }
 .contacts__modal__btn span::after {
	transform: rotate(45deg);
 }
 .contacts__modal__btn span::before {
	transform: rotate(-45deg);
 }
 .contacts__modal__btn:hover {
	span:before,
	span:after {
	  background-color: rgba(234, 90, 37, 1);
	}
 }
 .contacts__body_form {
  flex: 0 0 50%;
  max-width: 629px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.contacts__body_form input {
  padding: 3px 0px 22px 20px;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
  margin-bottom: 30px;
}
 </style>
 
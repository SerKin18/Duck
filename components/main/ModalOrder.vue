<template>
  <div class="modal-block">
    <div class="modal-window container">
      <div class="modal ">
        <div class="contacts__modal__btn" @click.stop="$emit('modalCalcClose')">
          <button><span></span></button>
        </div>
		 
        <Calc :modal="modalCalcOpen"></Calc>
      </div>
    </div>
  </div>
</template>
<script>
import Calc from "./Calc.vue";
export default {
  components: { Calc },
  name: "modal-window",
  props:{
	modalCalcOpen:{
		type:Boolean
	}
  }
};
</script>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.modal-block {
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-window {

}
.modal {
  background-color: black;
  padding: 50px 35.5px 50px 35.5px;
  width:100%
}
.contacts__modal__btn {
  display: none;
  width: 100%;
  height: 30px;
  padding: 0px 14.5px;
  text-align: right;
  margin-top:39px ;
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
.calc_footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
}

.calc_footer > * {
  width: 170px;
}
.calc_body__checkbox {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  margin-top: 40px;
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
.calc_body_item {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.calc_body_item__subtitle {
  align-items: flex-start;
  margin: 30px 0px 10px 0px;
}
@media (max-width: 767px) {
  .contacts__modal__btn {
    display: block;
  }
  .modal-block {
    background: rgb(0, 0, 0);
  }
  .modal-window {
  }
  .modal {
    padding: 0px;
  }}
</style>

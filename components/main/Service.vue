<template>
  <div class="services">
    <div class="services__title">
      <h2 id="service">Послуги</h2>
    </div>
    <div class="services__body">
      <ServiceItem
        v-for="(service,index) in services"
        :service="service"
        :key="index"
		  
        @openModalOrder="openModalOrderWindow"
      ></ServiceItem>
    </div>
    <main-button
      @openModal="openModalWindow"
      :fontSize="'font-size:17px;padding:9px;width:220px;margin-left:0px'"
      >відправити запит</main-button
    >
    <ModalOrder v-if="openModalOrder" @close="openModalOrderWindow"
	 v-bind:openOrderCalcTab="openModalOrderCalc"></ModalOrder>
	 <Modal v-if="openModal" @close="openModalWindow"></Modal>
  </div>
</template>
<script>
import MainButton from "../button/MainButton.vue";
import ServiceItem from "./ServiceItem.vue";
import ModalOrder from "./ModalOrder.vue";
import Modal from './Modal'
export default {
  components: { MainButton, ServiceItem, ModalOrder ,Modal},
  name: "Service",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openMenu: false,
      openModalOrder: false,
		openModalOrderCalc:0,
		openModal:false
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    openModalWindow() {
      this.openModal = !this.openModal;
    },
	 openModalOrderWindow(id) {
		this.openModalOrderCalc=id
      this.openModalOrder = !this.openModalOrder;
    },
  },
};
</script>
<style scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 97px;
  margin-bottom: 100px;
  padding: 0px 14.5px;
}
.services__title {
  text-transform: uppercase;
  font-family: var(--title);
  font-size: 80px;
  align-self: start;
  margin-bottom: 90px;
}
.services__body {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 1200px) {
  .services {
    margin-top: 70px;
  }
  .services__title {
    margin-bottom: 40px;
    font-size: 60px;
  }
}
@media (max-width: 970px) {
  .services__title {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
  .services__title {
    font-size: 22px;
  }
}
</style>

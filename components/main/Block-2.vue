<template>
  <div class="services">
    <div class="services__title">
      <h2>Послуги</h2>
    </div>
    <div class="services__body">
      <Service
        v-for="service in services"
        :service="service"
        :key="service.id"
      ></Service>
    </div>
    <main-button>відправити запит</main-button>
  </div>
</template>
<script>
import MainButton from "../button/main-button.vue";
import Service from "./Service.vue";
export default {
  components: { MainButton, Service },
  name: "block-2",
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scope>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 97px;
}
.services__title {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 80px;
  align-self: start;
  margin-bottom: 90px;
}
.services__body {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 1 33.33%;
}
</style>

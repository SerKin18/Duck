<template>
  <div class="container">
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
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 97px;
  margin-bottom: 100px;
}
.services__title {
  text-transform: uppercase;
  font-family: var(--title-font);
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

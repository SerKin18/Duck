<template>
  <div class="fqs">
    <div class="container">
      <div class="fqs__title">
        <h2>Поширені <span> запитання</span> (FAQ)</h2>
      </div>
      <div class="fqs__body">
        <FQSItem
          v-for="FQSItem in FQSItems"
          :FQSItem="FQSItem"
          :key="FQSItem.id"
        ></FQSItem>
      </div>
    </div>
  </div>
</template>
<script>
import FQSItem from "./FQSItem.vue";
export default {
  components: { FQSItem },
  name: "FQS",
  props: {
    FQSItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.fqs {
  position: relative;
  padding: 100px 14.5px;
  width: 100%;
  background: url(../../static/image/why-us-image.jpg) center;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.fqs__title {
  text-align: center;
  white-space: nowrap;
  font-family: var(--title);
  letter-spacing: -2px;
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  padding-left: 6px;
}
.fqs__title h2 {
  color: black;
}
@supports (-webkit-text-stroke: 1px white) {
  .fqs__title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #000000;
    position: relative;
  }
}

.fqs__body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 1360px) {
  .fqs__title {
    font-size: 60px;
    white-space: wrap;
    margin-left: 0px;
  }
}

@media (max-width: 1200px) {
  .fqs {
    padding: 50px 8.5px;
  }

  .fqs__title {
    text-align: start;
    font-size: 60px;
    white-space: wrap;
    margin-left: 0px;
  }
}
@media (max-width: 970px) {
  .container {
    margin: 0;
  }
  .fqs__title {
    font-size: 40px;
    margin-bottom: 50px;
  }
}
@media (max-width: 767px) {
  .fqs__title {
    font-size: 22px;
    line-height: 21px;
    margin-bottom: 30px;
  }
}
</style>

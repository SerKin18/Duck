<template>
  <div class="why-us">
	<div class="container">
    <div class="why-us__title">
      <h2>Чому<span> ми </span>?</h2>
    </div>
    <div class="why-us__body">
      <WhyUs
        v-for="whyUsItem in whyUsItems"
        :whyUsItem="whyUsItem"
        :key="whyUsItem.id"
      ></WhyUs>
    </div>
	</div>
  </div>
</template>
<script>
import WhyUs from "./Why-Us.vue";
export default {
  components: { WhyUs },
  name: "block-4",
  props: {
    whyUsItems: {
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
.why-us {
  padding: 100px 17px;
  width: 100%;
  background: url(../../static/image/why-us-image.jpg) center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.why-us__title {
  text-transform: uppercase;
  align-self: start;
  font-size: 80px;
  font-family: var(--title-font);
  margin-bottom: 90px;
}
.why-us__title h2 {
  color: black;
}

@supports (-webkit-text-stroke: 1px white) {
  .why-us__title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #000000;
    position: relative;
  }
}
.why-us__body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
@media (max-width: 1200px) {
  .why-us {
    padding: 50px 20px;
  }
  .why-us__title {
    margin-bottom: 40px;
    margin-top: 50px;
    font-size: 60px;
  }
}
@media (max-width: 970px) {
	.why-us__body{
		align-items:center;
		justify-content:center ;
	}
  .why-us__title {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
  .why-us__title {
    font-size: 22px;
  }
}
</style>

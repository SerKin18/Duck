<template>
  <div class="why-us-item">
    <div class="why-us__num">
      <span>00{{ whyUsItem.id }}</span>
    </div>
    <div class="why-us__text">
      <div class="why-us-text__title">
        <span
          ><p>{{ whyUsItem.title }}</p></span
        >
      </div>
      <div class="why-us-text__subtitle">
        <p>{{ whyUsItem.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "why-us-item",
  props: {
    whyUsItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.why-us-item {
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 23px 14px;
  max-width: 412px;
  margin-bottom: 70px;
  flex: 0 0 33.333%;
  color: rgba(18, 18, 18, 1);
}
.why-us-item p,
span {
  color: rgba(18, 18, 18, 1);
}
.why-us__num {
  font-weight: 700;
  font-size: 24px;
  opacity: 20%;
  color: rgba(18, 18, 18, 1);
  margin-right: 20px;
}
.why-us__text {
  display: flex;
  flex-direction: column;

  color: rgb(5, 4, 4);
}
.why-us-text__title {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
}
.why-us-text__subtitle {
  font-size: 16px;
  font-weight: 400;
}
@media (max-width: 767px) {
	.why-us-item {
    max-width: 100%;
    flex: 0 0 100%;
    
    margin-bottom: 0px;
    padding: 15px 11px ;
  }}
</style>

<template>
  <div class="why-us-item">
    <div class="why-us__num">
      <span>00{{ whyUsItem.id }}</span>
    </div>
    <div class="why-us__text">
      <div class="why-us-text__title">
        <h4>{{ whyUsItem.title }}</h4>
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
  max-width: 412px;
  margin-bottom: 70px;
  height: 110px;
  padding: 22px 28px 21px 0px;

  flex: 1 0 33.333%;
}
.why-us-item span,
.why-us-item h4,
.why-us-item p {
  color: rgba(18, 18, 18, 1);
}

.why-us__num {
  font-family: var(--title-font);
  font-size: 24px;
  opacity: 20%;
  margin-right: 20px;
  margin-top: 7px;
}
.why-us__text {
  display: flex;
  flex-direction: column;
}
.why-us-text__title {
  font-family: var(--title-font);
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 10px;
}
.why-us-text__title h4 {
  text-align: start;
}
.why-us-text__subtitle {
  font-size: 16px;
  text-align: start;
}
@media (max-width: 767px) {
  .why-us-item {
    max-width: 100%;
    flex: 0 0 100%;
    max-height: 100%;
    margin-bottom: 0px;
    padding: 0px 0px;
    margin-bottom: 30px;
  }
}
</style>

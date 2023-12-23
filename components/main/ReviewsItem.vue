<template>
  <div class="review-items">
    <div class="review-item" id="ratting">
      <div class="review-item__header">
        <div class="review-item__logo">
          <img src="@/assets/reviews-logo3.png" alt="logo-review" />
          <!-- <img :src="review.logo" alt="logo-review" /> -->
        </div>
        <div class="review-item__name">
          <div class="review-item__title">{{ review.name }}</div>
          <div class="review-item__subtitle">{{ review.job }}</div>
        </div>
      </div>
      <div class="review-item__body">
        <p>{{ review.text }}</p>
      </div>
      <div class="review-item__footer">
        <div class="review-item__button">
          <button class="review-item__button_item">Інтернет магазин</button>
        </div>
        <div class="review-item__stars">
          <StarsRating :rating="review.rating" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarsRating from "../button/StarsRating.vue";

export default {
  components: { StarsRating },
  name: "Reviews-Item",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.review-items {
}
.review-item {
  max-width: 396px;

  max-height: 100%;
  padding: 20px 20px;
  margin: 2px 2px 70px 2px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(234, 90, 37, 1);
  flex: 1 1 33.333%;
}
.review-item__header {
  display: flex;
  width: 100%;
  margin-bottom: 32px;
}
.review-item__logo {
  text-align: center;
  vertical-align: baseline;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.review-item__logo img {
}
.review-item__name {
  display: flex;
  flex-direction: column;
}
.review-item__title {
  font-family: var(--title-font);
  font-style: 18px;
  line-height: 40px;
  color: rgba(248, 248, 248, 1);
}
.review-item__subtitle {
  font-size: 14px;
  opacity: 50%;
  line-height: 25px;
}
.review-item__body p {
  font-size: 14px;
  line-height: 25px;
  text-align: left;
}
.review-item__body {
  max-width: 371px;
  margin-bottom: 30px;
}
.review-item__footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.review-item__button {
}
.review-item__button_item {
  font-size: 14px;
  line-height: 25px;
  padding: 3px 20px;
  background-color: transparent;
  border: 1px solid rgba(234, 90, 37, 1);
  border-radius: 20px;
}
.review-item__stars {
  align-items: center;
  justify-content: center;
  max-width: 100%;

  padding-bottom: 3px;
}
@media (max-width: 970px) {
  .review-item {
    margin: 2px 2px 50px 2px;
  }
}
@media (max-width: 828px) {
  .review-items {
    width: 100%;
  }
  .review-item {
    max-width: 100%;

    margin: 0px 0px 20px 0px;
  }
  .review-item__body {
    max-width: 100%;
  }
}
@media (max-width: 767px) {
  .review-items {
    width: 100%;
  }
  .review-item {
    max-width: 100%;
    margin: 0px 0px 20px 0px;
  }
  .review-item__body {
    max-width: 100%;
  }
}
@media (max-width: 540px) {
  .review-items {
    justify-content: center;
  }
  .review-item {
    max-width: 370px;
  }
}
</style>

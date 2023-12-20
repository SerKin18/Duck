<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews__page">
        <div class="reviews__header">
          <div class="reviews__header_title">
            <h2>відгуки<span> до </span>качки</h2>
          </div>
        </div>
        <div class="reviews__body">
          <ReviewsItem
            v-for="review in reviews"
            :review="review"
            :key="review.id"
          >
          </ReviewsItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReviewsItem from "./Reviews-Item.vue";
export default {
  components: { ReviewsItem },
  name: "Reviews",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.reviews {
  padding: 100px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.reviews__page {
  width: 1200px;
}
.reviews__header {
  margin-bottom: 90px;
}
.reviews__header_title {
  font-family: var(--title);
  letter-spacing: -2px;
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  text-align: flex-start;
}
@supports (-webkit-text-stroke: 1px white) {
  .reviews__header_title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    position: relative;
  }
}
.reviews__body {
	width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px -7px;
}
</style>

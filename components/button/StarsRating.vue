<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--outlined"
    ></span>
    <div class="star-rating__color" v-bind:style="styleRatingWidth">
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star--colored"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "stars-rating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return this.rating / this.starLimit * 100;
    },
	 styleRatingWidth(){
		return `width:${this.ratingWidth}%`;
	 }
  },
};
</script>
<style scoped>
.star-rating {
  display: inline-flex;
  position: relative;
}
.star-rating__color {
  display: inline-flex;
  
  flex-direction:row-reverse;
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  overflow: hidden;
}
.star {
  display: inline-block;
  width: 33px;
  height: 33px;
  flex-shrink: 0;
}
.star--colored {
  background: url("../../static/image/Star-rating.png") center no-repeat;
 
}
.star--outlined {
  background: url("../../static/image/Star-rating-empty.png") center no-repeat;
 
}
</style>

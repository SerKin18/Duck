<template >
  <div class="fqs">
    <div class="container">
      <div class="fqs__title">
        <h2>Чому<span> ми </span>?</h2>
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
import FQSItem from './FQS-Item.vue';
export default {
	components: { FQSItem },
  name: "block-7",
  props: {
	FQSItems: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scope>
.fqs {
  padding: 100px 0px;
  width: 100%;
  background: url(../../static/image/why-us-image.jpg) center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
	max-width: 1280px;
  margin: 0 auto;
}
.fqs__title {
  text-transform: uppercase;
  align-self: start;
  font-size: 80px;
  font-family: var(--title-font);
  margin-bottom: 90px;
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
</style>
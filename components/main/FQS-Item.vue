<template >
	<div class="FQS-item">
		<div class="FQS-item__text">
			<p>{{ FQSItem.text }}</p>
		</div>
		<div class="FQS-item__btn">
			<button><span></span></button>
		</div>
	</div>
</template>
<script>
export default {
	name: "FQSItem",
  props: {
	FQSItem: {
      type: Object,
      required: true,
    },
  },
};

</script>
<style scope>
	.FQS-item {
		display: flex;
		justify-content: space-between;
		width: 100%;
		background-color: #000000;
		padding: 21px 25px;
		margin-bottom: 19.6px;
}
.FQS-item__text {
	font-size: 16px;
	line-height: 25px;
	color:white;
}
.FQS-item__btn {
}
.FQS-item__btn span {
  position: relative;
}
.FQS-item__btn span::before,
.FQS-item__btn span::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
</style>
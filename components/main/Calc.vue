<template >
	<div class="calc">
		<div class="container">
			<div class="calc_title">
				<h2>КАЛЬКУЛЯТОР <span>ВАРТОСТІ </span></h2>
			</div>
			<div class="calc_tabs"></div>
			<div class="calc_body">

			</div>

			<div class="calc_footer">
				<MainButton>Заказати</MainButton>
			</div>
		</div>
	</div>
</template>
<script>
import MainButton from '../button/MainButton.vue';
export default {
	components:{MainButton},
	name:"Calc"
	
}
</script>
<style scoped>
	.calc {
		padding:0px 14.5px 100px 14.5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
	max-width: 1280px;
  margin: 0 auto;
}

.calc_title {
  font-family: var(--title);
  letter-spacing: -2px;
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  text-align: flex-start;
}
@supports (-webkit-text-stroke: 1px white) {
	.calc_title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    position: relative;
  }
}
.calc_tabs {
}
.calc_body {
}
.calc_footer {
	max-width: 328px;
}
</style>
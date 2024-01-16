<template>
  <div class='calc_button'>
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<script>

export default {
  name: "Calc-Button",
  props:{

  },
  data(){
	return{

	}
  },	
}


</script>


<style scoped>


.calc_button button {

  width: 300px;
  font-size: 16px;
  line-height: 25px;
  padding: 9px 0px;
  background: transparent;
  text-wrap: nowrap;
  border: 1px solid rgba(234, 90, 37, 1);
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 5px 10px;
}
.calc_button button:hover {
  background: rgba(234, 90, 37, 1);
}
.selected button{
  background: rgba(234, 90, 37, 1);
}
@media (max-width: 767px) {
  .calc_button button {
    font-size: 12px;
    line-height: 15px;
    width: 170px;
    height: 42px;
    text-wrap: wrap;
  }
}
@media (max-width: 590px) {
  .calc_button button {
    margin: 5px 0px;
  }
}
</style>

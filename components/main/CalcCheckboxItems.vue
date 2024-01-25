<template>
  <div class="calc_body__checkbox_item">
    <label for="cmsCheckbox">
      <input type="checkbox" id="cmsCheckbox" name="cmsCheckbox" />
      <span></span>
      <p>
        <slot></slot>
      </p>
    </label>
  </div>
</template>
<script>
export default {
  name: "calc-checkbox-items",
  props:{
	checkBoxClick:{
		type:Array
	}
  }
};
</script>
<style scoped>
.calc_body__checkbox_item {
  max-width: 192px;
  border: 1px solid rgba(220, 223, 230, 1);
  padding: 13px 11px 13px 11px;
  margin-bottom: 15px;
  text-align: flex-start;
}

input[type="checkbox"] {
  height: 0px;
  width: 0px;
}

.calc_body__checkbox_item label {
  display: inline-block;
}
.calc_body__checkbox_item span {
  height: 14px;
  width: 14px;
  display: inline-block;
  position: relative;
  background-color: #fcfcfc;
  margin: 0px 0px -3px 0px;
}

.calc_body__checkbox_item span::before,
.calc_body__checkbox_item span::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 1.5px;
  width: 8px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.calc_body__checkbox_item span::before {
  width: 6px;
  transform: rotate(-135deg);
}

.calc_body__checkbox_item span::after {
  top: 6px;
  left: 4.5px;
  transform: rotate(135deg);
}

.calc_body__checkbox_item input[type="checkbox"]:checked + span {
  background: rgba(234, 90, 37, 1);
}
.calc_body__checkbox_item p {
  display: inline;
  font-family: var(--classic);
  color: rgb(255, 255, 255);
  opacity: 50%;
  font-size: 12px;
  text-wrap: nowrap;
  font-style: normal;
  margin-left: 6px;
}

.calc_body__checkbox_item:hover {
  span {
    background: rgb(143, 143, 143);
  }
}
.active {
  border: 1px solid rgba(234, 90, 37, 1);

  p {
    color: rgba(234, 90, 37, 1);
    opacity: 100%;
  }
}
</style>

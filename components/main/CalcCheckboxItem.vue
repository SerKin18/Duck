<template>
  <div class="calc_body__checkbox_items" >
    <label
      :for="nameCheck"
      class="calc_body__checkbox_item"
      :class="isActive ? ' active' : ''"
		
    >
      <input type="checkbox" :id="nameCheck" :name="nameCheck" />
      <span></span>
      <p @click="$emit('getIndexCheck', indexCheck)"  ><slot></slot></p>
    </label>
  </div>
</template>
<script>
export default {
  name: "calc-checkbox-item",
  props: {
    isActive: {
      type: Boolean,
    },
    value: {
      type: Number,
      required: false,
    },
    indexCheck: {
      type: Number,
    },
    nameCheck: {
      type: String,
    },
  },
};
</script>
<style scoped>
input[type="checkbox"] {
  height: 0px;
  width: 0px;
}

.calc_body__checkbox_item {
  display: inline-block;
  border: 1px solid rgba(220, 223, 230, 1);
  padding: 0px 0px 0px 11px;
  margin-bottom: 15px;
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

input[type="checkbox"]:checked + span {
  background: rgba(234, 90, 37, 1);
}

p {
  display: inline-block;
  font-family: var(--classic);
  color: rgb(255, 255, 255);
  opacity: 50%;
  font-size: 12px;
  text-wrap: nowrap;
  font-style: normal;
  margin: 13px 16px 13px 10px;
}

label:hover {
  span {
    background: rgb(143, 143, 143);
  }
}

.active {
  border: 1px solid rgba(234, 90, 37, 1);
}
.active p {
  color: rgba(234, 90, 37, 1);
  opacity: 100%;
}
</style>

<template>
  <button class="button_body">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "button-classic",
};
</script>
<style scoped>
.button_body {
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: var(--title);
  padding: 18px 38px;
  font-size: 26px;
  color: rgb(255, 255, 255);
  background: rgba(234, 90, 37, 1);
  margin: 3px;
  z-index: 90;
}
.button_body:hover {
  box-shadow: inset 0px 0px 10px 1px #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(234, 90, 37, 1);
}
@media (max-width: 1200px) {
  .button_body {
    font-size: 20px;
    padding: 13px 33px;
  }
}
@media (max-width: 970px) {
  .button_body {
    font-size: 16px;
    padding: 10px 30px;
  }
}
@media (max-width: 760px) {
  .button_body {
    font-size: 16px;
    padding: 10px 10px;
  }
}
</style>

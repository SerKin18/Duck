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
  text-transform: uppercase;
  white-space: nowrap;
  font-family: var(--title);
  padding: 18px 38px;
  font-size: 26px;
  color: rgb(255, 255, 255);
  background: rgba(234, 90, 37, 1);
  margin: 3px;
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
</style>

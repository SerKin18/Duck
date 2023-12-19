<template>
  <div class="button__classic">
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "button",
};
</script>
<style>
.btn {
  text-transform: uppercase;
  font-weight: var(--title);
  position: relative;
  padding: 20px 40px 20px 40px;

  font-size: 26px;
  color: rgb(255, 255, 255);
  background: rgba(234, 90, 37, 1);
}
</style>

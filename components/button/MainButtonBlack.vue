<template>
  <div class="main__button">
    <button class="button"
	 @click.prevent="$emit('openModal')">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "main-button-black",
};
</script>
<style scoped>
.main__button {
  margin-left: 40px;
}
.button {
  font-family: var(--title);
  text-transform: uppercase;
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  background: linear-gradient(88.54deg, #121212 4.01%, #252525 87.46%);

  box-shadow: 0px 2px 70px 2px #fffefe;
}
.button::before {
  content: "";
  position: absolute;
  right: -49px;

  top: 0px;
  border: 25px solid transparent;
  border-left: 25px solid #252525;
  border-top: 25px solid #252525;
}
.button::after {
  content: "";
  position: absolute;
  left: -49px;
  bottom: 0;
  border: 25px solid transparent;
  border-right: 25px solid #121212;

  border-bottom: 25px solid #121212;
}
.button:hover {
	color: #ff723e;
	box-shadow: 0px 0px 90px 2px #fcfcfc;
}
</style>

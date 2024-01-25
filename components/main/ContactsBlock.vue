<template>
  <div class="contacts__block">

      <Contacts></Contacts>

  </div>
</template>
<script>
import Contacts from "./Contacts.vue";
export default {
  components: { Contacts },
  name: "contact-block",
};
</script>
<style scoped>
.contacts__block {
  position: relative;
  padding: 100px 0px;
  background-color: black;
  display: flex;
  flex-direction: column;
  z-index: 96;
}
.contacts__block::before {
  content: "";
  position: absolute;
  bottom: -170px;
  left: -400px;
  height: 492px;
  width: 842px;
  transform: rotate(133deg);
  opacity: 30%;
  background: linear-gradient(87.08deg, #203f6a 0%, #ea5a25 100%);
  box-shadow: inset 0px 0px 130px 50px black;

  z-index:98;
}
.contacts__block::after {
  content: "";
  position: absolute;
  top: 160px;
  right: 0px;
  width: 160px;
  height: 160px;
  background: url(../../static/image/block-7-star.svg) center no-repeat;
  
  z-index:98;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}

@media (max-width: 970px) {
	.contacts__block{
		padding: 0px;
	}
  .contacts__block::after {
    content: "";
    position: absolute;
    top: 50px;
    right: 0px;
    scale: 0.7;
    transform: rotate(45deg);
  }
}
</style>

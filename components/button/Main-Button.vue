<template>
  <div class="main__button">
    <button class="button">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "main-button",
};
</script>
<style >
.main__button {
  margin-left: 40px;
}
.button {
font-family: 'GothamPro',sans-serif;
  text-transform: uppercase;
  position: relative;
  width: 150px;
  height: 37px;
  font-size: 12px;
  color: black;
  background: #ff723e;
  box-shadow: 0px 12px 50px 0px #ff723e;

  /* background: linear-gradient(88.83deg, #ea5a25 2.34%, #ff723e 99.43%); */
}
.button::before {
  content: "";
  position: absolute;
  right: -36px;
 
  top: 0px;
  border: 19px solid transparent;
  border-left: 19px solid #ff723e;
  /* linear-gradient(88.83deg, #ea5a25 2.34%, #ff723e 99.43%); */
  border-top: 19px solid #ff723e;
  /* linear-gradient(88.83deg, #ea5a25 2.34%, #ff723e 99.43%); */
}
.button::after {
  content: "";
  position: absolute;
  left: -36px;
  bottom: 0;
  border: 19px solid transparent;
  border-right: 19px solid #ff723e;
  /* linear-gradient(88.83deg, #ea5a25 2.34%, #ff723e 99.43%); */
  border-bottom: 19px solid #ff723e;
  /* linear-gradient(88.83deg, #ea5a25 2.34%, #ff723e 99.43%); */
}
.button:hover {
}
</style>

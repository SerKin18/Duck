<template>
  <div class="modal-block">
    <div class="modal-window">
      <div class="contacts__modal__btn" @click.stop="$emit('close')">
        <button><span></span></button>
      </div>
      <div class="modal container">
        <Contacts :modal="true" @closeModal="$emit('close')"></Contacts>
      </div>
    </div>
  </div>
</template>
<script>
import Contacts from "./Contacts.vue";

export default {
  components: { Contacts },
  name: "modal-window",
};
</script>
<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.modal-block {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);
  z-index: 99;
  display: table;
  padding: 15px;
  overflow-y: hidden;
  cursor: pointer;
  transition: opacity 0.3s ease;
  .contacts::before {
    display: none;
  }
}
.modal-window {
  display: table-cell;
  vertical-align: middle;
  overflow-y: hidden;
  height: 100%;
}
.modal {
  background-color: black;
  padding: 50px 35.5px 50px 35.5px;
}
.contacts__modal__btn {
  display: none;
  width: 100%;
  height: 30px;
  padding: 0px 14.5px;
  text-align: right;
}
.contacts__modal__btn button {
  position: relative;
  width: 30px;
  height: 30px;
  background: transparent;
}
.contacts__modal__btn span::before,
.contacts__modal__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 3px;
  width: 25px;
  height: 3px;
  background-color: rgb(253, 252, 252);
}
.contacts__modal__btn span::after {
  transform: rotate(45deg);
}
.contacts__modal__btn span::before {
  transform: rotate(-45deg);
}
.contacts__modal__btn:hover {
  span:before,
  span:after {
    background-color: rgba(234, 90, 37, 1);
  }
}
@media (max-width: 767px) {
  .contacts__modal__btn {
    display: block;
  }
  .modal-block {
    background: rgb(0, 0, 0);
  }
  .modal-window {
  }
  .modal {
    padding: 0px;
  }
}
</style>

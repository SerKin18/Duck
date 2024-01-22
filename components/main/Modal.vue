<template>
  <div class="modal-block">
    <div class="modal-window">
      <div class="modal container">
        <Contacts :modal="true" @modalClose="closeModal"></Contacts>
      </div>
    </div>
  </div>
</template>
<script>
import Contacts from "./Contacts.vue";
export default {
  components: { Contacts },
  name: "modal-window",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.modal-window {
  position: absolute;
  z-index: 100;
  width: 100%;
}
.modal {
  background-color: black;
  padding: 50px 35.5px;
}
</style>

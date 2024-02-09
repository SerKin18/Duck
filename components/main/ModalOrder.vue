<template>
  <div class="modal-block">
    <div class="modal-window">
      <div class="contacts__modal__btn" @click.stop="closeModalOrder">
        <button><span></span></button>
      </div>
      <div class="modal container">
        <Contacts
          v-bind:modal="modalContact"
          v-bind:modalCalc="modalCalc"
          @closeModal="closeModalOrder"
          @selectCalcTabs="selectTab"
          @removeCalcTabs="removeTab"
        ></Contacts>
        <Calc v-bind:modalCalc="modalCalc" v-bind:selectTabModal="0"></Calc>
      </div>
    </div>
  </div>
</template>
<script>
import Calc from "./Calc.vue";
import Contacts from "./Contacts.vue";

export default {
  components: { Contacts, Calc },
  name: "modal-window",
  props: {
    modalCalcOpen: {
      type: Boolean,
    },
    openOrderCalcTab: {
      type: Number,
    },
  },
  data() {
    return {
      selectCalc: 0,
      modalCalc: true,
      modalContact: true,
    };
  },
  methods: {
    selectTab(i) {
      this.selectCalc = i;
    },
    removeTab(i) {
      this.selectCalcTabs.filter((tab) => tab != i);
    },
    closeModalOrder() {
      (this.modalContact = false), (this.modalCalcOpen = false);
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);
  z-index: 99;
  padding: 15px;
  overflow-y: scroll;
  scroll-behavior: auto;
  .contacts::before,
  .calc_footer::before {
    display: none;
  }
}

.modal-window {
  width: 100%;
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

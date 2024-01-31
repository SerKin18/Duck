<template>
  <div class="service_button">
    <button
      class="service_button__item"
      :class="isActive ? 'activeBtnService' : ''"
      @click.prevent="$emit('itemIdSelect', itemId)"
    >
      <slot></slot>
      <span @click.stop="$emit('itemIdSelect', itemId)"></span>
    </button>
  </div>
</template>
<script>
export default {
  name: "service-button",
  props: {
    isActive: {
      type: Boolean,
    },
    itemId: {
      type: String,
    },
  },
  methods: {
    toggleActive() {
      this.$emit("itemIndexSelect", this.props.indexItem);
    },
  },
};
</script>
<style scoped>
.service_button {
  display: inline-block;
  margin: 5px;
}
.service_button__item:hover {
  background: rgba(234, 90, 37, 1);
  color: rgb(0, 0, 0);
}

.service_button__item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  background: transparent;
  color: rgba(234, 90, 37, 1);
  border: 1px solid rgba(234, 90, 37, 1);
  border-radius: 80px;
  padding: 5px 20px;
  line-height: 25px;
  font-size: 12px;
}
.service_button__item span {
  display: none;
  position: relative;
  content: "";
  width: 14px;
  height: 14px;
  background: rgba(18, 18, 18, 1);
  border-radius: 60px;
  margin-left: 10px;
}
.service_button__item span::before,
.service_button__item span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 3px;
  width: 8px;
  height: 1px;
  background-color: rgba(234, 90, 37, 1);
  transform: rotate(45deg);
}
.service_button__item span::after {
  transform: rotate(135deg);
}
.service_button__item span::before {
  top: 50%;
}

.activeBtnService {
  background: rgba(234, 90, 37, 1);
  color: rgb(0, 0, 0);

  span {
    display: block;
  }
}
</style>

<template>
  <div class="FQS-item">
    <div class="FQS-item__text">
      <p>{{ FQSItem.text }}</p>
    </div>
    <div class="FQS-item__btn">
      <button><span></span></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FQSItem",
  props: {
    FQSItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scope>
.FQS-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  padding: 21px 30px 21px 25px;
  margin-bottom: 19.6px;
}
.FQS-item__text p {
  font-size: 16px;
  line-height: 25px;
  color: white;
  text-align: center;
}
.FQS-item__btn {
  width: 30px;
  height: 30px;
}
.FQS-item__btn {
  position: relative;
}
.FQS-item__btn span::before,
.FQS-item__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 15px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.FQS-item__btn span::after {
  transform: rotate(90deg);
}

.FQS-item:hover {
  .FQS-item__text p {
    color: rgba(234, 90, 37, 1);
  }
  .FQS-item__btn span::before,
  .FQS-item__btn span::after {
    background-color: rgba(234, 90, 37, 1);
  }
}
</style>

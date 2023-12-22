<template>
  <div class="FQS-item_block" @click.prevent="show">
    <div class="FQS-item">
      <div class="FQS-item__body">
        <div class="FQS-item__title">
          <p>{{ FQSItem.text }}</p>
        </div>
        <div class="FQS-item__btn">
          <button><span></span></button>
        </div>
      </div>
      <div class="FQS-item__text" v-show="showText">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatum iusto pariatur! Eveniet, accusantium! Exercitationem
          repellat dolorem itaque magnam. Quidem molestias tempore accusamus
          placeat pariatur dignissimos cupiditate, fugiat maxime id!
        </p>
      </div>
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
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    show() {
      this.showText = !this.showText;
    },
  },
};
</script>
<style scoped>
.FQS-item_block {
  padding: 6px;
  margin-bottom: 5px;
  width: 100%;
}
.FQS-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  padding: 21px 30px 21px 25px;
}
.FQS-item__body {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.FQS-item__title {
  text-align: center;
}
.FQS-item__title p {
  font-size: 16px;
  line-height: 25px;
  color: white;
  text-align: center;
}
.FQS-item__text p {
  font-style: 16px;
  line-height: 25px;
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

.FQS-item_block:hover {
  padding: 5px;
  border: 1px solid rgba(234, 90, 37, 1);

  .FQS-item__btn span::after {
    top: 20px;
    right: 3px;
    width: 8px;
    height: 2px;
    background-color: rgb(255, 255, 255);
  }
  .FQS-item__btn span::before,
  .FQS-item__btn span::after {
    background-color: rgba(234, 90, 37, 1);
  }
  .FQS-item__title p {
    color: rgba(234, 90, 37, 1);
  }
}
.FQS-item__text {
  display: block;
}
@media (max-width: 767px) {
  .FQS-item {
    padding: 14px;
  }
  .FQS-item__title p {
    font-size: 10px;
    line-height: 16px;
    color: white;
    text-align: left;
  }
  .FQS-item__text p {
    font-size: 10px;
    line-height: 16px;
  }
}
</style>

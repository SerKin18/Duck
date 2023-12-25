<template>
  <div class="portfolio-item">
    <!-- <div class="portfolio-item__image">
			<img src="fontImage" alt="portfolio-card">
		</div> -->
    <i></i>
    <div class="portfolio-item__hide-logo" v-bind:style="colored">
      <img
        src="../../static/image/portfolio-card-wrapper.jpg"
        alt="portfolio-logo"
      />
    </div>
    <div class="portfolio-item__footer">
      <div class="portfolio-item__text">
        <div class="portfolio-item__subtitle">{{ item.category }}</div>
        <div class="portfolio-item__title">{{ item.company }}</div>
      </div>
      <div class="portfolio-item__link">
        <a @click.prevent href="#">Дивитися кейс</a><span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "portfolio-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    colored() {
      return this.item.id % 2 == 0
        ? "background: rgba(18, 18, 18, 0.9)"
        : "background: rgba(32, 63, 106, 0.9)";
    },
    fontImage() {
      return this.item.img;
    },
  },
};
</script>
<style scoped>
.portfolio-item {
  width: 30vw;
  min-width: 370px;
  height: 50vh;
  min-height: 290px;
  background: url(../../static/image/portfolio-card1.jpg) center no-repeat;
  position: relative;
  flex: 1 0 33.333%;
  z-index: 3;
}
.portfolio-item__hide-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(18, 18, 18, 0.9); */
}
.portfolio-item__hide-logo img {
  width: 10vw;
  min-width: 133px;
}
.portfolio-item i,
.portfolio-item i::before,
.portfolio-item i::after {
  position: absolute;
  width: 160px;
  height: 100px;
  z-index: 7;
  content: "";
  opacity: 0;
}
.portfolio-item i::after {
  bottom: -40vh;
  left: -44px;
  background: url(../../static/image/Vector2.png) center no-repeat;
}
.portfolio-item i {
  top: -30px;
  left: -63px;
  background: url(../../static/image/Vector.png) center no-repeat;
}
.portfolio-item i::before {
  bottom: -40px;
  right: -33vw;
  transform: rotate(180deg);
  background: url(../../static/image/Vector2.png) center no-repeat;
}

.portfolio-item:hover {
  scale: 1.1;
  z-index: 5;
  .portfolio-item__hide-logo {
    opacity: 0;
  }
  i {
    opacity: 1;
  }
  i::after,
  i::before {
    opacity: 1;
  }
}
.portfolio-item__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 45px 45px;
}
.portfolio-item__text {
}
.portfolio-item__subtitle {
  font-size: 16px;
  line-height: 25px;
  text-align: left;
}
.portfolio-item__title {
  font-family: var(--title-font);
  text-transform: uppercase;
  font-size: 24px;
  color: white;
}
.portfolio-item__text:hover > * {
  color: rgba(234, 90, 37, 1);
}

.portfolio-item__link {
  padding-top: 30px;
  width: 150px;
  text-align: left;
}
.portfolio-item__link a {
  font-weight: 400;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.portfolio-item__link span {
  position: relative;
  pointer-events: none;
}
.portfolio-item__link span::before,
.portfolio-item__link span::after {
  content: "";
  position: absolute;
  top: 5px;
  right: 0px;
  width: 15px;
  height: 2px;
  background-color: rgb(255, 253, 253);
}
.portfolio-item__link span::before {
  top: -1px;
  right: -5px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: right bottom;
}
.portfolio-item__link span::after {
  width: 12px;
  top: 11px;
  left: -138px;
  transform: translateX(140px) rotate(180deg);
  transform-origin: right;
}

.portfolio-item__link:hover {
  a {
    color: rgba(234, 90, 37, 1);
  }
  span::before,
  span::after {
    background-color: rgba(234, 90, 37, 1);
  }
}

@media (max-width: 890px) {
  .portfolio-item__footer {
    padding: 35px 35px;
  }
}
@media (max-width: 767px) {
  .portfolio-item {
    margin-top: 100px;
  }

  .portfolio-item:hover {
    .portfolio-item__text > * {
      color: rgba(234, 90, 37, 1);
    }
    .portfolio-item__link {
      a {
        color: rgba(234, 90, 37, 1);
      }
      span::before,
      span::after {
        background-color: rgba(234, 90, 37, 1);
      }
    }
  }

  .portfolio-item__footer {
    position: absolute;
    top: -90px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 26px;
  }
  .portfolio-item i,
  .portfolio-item i::before,
  .portfolio-item i::after {
    display: none;
  }
}
</style>

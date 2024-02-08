<template>
  <div class="footer__servises">
    <MatchMedia v-slot="{ mobile }">
      <div class="footer__servises_title" @click.prevent="showFooterMenu">
        <slot><h4></h4></slot>
        <div class="FQS-item__btn footer__item__btn">
          <button><span></span></button>
        </div>
      </div>
      <div v-if="mobile" class="footer__list_items">
        <nav>
          <ul class="footer__list_item" v-show="showFooterText">
            <li v-for="items in itemList">
              <nuxt-link
                :key="items.title"
                :to="{ path: '/', hash: items.path }"
                :v-scroll-to="{ el: '#' + items.path }"
                >{{ items.title }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div v-else class="footer__list_items">
        <nav>
          <ul class="footer__list_item">
            <li v-for="items in itemList">
              <nuxt-link
                :key="items.title"
                :to="{ path: '/', hash: items.path }"
                :v-scroll-to="{ el: '#' + items.path }"
                >{{ items.title }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </MatchMedia>
  </div>
</template>
<script>
import { MatchMedia } from "vue-component-media-queries";
export default {
  props: {
    itemList: {
      type: Array,
      required: false,
    },
  },
  name: "footer-item",
  components: { MatchMedia },
  data() {
    return {
      showFooterText: false,
    };
  },
  inject: ["mediaQueries"],
  methods: {
    showFooterMenu() {
      this.showFooterText = !this.showFooterText;
    },
  },
};
</script>
<style scoped>
.footer__servises {
  max-width: 280px;
  white-space: nowrap;
  flex: 1 1 25%;
  padding: 0px 20px;
}
.footer__servises_title {
  font-family: var(--title);
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 25.8px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.footer__list_items li {
  display: block;
  margin-bottom: 15px;
}
.servises_long-item li {
  margin-bottom: 19px;
}
.footer__list_item ul li {
  display: inline-block;
  background: rgba(248, 248, 248, 1);
}
.footer__bottom {
  text-align: center;
  font-size: 14px;
}
.footer__list_item li a:hover {
  color: rgba(234, 90, 37, 1);
}
.footer__item__btn {
  width: 30px;
  height: 30px;
}
.footer__item__btn {
  position: relative;
}
.footer__item__btn span::before,
.footer__item__btn span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 15px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.footer__item__btn span::after {
  transform: rotate(90deg);
}
.FQS-item__btn {
  width: 30px;
  height: 30px;
}
.FQS-item__btn {
  position: relative;
  display: none;
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
    top: 19px;
    right: 3.5px;
    width: 7.5px;
    height: 2px;
    background-color: rgb(255, 255, 255);
  }
  .FQS-item__btn span::before,
  .FQS-item__btn span::after {
    background-color: rgba(234, 90, 37, 1);
  }
}
@media (max-width: 1200px) {
}
@media (max-width: 970px) {
}
@media (max-width: 767px) {
  .footer__servises {
    flex: 1 0 100%;
    max-width: 767px;
    width: 100%;
    padding: 0px 0px 0px 0px;
  }
  .footer__list_items {
  }
  .footer__servises:hover {
    .footer__item__btn span::after {
      top: 20px;
      right: 3px;
      width: 8px;
      height: 2px;
      background-color: rgb(255, 255, 255);
    }
    .footer__item__btn span::before,
    .footer__item__btn span::after {
      background-color: rgba(234, 90, 37, 1);
    }
    .footer__servises_title h4 {
      color: rgba(234, 90, 37, 1);
    }
  }

  .footer__servises_title {
    padding: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .footer__item__btn {
    display: block;
  }

  .footer__list_items li {
    margin-bottom: 0px;
  }
  .footer__list_items a {
    font-style: 16px;
    color: rgba(248, 248, 248, 1);
    line-height: 25px;
  }
  .footer__list_items {
  }
}
</style>

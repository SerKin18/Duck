<template>
  <div class="reviews">
    <MatchMedia v-slot="{ mobile }">
      <div class="container">
        <div class="reviews__page">
          <div class="reviews__header">
            <div class="reviews__header_title">
              <h2>відгуки<span> до </span>качки</h2>
            </div>
          </div>
          <div class="reviews__body">
            <ReviewsItem
              v-for="review in collection"
              :review="review"
              :key="review.id"
            >
            </ReviewsItem>
          </div>

          <div class="reviews__footer_toolbar">
            <div v-if="mobile" class="toolbar__btn_group">
              <button
                class="btn__prev"
                @click.prevent="prevPage"
                v-bind:disabled="pagination.currentPage === 1"
              ></button>
              <button
                class="btn__rewiews"
                :class="pageMobile === pagination.currentPage ? 'active' : ''"
                v-for="pageMobile in tempNumberOfPagesMobile"
                :page="pageMobile"
                @click.prevent="setPage(pageMobile)"
                :key="pageMobile"
              >
                {{ pageMobile }}
              </button>
              <button
                class="btn__next"
                @click.prevent="nextPage"
                :disabled="pagination.currentPage >= data.length / perPage"
              ></button>
            </div>
            <div v-else class="toolbar__btn_group">
              <button
                class="btn__prev"
                @click.prevent="prevPage"
                v-bind:disabled="pagination.currentPage === 1"
              ></button>
              <button
                class="btn__rewiews"
                :class="page === pagination.currentPage ? 'active' : ''"
                v-for="page in tempNumberOfPages"
                :page="page"
                @click.prevent="setPage(page)"
                :key="page"
              >
                {{ page }}
              </button>
              <button
                class="btn__next"
                @click.prevent="nextPage"
                :disabled="pagination.currentPage >= data.length / perPage"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </MatchMedia>
  </div>
</template>
<script>
import ReviewsItem from "./ReviewsItem.vue";
import { MatchMedia } from "vue-component-media-queries";
export default {
  components: { ReviewsItem, MatchMedia },
  name: "Reviews",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      perPage: 6,
      tempNumberOfPages: [],
      tempNumberOfPagesMobile: [],
      data: this.$props.reviews,
      pagination: {},
    };
  },
  watch: {
    "pagination.pages": function () {
      this.tempNumberOfPages = [...this.pagination.pages];
      this.tempNumberOfPagesMobile = [...this.pagination.pages];
      if (
        this.pagination.currentPage >= 1 &&
        this.pagination.currentPage <= 4
      ) {
        this.tempNumberOfPages = [
          1,
          2,
          3,
          4,
          5,
          "...",
          [...this.pagination.pages].length,
        ];
        this.tempNumberOfPagesMobile = [
          1,
          2,
          3,
          4,
          "...",
          [...this.pagination.pages].length,
        ];
      }
      if (
        this.pagination.currentPage >= 4 &&
        this.pagination.currentPage <= 7
      ) {
        this.tempNumberOfPages = [
          1,
          "... ",
          4,
          5,
          6,
          7,
          8,
          "...",
          [...this.pagination.pages].length,
        ];
        this.tempNumberOfPagesMobile = ["...", 4, 5, 6, 7, 8, "... "];
      }
      if (
        this.pagination.currentPage >= 8 &&
        this.pagination.currentPage <= [...this.pagination.pages].length
      ) {
        this.tempNumberOfPages = [
          1,
          "...",
          6,
          7,
          8,
          9,
          [...this.pagination.pages].length,
        ];
        this.tempNumberOfPagesMobile = [
          1,
          "...",
          7,
          8,
          9,
          [...this.pagination.pages].length,
        ];
      }
    },
  },
  inject: ["mediaQueries"],
  computed: {
    collection() {
      return this.paginate(this.data);
    },
  },
  methods: {
    setPage(page) {
      if (page === "...") {
        return;
      }
      this.pagination = this.paginator(this.data.length, page);
    },
    prevPage() {
      if (this.pagination.currentPage === 1) {
        return;
      }
      this.pagination.currentPage--;
      this.setPage(this.pagination.currentPage);
    },
    nextPage() {
      if (this.pagination.currentPage >= this.data.length / this.perPage) {
        return;
      } else {
        this.pagination.currentPage++;
        this.setPage(this.pagination.currentPage);
      }
    },
    paginate(data) {
      return data.slice(
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },
    range(from, to, step = 1) {
      return {
        [Symbol.iterator]() {
          return {
            current: from,
            to: to,
            from: from,
            step,
            next() {
              const it = { done: this.current >= this.to, value: this.current };
              this.current += this.step;
              return it;
            },
          };
        },
      };
    },
    paginator(totalItems, currentPage = 1) {
      let startIndex;
      if (currentPage === 1) {
        startIndex = 0;
      } else {
        startIndex = (currentPage - 1) * this.perPage;
      }
      let endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: this.range(1, Math.ceil(totalItems / this.perPage) + 1),
      };
    },
  },
  created() {
    this.setPage(1);
  },
};
</script>
<style scoped>
.reviews {
  padding: 100px 14.5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.reviews__footer_toolbar {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toolbar__btn_group {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  background-color: black;
}

.btn__rewiews {
  font-size: 16px;
  width: 44px;
  height: 44px;
  background-color: transparent;
}
.btn__prev,
.btn__next {
  position: relative;
  width: 44px;
  height: 44px;
  background: rgba(234, 90, 37, 1);
}
.btn__prev::before,
.btn__prev::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 13px;
  width: 10px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.btn__prev::before {
  top: 25px;
  left: 15px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: left bottom;
}
.btn__prev::after {
  top: 12px;
  right: 20px;
  transform: translateX(10px) rotate(135deg);
  transform-origin: left bottom;
}
.btn__next::before,
.btn__next::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 13px;
  width: 10px;
  height: 2px;
  background-color: rgb(255, 255, 255);
}
.btn__next::before {
  top: 19px;
  left: 17px;
  transform: translateX(10px) rotate(-135deg);
  transform-origin: left bottom;
}
.btn__next::after {
  top: 18px;
  left: 16px;
  transform: translateX(10px) rotate(135deg);
  transform-origin: left bottom;
}
.btn__rewiews:active {
  background: rgba(248, 248, 248, 0.1);
}
.btn__next:hover,
.btn__prev:hover {
  background: rgba(234, 90, 37, 1);
}
.active {
  background: rgba(248, 248, 248, 0.1);
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.reviews__page {
  max-width: 1200px;
}
.reviews__header {
  margin-bottom: 90px;
}

.reviews__header_title {
  font-family: var(--title);
  letter-spacing: -2px;
  line-height: 76px;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 90px;
  text-align: flex-start;
}
@supports (-webkit-text-stroke: 1px white) {
  .reviews__header_title span {
    text-shadow: none;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    position: relative;
  }
}
.reviews__body {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px -7px;
}
.reviews__body::after {
  content: "";
  position: absolute;
  top: 220px;
  right: -250px;
  width: 190px;
  height: 190px;
  background: url(../../static/image/reviews-background.png) center no-repeat;
  z-index: 1;
}
@media (max-width: 1200px) {
  .reviews__body {
    justify-content: center;
  }
}
@media (max-width: 767px) {
  .reviews__header {
    margin-bottom: 40px;
  }
  .reviews__header_title {
    font-size: 22px;
    line-height: 21px;
    margin-bottom: 40px;
  }
  .reviews {
    padding: 65px 14.5px;
  }
}
@media (max-width: 400px) {
}
</style>

<template>
  <div>
    <img src="@/assets/images/Component22.png" class="card-img" alt="..." />
    <div class="container" style="width: 55%">
      <div class="fs-3 mt-5">#현지인이 추천하는 일정표</div>
      <div class="mt-3 pb-3">
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #4a80ff; border: none"
        >
          #{{ region }}
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #e32066; border: none"
          v-for="(item, index) in hashtags"
          :key="index"
        >
          #{{ item }}
        </button>
      </div>

      <div class="row">
        <div class="col-8">
          <div class="mb-5">
            <img
              src="@/assets/images/thumbnailExample.png"
              class="card-img-top h-100"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
          <div class="mt-3">
            <div class="fs-3">#일정표 소개</div>
          </div>
          <div class="d-flex justify-content-between border-bottom mt-5 pb-2">
            <div>
              <span class="fs-5 fw-bold">{{ name }}</span>
            </div>
          </div>
          <div class="mt-4 mb-4 pb-5 border-bottom" v-html="description">
            {{ description }}
          </div>

          <!--          reviewList start-->
          <div class="d-flex align-items-center mt-5 mb-3">
            <div class="fs-3">#리뷰 / 평점</div>
            <i class="fa-solid fa-star ms-3 me-2" style="color: #e32066"></i
            ><strong>{{ avgRating }} ({{ rows }})</strong>
          </div>
          <div class="border rounded mb-2">
            <div class="d-flex" style="background-color: rgb(246, 246, 246)">
              <span class="col-2 text-center m-2">작성자</span>
              <span class="border-start border-end col text-center m-2"
                >리뷰 내용</span
              >
              <span class="col-2 text-center m-2">평점</span>
            </div>
            <div
              class="d-flex border-bottom"
              id="my-review"
              v-for="(item, index) in reviews"
              :key="index"
            >
              <span class="col-2 text-center m-2">{{ item.name }}</span>
              <span class="border-start border-end col text-center m-2">{{
                item.context
              }}</span>
              <span class="col-2 text-center m-2"
                ><i class="fa-solid fa-star me-2" style="color: #e32066"></i
                >{{ item.grade }}
              </span>
            </div>
          </div>
          <!--          <nav aria-label="Page navigation example">-->
          <!--            <b-pagination-->
          <!--              v-model="currentPage"-->
          <!--              :total-rows="rows"-->
          <!--              :per-page="perPage"-->
          <!--              aria-controls="my-review"-->
          <!--            ></b-pagination>-->
          <!--          </nav>-->
          <!--          reviewList end-->

          <div class="form">
            <div class="border rounded mb-2 mt-3">
              <div class="d-flex" style="background-color: rgb(246, 246, 246)">
                <span class="col text-center m-2">리뷰 작성하기</span>
              </div>
              <div class="d-flex border-bottom">
                <span class="col-2 text-center m-2 my-auto">작성자</span>
                <div
                  class="border-start flex-fill row justify-content-center m-2 ps-3"
                >
                  <span class="border-start border-end col text-center m-2">{{
                    writer
                  }}</span>
                </div>
              </div>
              <div class="d-flex border-bottom">
                <span class="col-2 text-center m-2 my-auto">평점</span>
                <div
                  class="border-start flex-fill row justify-content-center m-2"
                >
                  <select
                    class="form-select text-center"
                    aria-label="Default select example"
                    style="width: 150px"
                    v-model="rating"
                  >
                    <option value="">평점</option>
                    <option value="5.0">5.0</option>
                    <option value="4.5">4.5</option>
                    <option value="4.0">4.0</option>
                    <option value="3.5">3.5</option>
                    <option value="3.0">3.0</option>
                    <option value="2.5">2.5</option>
                    <option value="2.0">2.0</option>
                    <option value="1.5">1.5</option>
                    <option value="1.0">1.0</option>
                    <option value="0.5">0.5</option>
                    <option value="0.0">0.0</option>
                    >
                  </select>
                </div>
              </div>
              <div class="d-flex border-bottom">
                <span class="col-2 text-center m-2 my-auto">리뷰 내용</span>
                <div
                  class="border-start flex-fill row justify-content-center m-2 ps-3"
                >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="한줄평을 입력해주세요."
                    aria-label="default input example"
                    v-model="context"
                  />
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end gap-1 mt-3 mb-3">
              <button
                type="button"
                class="btn btn-sm btn-outline-dark border-0"
                @click="cancel()"
              >
                돌아가기
              </button>
              <button
                type="submit"
                class="btn btn-sm btn-danger border-0"
                style="background-color: #e32066"
                @click="reviewWrite"
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="border rounded">
            <div
              class="pt-2 pb-2 text-center fw-bold"
              style="background-color: rgb(227, 226, 224)"
            >
              결제정보
            </div>
            <div class="p-2">
              <div class="row">
                <div class="col-5 my-auto text-black-50">일정명</div>
                <div class="col-7 fw-bold my-auto">
                  {{ name }}
                </div>
              </div>
              <hr />
              <div class="row mt-2">
                <div class="col-5 my-auto text-black-50">평점/리뷰</div>
                <div class="col-7 text-center fw-bold my-auto">
                  <i class="fa-solid fa-star me-2" style="color: #e32066"></i
                  ><span>{{ avgRating }} ({{ rows }})</span>
                </div>
              </div>
              <hr />
              <div class="d-flex mt-2">
                <div class="col-5 my-auto text-black-50">포인트</div>
                <div class="col-7 text-center fw-bold my-auto">
                  <span>2000</span>
                  <span>P</span>
                </div>
              </div>
              <hr />
              <div
                class="d-flex justify-content-end gap-1 mt-3 mb-1"
                v-if="this.isBuy === 0"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-outline-dark border-0"
                  @click="cancel()"
                >
                  돌아가기
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger border-0"
                  style="background-color: #e32066"
                  @click="isBuyIt"
                >
                  구매하기
                </button>
              </div>
              <div class="d-flex justify-content-end gap-1 mt-3 mb-1" v-else>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-dark border-0"
                  @click="cancel()"
                >
                  돌아가기
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger border-0"
                  style="background-color: #4a80ff"
                  @click="checkSchedule"
                >
                  일정확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createReview } from "@/api/reviews";
import { fetchSchedule, buySchedule } from "@/api/schedules";

export default {
  name: "ScheduleDetailPage",
  data() {
    return {
      region: "강원도",
      hashtags: [],
      name: "",
      description: "",

      // 리뷰 작성
      writer: "최인규",
      rating: "",
      context: "",

      // 리뷰 리스트
      reviews: [],

      // 구매 정보
      isBuy: 0,

      // 페이징
      perPage: 3,
      currentPage: 1,
    };
  },
  created() {
    this.getScheduleDetail();
  },
  methods: {
    async getScheduleDetail() {
      try {
        const { data } = await fetchSchedule({
          scheduleId: this.$route.params.id,
        });
        this.name = data.data.name;
        this.region = data.data.region;
        this.hashtags = data.data.hashes;
        this.description = data.data.description;
        this.reviews = data.data.reviews;
        this.isBuy = data.data.isBuy;
      } catch (e) {
        console.log(e);
      }
    },
    async reviewWrite() {
      try {
        await createReview({
          scheduleId: this.$route.params.id,
          grade: this.rating,
          context: this.context,
        });
        alert("리뷰가 등록되었습니다.");
        await this.getScheduleDetail();
        this.initReview();
      } catch (e) {
        console.log(e.response);
      }
    },
    initReview() {
      this.rating = "";
      this.context = "";
    },
    cancel() {
      this.$router.push({
        name: "MainPage",
      });
    },
    async isBuyIt() {
      if (confirm("구매 하시겠습니까?") === true) {
        try {
          await buySchedule({
            scheduleId: this.$route.params.id,
          });
          await this.$router.push({
            name: "AfterBuySchedulePage",
          });
        } catch (e) {
          console.log(e);
          alert("로그인이 필요합니다.");
          this.$router.push("/login");
        }
      }
    },
    checkSchedule() {
      this.$router.push({
        name: "AfterBuySchedulePage",
      });
    },
  },
  computed: {
    rows() {
      return this.reviews.length;
    },
    avgRating() {
      const arr = this.reviews;
      const sum = arr
        .map(function (x) {
          return x.grade;
        })
        .reduce(function (a, b) {
          return a + b;
        }, 0);
      return sum / arr.length;
    },
  },
};
</script>

<style scoped></style>

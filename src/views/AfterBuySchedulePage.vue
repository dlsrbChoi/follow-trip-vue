<template>
  <div>
    <img src="@/assets/images/Component22.png" class="card-img" alt="..." />
    <div class="container" style="width: 45%">
      <div class="fs-3 mt-5 fw-bold">#{{ name }}</div>
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
          v-for="(item, index) in hashes"
          :key="index"
        >
          #{{ item }}
        </button>
      </div>

      <div class="mt-4 mb-2 border-bottom">
        <div class="fs-4 fw-bold mb-3">#추천 일정 요약</div>
        <div class="row row-cols-1 row-cols-md-3 g-1 mb-5">
          <!-- 요약 반복 부분 -->
          <div class="bg-light border rounded col p-3">
            <div class="fs-2 fw-bold mb-5" style="color: #e32066">#1</div>
            <div class="fs-5 fw-bold mb-2">A음식점</div>
            <div>
              총액 <span class="ms-3" style="color: #e32066">23,000</span>원
            </div>
          </div>
        </div>
      </div>

      <!-- 추천 일정 반복 -->
      <div
        class="mt-4 mb-5 border-bottom"
        v-for="(item, index) in plans"
        :key="index"
      >
        <div class="fs-4 fw-bold" style="color: #4a80ff">
          #추천 일정{{ index + 1 }}
        </div>

        <div
          class="hstack gap-3 mt-3 bg-light border rounded-top p-3 pt-2 pb-2 text-center"
        >
          <div class="col-2 fw-bold">항목</div>
          <div class="col-4 fw-bold border-start">추천시간대</div>
          <div class="col fw-bold border-start">장소명</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="hstack gap-3 text-center">
            <div class="col-2 fw-bold">{{ item.category }}</div>
            <div class="col-4 fw-bold border-start">00:00 ~ 00:00</div>
            <div class="col fw-bold border-start">{{ item.name }}</div>
          </div>
        </div>

        <div class="mt-5 bg-light border rounded-top p-3 pt-2 pb-2 text-center">
          <div class="fw-bold">주소</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="text-center">
            <div class="fw-bold">{{ item.address }}</div>
          </div>
        </div>

        <div class="mt-5 bg-light border rounded-top p-3 pt-2 pb-2 text-center">
          <div class="fw-bold">추천 내용</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="fw-bold" v-html="item.description">
            {{ item.description }}
          </div>
        </div>

        <div
          class="mt-5 bg-light border rounded-top p-3 pt-2 pb-2 mb-1 text-center"
        >
          <div class="fw-bold">이미지</div>
        </div>
        <div class="row">
          <div class="w-50 my-auto p-1">
            <img
              src="@/assets/images/thumbnailExample.png"
              class="card-img-top"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
          <div class="w-50 my-auto p-1">
            <img
              src="@/assets/images/koreaMap.png"
              class="card-img-top"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
          <div class="w-50 my-auto p-1">
            <img
              src="@/assets/images/thumbnailExample.png"
              class="card-img-top"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
          <div class="w-50 my-auto p-1">
            <img
              src="@/assets/images/thumbnailExample.png"
              class="card-img-top"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col text-black-50 ms-1">항목명</div>
          <div class="col text-black-50">가격(1인 기준)</div>
        </div>
        <div class="row ms-1 me-1 mt-1" v-for="(m, i) in item.items" :key="i">
          <div class="col border rounded p-2 me-1">{{ m.name }}</div>
          <div class="col border rounded p-2 ms-1 d-flex justify-content-end">
            <div class="mx-2">{{ m.price | makeComma }}</div>
            <div>원</div>
          </div>
        </div>

        <div class="d-flex justify-content-end fs-3 m-3">
          <div>총액</div>
          <div class="text-danger ms-5 me-2">
            {{ item.sumItemPrice | makeComma }}
          </div>
          <div>원</div>
        </div>
      </div>

      <div class="mt-5 mb-2 border-bottom">
        <div class="fs-4 fw-bold">#총 예산 경비</div>
        <div class="row mt-2">
          <div class="col text-black-50 ms-1">항목명</div>
          <div class="col text-black-50">가격(1인 기준)</div>
        </div>
        <div v-for="(item, index) in plans" :key="index">
          <div class="row ms-1 me-1 mt-1" v-for="(m, i) in item.items" :key="i">
            <div class="col border rounded p-2 me-1">{{ m.name }}</div>
            <div class="col border rounded p-2 ms-1 d-flex justify-content-end">
              <div class="mx-2">{{ m.price | makeComma }}</div>
              <div>원</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end fs-3 m-3">
          <div>총액</div>
          <div class="text-danger ms-5 me-2">{{ totalPrice | makeComma }}</div>
          <div>원</div>
        </div>
      </div>

      <div class="d-flex justify-content-end gap-1 mt-3 mb-5">
        <button type="button" class="btn btn-sm btn-outline-dark border-0">
          돌아가기
        </button>
        <button
          type="button"
          class="btn btn-sm btn-danger border-0"
          style="background-color: #e32066"
        >
          공유하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { afterBuySchedule } from "@/api/schedules";

export default {
  name: "AfterBuySchedulePage",
  data() {
    return {
      name: "",
      region: "",
      hashes: [],
      description: "",
      totalPrice: "",
      plans: [],
    };
  },
  created() {
    this.getAfterBuySchedule();
  },
  methods: {
    async getAfterBuySchedule() {
      const { data } = await afterBuySchedule({
        scheduleId: this.$route.params.id,
      });
      this.name = data.data.name;
      this.region = data.data.region;
      this.hashes = data.data.hashes;
      this.description = data.data.description;
      this.totalPrice = data.data.totalPrice;
      this.plans = data.data.plans;
    },
  },
};
</script>

<style scoped></style>

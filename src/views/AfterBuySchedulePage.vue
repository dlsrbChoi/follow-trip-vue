<template>
  <div>
    <img src="@/assets/images/Component22.png" class="card-img" alt="..." />
    <div class="container" style="width: 45%">
      <div class="fs-3 mt-5 fw-bold">#현지인이 추천하는 일정표</div>
      <div class="mt-3 pb-3">
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #e32066; border: none"
        >
          #강원도
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #e32066; border: none"
        >
          #데이트
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #e32066; border: none"
        >
          #해시태그
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
      <div class="mt-4 mb-5 border-bottom">
        <div class="fs-4 fw-bold">#추천 일정1</div>

        <div
          class="hstack gap-3 mt-3 bg-light border rounded-top p-3 pt-2 pb-2 text-center"
        >
          <div class="col-2 fw-bold">항목</div>
          <div class="col-4 fw-bold border-start">추천시간대</div>
          <div class="col fw-bold border-start">장소명</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="hstack gap-3 text-center">
            <div class="col-2 fw-bold">음식점</div>
            <div class="col-4 fw-bold border-start">00:00 ~ 00:00</div>
            <div class="col fw-bold border-start">A음식점</div>
          </div>
        </div>

        <div class="mt-5 bg-light border rounded-top p-3 pt-2 pb-2 text-center">
          <div class="fw-bold">주소</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="text-center">
            <div class="fw-bold">강원도 춘천시 00로 123-4, 00빌딩 206호</div>
          </div>
        </div>

        <div class="mt-5 bg-light border rounded-top p-3 pt-2 pb-2 text-center">
          <div class="fw-bold">추천 내용</div>
        </div>
        <div class="border rounded mt-1 mb-3 p-3">
          <div class="fw-bold">주요 일정 내용 및 추천 이유</div>
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
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">닭갈비</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>15,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">막국수</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>8,000</div>
            <div>원</div>
          </div>
        </div>

        <div class="d-flex justify-content-end fs-3 m-3">
          <div>총액</div>
          <div class="text-danger ms-5 me-2">23,000</div>
          <div>원</div>
        </div>
      </div>

      <div class="mt-5 mb-2 border-bottom">
        <div class="fs-4 fw-bold">#총 예산 경비</div>
        <div class="row mt-2">
          <div class="col text-black-50 ms-1">항목명</div>
          <div class="col text-black-50">가격(1인 기준)</div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">닭갈비</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>15,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">막국수</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>8,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">닭갈비</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>15,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">막국수</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>8,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">닭갈비</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>15,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">막국수</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>8,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">닭갈비</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>15,000</div>
            <div>원</div>
          </div>
        </div>
        <div class="row ms-1 me-1 mt-1">
          <div class="col border rounded p-2 me-1">막국수</div>
          <div
            class="col border rounded p-2 ms-1 d-flex justify-content-between"
          >
            <div>8,000</div>
            <div>원</div>
          </div>
        </div>

        <div class="d-flex justify-content-end fs-3 m-3">
          <div>총액</div>
          <div class="text-danger ms-5 me-2">69,000</div>
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
export default {
  name: "AfterBuySchedulePage",
  created() {
    if (this.$route.params.no) {
      this.getAfterBuySchedule();
    }
    console.log(this.$route.params.no);
  },
  methods: {
    getAfterBuySchedule() {
      console.log("id:", this.$route.params.no);
    },
  },
};
</script>

<style scoped></style>

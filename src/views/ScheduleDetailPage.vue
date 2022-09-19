<template>
  <div class="container" style="width: 55%">
    <div class="fs-3 mt-5">#현지인이 추천하는 일정표</div>
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
          <div class="fs-3">#김상욱님이 만든 일정표</div>
        </div>
        <div class="d-flex justify-content-between border-bottom mt-5 pb-2">
          <div>
            <span
              ><i
                class="fa-solid fa-user fs-5 p-1"
                style="
                  background-color: rgb(211, 222, 233);
                  color: white;
                  border-radius: 100%;
                "
              ></i
            ></span>
            <span class="fs-5">김상욱</span>
          </div>
          <div>2022-09-26</div>
        </div>
        <div class="mt-4 mb-4 border-bottom">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div class="d-flex align-items-center mb-3">
          <div class="fs-3">#리뷰 / 평점</div>
          <div class="fw-bold ms-3">⭐ <span>4.5 (15)</span></div>
        </div>
        <div class="border rounded mb-2">
          <div class="d-flex" style="background-color: rgb(246, 246, 246)">
            <span class="col-2 text-center m-2">작성자</span>
            <span class="border-start border-end col text-center m-2"
              >리뷰 내용</span
            >
            <span class="col-2 text-center m-2">평점</span>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">김민수</span>
            <span class="border-start border-end col text-center m-2"
              >정말 재미없어요! 다른 사람에게도 추천!!</span
            >
            <span class="col-2 text-center m-2">⭐ <span>4.5 (15)</span></span>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">김민수</span>
            <span class="border-start border-end col text-center m-2"
              >정말 재미없어요! 다른 사람에게도 추천!!</span
            >
            <span class="col-2 text-center m-2">⭐ <span>4.5 (15)</span></span>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">김민수</span>
            <span class="border-start border-end col text-center m-2"
              >정말 재미없어요! 다른 사람에게도 추천!!</span
            >
            <span class="col-2 text-center m-2">⭐ <span>4.5 (15)</span></span>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul
            class="pagination pagination-sm justify-content-center mt-2 mb-5 me-2"
          >
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="border rounded mb-2 mt-3">
          <div class="d-flex" style="background-color: rgb(246, 246, 246)">
            <span class="col text-center m-2">리뷰 작성하기</span>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">작성자</span>
            <span class="border-start col text-center m-2">홍길동</span>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">평점</span>
            <div class="border-start flex-fill row justify-content-center m-2">
              <select
                class="form-select text-center"
                aria-label="Default select example"
                style="width: 150px"
              >
                <option selected>평점</option>
                <option value="1">5.0</option>
                <option value="2">4.5</option>
                <option value="3">4.0</option>
                <option value="4">3.5</option>
                <option value="5">3.0</option>
                <option value="6">2.5</option>
                <option value="7">2.0</option>
                <option value="8">1.5</option>
                <option value="9">1.0</option>
                <option value="10">0.5</option>
                <option value="11">0.0</option>
                >
              </select>
            </div>
          </div>
          <div class="d-flex border-bottom">
            <span class="col-2 text-center m-2">리뷰 내용</span>
            <div
              class="border-start flex-fill row justify-content-center m-2 ps-3"
            >
              <input
                class="form-control"
                type="text"
                placeholder="한줄평을 입력해주세요."
                aria-label="default input example"
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
          <button type="button" class="btn btn-sm btn-danger">등록하기</button>
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
            <div class="d-flex border-bottom pb-2">
              <div>일정명</div>
              <div class="flex-fill text-center fw-bold">
                강원도 여행 필수 코스
              </div>
            </div>
            <div class="d-flex border-bottom pb-2 mt-2">
              <div>평점/리뷰</div>
              <div class="flex-fill text-center fw-bold">
                ⭐ <span>4.5 (15)</span>
              </div>
            </div>
            <div class="d-flex border-bottom pb-2 mt-2">
              <div>포인트</div>
              <div class="flex-fill text-center fw-bold">
                <span>2000</span>
                <span>P</span>
              </div>
            </div>
            <div class="d-flex justify-content-end gap-1 mt-3 mb-1">
              <button
                type="button"
                class="btn btn-sm btn-outline-dark border-0"
                @click="cancel()"
              >
                돌아가기
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger"
                @click="isBuyIt"
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleDetailPage",
  created() {
    if (this.$route.params.no) {
      this.getScheduleDetail();
    }
    console.log(this.$route.params.no);
  },
  methods: {
    getScheduleDetail() {
      console.log("id:", this.$route.params.no);
    },
    cancel() {
      this.$router.push({
        name: "SchedulePage",
      });
    },
    isBuyIt() {
      this.$router.push({
        name: "AfterBuySchedulePage",
      });
    },
  },
};
</script>

<style scoped></style>

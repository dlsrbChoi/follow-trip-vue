<template>
  <div class="loginBg py-5">
    <div
      class="container pt-3 pb-3 px-5 mt-5"
      style="background-color: white; border-radius: 10px; width: 75%"
    >
      <div class="my-4 py-5 fs-1 text-center">유저 정보</div>
      <div class="mx-auto mt-4 fw-bold w-50">
        <div class="row">
          <div class="col-2 my-auto">이름</div>
          <div class="col-10 border rounded p-2 my-1">{{ name }}</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">아이디</div>
          <div class="col-10 border rounded p-2 my-1">{{ username }}</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">연락처</div>
          <div class="col-10 border rounded p-2 my-1">{{ tel }}</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">주소</div>
          <div class="col-10 border rounded p-2 my-1">{{ address }}</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">생일</div>
          <div class="col-10 border rounded p-2 my-1">{{ birth }}</div>
        </div>
        <div class="row">
          <div class="d-flex justify-content-end gap-1 mt-3 mb-5">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark border-0 mx-2"
            >
              취소
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger border-0"
              style="background-color: #e32066"
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          class="fs-3 mt-5 mb-3 ps-3 w-75 fw-bold mx-auto"
          style="color: #e32066"
        >
          #내가 구매한 일정표
        </div>
        <div
          class="container w-75 row row-cols-1 row-cols-md-3 g-1 mx-auto mb-5"
        >
          <!-- 이거 부분 반복 -->
          <div class="col card h-100">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
              class="card-img-top rounded-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title fw-bold mb-3">경북궁 먹거리 여행</div>
              <div style="color: #e32066">
                <button
                  type="button"
                  class="btn btn-primary btn-sm me-1"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
              </div>
              <h4 class="card-text mt-2">37,500원</h4>
            </div>
          </div>
          <!-- 이거 반복 -->
          <div class="col card h-100">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
              class="card-img-top rounded-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title fw-bold mb-3">경북궁 먹거리 여행</div>
              <div style="color: #e32066">
                <button
                  type="button"
                  class="btn btn-primary btn-sm me-1"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
              </div>
              <h4 class="card-text mt-2">37,500원</h4>
            </div>
          </div>
          <div class="col card h-100">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
              class="card-img-top rounded-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title fw-bold mb-3">경북궁 먹거리 여행</div>
              <div style="color: #e32066">
                <button
                  type="button"
                  class="btn btn-primary btn-sm me-1"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="background-color: #e32066; border: none"
                >
                  #데이트
                </button>
              </div>
              <h4 class="card-text mt-2">37,500원</h4>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-2 me-2">
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
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo } from "@/api/auth";

export default {
  name: "userInfoPage",
  data() {
    return {
      name: "",
      username: "",
      tel: "",
      address: "",
      birth: "",
    };
  },
  async created() {
    const { data } = await userInfo();
    this.name = data.data.name;
    this.username = data.data.username;
    this.tel = data.data.tel;
    this.address = data.data.address;
    this.birth = data.data.birth;
  },
  methods: {},
};
</script>

<style scoped></style>

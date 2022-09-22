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
          <div class="col-10 border rounded p-2 my-1">홍길동</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">아이디</div>
          <div class="col-10 border rounded p-2 my-1">dkladf</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">연락처</div>
          <div class="col-10 border rounded p-2 my-1">01055484315</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">주소</div>
          <div class="col-10 border rounded p-2 my-1">서울시 중랑구</div>
        </div>
        <div class="row">
          <div class="col-2 my-auto">생일</div>
          <div class="col-10 border rounded p-2 my-1">1999-01-55</div>
        </div>
        <div class="row">
          <div class="d-flex justify-content-end gap-1 mt-3 mb-5">
            <button type="button" class="btn btn-sm btn-outline-dark border-0">
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
          #가장 많이 구매한 일정표
        </div>
        <div class="container w-75 card-group gap-1 mb-5">
          <div class="card border rounded">
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
          <div class="card border rounded">
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
          <div class="card border rounded">
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
import { validateEmail } from "@/utils/validation";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    userEmailValidClass() {
      if (!this.username) {
        return;
      }
      return validateEmail(this.username) ? "valid" : "invalid";
    },
    isUserEmailValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch("LOGIN", userData);
        await this.$router.push("/main");
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
    kakaoLogin() {
      console.log("Kakao 로그인");
    },
  },
};
</script>

<style scoped></style>

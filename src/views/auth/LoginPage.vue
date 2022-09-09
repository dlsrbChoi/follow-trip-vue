<template>
  <div class="pt-5 pb-5" style="background-color: #ffffff; z-index: -1">
    <div
      class="container pt-3 pb-3 px-3 px-5"
      style="width: 40%; background-color: white; border-radius: 10px"
    >
      <div class="mt-3 fs-1 text-center">로그인</div>
      <div class="mt-4 mb-5 fs-5 text-center">마켓트립</div>

      <div class="mt-5 mb-2 ms-1 text-left" style="color: gray">
        마켓트립 계정 로그인
      </div>
      <form @submit.prevent="submitForm" class="form">
        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            v-model="username"
            :class="userEmailValidClass"
            id="email"
            placeholder="이메일"
            aria-label="이메일"
          />
        </div>
        <p class="validation-text">
          <span class="normal" v-if="!isUserEmailValid">
            이메일 형식으로 입력해 주세요.
          </span>
        </p>
        <div class="input-group mb-2">
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="비밀번호"
            v-model="password"
          />
        </div>
        <div>
          <button
            :disabled="!isUserEmailValid || !password"
            type="submit"
            class="btn btn-primary"
            style="width: 100%"
            :class="!isUserEmailValid || !password ? 'disabled' : null"
          >
            로그인
          </button>
        </div>
      </form>
      <div class="mt-2 mb-5 fs-6 text-center" style="color: gray">
        아직 마켓트립의 회원이 아니신가요?
        <p>
          <strong
            ><router-link to="/signup" style="text-decoration: none"
              >회원가입하러가기</router-link
            ></strong
          >
        </p>
      </div>

      <div class="mt-5 mb-2 ms-3 text-left" style="color: gray">
        간편 로그인
      </div>

      <div class="mb-5">
        <button
          type="button"
          class="btn btn-warning"
          @click="kakaoLogin()"
          style="width: 100%"
        >
          카카오톡 간편 로그인
        </button>
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

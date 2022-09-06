<template>
  <header>
    <div>
      <router-link to="/main" class="logo"> 따라와입 </router-link>
      <router-link to="/main" class="banner_main">메인페이지</router-link>
      <router-link to="/schedule" class="banner_schedule"
        >일정표 거래</router-link
      >
    </div>
    <div>
      <form action="">
        <input
          type="text"
          class="searchArea"
          placeholder="여행지를 검색해보세요."
        />
      </form>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:" @click="logoutUser" class="logout-button">
          로그아웃
        </a>
      </template>
      <template v-else>
        <router-link to="/signup" class="signupBtn">회원가입</router-link>
        <router-link to="/login" class="loginBtn">로그인</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";

export default {
  name: "AppHeader",
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("member_auth");
      deleteCookie("member_user");
      this.$router.push("login");
    },
    search() {
      console.log("search");
    },
  },
};
</script>

<style scoped></style>

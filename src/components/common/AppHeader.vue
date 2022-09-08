<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <router-link
        to="/main"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <i class="fa-solid fa-plane"></i>
        <span class="ms-3">마켓트립</span>
      </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link to="/main" class="nav-link px-2 link-secondary"
            >메인페이지</router-link
          >
        </li>
        <li>
          <router-link to="/schedule" class="nav-link px-2 link-dark"
            >일정표 거래</router-link
          >
        </li>
      </ul>

      <div class="col"></div>

      <form class="col-12 col-lg-auto mb-3 mb-lg-0">
        <input
          type="search"
          class="form-control"
          placeholder="여행지를 검색해보세요."
          aria-label="Search"
          @keydown.enter="search"
        />
      </form>

      <template v-if="!isLoggedIn">
        <div class="col-md-3 text-end">
          <router-link to="/signup"
            ><button type="button" class="btn btn-outline-primary me-2">
              회원가입
            </button></router-link
          >
          <router-link to="/login"
            ><button type="button" class="btn btn-primary me-2">로그인</button>
          </router-link>
        </div>
      </template>

      <template v-else>
        <div class="col-md-3 text-end">
          <a
            href="javascript:"
            @click="logoutUser"
            class="btn btn-outline-primary me-2"
          >
            로그아웃
          </a>
        </div>
      </template>
    </header>
  </div>

  <!--  <header>-->
  <!--    <div>-->
  <!--      <router-link to="/main" class="logo"> 따라와입 </router-link>-->
  <!--      <router-link to="/main" class="banner_main">메인페이지</router-link>-->
  <!--      <router-link to="/schedule" class="banner_schedule"-->
  <!--        >일정표 거래</router-link-->
  <!--      >-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <form action="">-->
  <!--        <input-->
  <!--          type="text"-->
  <!--          class="searchArea"-->
  <!--          placeholder="여행지를 검색해보세요."-->
  <!--        />-->
  <!--      </form>-->
  <!--    </div>-->
  <!--    <div class="navigations">-->
  <!--      <template v-if="isUserLogin">-->
  <!--        <a href="javascript:" @click="logoutUser" class="logout-button">-->
  <!--          로그아웃-->
  <!--        </a>-->
  <!--      </template>-->
  <!--      <template v-else>-->
  <!--        <router-link to="/signup" class="signupBtn">회원가입</router-link>-->
  <!--        <router-link to="/login" class="loginBtn">로그인</router-link>-->
  <!--      </template>-->
  <!--    </div>-->
  <!--  </header>-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    logoutUser() {
      this.$store.commit("LOGOUT");
      this.$router.push("/");
    },
    search() {
      console.log("search");
    },
  },
};
</script>

<style scoped></style>

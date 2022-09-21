<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2"
    >
      <div></div>
      <div></div>
      <router-link
        to="/main"
        class="d-flex align-items-center col-md-2 mb-md-0"
      >
        <img src="@/assets/images/Frame2.png" alt="..." />
      </router-link>

      <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
        <li>
          <router-link to="/main" class="nav-link px-2 link-secondary"
            >일정표 거래</router-link
          >
        </li>
        <li>
          <router-link to="/schedule/create" class="nav-link px-2 link-dark"
            >일정표 만들기</router-link
          >
        </li>
      </ul>

      <div></div>
      <div></div>

      <template v-if="!isLoggedIn">
        <div class="col-md-3 text-end">
          <router-link to="/signup"
            ><button
              type="button"
              class="btn btn-outline-light me-2"
              style="color: #333333"
            >
              회원가입
            </button></router-link
          >
          <router-link to="/login"
            ><button
              type="button"
              class="btn btn-primary me-2 border-0"
              style="background-color: #e32066"
            >
              로그인
            </button>
          </router-link>
        </div>
      </template>

      <template v-else>
        <div class="col-md-3 text-end">
          <span style="margin-right: 10px">슈퍼관리자님</span>
          <a
            href="javascript:"
            @click="logoutUser"
            class="btn btn-outline-primary me-2"
          >
            로그아웃
          </a>
        </div>
      </template>
      <div></div>
      <div></div>
    </header>
  </div>
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

<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3"
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
          <router-link to="/userInfo" style="text-decoration: none">
            <span style="padding-top: 50px; margin-right: 10px; color: #333333"
              >{{ name }} 님</span
            >
          </router-link>
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
import { userInfo } from "@/api/auth";

export default {
  name: "AppHeader",
  data() {
    return {
      name: "",
    };
  },
  async created() {
    const { data } = await userInfo();
    this.name = data.data.name;
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    logoutUser() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.$store.commit("LOGOUT");
        this.$router.push("/");
      }
    },
    async loginUser() {
      const { data } = await userInfo();
      this.name = data.data.name;
    },
  },
};
</script>

<style scoped></style>

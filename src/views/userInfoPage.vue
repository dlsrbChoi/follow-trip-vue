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
          <div class="col-2 my-auto">내포인트</div>
          <div class="col-10 border rounded p-2 my-1">{{ point }}</div>
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
          <div v-for="(item, index) in schedules" :key="index" class="col">
            <div class="col card h-100">
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    id: item.scheduleId,
                  },
                }"
                style="text-decoration: none"
              >
                <img
                  :src="thumbnailPath(index)"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="card-body">
                  <div
                    class="card-title"
                    style="color: #333333; font-size: 15px"
                  >
                    {{ item.name }}
                  </div>
                  <div style="color: #e32066">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #4a80ff; border: none"
                    >
                      #{{ item.region }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ item.hashes[0] }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm me-1"
                      style="background-color: #e32066; border: none"
                    >
                      #{{ item.hashes[1] }}
                    </button>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
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
      schedules: [],
      point: 0,
    };
  },
  async created() {
    const { data } = await userInfo();
    this.name = data.data.name;
    this.username = data.data.username;
    this.tel = data.data.tel;
    this.address = data.data.address;
    this.birth = data.data.birth;
    this.schedules = data.data.schedules;
    this.point = data.data.point;
  },
  methods: {
    thumbnailPath(index) {
      return (
        "https://s3.ap-northeast-2.amazonaws.com/road.3144.bucket/" +
        this.schedules[index].thumbnail
      );
    },
  },
};
</script>

<style scoped></style>

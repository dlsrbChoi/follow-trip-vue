<template>
  <!--  <div style="background-color: gray; color: white">-->
  <!--    <div class="pt-5 fs-3 text-center">일정표 거래</div>-->
  <!--    <div class="pb-5 fs-6 text-center">내가 만든 일정이 수익이 됩니다</div>-->
  <!--  </div>-->

  <div class="container">
    <div class="border-bottom row justify-content-between pt-5 pb-2">
      <div class="col-3 row">
        <div class="hstack gap-3 ms-3">
          <div>지역</div>
          <div class="vr"></div>
          <div>
            <select
              class="form-select form-select-sm col"
              aria-label=".form-select-sm example"
              style="border: none"
              v-model="local"
            >
              <option value="">선택</option>
              <option value="수도권">수도권</option>
              <option value="강원도">강원도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상북도">경상북도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라북도">전라북도</option>
              <option value="제주도">제주도</option>
            </select>
          </div>
        </div>
      </div>
      <router-link
        to="/schedule/create"
        class="btn btn-secondary btn-sm col-2"
        style="background-color: #e32066; border: none"
      >
        일정표 만들기 +
      </router-link>
    </div>
    <div class="mt-3">
      <button
        type="button"
        class="btn btn-secondary btn-sm me-2"
        style="background-color: #e32066; border: none"
      >
        태그 추가하기 +
      </button>

      <button type="button" class="btn btn-light btn-sm me-5">초기화</button>
      <button type="button" class="btn btn-primary btn-sm me-2">
        #지하철 ⨉
      </button>
      <button type="button" class="btn btn-primary btn-sm me-2">#맛집 ⨉</button>
      <button type="button" class="btn btn-primary btn-sm">#데이트 ⨉</button>
    </div>

    <div class="row mt-5">
      <div class="col">
        <img
          src="../assets/images/koreaMap.png"
          class="card-img-top h-100"
          alt="..."
          style="border-radius: 15px"
        />
      </div>
      <div class="col h-100">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="(item, index) in scheduleList" :key="index" class="col">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'ScheduleDetailPage',
                  params: {
                    no: item.id,
                  },
                }"
                style="text-decoration: none"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay">
                  <button type="button" class="btn btn-primary btn-sm disabled">
                    #{{ item.hashtag }}
                  </button>
                </div>
                <div class="card-body">
                  <div
                    class="card-title"
                    style="color: #333333; font-size: 15px"
                  >
                    {{ item.title }}
                  </div>
                  <div style="color: #e32066">
                    <strong>⭐ {{ item.rating }}</strong>
                  </div>
                  <h4 class="card-text" style="color: #333333">
                    {{ item.price }}P
                  </h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end mt-2 me-2">
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
</template>

<script>
export default {
  name: "SchedulePage",
  components: {},
  created() {},
  data() {
    return {
      hashtag: "",
      local: "",
      hashtagModal: false,
      scheduleList: [
        {
          id: 0,
          thumbnail: "",
          hashtag: "데이트",
          title: "강원도 여행",
          rating: "4.8",
          price: "2,000",
        },
        {
          id: 1,
          thumbnail: "",
          hashtag: "맛집",
          title: "충북 여행",
          rating: "4.7",
          price: "2,000",
        },
        {
          id: 2,
          thumbnail: "",
          hashtag: "놀거리",
          title: "충남 여행",
          rating: "4.6",
          price: "2,000",
        },
        {
          id: 3,
          thumbnail: "",
          hashtag: "데이트",
          title: "수도권 여행",
          rating: "4.5",
          price: "2,000",
        },
        {
          id: 4,
          thumbnail: "",
          hashtag: "엑티비티",
          title: "경북 여행",
          rating: "4.3",
          price: "2,000",
        },
        {
          id: 5,
          thumbnail: "",
          hashtag: "기차",
          title: "전북 여행",
          rating: "4.2",
          price: "2,000",
        },
        {
          id: 6,
          thumbnail: "",
          hashtag: "자동차",
          title: "전남 여행",
          rating: "4.1",
          price: "2,000",
        },
        {
          id: 7,
          thumbnail: "",
          hashtag: "여행",
          title: "경남 여행",
          rating: "3.8",
          price: "2,000",
        },
        {
          id: 8,
          thumbnail: "",
          hashtag: "맛집",
          title: "제주도 여행",
          rating: "5.0",
          price: "2,000",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>

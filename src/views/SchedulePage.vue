<template>
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
              <option value="경상남도">경상남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
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
        @click="openModal"
      >
        태그 추가하기 +
      </button>

      <button
        type="button"
        class="btn btn-light btn-sm me-5"
        @click="resetHashtagList"
      >
        초기화
      </button>

      <button
        v-for="(item, index) in hashes"
        :key="index"
        type="button"
        class="btn btn-primary btn-sm me-1 ms-1"
        @click="removeHashtagItem(index)"
      >
        #{{ item }} X
      </button>

      <!-- 컴포넌트 MyModal -->
      <HashtagModal @close="closeModal" v-if="hashtagModal">
        <template slot="header"> 해시태그 </template>
        <!-- default 슬롯 콘텐츠 -->
        <div>#이동수단</div>
        <div>
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#자동차"
            @click="addHashtag('자동차')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#지하철"
            @click="addHashtag('지하철')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#기차"
            @click="addHashtag('기차')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#버스"
            @click="addHashtag('버스')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#택시"
            @click="addHashtag('택시')"
          />
        </div>
        <div>#취향</div>
        <div>
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#데이트"
            @click="addHashtag('데이트')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#액티비티"
            @click="addHashtag('액티비티')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#맛집"
            @click="addHashtag('맛집')"
          />
          <input
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            value="#놀거리"
            @click="addHashtag('놀거리')"
          />
        </div>
        <div>#선택한 태그</div>
        <div>
          <button
            v-for="(item, index) in hashes"
            :key="index"
            type="button"
            class="btn btn-primary btn-sm me-1 ms-1"
            @click="removeHashtagItem(index)"
          >
            #{{ item }} X
          </button>
        </div>
        <!-- /default -->
        <!-- footer 슬롯 콘텐츠 -->
        <template slot="footer">
          <button
            @click="doSend"
            class="btn btn-primary btn-sm"
            style="
              border-color: #e32066;
              background-color: #e32066;
              color: #ffffff;
              width: 100%;
            "
          >
            추가하기
          </button>
        </template>
        <!-- /footer -->
      </HashtagModal>
    </div>

    <div class="row mt-3">
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
          <div v-for="(item, index) in schedules" :key="index" class="col">
            <div class="card h-100">
              <!--              <div v-if="item.local === changeLocal">-->
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
              <!--              </div>-->
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
import HashtagModal from "@/components/modals/HashtagModal";
import { fetchSchedules } from "@/api/schedules";

export default {
  name: "SchedulePage",
  components: { HashtagModal },
  data() {
    return {
      hashes: [],
      local: "",
      hashtagModal: false,
      schedules: [],

      // 페이징
      perPage: 9,
      currentPage: 1,
    };
  },
  created() {
    this.getScheduleList();
  },
  methods: {
    addHashtag(value) {
      if (this.hashes.includes(value)) {
        return false;
      } else {
        this.hashes.push(value);
      }
    },
    removeHashtagItem(index) {
      this.hashes.splice(index, 1);
    },
    openModal() {
      this.hashtagModal = true;
    },
    closeModal() {
      this.hashtagModal = false;
    },
    resetHashtagList() {
      this.hashes = [];
    },
    doSend() {
      this.closeModal();
    },
    async getScheduleList() {
      const { data } = await fetchSchedules();
      this.schedules = data.data;
    },
  },
  computed: {
    rows() {
      return this.schedules.length;
    },
    // changeLocal() {
    //   if (this.local === "") {
    //     return "";
    //   }
    //
    //   if (this.local === "강원도") {
    //     return "강원도";
    //   }
    // },
  },
};
</script>

<style scoped></style>

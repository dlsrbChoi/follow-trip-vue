<template>
  <div>
    <img src="@/assets/images/Component22.png" class="card-img" alt="..." />
    <div class="container" style="width: 55%">
      <div class="fs-3 mt-5">#현지인이 추천하는 일정표</div>
      <div class="mt-3 pb-3">
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #4a80ff; border: none"
        >
          #{{ this.region }}
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-sm mx-1"
          style="background-color: #e32066; border: none"
          v-for="(item, index) in hashtags"
          :key="index"
        >
          #{{ item }}
        </button>
      </div>

      <div class="row">
        <div class="col-8">
          <div class="mb-5">
            <img
              src="@/assets/images/thumbnailExample.png"
              class="card-img-top h-100"
              alt="..."
              style="border-radius: 10px"
            />
          </div>
          <div class="mt-3">
            <div class="fs-3">#일정표 소개</div>
          </div>
          <div class="d-flex justify-content-between border-bottom mt-5 pb-2">
            <div>
              <span class="fs-5 fw-bold">{{ name }}</span>
            </div>
            <div>2022-09-26</div>
          </div>
          <div class="mt-4 mb-4 pb-5 border-bottom">
            {{ description }}
          </div>
          <div class="d-flex align-items-center mt-5 mb-3">
            <div class="fs-3">#리뷰 / 평점</div>
            <i class="fa-solid fa-star ms-3 me-2" style="color: #e32066"></i
            ><strong>4.5 (15)</strong>
          </div>
          <div class="border rounded mb-2">
            <div class="d-flex" style="background-color: rgb(246, 246, 246)">
              <span class="col-2 text-center m-2">작성자</span>
              <span class="border-start border-end col text-center m-2"
                >리뷰 내용</span
              >
              <span class="col-2 text-center m-2">평점</span>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2">김민수</span>
              <span class="border-start border-end col text-center m-2"
                >정말 재미없어요! 다른 사람에게도 추천!!</span
              >
              <span class="col-2 text-center m-2"
                ><i class="fa-solid fa-star me-2" style="color: #e32066"></i>4.5
              </span>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2">김민수</span>
              <span class="border-start border-end col text-center m-2"
                >정말 재미없어요! 다른 사람에게도 추천!!</span
              >
              <span class="col-2 text-center m-2"
                ><i class="fa-solid fa-star me-2" style="color: #e32066"></i>4.5
              </span>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2">김민수</span>
              <span class="border-start border-end col text-center m-2"
                >정말 재미없어요! 다른 사람에게도 추천!!</span
              >
              <span class="col-2 text-center m-2"
                ><i class="fa-solid fa-star me-2" style="color: #e32066"></i>4.5
              </span>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul
              class="pagination pagination-sm justify-content-center mt-2 mb-5 me-2"
            >
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

          <div class="border rounded mb-2 mt-3">
            <div class="d-flex" style="background-color: rgb(246, 246, 246)">
              <span class="col text-center m-2">리뷰 작성하기</span>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2 my-auto">작성자</span>
              <div
                class="border-start flex-fill row justify-content-center m-2 ps-3"
              >
                <input
                  class="form-control"
                  type="text"
                  placeholder="닉네임을 입력해주세요."
                  aria-label="default input example"
                  v-model="writer"
                />
              </div>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2 my-auto">평점</span>
              <div
                class="border-start flex-fill row justify-content-center m-2"
              >
                <select
                  class="form-select text-center"
                  aria-label="Default select example"
                  style="width: 150px"
                  v-model="rating"
                >
                  <option value="">평점</option>
                  <option value="5.0">5.0</option>
                  <option value="4.5">4.5</option>
                  <option value="4.0">4.0</option>
                  <option value="3.5">3.5</option>
                  <option value="3.0">3.0</option>
                  <option value="2.5">2.5</option>
                  <option value="2.0">2.0</option>
                  <option value="1.5">1.5</option>
                  <option value="1.0">1.0</option>
                  <option value="0.5">0.5</option>
                  <option value="0.0">0.0</option>
                  >
                </select>
              </div>
            </div>
            <div class="d-flex border-bottom">
              <span class="col-2 text-center m-2 my-auto">리뷰 내용</span>
              <div
                class="border-start flex-fill row justify-content-center m-2 ps-3"
              >
                <input
                  class="form-control"
                  type="text"
                  placeholder="한줄평을 입력해주세요."
                  aria-label="default input example"
                  v-model="content"
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end gap-1 mt-3 mb-3">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark border-0"
              @click="cancel()"
            >
              돌아가기
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger border-0"
              style="background-color: #e32066"
            >
              등록하기
            </button>
          </div>
        </div>
        <div class="col-4">
          <div class="border rounded">
            <div
              class="pt-2 pb-2 text-center fw-bold"
              style="background-color: rgb(227, 226, 224)"
            >
              결제정보
            </div>
            <div class="p-2">
              <div class="row">
                <div class="col-5 my-auto text-black-50">일정명</div>
                <div class="col-7 fw-bold my-auto">
                  {{ name }}
                </div>
              </div>
              <hr />
              <div class="row mt-2">
                <div class="col-5 my-auto text-black-50">평점/리뷰</div>
                <div class="col-7 text-center fw-bold my-auto">
                  <i class="fa-solid fa-star me-2" style="color: #e32066"></i
                  ><span>4.5 (15)</span>
                </div>
              </div>
              <hr />
              <div class="d-flex mt-2">
                <div class="col-5 my-auto text-black-50">포인트</div>
                <div class="col-7 text-center fw-bold my-auto">
                  <span>2000</span>
                  <span>P</span>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-end gap-1 mt-3 mb-1">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-dark border-0"
                  @click="cancel()"
                >
                  돌아가기
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger border-0"
                  style="background-color: #e32066"
                  @click="isBuyIt"
                >
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleDetailPage",
  data() {
    return {
      region: "강원도",
      hashtags: ["데이트", "자동차"],
      name: "",
      description: "",

      // 리뷰 작성
      writer: "",
      rating: "",
      content: "",

      // 리뷰 리스트
      reviews: [
        {
          name: "",
          rating: "",
          description: "",
        },
      ],
    };
  },
  created() {
    this.getScheduleDetail();

    console.log(typeof this.$route.params.id);
  },
  methods: {
    getScheduleDetail() {
      if (this.$route.params.id === "0") {
        this.name = "강원도 현지인이 알려주는 명소, 맛집";
        this.description =
          "국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.\n" +
          "\n" +
          "국회는 의장 1인과 부의장 2인을 선출한다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.\n" +
          "\n" +
          "국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다.\n" +
          "\n" +
          "국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.";
      }

      if (this.$route.params.id === "1") {
        this.name = "충북 현지인이 추천하는 뷰맛집";
        this.description =
          "계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다.\n" +
          "\n" +
          "형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다.\n" +
          "\n" +
          "이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에 의하여 그 공무원이 최초로 선출 또는 임명된 때로부터 적용한다. 헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다.\n" +
          "\n" +
          "훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 국무위원은 국무총리의 제청으로 대통령이 임명한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다.";
      }

      if (this.$route.params.id === "2") {
        this.name = "충남 인싸들만 가는 장소";
        this.description =
          "모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.\n" +
          "\n" +
          "국교는 인정되지 아니하며, 종교와 정치는 분리된다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.\n" +
          "\n" +
          "국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다.";
      }
    },
    cancel() {
      this.$router.push({
        name: "MainPage",
      });
    },
    isBuyIt() {
      this.$router.push({
        name: "AfterBuySchedulePage",
      });
    },
  },
};
</script>

<style scoped></style>

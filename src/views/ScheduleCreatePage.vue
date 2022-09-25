<template>
  <div>
    <img src="@/assets/images/Component19.png" class="card-img" alt="..." />
    <div class="container" style="width: 75%">
      <div class="form">
        <div class="mt-5 border-bottom pb-2">
          <span class="fs-4"><strong>일정표 만들기</strong></span>
          <span class="ms-3" style="color: red">*</span
          ><span> 표시는 필수 항목입니다.</span>
        </div>
        <div class="input-group mt-4 mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="일정표명을 입력해주세요."
            aria-label="Recipient's username with two button addons"
            v-model="name"
          />
          <select
            class="btn btn-primary btn-sm m-1 p-1"
            aria-hidden="true"
            style="
              background-color: #4a80ff;
              border-radius: 5px;
              border: none;
              position: absolute;
              top: 0;
              right: 0;
              z-index: 10;
            "
            v-model="region"
          >
            <option value="">지역선택</option>
            <option value="수도권">수도권</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도 ">전라남도</option>
            <option value="제주도">제주도</option>
          </select>
        </div>
        <div class="mt-3 border-bottom pb-3">
          <button
            type="button"
            class="btn btn-secondary btn-sm me-2"
            style="background-color: #e32066; border: none"
            @click="openModal"
          >
            태그 추가하기 +
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
            <div class="fs-5 mb-2">#이동수단</div>
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
            <div class="fs-5 mt-3 mb-2">#취향</div>
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
            <div class="fs-5 mt-3 mb-2">#태그 직접입력하기</div>
            <div class="mx-3">
              #<input
                type="text"
                class="me-1 ms-1 form-control-sm"
                v-model="directHashtag"
                @keyup.enter="addDirectHashtag(`${directHashtag}`)"
              />
            </div>
            <div class="fs-5 mt-3 mb-2">#선택한 태그</div>
            <div>
              <button
                v-for="(item, index) in hashes"
                :key="index"
                type="button"
                class="btn btn-primary btn-sm me-1 ms-1"
                @click="removeHashtagItem(index)"
              >
                #{{ item }} ⨉
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
                type="button"
              >
                추가하기
              </button>
            </template>
            <!-- /footer -->
          </HashtagModal>
        </div>

        <div>
          <div class="mt-4 mb-3">
            <span class="fs-4">
              <span class="mx-2" style="color: red">*</span
              ><strong>썸네일</strong>
              <input
                class="form-control form-control-sm mt-3"
                id="formFileSm"
                type="file"
                @change="handleFileChange"
                style="width: 50%"
              />
            </span>
            <div>
              <label class="form-label mt-3" for="customFile">
                {{ thumbnail.file_name }}
              </label>
              <div>
                <img
                  v-if="thumbnail.img_src"
                  :src="thumbnail.img_src"
                  width="500"
                  height="380"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="mb-3 border-bottom">
            <input
              class="form-control"
              type="file"
              id="formFile"
              style="display: none"
            />
          </div>
        </div>

        <div class="row justify-content-between">
          <span class="fs-4 col-3 row"><strong>일정 추가하기</strong></span>
          <div class="col text-end">
            <button type="button" class="btn btn-light me-2" @click="removeAll">
              전체삭제
            </button>
            <!--        <button-->
            <!--          type="button"-->
            <!--          class="btn btn-secondary me-2"-->
            <!--          @click="allChecked"-->
            <!--        >-->
            <!--          전체선택-->
            <!--        </button>-->
            <button
              type="button"
              class="btn btn-secondary me-2"
              @click="selectRemove"
            >
              선택삭제
            </button>
            <button
              type="button"
              class="btn btn-danger border-0"
              style="background-color: #e32066"
              @click="addPlan()"
            >
              일정 추가하기 +
            </button>
          </div>
        </div>
        <!--    일정 틀 영역 start-->
        <div v-for="(item, index) in plans" :key="index">
          <span class="fs-4 col-3 row mt-4" style="color: #4a80ff"
            ><strong>추천일정 {{ index + 1 }}</strong></span
          >
          <div
            class="hstack gap-3 mt-3 bg-light border rounded-top p-3 pt-2 pb-2 text-center"
          >
            <input
              class="form-check-input col-1"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="item.checkedPlan"
            />
            <div class="col-1 fw-bold border-start">순서</div>
            <div class="col-2 fw-bold border-start">카테고리</div>
            <div class="col-4 fw-bold border-start">장소명</div>
            <div class="col fw-bold border-start">추천시간대</div>
          </div>
          <div class="border rounded mt-3 mb-3 p-3">
            <div class="hstack gap-3 mb-3 pb-3 text-center border-bottom">
              <button
                type="button"
                class="btn border rounded px-2 py-1"
                style="margin-left: -5px; margin-right: -5px"
                @click="removePlan(index)"
              >
                X
              </button>
              <div class="col-1 ps-3 border-start">
                <i
                  class="fa-solid fa-chevron-up border me-2 p-1 hover"
                  @click="planIdUp(index)"
                ></i>
                <i
                  class="fa-solid fa-chevron-down border p-1"
                  @click="planIdDown(index)"
                ></i>
              </div>
              <div class="col-2 border-start d-flex">
                <span class="d-flex align-items-center ms-2" style="color: red"
                  >*</span
                >
                <select
                  class="form-select ms-2"
                  aria-label="Default select example"
                  v-model="item.category"
                >
                  <option value="">항목명</option>
                  <option value="음식점">음식점</option>
                  <option value="장소">장소</option>
                  <option value="카페">카페</option>
                  <option value="숙소">숙소</option>
                  <option value="액티비티">액티비티</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div class="col-4 border-start d-flex">
                <span class="d-flex align-items-center ms-2" style="color: red"
                  >*</span
                >
                <input
                  class="form-control form-control-lg ms-2"
                  type="text"
                  placeholder="장소를 입력해주세요."
                  aria-label="default input example"
                  v-model="item.name"
                />
              </div>
              <div class="col border-start d-flex">
                <span class="d-flex align-items-center ms-2" style="color: red"
                  >*</span
                >
                <input
                  class="form-control ms-2 me-2"
                  type="time"
                  placeholder=""
                  aria-label="default input example"
                  v-model="item.startAt"
                />
                <span class="d-flex align-items-center">~</span>
                <input
                  class="form-control ms-2"
                  type="time"
                  placeholder=""
                  aria-label="default input example"
                  v-model="item.endAt"
                />
              </div>
            </div>
            <div class="row ms-1 me-1 mb-3 pb-3 text-center border-bottom">
              <span
                class="col-1 d-flex align-items-center fs-5"
                style="color: red"
                >*
                <span class="ms-2" style="color: black"
                  ><strong>주소</strong></span
                ></span
              >
              <input
                class="col form-control"
                type="text"
                placeholder="주소를 입력해주세요."
                aria-label="default input example"
                v-model="item.address"
              />
            </div>
            <div class="p-3">
              <span class="d-flex align-items-center fs-5" style="color: red"
                >*
                <span class="ms-2" style="color: black"
                  ><strong>장소 추천 내용</strong></span
                ></span
              >
              <TextEditor class="mt-3" v-model="item.description" />
            </div>
            <div class="p-3">
              <span class="d-flex align-items-center fs-5" style="color: red"
                >*
                <span class="ms-2" style="color: black">
                  <strong>관련 이미지</strong>
                  <button
                    type="button"
                    class="btn btn-light btn-sm ms-2"
                    @click="addImageList(index)"
                  >
                    추가하기
                  </button>
                </span>
              </span>
              <div style="display: flex; flex-wrap: wrap">
                <div
                  v-for="(m, i) in item.images"
                  :key="i"
                  style="width: 330px"
                  class="me-3"
                >
                  <div>
                    <input
                      class="form-control form-control-sm mt-3"
                      id="formFileSm"
                      type="file"
                      @change="handleImageChange(index, i)"
                    />
                  </div>
                  <label class="form-label mt-3" for="customFile">
                    {{ m.file_name }}
                  </label>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm mx-2"
                    @click="removeImg(index, i)"
                  >
                    X
                  </button>
                  <div>
                    <img
                      v-if="m.img_src"
                      :src="m.img_src"
                      width="180px"
                      height="120px"
                      alt=""
                      style="margin-top: 10px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3">
              <span
                class="d-flex align-items-center mb-3 fs-5"
                style="color: red"
                >*
                <span class="ms-2" style="color: black"
                  ><strong>가격 설정</strong></span
                ></span
              >
              <div>
                <div class="row mb-1">
                  <span class="d-flex align-items-center col" style="color: red"
                    >*
                    <span class="ms-2" style="color: black">항목명</span></span
                  >
                  <span class="d-flex align-items-center col" style="color: red"
                    >* <span class="ms-2" style="color: black">가격</span></span
                  >
                </div>
                <div class="row mb-1">
                  <div class="input-group col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="항목명을 입력해주세요."
                      v-model="inputName"
                    />
                  </div>
                  <div class="input-group col">
                    <input
                      type="number"
                      class="form-control"
                      style="border-right: none; text-align: right"
                      placeholder="가격을 입력해주세요."
                      v-model="inputPrice"
                    />
                    <span
                      class="input-group-text"
                      style="background-color: white; border-left: none"
                      >원</span
                    >
                  </div>
                </div>
                <div class="row ps-3 pe-3">
                  <button
                    type="button"
                    class="btn btn-secondary mt-1"
                    style="
                      background-color: #f9f9fd;
                      color: #8e90a0;
                      border: none;
                    "
                    @click="addPriceList(index)"
                  >
                    가격 추가 +
                  </button>
                </div>
                <div
                  class="row mb-1 mt-2"
                  v-for="(n, i) in item.items"
                  :key="i"
                >
                  <div class="input-group col">
                    <div type="text" class="form-control">{{ n.name }}</div>
                  </div>
                  <div class="input-group col">
                    <div
                      type="number"
                      class="form-control"
                      style="border-right: none; text-align: right"
                    >
                      {{ n.price | makeComma }}
                    </div>
                    <span
                      class="input-group-text"
                      style="background-color: white; border-left: none"
                      >원</span
                    >
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      @click="removePrice(index, i)"
                    >
                      X
                    </button>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-3 fs-3">
                  <span class="me-5">총액</span>
                  <span style="color: #e32066">{{
                    item.sumItemPrice | makeComma
                  }}</span>
                  <span>원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--    일정 틀 영역 end-->

        <div class="row justify-content-around border-bottom fs-3 pb-3 pt-3">
          <div class="col"><strong>일정 예상금액</strong></div>
          <div class="col text-end">
            <span style="color: #e32066">{{ totalPrice | makeComma }}</span>
            <span>원</span>
          </div>
        </div>

        <div class="row pt-3 border-top mt-2 mb-4">
          <span class="d-flex align-items-center col fs-3" style="color: red"
            >*
            <span class="ms-2" style="color: black"
              >내 일정 추천내용</span
            ></span
          >
          <TextEditor class="mt-3" v-model="description" />
        </div>

        <div class="fs-3 mt-5">가이드 여부</div>
        <div class="form-check form-check-inline mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="1"
            v-model="guideCheck"
          />
          <label class="form-check-label" for="inlineRadio1">가능</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="2"
            v-model="guideCheck"
          />
          <label class="form-check-label" for="inlineRadio2">불가능</label>
        </div>

        <div class="d-flex justify-content-end gap-1 mt-5 mb-5">
          <button type="button" class="btn btn-outline-dark" @click="cancel">
            취소
          </button>
          <button
            type="submit"
            class="btn btn-danger border-0"
            style="background-color: #e32066"
            @click="submitForm"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HashtagModal from "@/components/modals/HashtagModal";
import TextEditor from "@/components/util/TextEditor";
import { createSchedule } from "@/api/schedules";

export default {
  name: "ScheduleCreatePage",
  components: { HashtagModal, TextEditor },
  created() {
    this.plans[0].planOrder = "1";
  },
  data() {
    return {
      name: "",
      region: "",
      directHashtag: "",
      hashes: [],
      hashtagModal: false,
      thumbnail: {
        file_name: "파일을 선택하세요.",
        file: "",
        img_src: "",
      }, // 썸네일 파일
      images: [],
      plans: [
        {
          checkedPlan: false,
          planOrder: "",
          category: "",
          name: "",
          startAt: "",
          endAt: "",
          address: "",
          imageCnt: 0,
          images: [
            {
              file_name: "파일을 선택하세요.",
              file: "",
              img_src: "",
            },
          ],
          description: "",
          items: [],
          sumItemPrice: 0,
        },
      ],
      inputName: "",
      inputPrice: "",

      totalPrice: 0,
      description: "",
      guideCheck: "2",

      isAllChecked: false,
    };
  },
  methods: {
    async submitForm() {
      if (this.filter() === false) {
        return false;
      }

      try {
        this.setImgPrams();
        const reqString = this.setParam();
        const formData = new FormData();
        formData.append("reqString", reqString);
        formData.append("thumbnail", this.thumbnail.file);
        this.images.forEach((image) => {
          formData.append("images", image);
        });
        await createSchedule(formData);
        await this.$router.push("/main");
      } catch (error) {
        this.resetImages();
        console.log(error);
      }
    },
    resetImages() {
      this.plans.forEach((plan) => {
        plan.imageCnt = 0;
      });
      this.images = [];
    },
    setImgPrams() {
      const plans = this.plans;
      plans.forEach((plan) => {
        plan.images.forEach((image) => {
          this.images.push(image.file);
          plan.imageCnt += 1;
        });
      });
    },
    setParam() {
      const data = {
        name: this.name,
        region: this.region,
        hashes: this.hashes,
        plans: this.plans,
        description: this.description,
        totalPrice: this.totalPrice,
        isGuide: this.guideCheck,
      };
      return JSON.stringify(data);
    },
    addHashtag(value) {
      if (this.hashes.includes(value)) {
        return false;
      } else {
        this.hashes.push(value);
      }
    },
    addDirectHashtag(value) {
      if (this.hashes.includes(value)) {
        return false;
      } else {
        this.hashes.push(value);
      }
      this.directHashtag = "";
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
    addPlan() {
      this.plans.push({
        checkedPlan: false,
        planOrder: `${this.plans.length + 1}`,
        category: "",
        name: "",
        startAt: "",
        endAt: "",
        address: "",
        imageCnt: 0,
        images: [
          {
            file_name: "파일을 선택하세요.",
            file: "",
            img_src: "",
          },
        ],
        description: "",
        items: [],
        sumItemPrice: 0,
      });
    },
    addPriceList(index) {
      if (!this.inputName) {
        alert("항목명을 입력해주세요.");
        return false;
      }

      if (this.inputPrice === "") {
        this.inputPrice = "0";
      }

      this.plans[index].items.push({
        name: this.inputName,
        price: this.inputPrice,
      });
      this.plans[index].sumItemPrice =
        this.plans[index].sumItemPrice + Number(this.inputPrice);
      this.totalPrice += Number(this.inputPrice);
      this.inputName = "";
      this.inputPrice = "";
    },
    addImageList(index) {
      this.plans[index].images.push({
        file_name: "파일을 선택하세요.",
        file: "",
        img_src: "",
      });
    },

    planIdUp(id) {
      if (id === 0) {
        return false;
      } else {
        const item = this.plans.splice(id, 1);
        this.plans.splice(id - 1, 0, item[0]);
      }
    },
    planIdDown(id) {
      const item = this.plans.splice(id, 1);
      this.plans.splice(id + 1, 0, item[0]);
    },
    selectRemove() {
      for (let i = 0; i < this.plans.length; i++) {
        if (this.plans[i].checkedPlan === true) {
          this.plans.splice(i, 1);
        }
      }
    },
    removePlan(id) {
      this.plans.splice(id, 1);
    },
    removeAll() {
      this.plans.splice(0, this.plans.length);
    },
    removePrice(index, id) {
      this.plans[index].sumItemPrice -= Number(
        this.plans[index].items[id].price
      );
      this.totalPrice -= Number(this.plans[index].items[id].price);
      this.plans[index].items.splice(id, 1);
    },
    removeImg(index, id) {
      this.plans[index].images.splice(id, 1);
    },
    handleFileChange(e) {
      let file = e.target.files[0];
      let name = file.name;
      this.thumbnail.file_name = file.name;
      this.thumbnail.file = file;
      if (
        name.endsWith(".jpg") ||
        name.endsWith(".jpeg") ||
        name.endsWith(".png") ||
        name.endsWith(".gif") ||
        name.endsWith(".JPG") ||
        name.endsWith(".JPEG") ||
        name.endsWith(".PNG") ||
        name.endsWith(".GIF")
      )
        this.thumbnail.img_src = URL.createObjectURL(file);
      else this.thumbnail.img_src = "";
    },
    handleImageChange(index, i) {
      let file = event.target.files[0];
      let name = file.name;
      this.plans[index].images[i].file_name = file.name;
      this.plans[index].images[i].file = file;
      if (
        name.endsWith(".jpg") ||
        name.endsWith(".jpeg") ||
        name.endsWith(".png") ||
        name.endsWith(".gif") ||
        name.endsWith(".JPG") ||
        name.endsWith(".JPEG") ||
        name.endsWith(".PNG") ||
        name.endsWith(".GIF")
      )
        this.plans[index].images[i].img_src = URL.createObjectURL(file);
      else this.plans[index].images[i].img_src = "";
    },
    cancel() {
      this.$router.push("/main");
    },
    filter() {
      if (!this.name || this.name.trim() === "") {
        alert("일정표명을 입력해주세요.");
        return false;
      }

      if (!this.region || this.region.trim() === "") {
        alert("지역을 선택해주세요.");
        return false;
      }

      if (this.hashes.length === 0) {
        alert("태그를 1개이상 설정해주세요.");
        return false;
      }

      if (!this.thumbnail.file) {
        alert("썸네일을 등록해주세요.");
        return false;
      }
      if (!this.description || this.description.trim() === "") {
        alert("내 일정 추천내용을 입력해주세요.");
        return false;
      }
      for (let index = 0; index < this.plans.length; index++) {
        if (!this.plans[index].category) {
          alert(`추천일정${index + 1}의 카테고리를 선택해주세요.`);
          return false;
        }
        if (!this.plans[index].name) {
          alert(`추천일정${index + 1}의 장소명을 입력해주세요.`);
          return false;
        }
        if (!this.plans[index].startAt) {
          alert(`추천일정${index + 1}의 추천시간대를 입력해주세요.`);
          return false;
        }
        if (!this.plans[index].endAt) {
          alert(`추천일정${index + 1}의 추천시간대를 입력해주세요.`);
          return false;
        }
        if (!this.plans[index].address) {
          alert(`추천일정${index + 1}의 주소를 입력해주세요.`);
          return false;
        }
        if (!this.plans[index].description) {
          alert(`추천일정${index + 1}의 장소추천내용 입력해주세요.`);
          return false;
        }
        for (let i = 0; i < this.plans[index].images.length; i++) {
          if (!this.plans[index].images[i].file) {
            alert(`추천일정${index + 1}의 관련이미지를 입력해주세요.`);
            return false;
          }
        }
        if (this.plans[index].items.length === 0) {
          alert(`추천일정${index + 1}의 가격설정을 1개이상 입력해주세요.`);
          return false;
        }
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

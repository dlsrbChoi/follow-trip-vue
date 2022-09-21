<template>
  <div>
    <img src="@/assets/images/Component19.png" class="card-img" alt="..." />
    <div class="container">
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
          v-model="title"
        />
        <select
          class="btn btn-primary btn-sm m-1 p-1"
          aria-hidden="true"
          style="
            background-color: #e32066;
            border-radius: 5px;
            border: none;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
          "
          v-model="local"
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
          v-for="(item, index) in hashtagList"
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
              v-for="(item, index) in hashtagList"
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
            style="background-color: #e32066"
            class="btn btn-primary border-0"
            @click="addPlan()"
          >
            일정 추가하기 +
          </button>
        </div>
      </div>
      <!--    일정 틀 영역 start-->
      <div v-for="(item, index) in planList" :key="index">
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
              class="btn btn-secondary btn-sm"
              style="margin-left: -5px; margin-right: -5px"
              @click="removePlan(index)"
            >
              X
            </button>
            <div class="col-1 ps-3 border-start">
              <i
                class="fa-solid fa-chevron-up border me-2 p-2 hover"
                @click="planIdUp(index)"
              ></i>
              <i
                class="fa-solid fa-chevron-down border p-2"
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
                v-model="item.placeName"
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
              v-model="item.addr"
            />
          </div>
          <div class="p-3">
            <span class="d-flex align-items-center fs-5" style="color: red"
              >*
              <span class="ms-2" style="color: black"
                ><strong>장소 추천 내용</strong></span
              ></span
            >
            <TextEditor class="mt-3" v-model="item.recommendPlaceContents" />
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
            <div v-for="(m, i) in item.image" :key="i">
              <div>
                <input
                  class="form-control form-control-sm mt-3"
                  id="formFileSm"
                  type="file"
                  @change="handleImageChange(index, i)"
                  style="width: 50%"
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
                  width="500"
                  height="380"
                  alt=""
                  style="margin-top: 10px"
                />
              </div>
            </div>
          </div>
          <div class="p-3">
            <span class="d-flex align-items-center mb-3 fs-5" style="color: red"
              >*
              <span class="ms-2" style="color: black"
                ><strong>가격 설정</strong></span
              ></span
            >
            <div>
              <div class="row mb-1">
                <span class="d-flex align-items-center col" style="color: red"
                  >* <span class="ms-2" style="color: black">항목명</span></span
                >
                <span class="d-flex align-items-center col" style="color: red"
                  >* <span class="ms-2" style="color: black">가격</span></span
                >
              </div>
              <div class="row mb-1" v-for="(n, i) in item.itemList" :key="i">
                <div class="input-group col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="항목명을 입력해주세요."
                    v-model="n.itemTitle"
                  />
                </div>
                <div class="input-group col">
                  <input
                    type="number"
                    class="form-control"
                    style="border-right: none; text-align: right"
                    placeholder="가격을 입력해주세요."
                    v-model="n.price"
                    @change="sumItemPrice(index, i), sumTotalPrice(index, i)"
                  />
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
              <div class="d-flex justify-content-end mt-3 fs-3">
                <span class="me-5">총액</span>
                <span style="color: #e32066">{{ item.sumItemPrice }}</span>
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
          <span style="color: #e32066">{{ totalPrice }}</span>
          <span>원</span>
        </div>
      </div>

      <div class="row pt-3 border-top mt-2 mb-4">
        <span class="d-flex align-items-center col fs-3" style="color: red"
          >*
          <span class="ms-2" style="color: black">내 일정 추천내용</span></span
        >
        <TextEditor class="mt-3" v-model="recommendPlanContents" />
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
          type="button"
          class="btn btn-danger border-0"
          style="background-color: #e32066"
        >
          저장
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HashtagModal from "@/components/modals/HashtagModal";
import TextEditor from "@/components/util/TextEditor";

export default {
  name: "ScheduleCreatePage",
  components: { HashtagModal, TextEditor },
  data() {
    return {
      title: "",
      local: "",
      hashtag: "",
      hashtagList: [],
      hashtagModal: false,
      thumbnail: {
        file_name: "파일을 선택하세요.",
        file: "",
        img_src: "",
      }, // 썸네일 파일
      thumbnailId: "",

      planList: [
        {
          checkedPlan: false,
          num: "",
          category: "",
          placeName: "",
          startAt: "",
          endAt: "",
          addr: "",
          image: [
            {
              file_name: "파일을 선택하세요.",
              file: "",
              img_src: "",
            },
          ],
          recommendPlaceContents: "",
          itemList: [
            {
              itemTitle: "",
              price: 0,
            },
          ],
          sumItemPrice: 0,
        },
      ],

      totalPrice: 0,
      recommendPlanContents: "",
      guideCheck: "2",

      isAllChecked: false,
    };
  },
  methods: {
    addHashtag(value) {
      if (this.hashtagList.includes(value)) {
        return false;
      } else {
        this.hashtagList.push(value);
      }
    },
    removeHashtagItem(index) {
      this.hashtagList.splice(index, 1);
    },
    openModal() {
      this.hashtagModal = true;
    },
    closeModal() {
      this.hashtagModal = false;
    },
    resetHashtagList() {
      this.hashtagList = [];
    },
    doSend() {
      this.closeModal();
    },
    addPlan() {
      this.planList.push({
        checkedPlan: false,
        num: "",
        category: "",
        placeName: "",
        startAt: "",
        endAt: "",
        addr: "",
        image: [
          {
            file_name: "파일을 선택하세요.",
            file: "",
            img_src: "",
          },
        ],
        recommendPlaceContents: "",
        itemList: [
          {
            itemTitle: "",
            price: 0,
          },
        ],
        sumItemPrice: 0,
      });
    },
    addPriceList(id) {
      this.planList[id].itemList.push({
        itemTitle: "",
        price: "",
      });
    },
    addImageList(index) {
      this.planList[index].image.push({
        file_name: "파일을 선택하세요.",
        file: "",
        img_src: "",
      });
    },

    planIdUp(id) {
      if (id === 0) {
        return false;
      } else {
        const item = this.planList.splice(id, 1);
        this.planList.splice(id - 1, 0, item[0]);
      }
    },
    planIdDown(id) {
      const item = this.planList.splice(id, 1);
      this.planList.splice(id + 1, 0, item[0]);
    },
    // allChecked() {
    //   for (let i = 0; i < this.planList.length; i++) {
    //     this.planList[i].checkedPlan
    //       ? (this.planList[i].checkedPlan = false)
    //       : (this.planList[i].checkedPlan = true);
    //   }
    // },
    selectRemove() {
      for (let i = 0; i < this.planList.length; i++) {
        if (this.planList[i].checkedPlan === true) {
          this.planList.splice(i, 1);
        }
      }
    },
    removePlan(id) {
      this.planList.splice(id, 1);
    },
    removeAll() {
      this.planList.splice(0, this.planList.length);
    },
    removePrice(index, id) {
      this.planList[index].sumItemPrice -= Number(
        this.planList[index].itemList[id].price
      );
      this.totalPrice -= Number(this.planList[index].itemList[id].price);
      this.planList[index].itemList.splice(id, 1);
    },
    removeImg(index, id) {
      this.planList[index].image.splice(id, 1);
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
        name.endsWith(".gif")
      )
        this.thumbnail.img_src = URL.createObjectURL(file);
      else this.thumbnail.img_src = "";
    },
    handleImageChange(index, i) {
      let file = event.target.files[0];
      let name = file.name;
      this.planList[index].image[i].file_name = file.name;
      this.planList[index].image[i].file = file;
      if (
        name.endsWith(".jpg") ||
        name.endsWith(".jpeg") ||
        name.endsWith(".png") ||
        name.endsWith(".gif")
      )
        this.planList[index].image[i].img_src = URL.createObjectURL(file);
      else this.planList[index].image[i].img_src = "";
    },
    cancel() {
      this.$router.push("/schedule");
    },
    sumItemPrice(index, i) {
      this.planList[index].sumItemPrice += Number(
        this.planList[index].itemList[i].price
      );
      return Number(this.planList[index].sumItemPrice);
    },
    sumTotalPrice(index, i) {
      this.totalPrice += Number(this.planList[index].itemList[i].price);
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

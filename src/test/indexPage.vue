<template>
  <div class="example-modal-window">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>
    <button
      v-for="(item, index) in hashtagList"
      :key="index"
      type="button"
      class="btn btn-primary btn-sm me-1 ms-1"
      @click="removeHashtagItem(index)"
    >
      {{ item }} X
    </button>

    <!-- 컴포넌트 MyModal -->
    <MyModal @close="closeModal" v-if="modal">
      <template slot="header"> 해시태그 </template>
      <!-- default 슬롯 콘텐츠 -->
      <div>#이동수단</div>
      <div>
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#자동차"
          @click="addHashtag('#자동차')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#지하철"
          @click="addHashtag('#지하철')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#기차"
          @click="addHashtag('#기차')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#버스"
          @click="addHashtag('#버스')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#택시"
          @click="addHashtag('#택시')"
        />
      </div>
      <div>#취향</div>
      <div>
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#데이트"
          @click="addHashtag('#데이트')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#액티비티"
          @click="addHashtag('#액티비티')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#맛집"
          @click="addHashtag('#맛집')"
        />
        <input
          type="button"
          class="btn btn-primary btn-sm me-1 ms-1"
          value="#놀거리"
          @click="addHashtag('#놀거리')"
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
          {{ item }} X
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
    </MyModal>
  </div>
</template>

<script>
import MyModal from "./MyModal.vue";
export default {
  components: { MyModal },
  data() {
    return {
      modal: false,
      hashtagList: [],
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
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    doSend() {
      this.closeModal();
    },
  },
};
</script>

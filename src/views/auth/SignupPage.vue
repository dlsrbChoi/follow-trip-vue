<template>
  <form @submit.prevent="registerUser" class="form">
    <div class="container" style="width: 50%">
      <div class="mt-5 fs-1 text-center">회원가입</div>
      <div class="mt-2 mb-5 text-center">
        이미 마켓트립의 회원이신가요?
        <strong
          ><router-link to="/login" style="text-decoration: none"
            >로그인하러가기</router-link
          ></strong
        >
      </div>

      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          v-model="username"
          :class="userEmailValidClass"
          id="email"
          placeholder="이메일"
          aria-label="이메일"
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="duplicateCheck"
          :class="isButtonDisabled"
          :disabled="isButtonDisabled"
        >
          중복확인
        </button>
      </div>
      <p class="validation-text">
        <span class="warning" v-if="!isUserEmailValid">
          이메일 형식으로 입력해 주세요.
        </span>
      </p>
      <div class="input-group mb-2">
        <input
          type="password"
          class="form-control"
          v-model="password"
          :class="passwordValidClass"
          id="Password"
          placeholder="비밀번호"
        />
      </div>
      <p class="validation-text">
        <span class="warning" v-if="!isPasswordValid">
          비밀번호는 8자 이상이어야 합니다.
        </span>
      </p>
      <div class="input-group mb-2">
        <input
          type="password"
          class="form-control"
          v-model="checkPw"
          id="Password2"
          placeholder="비밀번호확인"
        />
      </div>
      <p class="validation-text">
        <span class="warning" v-if="this.password !== this.checkPw">
          비밀번호가 일치하지 않습니다.
        </span>
      </p>

      <div class="fs-5 mt-3 mb-3 mx-2">추가정보 입력하기</div>

      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          placeholder="이름"
        />
      </div>
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          v-model="tel"
          id="phoneNumber"
          placeholder="휴대전화번호"
        />
      </div>
      <p class="validation-text">
        <span class="normal"> 하이픈(-)없이 입력해주세요. </span>
      </p>
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          v-model="addr"
          id="address"
          placeholder="주소"
          aria-label="주소"
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="searchAddress"
          @click="execDaumPostcode()"
        >
          주소검색
        </button>
      </div>
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          v-model="addrDetail"
          id="detailAddress"
          placeholder="상세주소"
        />
      </div>
      <div class="input-group date">
        <input
          type="date"
          class="form-control"
          v-model="birth"
          data-placeholder="생년월일"
          required
          aria-required="true"
        />
      </div>

      <div>
        <div class="form-check mt-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="allTerms"
            v-model="isAllChecked"
            @change="termsAllChecked"
          />
          <label class="form-check-label" for="allTerms">
            <strong>아래 약관에 모두 동의합니다.</strong>
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="terms1"
            v-model="privacyTerms"
          />
          <label class="form-check-label" for="terms1">
            [필수] 개인정보 수집 및 활용
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="terms2"
            v-model="userTerms"
          />
          <label class="form-check-label" for="terms2">
            [필수] 회원 이용약관
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="terms3"
            v-model="selectTerms"
          />
          <label class="form-check-label" for="terms3">
            [선택] 개인정보 마케팅 활용 수신에 동의
          </label>
        </div>
      </div>

      <div class="d-flex justify-content-end gap-1 mt-5 mb-5">
        <button type="button" class="btn btn-outline-dark">취소</button>
        <button type="button" class="btn btn-secondary" @click="signup">
          가입하기
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { validateEmail, validatePassword } from "@/utils/validation";
import { registerUser } from "@/api/auth";

export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      password: "",
      checkPw: "",
      name: "",
      tel: "",
      addr: "",
      addrDetail: "",
      birth: "",
      logMessage: "",
      isAllChecked: "",
      privacyTerms: "",
      userTerms: "",
      selectTerms: "",
    };
  },
  computed: {
    userEmailValidClass() {
      if (!this.username) {
        return;
      }
      return validateEmail(this.username) ? "valid" : "invalid";
    },
    isUserEmailValid() {
      if (!this.username) {
        return true;
      }
      return validateEmail(this.username);
    },
    passwordValidClass() {
      if (!this.password) {
        return;
      }
      return validatePassword(this.password) ? "valid" : "invalid";
    },
    isPasswordValid() {
      if (!this.password) {
        return true;
      }
      return validatePassword(this.password);
    },
    isButtonDisabled() {
      return !this.username || !validateEmail(this.username)
        ? "disabled"
        : null;
    },
  },
  methods: {
    async registerUser() {
      try {
        await registerUser({
          username: this.username,
          password: this.password,
          name: this.name,
          tel: this.tel,
          addr: this.addr,
          addrDetail: this.add,
          birth: this.birth,
        });
      } catch (e) {
        console.log(e.response);
        if (e.response.status === 409) {
          this.logMessage = `${this.username} 는(은) 이미 사용중입니다.`;
        }
      }
    },
    termsAllChecked() {
      if (this.isAllChecked === true) {
        this.privacyTerms = true;
        this.userTerms = true;
        this.selectTerms = true;
      } else {
        this.privacyTerms = false;
        this.userTerms = false;
        this.selectTerms = false;
      }
    },
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.addr = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
        },
      }).open();
    },
    signup() {
      if (this.filter() === false) return false;
    },
    filter() {
      if (!this.username || this.username.trim() === "") {
        alert("이메일을 입력해주세요.");
        return false;
      }

      if (!this.password || this.password.trim() === "") {
        alert("비밀번호를 입력해주세요.");
        return false;
      }

      if (!this.name || this.name.trim() === "") {
        alert("이름을 입력해주세요.");
        return false;
      }

      if (!this.tel || this.tel.trim() === "") {
        alert("휴대전화번호를 입력해주세요.");
        return false;
      }

      if (!this.addr || this.addr.trim() === "") {
        alert("주소를 입력해주세요.");
        return false;
      }

      if (!this.birth || this.birth.trim() === "") {
        alert("생년월일을 입력해주세요.");
        return false;
      }

      if (this.privacyTerms === "" || this.privacyTerms === false) {
        alert("필수약관에 동의해주세요.");
        return false;
      }

      if (this.userTerms === "" || this.userTerms === false) {
        alert("필수약관에 동의해주세요.");
        return false;
      }
    },
  },
};
</script>

<style scoped>
input[type="date"]::before {
  content: attr(data-placeholder);
  width: 100%;
  color: #6c757d;
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  display: none;
}
</style>

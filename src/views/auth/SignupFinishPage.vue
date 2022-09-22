<template>
  <div class="loginBg py-5">
    <div
      class="container pt-3 pb-3 px-3 px-5"
      style="width: 45%; background-color: white; border-radius: 10px"
    >
      <img src="@/assets/images/signupFinish.png" class="card-img" alt="..." />
      <div class="fs-2 text-center">
        따라와입의 회원이 되신 것을 축하합니다!
      </div>
      <div class="mt-2 mb-5 text-center text-black-50">
        따라와입에서 내게 맞춤여행상품을 거래해보세요.
      </div>

      <router-link to="/login" style="text-decoration: none"
        ><button
          type="button"
          class="btn btn-danger d-flex mx-auto mt-5 mb-5 border-0"
          style="background-color: #e32066"
        >
          로그인하러가기
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupFinishPage",
};
</script>

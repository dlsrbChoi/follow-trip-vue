<template>
  <div>
    <h1>일정표 거래 상세</h1>
  </div>
</template>

<script>
export default {
  name: "ScheduleDetailPage",
  created() {
    if (this.$route.params.no) {
      this.getScheduleDetail();
    }
    console.log(this.$route.params.no);
  },
  methods: {
    getScheduleDetail() {
      console.log("id:", this.$route.params.no);
    },
  },
};
</script>

<style scoped></style>

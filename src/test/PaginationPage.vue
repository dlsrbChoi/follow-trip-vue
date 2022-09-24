<template>
  <div class="overflow-auto">
    <div class="d-flex align-items-center mt-5 mb-3">
      <div class="fs-3">#리뷰 / 평점</div>
      <i class="fa-solid fa-star ms-3 me-2" style="color: #e32066"></i
      ><strong>4.5 (15)</strong>
    </div>
    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { name: "최", context: "Fred", rating: "Flintstone" },
        { name: "김", context: "Fred", rating: "Flintstone" },
        { name: "박", context: "Fred", rating: "Flintstone" },
        { name: "이", context: "Fred", rating: "Flintstone" },
        { name: "이", context: "Fred", rating: "Flintstone" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

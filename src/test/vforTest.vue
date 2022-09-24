<template>
  <div>
    <div class="mt-4" style="text-align: center">
      <div>
        <div>
          {{ testList[0].name }}
        </div>
        <div>
          {{ testList[0].cnt }}
        </div>
      </div>
      <div>
        <div>
          {{ testList[1].name }}
        </div>
        <div>
          {{ testList[1].cnt }}
        </div>
      </div>
    </div>
    <div>
      <div>
        {{ testList[11].name }}
      </div>
      <div>
        {{ testList[11].cnt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vforTest",
  data() {
    return {
      testList: [
        {
          name: "aaa",
          cnt: "1",
        },
        {
          name: "bbb",
          cnt: "2",
        },
        {
          name: "ccc",
          cnt: "3",
        },
        {
          name: "ddd",
          cnt: "4",
        },
        {
          name: "eee",
          cnt: "5",
        },
        {
          name: "fff",
          cnt: "6",
        },
        {
          name: "ggg",
          cnt: "7",
        },
        {
          name: "hhh",
          cnt: "8",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

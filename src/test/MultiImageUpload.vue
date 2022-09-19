<template>
  <div class="container mx-auto text-sm">
    <div class="grid grid-cols-4 gap-2">
      <div v-for="num in 4" :key="num" class="flex justify-center text-center">
        <div class="w-32 h-32 mb-4 border-2 border-dotted border-blue-500">
          <div
            v-if="images[num]"
            class="w-full h-full flex items-center justify-center"
            @mouseenter="showImageMenu(num, true)"
            @mouseleave="showImageMenu(num, false)"
          >
            <img :src="images[num]" :alt="`image${num}`" />
            <div v-if="show[num]" class="absolute">
              <div
                class="h-8 w-8 flex justify-center items-center rounded-full bg-blue-500"
                @click="removeImage(num)"
              >
                <svg
                  class="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            v-else
            class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
            @click="clickInputTag(num)"
            @drop.prevent="dropInputTag(num, $event)"
            @dragover.prevent
          >
            <input
              :ref="`image${num}`"
              type="file"
              name="image"
              accept="image/*"
              multiple="multiple"
              class="hidden"
              @change="uploadImage(num)"
            />
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>Image {{ num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    images: [],
    show: [],
  }),
  methods: {
    removeImage: function (num) {
      this.images.splice(num, 1, null);
    },
    showImageMenu: function (num, bool) {
      this.$set(this.show, num, bool);
    },
    uploadImage: function (num, file) {
      let images =
        file || Array.from(this.$refs[`image${num}`][0].files, (v) => v);

      for (let i = 0; i < images.length; i++) {
        let form = new FormData();
        let image = images[i];

        form.append("image", image);

        if (num + i < 5) {
          axios
            .post("/upload", form, {
              header: { "Content-Type": "multipart/form-data" },
            })
            .then(({ data }) => {
              this.$set(this.images, num + i, data);
            })
            .catch((err) => console.log(err));
        }
      }
    },
    dropInputTag: function (num, event) {
      let file = Array.from(event.dataTransfer.files, (v) => v);
      this.uploadImage(num, file);
    },
    clickInputTag: function (num) {
      this.$refs[`image${num}`][0].click();
    },
  },
};
</script>

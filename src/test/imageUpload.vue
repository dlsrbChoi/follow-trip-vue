<template>
  <div>
    <button @click="submit">send</button><br /><br />
    <div class="custom-file">
      <input id="customFile" type="file" @change="handleFileChange" />
      <label class="custom-file-label" for="customFile">{{ file_name }}</label>
    </div>
    <img v-if="img_src" :src="img_src" width="128" height="128" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      file_name: "파일을 선택하세요.",
      message: "Hello, world",
      file: "",
      img_src: "",
    };
  },
  methods: {
    submit() {
      debugger;
      let data = new FormData();
      data.append("file", this.file);
      fetch("/echo/json/", {
        method: "POST",
        body: data,
      });
    },
    handleFileChange(e) {
      let file = e.target.files[0];
      let name = file.name;
      this.file_name = file.name;
      this.file = file;
      if (
        name.endsWith(".jpg") ||
        name.endsWith(".jpeg") ||
        name.endsWith(".png") ||
        name.endsWith(".gif")
      )
        this.img_src = URL.createObjectURL(file);
      else this.img_src = "";
    },
  },
};
</script>

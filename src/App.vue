<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
export default {
  components: { AppHeader },
};
</script>
<style>
@import "./css/common.css";
</style>

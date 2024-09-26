<script setup>
import { ref, watch, onMounted } from "vue";
const widgetConfig = ref(null);
const httpSuccessHandle = (res) => {};
const httpErrorHandle = (err) => {};
const httpBeforeSendHandle = () => {
  return {};
};
const baseUrl = "/api";
const headers = {
  token: ``,
};
const componentEvent = (params) => {
  console.log(params);
};
</script>

<template>
  <div class="h-screen">
    <designer
      ref="des"
      :widgetConfig="widgetConfig"
      :httpSuccessHandle="httpSuccessHandle"
      :httpErrorHandle="httpErrorHandle"
      :httpBeforeSendHandle="httpBeforeSendHandle"
      :baseUrl="baseUrl"
      :headers="headers"
      @componentEvent="componentEvent"
    >
      <div>我是弹窗插槽内容</div>
    </designer>
  </div>
</template>

<style scoped></style>

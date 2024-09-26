<script setup>
import { ref, watch, onMounted } from "vue";
import XEUtils from "xe-utils";

let obj = localStorage.getItem("widgetConfig");
const isDevelopment = import.meta.env.DEV;
const widgetConfig = ref(null);
const httpSuccessHandle = (res) => {};
const httpErrorHandle = (err) => {};
const httpBeforeSendHandle = () => {
  return {
    kkk: 333,
  };
};
const des = ref(null);
let pathObj = XEUtils.parseUrl(location.href);
// const baseUrl = "/lowcodeApi/api";
const baseUrl = "/api";
const headers = {
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzdW55IiwidXNlck5hbWUiOiJjN2EzMzMyN2FmNDNlZjg2MWNhNmQ2Y2U4NTZiMzU1NSIsInB1YmxpY0tleSI6IlN5c3RlbSIsImFwcElkIjoiU3lzdGVtIiwibGFuZ3VhZ2UiOiJ6aC1DTiIsImRiaWQiOiJzdW55IiwibmJmIjoxNzI3MTY0NzgyLCJleHAiOjE4MTM1NjQ3ODIsImlzcyI6Ind3dy5jc2ZyYW1ld29yay5jb20iLCJhdWQiOiJXZWJBcGkoTkVUQ29yZSkifQ.40PSNo3j8j_r4WH2e2JvlCeTPTCCWWTLQXjbs1nRV0c`,
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

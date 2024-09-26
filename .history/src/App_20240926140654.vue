<script setup>
import { ref, watch, onMounted } from "vue";
import widgetConfigPanelData from "./widgetConfig";
import XEUtils from "xe-utils";
import Http from "./http";

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
let curdConfig = null;
if (false) {
  curdConfig = {
    tableName: "tb_dict",
    config: [
      {
        tableName: "tb_dict",
        fieldName: "value",
        comment: "编号",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: true,
        isRequired: true,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_725",
      },
      {
        tableName: "tb_dict",
        fieldName: "label",
        comment: "名称",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: true,
        isRequired: true,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_726",
      },
      {
        tableName: "tb_dict",
        fieldName: "remark",
        comment: "备注",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: true,
        isRequired: false,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "like",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_727",
      },
      {
        tableName: "tb_dict",
        fieldName: "sort",
        comment: "排序",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: false,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "INT",
        _X_ROW_KEY: "row_728",
      },
      {
        tableName: "tb_dict",
        fieldName: "enName",
        comment: "英文名",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: false,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_729",
      },
      {
        tableName: "tb_dict",
        fieldName: "customValue",
        comment: "自定义值",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: false,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_730",
      },
      {
        tableName: "tb_dict",
        fieldName: "dataType",
        comment: "数据类型",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: false,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "VARCHAR(50)",
        _X_ROW_KEY: "row_731",
      },
      {
        tableName: "tb_dict",
        fieldName: "id",
        comment: "唯一主键",
        isCreate: false,
        isUpdate: false,
        isTable: false,
        isQuery: false,
        isRequired: false,
        isPrimary: true,
        controlType: "input",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "CHAR(36)",
        _X_ROW_KEY: "row_732",
      },
      {
        tableName: "tb_dict",
        fieldName: "dictTypeId",
        comment: "类型id",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: true,
        isPrimary: false,
        controlType: "input",
        dict: null,
        dataSource: "tb_dict_type",
        matchType: "eq",
        validator: null,
        type: "CHAR(36)",
        _X_ROW_KEY: "row_733",
        dataSourceShowField: "name",
        dataSourceRealField: "id",
      },
      {
        tableName: "tb_dict",
        fieldName: "createdAt",
        comment: "录入时间",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: true,
        isPrimary: false,
        controlType: "date",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "DATETIME",
        _X_ROW_KEY: "row_734",
      },
      {
        tableName: "tb_dict",
        fieldName: "updatedAt",
        comment: "更新时间",
        isCreate: true,
        isUpdate: true,
        isTable: true,
        isQuery: false,
        isRequired: true,
        isPrimary: false,
        controlType: "date",
        dict: null,
        dataSource: null,
        matchType: "eq",
        validator: null,
        type: "DATETIME",
        _X_ROW_KEY: "row_735",
      },
    ],
    associations: [
      {
        type: "BelongsTo",
        fieldName: "dictTypeId",
        tableName: "tb_dict_type",
        showInTable: true,
        showInDetail: true,
      },
    ],
  };
}
// const baseUrl = "/lowcodeApi/api";
const baseUrl = "/api";
const headers = {
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzdW55IiwidXNlck5hbWUiOiJjN2EzMzMyN2FmNDNlZjg2MWNhNmQ2Y2U4NTZiMzU1NSIsInB1YmxpY0tleSI6IlN5c3RlbSIsImFwcElkIjoiU3lzdGVtIiwibGFuZ3VhZ2UiOiJ6aC1DTiIsImRiaWQiOiJzdW55IiwibmJmIjoxNzI3MTY0NzgyLCJleHAiOjE4MTM1NjQ3ODIsImlzcyI6Ind3dy5jc2ZyYW1ld29yay5jb20iLCJhdWQiOiJXZWJBcGkoTkVUQ29yZSkifQ.40PSNo3j8j_r4WH2e2JvlCeTPTCCWWTLQXjbs1nRV0c`,
};
if (obj) {
  widgetConfig.value = JSON.parse(obj);
} else {
  widgetConfig.value = widgetConfigPanelData.homepage;
}
const componentEvent = (params) => {
  console.log(params);
};
let $http = new Http({
  baseUrl: "",
});
if (pathObj?.searchQuery?.demo) {
  $http
    .get(
      "http://cdn.sunform.tech/lowcodeJSON/" +
        pathObj.searchQuery.demo +
        ".json"
    )
    .then((res) => {
      widgetConfig.value = res;
    });
}
watch(
  () => widgetConfig.value,
  (val) => {
    localStorage.setItem("widgetConfig", JSON.stringify(val));
  },
  {
    deep: true,
    immediate: true,
  }
);
const something = ref(null);
</script>

<template>
  <div class="h-screen">
    <designer
      ref="des"
      :curdConfig="curdConfig"
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

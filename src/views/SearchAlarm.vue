<template>
    <ReturnIndex />
    <dv-border-box-1>
      <div class="box1 layout-padding" >
          <div>
            <el-form
              :inline="true"
              ref="SearchRef"
              :model="state.tableData.param.query"
              size="default"
            >
              <el-row>
                <el-form-item label="" size="default" prop="channel">
                <el-select
                  v-model="state.tableData.param.query.channel"
                  placeholder="请选择通道"
                  clearable
                  style="width: 180px"
                >
                  <el-option label="通道一" value="通道一" />
                  <el-option label="通道二" value="通道二" />
                </el-select>
              </el-form-item>
              <el-form-item label="" size="default" prop="alert">
                <el-select
                  style="width: 180px"
                  v-model="state.tableData.param.query.alert"
                  placeholder="请选择告警类型"
                  clearable
                >
                  <el-option label="人数统计" value="人数统计" />
                  <el-option label="车辆统计" value="车辆统计" />
                </el-select>
              </el-form-item>
             
                <el-form-item label="" prop="startTime">
                <el-date-picker
                v-model="state.tableData.param.query.startTime"
                    type="datetime"
                    placeholder="请选择开始时间"
                />
                </el-form-item>
                <el-form-item label="" prop="finishTime" style="width: 150px;">
                <el-date-picker
                v-model="state.tableData.param.query.finishTime"
                    type="datetime"
                    placeholder="请选择结束时间"
                />
                </el-form-item>
                <el-button
                  size="default"
                  type="primary"
                  @click="updateQuery"
                >
                  <el-icon><Search /></el-icon>查询记录
                </el-button>
                <el-button size="default" type="danger" @click="resetQuery">
                  <el-icon><Delete /></el-icon>删除记录
                </el-button>
                <el-button size="default" >
                  <el-icon><Upload/></el-icon>导出记录
                </el-button>
              </el-row>
            </el-form>
          </div>
          <div class="box">
        <div class="carousel">
    <div class="carousel-images">
      <template v-for="item in data" :key="item">
        <div class="content">
          <div class="view">
            <img :src="item.img" alt="" style="width: 237px;height: 110px;"/></div>
          <div class="text">
            <div class="font1">{{ item.text }}</div>
            <div class="font2">{{ (item.time) }}</div>
          </div>
        </div>
      </template>
    </div>
   
  </div>
      </div>
          <el-pagination
            @size-change="onHandleSizeChange"
            @current-change="onHandleCurrentChange"
            :pager-count="5"
            :page-sizes="[7,6,5]"
            v-model:current-page="state.tableData.param.page.current"
            v-model:page-size="state.tableData.param.page.size"
            layout="total,  prev, pager, next, jumper"
            :total="state.tableData.total"
            style="background-color: transparent;margin-left: 450px;"
          >
          </el-pagination>
        
        <EnterpriseDialog
          ref="enterpriseDialogRef"
          @refresh="getTableData()"
        />
      </div>
    </dv-border-box-1>
  </template>
  
  <script setup  name="enterpriseInfo">
  import {
    reactive,
    ref,
    nextTick,
  } from "vue";
  import { Search, Delete,Upload } from "@element-plus/icons-vue";
  
  // 定义变量内容
  const enterpriseDialogRef = ref();
  const enterpriseSearchRef = ref();
  const state = reactive({
    tableData: {
      records: [],
      total: 0,
      loading: false,
      param: {
        page: {
          current: 1,
          size: 7,
        },
        query: {
          channel: "",
          alert: "",
          startTime: "",
          finishTime:"",
        },
      },
    },
  });
  

  const updateQuery = () => {
    console.log('查询条件:', state.tableData.records);// 调用获取数据的方法
  };
 

  // 重置搜索框
  const resetQuery = () => {
    nextTick(() => {
      enterpriseSearchRef.value.resetFields(); // 重置表单
      // 重置查询条件
    });
  };
  
  // 分页改变
  const onHandleSizeChange = (val) => {
    state.tableData.param.page.size = val;
  };
  // 分页改变
  const onHandleCurrentChange = (val) => {
    state.tableData.param.page.current = val;
  };
  let data = [
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
  {
    view: "",
    text: "人数统计",
    time: "2024-06-21 12:00:00",
  },
];
  </script>
  
  <style scoped >
  .box1 {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
      .el-table {
        flex: 1;
      }
    }
    margin-top: 30px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  ::v-deep .el-button--primary.is-link, .el-button--primary.is-plain, .el-button--primary.is-text {
      --el-button-text-color: var(--el-color-primary);
      --el-button-bg-color: var(--el-color-primary-light-9);
      --el-button-border-color: var(--el-color-primary-light-5);
      --el-button-hover-text-color: var(--el-color-white);
      --el-button-hover-bg-color: var(--el-color-primary);
      --el-button-hover-border-color: var(--el-color-primary);
      --el-button-active-text-color: var(--el-color-white);
   
      margin-left: 12px;
  }
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
  }

  
  .dv-border-box-1 {
    position: relative;
    margin-top: 20px;
    height: 910px;
    background-color: rgba(32, 45, 73, 1);
  }
  
  .el-table {
      --el-table-row-hover-bg-color: rgb(27, 34, 54);
      background-color: rgba(32, 56, 92, 1);
  }
  .el-pagination  {
    margin-top: 13px;
  }
  .el-row {
    display: flex;
    justify-content: space-around;
  }
  .example-showcase .el-loading-mask {
    z-index: 9;
  }
  .el-select__placeholder {
      color: #0f2e48;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
  }
.content {
  width: 299px;
  text-align: center;
}

.box {
  display: flex;
  flex-wrap: nowrap;
}
  .carousel {
  overflow: hidden;
}

.carousel-images {
  display: flex;
  flex-wrap: wrap;
}
.el-form-item {
  width: 150px;
}

  </style>

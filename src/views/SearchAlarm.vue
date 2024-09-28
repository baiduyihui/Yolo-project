<template>
  <dv-border-box-1>
    <div class="box1" >
      <div>
        <el-form
          :inline="true"
          ref="SearchRef"
          :model="state.tableData.param"
          size="default"
          >
            <el-row>
              <el-form-item label="" size="default" prop="channel">
                <el-select
                  v-model="state.tableData.param.channel"
                  placeholder="请选择通道"
                  style="width: 180px"
                >
                  <el-option label="通道一" value="1" />
                  <el-option label="通道二" value="2" />
                </el-select>
              </el-form-item>
              <el-form-item label="" size="default" prop="alarm_type">
                <el-select
                  style="width: 180px"
                  v-model="state.tableData.param.alarm_type"
                  placeholder="请选择告警类型"
                  clearable
                >
                  <el-option label="人数统计" value="people" />
                  <el-option label="车辆统计" value="car" />
                </el-select>
              </el-form-item>
              <el-form-item label="" prop="start_time">
                
        
      <el-date-picker
        v-model="state.tableData.param.start_time"
        type="datetime"
        placeholder="请选择开始时间"
        value-format="YYYY-MM-DD hh:mm:ss"

      />
              </el-form-item>
              <el-form-item label="" prop="end_time" style="width: 150px;">
      
      <el-date-picker
        v-model="state.tableData.param.end_time"
        type="datetime"
        placeholder="请选择结束时间"
        value-format="YYYY-MM-DD hh:mm:ss"

      />
                </el-form-item>
                <el-button size="default" type="primary" @click="getTable">
                  <el-icon ><Search /></el-icon>查询记录
                </el-button>
                <el-button size="default" type="danger" @click="deleteState">
                  <el-icon><Delete /></el-icon>删除记录
                </el-button>
                <el-button size="default" @click="downloadFile">
                  <el-icon><Upload/></el-icon>导出记录
                </el-button>
              </el-row>
            </el-form>
          </div>
          <div class="box">
            <div class="carousel">
              <div class="carousel-images">
                <template v-for="item in state.tableData.records" :key="item">
                  <div class="content">
                    <div class="view">
                      <img :src="item.url" alt="" style="width: 237px;height: 110px;"/>
                    </div>
                    <div class="text">
                      <div class="font1">{{ item.type}}</div>
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
            :total="state.tableData.length"
            style="background-color: transparent;margin-left: 450px;"
          >
          </el-pagination>
      </div>
    </dv-border-box-1>
  </template>
  
<script setup  name="enterpriseInfo">
import {reactive} from "vue";
import { Search, Delete,Upload } from "@element-plus/icons-vue";
import {searchAlarmApi} from '../api/search'
import { ElMessage,ElMessageBox  } from "element-plus";

  const searchAlarm=searchAlarmApi()
  // 定义变量内容
  const state = reactive({
    tableData: {
      records: [],
      length: 0,
      loading: false,
      current:1,
      size:10,
      param: {
        page: {
        current: 1,
        size: 10,
      },
        channel: "1",
        alarm_type: "",
        start_time: "",
        end_time:"",
      },
      query :{
        channel: "",
        alarm_type: "",
        start_time: "",
        end_time:"",
      }
    },
  });
  
//获取数据
const getTableData = async () => {
  try {
    const response = await searchAlarm.getState(state.tableData.param);
    console.log(response);
    state.tableData.records = response.photos; 
    state.tableData.length = response.photos.length; 
  } catch (error) {
    console.error('Error in searchAlarm.getState:', error);
  }
};
//调用
getTableData();
const getTable=()=> {
  console.log(state.tableData.param);
  getTableData()
}


// 删除数据
const deleteState = async () => {
  try {
    // 等待用户响应确认对话框
    const confirm = await ElMessageBox.confirm("此操作将永久删除数据，是否继续?", "提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    });

    // 检查用户是否点击了确认
    if (confirm) {
      // 用户点击了确认，执行删除操作
      const response = await searchAlarm.deleteState(state.tableData.param);
      console.log(response);
      ElMessage.success("删除成功！");
      getTableData();
    } else {
      // 用户点击了取消
      ElMessage.info("删除操作已取消");
    }
  } catch (error) {
    // 处理错误情况
    console.error("删除失败:", error);
    ElMessage.error("删除失败: " + error.message);
  }
};

//导入数据
const downloadFile = async () => {
  try {
    const response = await searchAlarm.downLoadState(state.tableData.param);
    // 创建一个 URL 对象
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.download_path]));
    console.log(response.
    download_path)
    // 创建一个链接元素
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '文件名'); // 设置下载的文件名
    // 触发下载
    document.body.appendChild(link);
    link.click();
    // 清理
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('下载文件失败:', error);
  }
};

  // 分页改变
  const onHandleSizeChange = (val) => {
    state.tableData.param.page = val;
  };
  // 分页改变
  const onHandleCurrentChange = (val) => {
    state.tableData.param.page = val;
  };

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
  margin-bottom: 20px;
}

.box {
  display: flex;
  flex-wrap: nowrap;
}
.carousel {
  overflow: hidden;
  margin-bottom: 20px;
}

.carousel-images {
  display: flex;
  flex-wrap: wrap;
}
.el-form-item {
  width: 150px;
}

  </style>

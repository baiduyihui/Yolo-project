<template>
    <div class="top">
        <el-select v-model="channel" style="width: 240px">
            <el-option v-for="item in channeloptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select v-model="alarmtype" placeholder="请选择告警类型" style="width: 240px">
            <el-option v-for="item in alarmoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-date-picker v-model="time" size="default" type="datetimerange" start-placeholder="Start date"
            end-placeholder="End date" format="YYYY-MM-DD HH:mm:ss" date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss" @change="getTime" />
        <el-button type="primary" :icon="Search" @click="searchrecord">查询记录</el-button>
        <el-button type="danger" :icon="Delete" @click="deleterecord">删除记录</el-button>
        <el-button @click="uploadrecord">
            导出记录<el-icon class="el-icon--right">
                <Upload />
            </el-icon>
        </el-button>
    </div>
    <div class="showlist">
        <div class="box">
            <img src="https://img1.baidu.com/it/u=1653751609,236581088&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1727370000&t=2cbb8659184b9645359347478cc43622"
                alt="">
            <div>人数统计</div>
            <div>时间</div>
        </div>
    </div>
    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage" :size="size" :disabled="disabled" :background="background"
            layout="prev, pager, next, jumper" :total="50" @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { Delete, Search,Upload } from '@element-plus/icons-vue'
const channel = ref('通道一')
const alarmtype = ref('')
const time = ref('')
const currentPage = ref(5)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)
const channeloptions = [
    {
        value: '通道一',
        label: '通道一',
    },
    {
        value: '通道二',
        label: '通道二',
    }
]
const alarmoptions = [
    {
        value: '人数统计',
        label: '人数统计',
    },
    {
        value: '车辆统计',
        label: '车辆统计',
    }
]
//分页方法
const handleCurrentChange = (val) => {
    console.log(val)
}
//获取时间并处理
const getTime = (value) =>{
    const now = new Date(value['0'])  //获取起始日期对象
    console.log(now.getFullYear()); // 获取年份
    console.log(now.getMonth()); // 获取月份（0 表示一月，11 表示十二月）
    console.log(now.getDate()); // 获取日
    console.log(now.getHours()); // 获取小时
    console.log(now.getMinutes()); // 获取分钟
    console.log(now.getSeconds()); // 获取秒
}
//查询方法
const searchrecord = () =>{

}
//删除方法
const deleterecord = () =>{

}
//导出
const uploadrecord = () =>{

}
</script>

<style scoped>
.top{
    display: flex;
    justify-content: space-between;
}
.top .el-select{
    margin-right: 20px;
}

.top .el-button{
    margin-left: 15px;
}

.showlist{
    margin: 10px 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.showlist .box{
    width: 300px;
    height: 240px;
    margin-top: 30px;
    border: 1px solid #dedfe0;
}

.showlist .box img {
    margin: 5px;
    width: 288px;
    height: 160px;
}

.showlist div{
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    text-align: center;
}

.demo-pagination-block{
    padding-left: 30%;
}
</style>
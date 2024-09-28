<template>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" :selectable="selectable" width="55" />
        <el-table-column label="序号" width="100" align="center">
            <template #default="scope">{{ scope.row.pk }}</template>
        </el-table-column>
        <el-table-column prop="channel_status" label="通道状态" width="100" align="center">
            <template #default="scope">
                <el-tag :type="scope.row.channel_status === '离线' ? 'primary' : 'success'" disable-transitions>{{
                    scope.row.channel_status }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column property="address" label="*RTSP地址" width="280" align="center">
            <template #default="scope">
                <el-input v-model="scope.row.address" style="width: 240px" placeholder="Please input" />
            </template>
        </el-table-column>
        <el-table-column property="channel_name" label="*通道名称" width="280" align="center">
            <template #default="scope">
                <el-input v-model="scope.row.channel_name" style="width: 240px" placeholder="Please input" />
            </template>
        </el-table-column>
        <el-table-column label="算法配置" width="120" align="center">
            <template #default="scope">
                <el-icon :size="25" @click="setting(scope.row,scope.$index)" color="#409EFF">
                    <Setting />
                </el-icon>
            </template>
        </el-table-column>
        <el-table-column property="week" label="周界" width="120" align="center" />
        <el-table-column property="change_time" label="修改时间"  align="center" :show-overflow-tooltip="true" />
    </el-table>
    <el-button class="btn" type="primary" :disabled="tableData.length===0" @click="reopenChannelList">重启通道</el-button>
    <el-button class="btn" :disabled="tableData.length === 0" @click="changechannel">重置配置</el-button>
    <ChannelDia v-model="centerDialogVisible" :tableData2="tableData2" @setmath="changemath"></ChannelDia>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { getChannelListAPI, setChannelListAPI,reopenChannelListAPI } from '../api/channel'
import { ElMessage } from 'element-plus'
import ChannelDia from "../components/channelDia.vue";
const multipleTableRef = ref()
const multipleSelection = ref([])
const selectable = (row) => !['离线'].includes(row.channel_status)
//重置弹框
const centerDialogVisible = ref(false)
//表格数据
const tableData = reactive([])
const tableData2 = reactive([{
    status: false,
    sensitive: 0,
    frequency: '',
},{
    status: false,
    sensitive: 0,
    frequency: '',
}])
const index = ref(0)
const getChannelList = async () =>{
   try {
       const res = await getChannelListAPI()
       if(tableData.length !== 0){
           tableData.splice(0, tableData.length)
       }
       res.data.forEach((item) => {
           tableData.push({ ...item ,...item.fields})
       })
   } catch (error) {
       console.log(error)
   }
}
const setChannelmath = async(data,num) =>{
    await setChannelListAPI({
        "channel_no": tableData[num].pk,
        "address": tableData[num].address,
        "channel_name": tableData[num].channel_name,
        "person_status": data[0].status,
        "person_sensitive": data[0].sensitive,
        "person_frequency": data[0].frequency,
        "car_status": data[1].status,
        "car_sensitive": data[1].sensitive,
        "car_frequency": data[1].frequency,
    })
}
onMounted(() => {
    getChannelList()
})
const handleSelectionChange = async (val) => {
    multipleSelection.value = val
}
const set = (row) => {
    tableData2[0].status = row.person_status === 'True' ? true : false;
    tableData2[0].sensitive = row.person_sensitive;
    tableData2[0].frequency = row.person_frequency;
    tableData2[1].status = row.car_status === 'True' ? true : false;
    tableData2[1].sensitive = row.car_sensitive;
    tableData2[1].frequency = row.car_frequency;
}
const setting = async(row,ind) =>{
    await set(row)
    index.value = ind
    centerDialogVisible.value = true
}

//重置通道
const changechannel = () =>{
    multipleSelection.value.forEach(async (item)=>{
        try {
            await setChannelListAPI({
                "channel_no": item.pk,
                "address": item.address,
                "channel_name": item.channel_name,
                "person_status": item.person_status,
                "person_sensitive": item.person_sensitive,
                "person_frequency": item.person_frequency,
                "car_status": item.car_status,
                "car_sensitive": item.car_sensitive,
                "car_frequency": item.car_frequency,
            })
            ElMessage({
                showClose: true,
                message: '通道配置成功',
                type: 'success',
            })
        } catch (error) {
            console.log(error)
            ElMessage({
                showClose: true,
                message: '通道配置失败',
                type: 'error',
            })
        }
    })
    getChannelList()
}

//重启通道
const reopenChannelList = () =>{
    try {
        console.log(multipleSelection.value)
        multipleSelection.value.forEach(async (item)=>{
            await reopenChannelListAPI({
                "channel_no": item.pk,
                "reopen": "1"
            })
        })
        getChannelList()
        ElMessage({
            showClose: true,
            message: '通道重启成功',
            type: 'success',
        })
    } catch (error) {
        console.log(error)
        ElMessage({
            showClose: true,
            message: '通道重启失败',
            type: 'error',
        })
    }
}

//算法配置
const changemath = async({data,ifall}) => {
    try {
        if(ifall){
            tableData.forEach((item)=>{
                setChannelmath(data,tableData.indexOf(item))
            })
        }else{
            setChannelmath(data,index.value)
        }
        getChannelList()
        centerDialogVisible.value = false
        ElMessage({
            showClose: true,
            message: '算法配置成功',
            type: 'success',
        })
    } catch (error) {
        console.log(error)
        ElMessage({
            showClose: true,
            message: '算法配置失败',
            type: 'error',
        })
    }
}
</script>

<style scoped>
.el-icon:hover{
    cursor: pointer;
}

.outline{
   color: red;
}

.btn{
   margin-top: 20px;
}

.slider-demo-block {
    max-width: 600px;
    display: flex;
    align-items: center;
}

.slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
}

</style>
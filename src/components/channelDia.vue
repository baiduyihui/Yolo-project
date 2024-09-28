<template>
    <el-dialog title="算法配置" width="800">
        <el-table :lazy="true" :data="tableData2" border style="width:680px; margin-left: 40px;">
            <el-table-column prop="date" label="算法名称" width="120" align="center">
                <template #default="scope">
                    <div v-if="scope.$index">
                        <CarOutlined style="font-size: 50px; color: #409EFF;" />
                        <div>车辆统计</div>
                    </div>
                    <div v-else>
                        <TeamOutlined style="font-size: 50px; color: #409EFF;" />
                        <div>人数统计</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="开关状态" width="120" align="center">
                <template #default="scope">
                    <el-switch v-model="scope.row.status" />
                </template>
            </el-table-column>
            <el-table-column prop="sensitive" label="灵敏度" width="320" align="center">
                <template #default="scope">
                    <div class="slider-demo-block">
                        <el-slider v-model="scope.row.sensitive" show-input />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="frequency" label="上报频率" align="center" width="120">
                <template #default="scope">
                    <el-input v-model="scope.row.frequency" style="max-width: 50px">
                    </el-input>
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <div class="dialog-footer">
                <div>
                    <el-checkbox v-model="ifall" name="type" style="margin-right: 5px;"></el-checkbox>同步到所有通道
                </div>
                <div>
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="sendDataToParent">
                        确定
                    </el-button>
                </div>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { TeamOutlined, CarOutlined } from '@ant-design/icons-vue'
import { ref, onMounted } from 'vue'
import { defineProps, defineEmits } from 'vue'
const ifall = ref(false)
const tableData = ref([])
const props = defineProps({
    tableData2: {
        type: String,
        required: true
    }
})
onMounted(()=>{
  tableData.value = props.tableData2
})
const emits = defineEmits(['setmath']);

const sendDataToParent = () => {
    emits('setmath', {
        data:tableData.value,
        ifall:ifall.value
    });
};
</script>

<style scoped>
.dialog-footer {
    display: flex;
    justify-content: space-between;
}
</style>
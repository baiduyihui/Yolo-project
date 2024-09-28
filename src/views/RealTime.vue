<template>
  <div class="container">
    <video :src="videoSrc" controls></video>

    <el-table ref="tableRef" row-key="pk" :data="tableData">
      <!-- <el-table-column prop="pk" label="序号" width="100" /> -->
      <el-table-column prop="model" label="摄像头名称" width="180" />
      <el-table-column prop="fields.channel_status" label="通道状态" width="100">
        <template #default="scope">
          <el-tag :type="scope.row.fields.channel_status === '在线' ? 'success' : 'primary'" disable-transitions>{{
            scope.row.fields.channel_status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="fields" label="详细信息" width="180px">
        <template #default="scope">
          <div class="box">
            <el-tooltip class="box-item" effect="light" @click="getChannelInfo(scope.row)" placement="top-start"
              :content="JSON.stringify(scope.row)">
              <el-icon color="#3590EF">
                <WarnTriangleFilled />
              </el-icon>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <img v-for="(url,index) in picturesSrc" :key="index" :src="url">

  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ElTable, ElTableColumn, ElTag } from 'element-plus'
import { WarnTriangleFilled } from '@element-plus/icons-vue'
import { getChannelInfoAPI } from '@/api/channelInfo';
import { getVideoAPI } from '@/api/video';
import { getPicturesAPI } from '@/api/pictures';
const getChannelInfo = async () => {
  const res = await getChannelInfoAPI() 
//  if(res){
//   res.data.forEach(channel => {
//     const {fields}=channel;
//     console.log(fields)

//   });
//  }
if (res && res.data) {
  tableData.value = res.data.map(item => ({ ...item, fields: { ...item.fields } }));

}}

onMounted(() => {
  getChannelInfo()
  getVideo()
  getPictures()
})

const picturesSrc=ref('')
const getPictures = async () => {
  const res = await getPicturesAPI()
  if(res&&res.data&&res.data.length>0){
    picturesSrc.value=res.data.map((item)=> item.url)
  }
  
  // console.log(res)

}

const tableRef = ref(null)
const tableData = ref([{
  "model": "",
  "pk": '',
  "channel_status": "",
  "address": "",
  "channel_name": "",
  "person_status": "",
  "person_sensitive": '',
  "person_frequency": '',
  "car_status": "",
  "car_sensitive": '',
  "car_frequency": '',
  "week": "",
  "change_time": ""
}
])
const videoSrc = ref('')

const getVideo = async () => {
  const res = await getVideoAPI()
  // console.log(res)
  if (res.code == 200) {
    videoSrc.value = res.video_url
  }

}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
}

video {
  max-width: 50%;
}

el-table {
  margin-left: 20px;
  /* Adjust the space between the video and the table */
}
</style>
<template>
    <a-layout style="height: 100%;">
        <a-layout-header class="header">
            <div class="title">Yolo算法盒子</div>
            <div class="user">
                <el-icon :size="25" color="#fff" @click="logout">
                    <SwitchButton />
                </el-icon>
                <span>admin</span>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" 
                    :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                告警中心
                            </span>
                        </template>
                        <a-menu-item key="realtime" @click="changeroute('realtime')">实时告警
                        </a-menu-item>
                        <a-menu-item key="search" @click="changeroute('search')">告警查询
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                通道配置
                            </span>
                        </template>
                        <a-menu-item key="channel" @click="changeroute('channel')">通道管理
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>待定</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
// <<<<<<< Updated upstream
// =======
// import SvgIcon2 from '../../../components/icons/email.svg'
// >>>>>>> Stashed changes
import { UserOutlined, LaptopOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getLooutAPI } from '../api/user'
import usestore from '../store/index.js'
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined
    },
    setup() {
        const router = useRouter()
        const store = usestore()
        const selectedKeys2 = ref([store.router])
        console.log(store.router)
        const openKeys = ref(['sub1'])
        const logout = async () => {
            try {
                await getLooutAPI()
                router.push('/login')
                localStorage.removeItem('key')
                localStorage.removeItem('session_id')
                store.router = 'realtime'
            } catch (error) {
                console.log(error)
            }
        }
        const changeroute = (key) =>{
            router.push(`/home/${key}`)
            store.router = key
            selectedKeys2.value[0] = key
        }
        return {
            selectedKeys2,
            openKeys,
            router,
            store,
            logout,
            changeroute
        };
    },
});
</script>
<style>
html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
}

#app {
    height: 100%;
}
#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
.header{
    display: flex;
    justify-content: space-between;
}
.title{
    color: #fff;
    font-size: 23px;
}
.user{
    width: 110px;
    display: flex;
    color: green;
    font-size: 30px;
    line-height: 64px;
}

.user svg{
    margin-top: 45px;
}

.user svg:hover {
   color: #337ecc;
   cursor: pointer;
}

.user span{
    margin-left: 15px;
}
</style> 
<template>
    <a-layout style="height: 100%;">
        <a-layout-header class="header">
            <div class="title">Yolo算法盒子</div>
            <div class="user">
                <svg-icon2 src="../../../components/icons/email.svg" width="20" height="20" class="svg-icon" />
                admin
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys"
                    :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                告警中心
                            </span>
                        </template>
                        <a-menu-item key="1" @click="router.push('/home/realtime')">实时告警
                        </a-menu-item>
                        <a-menu-item key="2" @click="router.push('/home/search')">告警查询
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                通道配置
                            </span>
                        </template>
                        <a-menu-item key="3" @click="router.push('/home/channel')">通道管理
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
// import SvgIcon2 from '../../../components/icons/email.svg'
import { UserOutlined, LaptopOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined
    },
    setup() {
        const router = useRouter()
        return {
            selectedKeys1: ref(['2']),
            selectedKeys2: ref(['1']),
            collapsed: ref(false),
            openKeys: ref(['sub1']),
            router
        };
    },
});
</script>
<style>
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
    color: green;
    font-size: 30px
}
</style>
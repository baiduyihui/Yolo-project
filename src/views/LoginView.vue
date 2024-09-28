<template>
    <router-link to="/home/realtime">登陆</router-link>
    <el-card style="max-width: 480px" class="login-card">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="login-form">
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" clearable placeholder="请输入账号"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" clearable placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item class="button-group">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info">注册</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
// import { useRouter } from 'vue-router';
// const router = useRouter();
// router.push('/');
import {ref,reactive} from 'vue'
// import {getLoginAPI} from '@/api/login';

const ruleForm=ref({
    username:'',
    password:''
})
const rules = reactive({
    username: [{ required:true, message:'请输入用户名', trigger: 'blur' }],
    password: [{ required:true, message:'请输入密码', trigger: 'blur' }],
})

const login =  async()=>{

}

</script>
<style scoped>
.login-card {
  max-width: 400px;
  margin: 250px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  background-color: rgba(255, 255, 255, 0.8)
}

.login-form {
  width: 100%;
}

.button-group {
    margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.el-button {
  width: 20%;
}

.el-input__inner {
  border-radius: 4px;
}

.el-button--primary {
  background-color: #1a84ef;
  border-color: #409EFF;
}

.el-button--info {
  background-color: #67C23A;
  border-color: #67C23A;
}
</style>
<style>
body {
  background-image: url('../assets/background.jpg'); /* 确保路径正确 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
}
</style>
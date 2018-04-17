<template>
  <div class="about_box">
        <el-form :model="loginForm" status-icon :rules="rules1" ref="loginForm" label-width="100px" class="ruleForm" v-show="isLogin">
          <el-form-item label="账号" prop="admin">
            <el-input v-model="loginForm.admin" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input type="password" v-model="loginForm.passWord" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="inoron"  @click="isLogin=!isLogin">我还没有账号</div>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-form :model="logonForm" status-icon :rules="rules2" ref="logonForm" label-width="100px" class="ruleForm" v-show="!isLogin">
          <el-form-item label="账号" prop="admin">
            <el-input v-model="logonForm.admin"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input type="password" v-model="logonForm.passWord" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="logonForm.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="inoron" @click="isLogin=!isLogin">用已有账号登录</div>
            <el-button type="primary" @click="submitForm('logonForm')">注册</el-button>
            <el-button @click="resetForm('logonForm')">重置</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var validateadmin = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
        } else if (value.length < 6) {
          callback(new Error('账号最少为六位'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 6) {
          callback(new Error('密码最少为六位'))
        } else {
          callback();
        }
      };
      var validatePass1 = (rule, value, callback) => {
         if (value === '') {
          callback(new Error('请输入密码'));
        }else if (value.length < 6) {
          callback(new Error('密码最少为六位'))
        } else {
          if (this.logonForm.checkPass !== '') {
            this.$refs.logonForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.logonForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        isLogin: true,
        loginForm: {
          admin: '',
          passWord: ''
        },
        logonForm:{
          admin: '',
          passWord: '',
          checkPass:''

        },
        rules1: {
          admin: [{
            validator: validateadmin,
            trigger: 'blur'
          }],
          passWord: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        },
        rules2: {
          admin: [{
            validator: validateadmin,
            trigger: 'blur'
          }],
          passWord: [{
            validator: validatePass1,
            trigger: 'blur'
          }],
          checkPass:[{
            validator: validatePass2,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .ruleForm{
    margin: 20% auto;
    width:100%;
    max-width: 400px;
  }
  .el-form-item__label{
    text-align: center;
  }
  .inoron{
    font-size: 10px;
    line-height: 30px;
    color:blue;
  }
</style>


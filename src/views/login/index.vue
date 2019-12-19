<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 卡片组件 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 登录表单容器 -->
      <el-form style="margin-top:30px" :model='loginForm'>
        <el-form-item>
          <!-- 放置具体组件 登录手机号 -->
          <el-input placeHolder="请输入手机号"></el-input>
        </el-form-item>
         <el-form-item>
          <!-- 表单域 -->
          <el-input style="width:65%" placeHolder="验证码"></el-input>
          <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- 勾选框 -->
          <el-checkbox >我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- 登录框 -->
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 第一步在data里定义表单数据对象
  data () {
    return {
      moblie: '', // 手机号
      code: '', // 验证码框
      check: false // 勾选框
    },
    loginRules {
      
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url(../../assets/img/login_bg.jpg);
  height: 100vh;
  display: flex;
  justify-content: center;
    align-items: center;
  background-size: contain;
  .login-card{
    width: 440px;
    height: 350px;
  .title{
    text-align: center;
    img{
      height: 44px;
    }
  }
  }
  }

</style>

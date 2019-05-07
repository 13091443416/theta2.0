<template>
  <div style="width:100%;height:100%;">
    <div class="we">欢迎回来!请登录</div>
    <div
      style="colror:#888888;font-size: 16px;margin: 0 auto;width:80%;text-align: left;margin-top: 5px;margin-bottom: 5px;"
    >账号</div>
    <div class="l2">
      <input
        type="text"
        class="username"
        id="username"
        v-model="loginForm.username"
        placeholder="请输入用户名"
      >
    </div>
    <div
      style="colror:#888888;font-size: 16px;margin: 0 auto;width:80%;text-align: left;margin-top: 5px;margin-bottom: 5px;"
    >密码</div>
    <div class="l3">
      <input
        type="password"
        class="password"
        id="password"
        v-model="loginForm.password"
        placeholder="请输入密码"
      >
    </div>
    <div
      style="colror:#888888;font-size: 16px;margin: 0 auto;width:80%;text-align: left;margin-top: 5px;margin-bottom: 5px;"
    >验证码</div>
    <div class="l5">
      <div>
        <input type="text" class="code">
      </div>
      <div class="givcode"></div>
    </div>
    <div class="l6">
      <div>
        <el-checkbox>记住登录</el-checkbox>
      </div>
      <div>
        <button @click="login">登录</button>
      </div>
    </div>
    <div class="contact">如您忘记密码，请联系管理员</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      userToken: ""
    };
  },
  created() {},
  destroyed() {},
  methods: {
    login() {
      let that = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message({
          showClose: true,
          message: '账号或密码不能为空',
          type: 'error'
        })
        return false
      } else {
        // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
        that.$store.dispatch('setToken', that.loginForm.username).then(() => {
          that.$router.push({path: '/'})
        }).catch(res => {
          that.$message({
            showClose: true,
            message: res,
            type: 'error'
          })
        })
      }
    }
  }
};
</script>
<style>
</style>



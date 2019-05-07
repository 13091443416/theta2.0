<template>
    <div style="width:100%;height:100%;">
    <div class="we"></div>
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
    >邀请码</div>
    <div class="l5">
      <input
        type="password"
        class="invitation"
        id="invitation"
        
        placeholder="请输入"
      >
    </div>
    <div class="l6">
     
      <div>
        <button @click="login" style="margin-right: 80px;">注册</button>
      </div>
    </div>
    <div class="contact">如无邀请码，请联系管理员</div>
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
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message("账号或密码不能为空");
      } else {
      }
    }
  }
}
</script>
<style>

</style>



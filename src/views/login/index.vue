<template>
   <div id="login">
    <div class="lconcent">
      <div class="logo">
        <div class="option">
          <router-link to="/login/milogin">
            <div @click="milogin" class="mlo">登录</div>
          </router-link>
          <router-link to="/login/register">
            <div @click="register" class="reg">注册</div>
          </router-link>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'vue-xuadmin',
        password: '123456'
      }
    }
  },
  methods: {
    submitForm () {
      
    },
    message() {
      const h = this.$createElement;
      this.$notify({
        title: '账号密码',
        message: h('i', { style: 'color: teal'}, '账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token'),
        duration: 6000
      });
    },
    milogin() {
     
      var milogin = document.querySelector(".mlo");
      var register = document.querySelector(".reg");
      milogin.style.borderBottom = "4px solid #0c77f8";
      milogin.style.color = "#0c77f8";
      register.style.borderBottom = "none";
      register.style.color = "#aaaaaa";
    },
    register() {
      var milogin = document.querySelector(".mlo");
      var register = document.querySelector(".reg");
      milogin.style.borderBottom = "none";
      milogin.style.color = "#aaaaaa";
      register.style.borderBottom = "4px solid #0c77f8";
      register.style.color = "#0c77f8";
    }
  },
  mounted() {
    this.message()
  }
}
</script>
<style>
#login {
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: red;
  position: relative;
  background-image: url(../../assets/bglogin.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.contact {
  width: 75%;
  height: 40px;
  line-height: 40px;
  margin: 25px auto;
  color: #80b6f6;
  border-top: 1px solid #cccccc;
}
.we {
  height: 15%;
  font-size: 35px;
  text-align: left;
  line-height: 100px;
  width: 80%;
  margin: 0 auto;
}
.option {
  width: 446px;
  height: 75px;
  background-color: #ffffff;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
      border-radius: 5px 5px 0 0;
}
.option div {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  float: left;
  line-height: 75px;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #aaaaaa;
}
.option .mlo {
  border-bottom: 4px solid #0c77f8;
  color: #0c77f8;
}
.lconcent {
  width: 446px;
  height: 519px;
  background-color: #f4f4f4;
  box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   border-radius: 5px;
}
.lconcent .logo {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
   border-radius: 5px;
 
}
.logo .l1 {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.logo .l2,
.l3,
.l5,
.l6 {
  width: 80%;
  height: 7%;

  margin: 0 auto;
}
.l6 {
  font-size: 30px;
  height: 10%;
  color: #fff;
  margin-top: 35px;
}
.l6 div:first-of-type {
  float: left;
}
.l6 div:last-of-type {
  float: right;
}
.l6 div:last-of-type button {
  width: 180px;
  height: 50px;
  background-color: #0c77f8;
  font-size: 16px;
  border: none;
  color: #ffffff;
  margin-right: 20px;
  border-radius: 5px;
}
.l5 div {
  width: 49%;
  height: 100%;
  background-color: blue;
  margin-right: 2%;
  float: left;
}
.code {
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #c6c5c5;
  background-color: #f4f4f4;
}
.l5 div:last-of-type {
  margin-left: 40px;
  width: 35%;
  border-radius: 5px;
  background-color: #bfbfbf;
}
.username,
.password,
.invitation {
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #c6c5c5;
  background-color: #f4f4f4;
}
#identity {
  width: 100%;
  height: 100%;
  border: 1px solid #c6c5c5;
}
</style>

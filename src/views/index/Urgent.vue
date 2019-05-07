<template>
  <div id="specia">
    <div class="page">
      <li v-for="i in jia" @click="cpage">{{i}}</li>
    </div>
    <li class="first-li">
      <em
        style="display:block;position: relative;left:0rem;top:1.4375rem; width: 0.125rem; height: 1.25rem; background-color: #a2a800;"
      ></em>
      <em>需特殊关注</em>
     
      <div class="x" @click="pu"> <i class="el-icon-close"></i></div>
    </li>
    <div style="width:24.375rem;height:31.9375rem;overflow: hidden; position: relative;">
      <div class="roll" :style="{position:'absolute',top:top+'px',transition:'0.5s'}">
        <li v-for="item in peii" class="telist">
          <div class="x"><i class="el-icon-close"></i></div>
          <div class="j"></div>
          <div class="cetiao" style="background-color:blue;"></div>
          <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
            注意：{{item.state}}
            <em
              style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
            >{{item.state}}</em>
          </div>
          <div class="xinxi">
            姓名：{{item.name}}
            <em style="margin-left:2.125rem;">NO:2301</em>
          </div>
          <div class="xinxi">位置：{{item.pos}}</div>
        </li>
      </div>
      <!-- <li class="telist">
      <div class="x"></div>
      <div class="j"></div>
      <div class="cetiao" style="background-color:blue;"></div>
      <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
        注意：心率过高
        <em
          style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
        >心率异常</em>
      </div>
      <div class="xinxi">
        姓名：武大郎
        <em style="margin-left:2.125rem;">NO:2301</em>
      </div>
      <div class="xinxi">位置：110室</div>
    </li>
    <li class="telist">
      <div class="x"></div>
      <div class="j"></div>
      <div class="cetiao" style="background-color:blue;"></div>
      <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
        注意：心率过高
        <em
          style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
        >心率异常</em>
      </div>
      <div class="xinxi">
        姓名：武大郎
        <em style="margin-left:2.125rem;">NO:2301</em>
      </div>
      <div class="xinxi">位置：110室</div>
    </li>
     <li class="telist">
      <div class="x"></div>
      <div class="j"></div>
      <div class="cetiao" style="background-color:blue;"></div>
      <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
        注意：心率过高
        <em
          style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
        >心率异常</em>
      </div>
      <div class="xinxi">
        姓名：武大郎
        <em style="margin-left:2.125rem;">NO:2301</em>
      </div>
      <div class="xinxi">位置：110室</div>
    </li>
     <li class="telist">
      <div class="x"></div>
      <div class="j"></div>
      <div class="cetiao" style="background-color:blue;"></div>
      <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
        注意：心率过高
        <em
          style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
        >心率异常</em>
      </div>
      <div class="xinxi">
        姓名：武大郎
        <em style="margin-left:2.125rem;">NO:2301</em>
      </div>
      <div class="xinxi">位置：110室</div>
    </li>
    <li class="telist">
      <div class="x"></div>
      <div class="j"></div>
      <div class="cetiao" style="background-color:blue;"></div>
      <div class="xinxi" style="font-size:1.125rem;color:#ffffff">
        注意：心率过高
        <em
          style=" border-radius: 0.1875rem;border: 0.0625rem solid #737d8a;padding:0.25rem 1.0625rem; margin-left:0.375rem;"
        >心率异常</em>
      </div>
      <div class="xinxi">
        姓名：武大郎
        <em style="margin-left:2.125rem;">NO:2301</em>
      </div>
      <div class="xinxi">位置：110室</div>
      </li>-->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { constants } from "crypto";
export default {
  data() {
    return {
      pei: {
        people: [
          {
            name: "潘金莲",
            num: "sdf",
            state: "血压",
            pos: "301室",
            id: 1,
            color: "#11111",
            weizhi: "101室"
          },
          { name: "武大郎", num: "23sd01", state: "心率", pos: "301室", id: 2 },
          { name: "武松", num: "2301dsf", state: "脉搏", pos: "301室", id: 3 }
        ]
      },
      top: 0,
      i: 1
    };
  },
  methods: {
    pu() {
      this.$router.push("/index");
      var meng=document.querySelector(".meng")
        console.log(meng)
        meng.style.display="none"
    },
    cpage(ev) {
      for (var i = 0; i < this.jia.length; i++) {
        document.querySelectorAll(".page li")[i].style.backgroundColor =
          "rgb(0, 0, 0)";
        if (ev.target.innerHTML == i) {
          this.top = -i * 524;
        }
      }
      ev.target.style.backgroundColor = "#fff";
    }
  },
  computed: {
    peii() {
      return this.pei.people;
    },
    jia() {
      var cpage = [];
      for (var i = 0; i < Math.ceil(this.pei.people.length / 4); i++) {
        cpage.push(i);
      }
      return cpage;
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.top -= 131;
    // }, 10000);
    // setInterval(() => {
    //   if (this.top <= -131 * 9) {
    //     this.top = 0;
    //   }
    // }, 1000);
    // console.log(this.pei);
  }
};
</script>
<style>
#specia {
  width: 24.375rem;
  /* height: 40.875rem; */
  padding-left: 1.1875rem;
  padding-right: 1.1875rem;
  background-color: #fff;
  /* position: absolute; */
}
#specia .page {
  width: 24.375rem;
  height: 0.75rem;
  background-color: #e5f0fb;
  position: absolute;
  bottom: 2.0625rem;
  border-radius: 0.3125rem;
}
#specia .page li {
  width: 0.75rem;
  height: 0.75rem;
  float: left;
  background-color: rgb(0, 0, 0);
  color: transparent;
  border-radius: 50%;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
}
#specia .first-li {
  height: 4.6875rem;
  width: 24.375rem;
  font-size: 1.0625rem;
  text-align: left;
}
.telist .x {
  width: 2.25rem;
  height: 1.25rem;
  /* background-image: url(../../assets/7.png); */
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.5375rem;
}
.first-li .x {
  width: 2.25rem;
  height: 1.25rem;
  /* background-image: url(../../assets/7.png); */
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 2rem;
  top:1.5rem;
}
.telist .j {
  width: 6rem;
  height: 2.625rem;
  background-image: url(../../assets/8.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.9375rem;
  top: 3.4375rem;
}
#specia li:first-of-type em:last-of-type {
  margin-left: 0.625rem;
}
#specia .telist {
  width: 24.375rem;
  height: 6.1875rem;
  background-color: #e5f0fb;
  padding-top: 1rem;
  position: relative;
  margin-bottom: 1.0625rem;
}
.telist .cetiao {
  width: 0.5rem;
  height: 7.1875rem;
  float: left;
  position: absolute;
  top: 0;
}

.telist .xinxi {
  text-align: left;
  margin-bottom: 0.75rem;
  margin-left: 1.3125rem;
  font-size: 0.875rem;
  color: #999999;
}
</style>


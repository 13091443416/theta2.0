<template>
  <div id="special">
    <div class="page">
      <!-- <li v-for="i in jia" @click="cpage">{{i}}</li> -->
    </div>
    <li class="first-li">
      <em
        style="display:block;position: relative;left:0rem;top:1.4375rem; width: 0.125rem; height: 1.25rem; background-color: #a2a800;"
      ></em>
      <em>需特殊关注</em>
    </li>
    <div style="width:24.375rem;height:31.9375rem;overflow: hidden; position: relative;">
      <div class="roll" :style="{position:'absolute',top:top+'px',transition:'0.5s'}">
        <li v-for="(item,index) in peii" :key="index" class="telist">
          <div class="x"></div>
          <div class="j"></div>
          <div class="cetiao" :style="{backgroundColor:item.color}"></div>
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
import { mapState } from 'vuex'
import { constants } from "crypto";
export default {
  data() {
    return {
       
            people: [
                
            ]
        ,
      top: 0,
      i: 1
    };
  },
  watch:{
    newdatag(val){
     this.people=val.attentionPersonObj
    }
  },
  methods: {
    cpage(ev) {
      
      for(var i=0;i<this.jia.length;i++){
document.querySelectorAll(".page li")[i].style.backgroundColor="rgb(0, 0, 0)";
        if(ev.target.innerHTML==i){
         
          this.top=-i*524;
        }
      }
      ev.target.style.backgroundColor="#fff";
    }
  },
  computed: {
    newdatag(){
      return this.$store.state.jibi
    },
    peii(){
      return this.people
    },
    // jia() {
    //   var cpage = [];
    //   for (
    //     var i = 0;
    //     i < Math.ceil(this.people.length / 4);
    //     i++
    //   ) {
    //     cpage.push(i);
    //   }
    //   return cpage;
    // }
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
#special {
  width: 24.375rem;
  height: 40.875rem;
  padding-left: 1.1875rem;
  padding-right: 1.1875rem;
  background-color: #141c27;
  position: absolute;
  left: 63.5625rem;
  top: 0.625rem;
}
#special .page {
  width: 24.375rem;
  height: 0.75rem;
  background-color: #16384a;
  position: absolute;
  bottom: 2.0625rem;
  border-radius: 0.3125rem;
}
#special .page li {
  width: 0.75rem;
  height: 0.75rem;
  float: left;
  background-color: rgb(0, 0, 0);
  color:transparent;
  border-radius: 50%;
  margin-left: 0.3125rem;
  margin-right: 0.3125rem;
}
#special .first-li {
  height: 4.6875rem;
  width: 24.375rem;
  font-size: 1.0625rem;
  text-align: left;
}
.telist .x {
  width: 2.25rem;
  height: 1.25rem;
  background-image: url(../../assets/7.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.9375rem;
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
#special li:first-of-type em:last-of-type {
  margin-left: 0.625rem;
}
#special .telist {
  width: 24.375rem;
  height: 6.1875rem;
  background-color: #16273c;
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


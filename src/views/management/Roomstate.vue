<template>
  <div class="roomstate">
    <div class="left">
      <div class="huizong">
        <table>
          <tr>
            <td
              colspan="5"
              style="font-size: 20px;height: 50px;line-height: 50px;text-align: center"
            >院内房间床位统计</td>
          </tr>
          <tr>
            <td></td>
            <td>房间</td>
            <td>床位</td>
            <td>空余房间</td>
            <td>空余床位</td>
          </tr>
          <tr>
            <td>合计</td>
            <td v-for="(item,index) in statistics.total" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td>全自理</td>
            <td v-for="(item,index) in statistics.selfcareh" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td>半自理</td>
           <td v-for="(item,index) in statistics.halfselfcareh" :key="index">{{item}}</td>
          </tr>
          <tr>
            <td>全介护</td>
            <td v-for="(item,index) in statistics.unselfcareh" :key="index">{{item}}</td>
          </tr>
        </table>
      </div>
      <div class="echor">
          <Roomstatecho />
      </div>
    </div>
    <div class="right">
        <Rightxia />
    </div>
  </div>
</template>
<script>
import Roomstatecho from './Roomstatecho'
import Rightxia from './Rightxia'
export default {
   components:{
       Roomstatecho,Rightxia
   },
   data(){
     return{
       statistics:{
         total:[900,300,300,300],
         selfcareh:[123,251,264,123],
         halfselfcareh:[54,56,21,55],
         unselfcareh:[54,56,21,55]
       }
     }
   }
};
</script>
<style scoped>
.roomstate {
  height: 100%;
}
.left {
  width: 27%;
  height: 760px;
  background-color: #fff;
  color: #010101;
  float: left;
  padding-top: 15px;
  padding-left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.huizong {
  width: 96%;
  height: 315px;
  background-color: #cccccc;
  border-radius: 4px
}
.huizong table {
  margin-left: 22px;
}
.huizong table td {
  width: 76px;
  height: 46px;
  text-align: center;
}
.echor {
  width: 96%;
  height: 420px;
  margin-top: 10px;
  background-color: #cccccc;
  border-radius: 4px
}
.right {
  width: 70%;
  height: 745px;
  padding-top: 30px;
  background-color: #fff;
  float: left;
  margin-left: 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>



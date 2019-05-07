<template>
  <div id="pei-pos">
    <div class="qingkuang">
      <li>
        <p style="font-size: 1.375rem;color:#a9aca1">异常状况</p>
        <p style="font-size: 1.375rem;color:#a9aca1">12</p>
      </li>
      <li>
        <p style="font-size: 1.375rem;color:#008c97">入住老人人数</p>
        <p style="font-size: 1.375rem;color:#008c97">12</p>
      </li>
      <li>
        <p style="font-size: 1.375rem;color:#008c97">入住率</p>
        <p style="font-size: 1.375rem;color:#008c97">12</p>
      </li>
      <li>
        <p style="font-size: 1.375rem;color:#008c97">当前老人/护工比</p>
        <p style="font-size: 1.375rem;color:#008c97">12</p>
      </li>
      <li>
        <p style="font-size: 1.375rem;color:#008c97">大数据完整度</p>
        <p style="font-size: 1.375rem;color:#008c97">12</p>
      </li>
    </div>
    <div class="louceng">
      <div class="shuliang">
        <li style="font-size:0.875rem;">
          <em
            style="display:block;position: relative;left:1.875rem;top:3.125rem; width: 0.125rem; height: 0.875rem; background-color: #a2a800;"
          ></em>
          老人数量
        </li>
        <li v-for="item in zongq.loushu" class="lil" @click="changeRoom">
          <b style="color:#345d6f;font-size:1.375rem" @click="stop">{{item.floorCode}}</b>
          <b style="font-size:0.875rem" @click="stop">10人</b>
        </li>
        <!-- <li class="lil">
          <b style="color:#345d6f;font-size:1.375rem">F4</b>
          <b style="font-size:0.875rem">10人</b>
        </li>
        <li class="lil">
          <b style="color:#345d6f;font-size:1.375rem">F3</b>
          <b style="font-size:0.875rem">10人</b>
        </li>
        <li class="lil">
          <b style="color:#345d6f;font-size:1.375rem">F2</b>
          <b style="font-size:0.875rem">10人</b>
        </li>
        <li class="lil">
          <b style="color:#345d6f;font-size:1.375rem">F1</b>
          <b style="font-size:0.875rem">10人</b>
        </li>
        <li class="lil">
          <b style="color:#345d6f;font-size:1.375rem">B1</b>
          <b style="font-size:0.875rem">10人</b>
        </li>-->
      </div>
      <Inroom :input="hhh"/>
      <!-- <router-view v-on:childByValue="childByValue"/> -->
      <Planone :roomqing="roomqing" v-on:childByValue="childByValue"/>
    </div>
  </div>
</template>
<script>
import Inroom from "./Inroom.vue";
import Planone from "./Planone.vue";
export default {
  data() {
    return {
      hhh: "",
      zongq: "",
      roomqing: ""
    };
  },
  created() {
    var zongq = {
      loushu: [
        {
          floorName: "B1",
          roomNum: 27,
          roomqing: [
            {
              roomName: "888",
              leftTopx: 10,
              leftTopy: 10,
              rightBx: 20,
              rightBy: 20
            }
          ]
        },
        {
          floorName: "F1",
          roomNum: 27,
          roomqing: [
            {
              roomName: "999",
              leftTopx: 10,
              leftTopy: 10,
              rightBx: 20,
              rightBy: 20
            }
          ]
        },
        {
          floorName: "F2",
          roomNum: 27,
          roomqing: [
            {
              roomName: "666",
              leftTopx: 10,
              leftTopy: 10,
              rightBx: 20,
              rightBy: 20
            }
          ]
        },
        {
          floorName: "F3",
          roomNum: 27,
          roomqing: [
            {
              roomName: "111",
              leftTopx: 10,
              leftTopy: 10,
              rightBx: 20,
              rightBy: 20
            }
          ]
        },
        {
          floorName: "F4",
          roomNum: 27,
          roomqing: [
            {
              roomName: "112",
              leftTopx: 10,
              leftTopy: 10,
              rightBx: 20,
              rightBy: 20
            }
          ]
        }
      ]
    };
    this.$ajax.post('/api/mainPage/getFloorAndRoomJson')
  .then((respones)=>{
    this.zongq=respones.data
    
    console.log(respones.data.loushu[1].roomqing)
    
  })
  .catch(function (error) {
    console.log(error);
  });
    // zongq.loushu.reverse();
    
  },
  mounted(){
    console.log(this.roomqing)
  },
  components: {
    Inroom,
    Planone
  },
  methods: {
    childByValue(val) {
      this.hhh = val;
    },
    changeRoom(ev) {
      
      var wuc = document.getElementsByClassName("lil");
      for (var i = 0; i < this.zongq.loushu.length; i++) {
        wuc[i].style.backgroundColor = "#121823";
        if (ev.target.firstChild.innerHTML == this.zongq.loushu[i].floorCode) {
          this.roomqing = this.zongq.loushu[i].roomqing;
        }
      }
      ev.target.style.backgroundColor = "#1bcbb4";
    },
    stop(ev){
ev.stopPropagation()
    }
  },
  computed: {
    Newpeople: function() {
      return this.people;
    },
  }
};
</script>
<style>
.qingkuang {
  width: 60.1875rem;
  height: 5.625rem;
}
.qingkuang li {
  width: 11.5rem;
  height: 4.625rem;
  float: left;
  margin-right: 0.4375rem;
  background-color: #192a3c;
  padding-top: 1rem;
}
.qingkuang li:nth-of-type(1) {
  background-color: #f3454e;
  width: 12rem;
}
.louceng {
  width: 60.1875rem;
  height: 35.25rem;
  background-image: url(../../assets/5.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.shuliang {
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
}
.shuliang li {
  line-height: 5.3125rem;
  width: 8.4375rem;
  height: 5.3125rem;
  color: #a09f9d;
  background-color: #0c1019;
}
.shuliang .lil {
  display: block;
  line-height: 5.3125rem;
  width: 8.4375rem;
  height: 5.3125rem;
  color: #a09f9d;
  background-color: #0c1019;
}
.lil b {
  margin-left: 1.875rem;
}
</style>




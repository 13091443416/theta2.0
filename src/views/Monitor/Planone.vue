<template>
  <div class="pingmiantu1">
    <li v-for="i in weijizu" class="jinji" :style="{left:i.x+'px',bottom:i.y+'px'}">{{i.x}}</li>
    <div v-for="item in roomqing" v-on:click="roomq" :cla="item.num" :style="{width:item.rightBx-item.leftTopx+'px',height:item.rightBy-item.leftTopy+'px',left:item.leftTopx+'px',bottom:item.rightBy+'px'}">
      <div style="font-size:0.9375rem;color:#aeaeaf">{{item.roomName}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      room: "",
      people: "asdfsad",
      weijizu:""
    };
  },
  mounted() {
    // var house = document.querySelectorAll(".pingmiantu1 div");
    // house[0].style.top = "6.25rem";
    // console.log(house);
    // console.log(house[1]);
  
  },
  updated(){
    
  console.log(111)
    // this.styler={width:width+"px",height:height+"px",left:this.roomqing[0].leftTopx+'px',bottom:this.roomqing[0].rightBy+'px'};
   
  },
  props:{
    roomqing:null
  },
  methods: {
    roomq(ev) {
      
        // axios
    //   .post("post.php", {
    //   
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
      this.people = response;
      this.$emit("childByValue", this.people);
    }
  },
  created() {
    var peopleState = {
      people: [
        { name: "西门庆", state: "正常", num: "No.2301",x:'200',y:'10',z:'2' },
        { name: "潘金莲", state: "危机", num: "No.2301",x:'100',y:'10',z:'3' },
        { name: "武松", state: "正常", num: "No.2301",x:'10',y:'10',z:'1' },
        { name: "武大郎", state: "危机", num: "No.2301",x:'200',y:'100',z:'2' },
        { name: "王婆", state: "正常", num: "No.2301",x:'10',y:'10',z:'2' }
      ]
    };
    var weijizu=[];
    this.weijizu=weijizu;
    for(var i=0;i<peopleState.people.length;i++){
if(peopleState.people[i].state!="正常"){
weijizu.push({state:peopleState.people[i].state,x:peopleState.people[i].x,y:peopleState.people[i].y,z:peopleState.people[i].z})
}
    }
   
    this.people = peopleState;
  },

  computed: {
    Newroom: function() {
      return this.room;
    },
    NewpeopleState: function() {
      return this.people;
    }
  }
};
</script>
<style>
.pingmiantu1 {
  position: absolute;
  left: 10.625rem;
  bottom: 2.8125rem;
  width:49rem;
  height:19.1875rem;
}
.pingmiantu1 .jinji{
  width:1.25rem;
  height: 1.25rem;
  background-color: #c94655;
  position: absolute;
  border-radius: 50%;
}
.pingmiantu1 > div {
  width: 2.875rem;
  height: 6.1875rem;
  float: left;
  background-image: url(../../assets/2-2.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  padding-top: 0.5625rem;
}
</style>



<template>
  <div class="evaluating"> 
      <Xiala v-on:childByValue="childByValue" />
    <div
      style="height: 750px;width:23%;float:left;margin-left: 50px;overflow-y: auto; OVERFLOW-X:hidden;"
    >
      <el-steps  direction="vertical" :active="active" finish-status="success">
        <el-step  v-for="(item,index) in ti" :title="item.name" :description="item.xiang" :key='index' ></el-step>
      </el-steps>
    </div>
    <el-card class="box-card" shadow="hover" style="position: relative;">
      <el-button
        type="success"
        round
        @click="next"
        style="position: absolute;bottom:20px;right: 20px;"
      >下一题</el-button>
      <div slot="header" class="clearfix">
        <span style="font-size:20px">{{timu}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="submitt" >提交</el-button>
      </div>
      <el-radio-group v-model="radio">
        <el-radio
          v-for="(o,index) in da"
          :key="index"
          class="text item"
          :label="o.id"
          style="display:block;margin-left: 30px;"
        >{{o.answer}}</el-radio>
      </el-radio-group>
    </el-card>
  </div>
</template>
<script>
var i = 0;
var laouserda = [];
var sangradio = 1;
import Xiala from './Xiala.vue'
export default {
    components:{
        Xiala
    },
  data() {
    return {
        name:'',
      timu: "",
      da: "",
      ti: [],
      active: 0,
      radio: 1,
      userda: [],
      childByValuename:'',
      
    };
  },
created(){
 i = 0;
laouserda = [];
sangradio = 1;
  this.$ajax.post('/api/personProblem/getProblemList', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then((respones)=>{
    this.ti=respones.data.ti
    console.log(respones.data.ti)
  })
  .catch(function (error) {
    console.log(error);
  });
},
  updated() {
    this.timu = this.ti[i].name;
    // console.log(this.timu)
    this.da = this.ti[i].da;
    if(this.name==''){

    }
  },
  watch: {
    radio(val, l) {
      laouserda = [];
      laouserda.push(val);
      console.log(val);
      console.log(laouserda);
    }
  },
  methods: {
    childByValue(val){
this.childByValuename=val
    },
    next() {
      if (this.radio !== sangradio) {
        console.log(laouserda[0]);
        this.userda.push(laouserda[0]);
        console.log(this.userda);
        if (this.active++ == this.ti.length-1) {
          this.$alert('右上角，请提交', '提交', {
          confirmButtonText: '确定',
         
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        }
        if (i < this.ti.length - 1) {
          i++;
          this.timu = this.ti[i].name;
          this.da = this.ti[i].da;
          console.log(i);
        }
        sangradio = this.radio;
      } else {
        this.$alert('不能为空', '警告', {
          confirmButtonText: '确定',
          type: 'warning',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },
    submitt(){
this.$confirm('即将提交, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
           var t=JSON.stringify(this.userda)
this.$ajax.post('/api/personProblem/saveAnswer', `personId=${this.childByValuename}&answerArry=${t}`
  )
  .then((respones)=>{
    this.$message({
            type: 'info',
            message:'长者评分为'+respones.data.total
          });  
    console.log(respones.data)
  })
  .catch(function (error) {
    console.log(error);
  });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消提交'
          });          
        });


     
    }
  }
};
</script>
<style  scoped>
.el-radio__label {
  font-size: 30px !important;
}
.evaluating {
  border: 1px solid rgba(250, 0, 255, 0);
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 50px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 70%;
  height: 750px;
  margin-left: 460px;
  /* margin-top: 80px; */
}

</style>







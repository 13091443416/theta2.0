<template>
  <div>
    <button type="button" class="baocun el-button el-button--success is-circle" @click="baocun">
      <!---->
      <i class="el-icon-check"></i>
      <!---->
    </button>
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane label="智能手环" class="zhi">
        <el-transfer
          filterable
          filter-placeholder="请输入拼音"
          v-model="value"
          :titles="['未绑定', '已绑定']"
          :button-texts="['解绑', '绑定']"
          @change="change"
          @left-check-change="left"
          :data="data"
          class="shou"
        ></el-transfer>
        <div class="xinxi">
          <h1>设备信息</h1>
          <li>设备名称：{{info.name}}</li>
          <li>设备ID：{{info.ID}}</li>
          <li>硬件版本：{{info.yv}}</li>
          <li>软件版本：{{info.rv}}</li>
          <li>电池电量：{{info.hv}}</li>
          <li>使用中：{{info.yen}}</li>
          <li>故障码：{{info.bed}}</li>
          <li>设备功能：{{info.gongneng}}</li>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他设备" class="zhi">暂未开通</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      value: [],
      info: {
        name: "",
        ID: "",
        yv: "",
        rv: "",
        hv: "",
        yen: "",
        bed: "",
        gongneng: ""
      },
      cities: "",
      shebei:[],
      fanshe:{
        name: "",
        ID: "",
        yv: "",
        rv: "",
        hv: "",
        yen: "",
        bed: "",
        gongneng: ""
      }
    };
  },
  props: {
    id: null
  },
  created() {
    var tt=[]
    const data = [];
    this.$ajax
      .post("/api/person/getDeviceListByPersonId", `personId=${this.id}`)
      .then(respones => {
        this.shebei=respones.data
        console.log(respones.data)
        for (var p = 0; p < respones.data.length; p++) {
          if (respones.data[p].flag == false) {
            this.value.push(p);
            console.log('换设备')
            this.info=respones.data[p]
            console.log(this.info)
          }
        }
        for (var t = 0; t < respones.data.length; t++) {
          if (respones.data[t].flag == true) {
            tt.push(1)
          }
        }
        if(tt.length==respones.data.length){
          for (var i = 0;i< respones.data.length; i++) {
            respones.data[i].flag=false
            console.log('全部都亮')
        }
        }
        respones.data.forEach((city, index) => {
          data.push({
            label: city.name,
            key: index,
            disabled: city.flag
          });
        });
        this.cities = respones.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    this.data = data;
  },
  methods: {
    baocun() {
      this.$ajax
        .post(
          "/api/person/savePersonDevice",
          `personId=${this.id}&deviceId=${this.fanshe.ID}`
        )
        .then(respones => {
          this.$message({
            type: "info",
            message: respones.data+'手环绑定成功'
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    change(value, b, c) {
      if (value.length == 0) {
        this.fanshe={
          name: "",
          ID: "",
          yv: "",
          rv: "",
          hv: "",
          yen: "",
          bed: "",
          gongneng: ""
        }
         console.log(this.fanshe.ID)
        this.info = {
          name: "",
          ID: "",
          yv: "",
          rv: "",
          hv: "",
          yen: "",
          bed: "",
          gongneng: ""
        };
        for (var k = 0; k < this.data.length; k++) {
          this.data[k].disabled = false;
        }
      } else if (value.length == 1) {
        this.fanshe=this.shebei[value[0]]
        for (var k = 0; k < this.data.length; k++) {
          this.data[k].disabled = true;
          this.data[value].disabled = false;
          // console.log(value);
        }
      }
      console.log(value[0]);
      
     
    },
    left(value, b) {
      
      
        if (value.length != 0) {
          this.info = this.cities[value[0]];
          for (var k = 0; k < this.data.length; k++) {
            this.data[k].disabled = true;
            this.data[value].disabled = false;
          }
        } 
        else {
          this.info = {
        name: "",
        ID: "",
        yv: "",
        rv: "",
        hv: "",
        yen: "",
        bed: "",
        gongneng: ""
      };
          for (var k = 0; k < this.data.length; k++) {
            this.data[k].disabled = false;
          }
        }
      
      console.log(value);
      console.log(b);
    }
  },
  computed: {}
};
</script>
<style>
.xinxi {
  width: 249px;
  height: 355px;
  /* background-color: red; */
  float: left;
  border-radius: 10px;
  border: solid 5px #f2f2f2;
  margin-left: 140px;
  margin-top: 3%;
  padding-top: 33px;
  padding-left: 34px;
}
.xinxi h1 {
  font-size: 24px;
  margin-left: 25%;
  margin-bottom: 20px;
}
.xinxi li {
  margin-bottom: 15px;
}
.auto {
  margin: auto;
  position: relative;
  width: 777px;
}
.yan {
  position: absolute;
  width: 33px;
  height: 32px;
  background-color: #f5f7fa;
  z-index: 99999;
  top: 2px;
  left: 2px;
}
.yan1 {
  position: absolute;
  width: 33px;
  height: 32px;
  background-color: #f5f7fa;
  z-index: 99999;
  top: 2px;
  left: 326px;
}
.shou {
  margin-left: 10%;
  margin-top: 6%;
  float: left;
}
.zhi {
  width: 100%;
  height: 510px;

  border: 1px solid #fff;
}
.baocun {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>

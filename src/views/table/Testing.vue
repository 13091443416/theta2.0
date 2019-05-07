<template>
  <div class="testing">
    <div class="body">
      <div class="body-shen"></div>
      <div class="body-nei">
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/hhart.png" alt>
              <img v-if="that<180" src="../../assets/huihart.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="xueya">
              <img v-if="that>=180" src="../../assets/xueyao.png" alt>
              <img v-if="that<180" src="../../assets/huixueyao.png" alt>
              <img v-if="that==undefined" src="../../assets/mxueya.png" alt>
            </div>
            <div class="jieshao">
              <span v-if="that>=180" style="color:#f4464a;">血压(mmhg):</span>
              <span v-if="that>=180" style="color:#f4464a;">80/180</span>
              <span v-if="that<180">血压(mmhg):</span>
              <span v-if="that<180">80/180</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart">
      <div style="height:41px">
        <el-select
          v-model="timevalue"
          placeholder="请选择"
          style="width:90px; float:right"
          @change="zhi"
        >
          <el-option v-for="item in time" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button icon="el-icon-download" circle @click="createPicture"></el-button>
      </div>

      <div class="jietu" id="mymap">
      <div class="xinlubiao"></div>
      <div class="xueyabiao"></div>
      <div class="heid"></div>
      </div>
    </div>
  </div>
</template>
<script>
import westeros from "../../components/ECharts/theme/westeros.js";
import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      that: 100,
      timevalue: "一周内",
      time: [
        {
          value: "24小时",
          label: "24小时"
        },
        {
          value: "3天",
          label: "3天"
        },
        {
          value: "一周内",
          label: "一周内"
        }
      ],
      zxinlv: {
        time: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        data: [714, 258, 456, 457, 451, 256, 355]
      },

      zxueya: {
        time: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datag: [714, 258, 457, 451, 256, 355, 441],
        datad: [714, 258, 457, 451, 256, 355, 441]
      }
    };
  },
  mounted() {
    this.ini();
    console.log(123456);
  },
  watch: {
    timevalue(newvalue) {
        if(newvalue=='24小时'){
             this.zxinlv = {
        time: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        data: [714, 111, 222, 333, 444, 555, 258, 456, 457, 451, 256, 355]
      };
      this.zxueya = {
        time: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datag: [714, 258, 457, 451, 256, 355, 441, 122, 165, 124, 452, 154],
        datad: [714, 258, 457, 451, 256, 355, 441, 122, 165, 124, 452, 154]
      };
        }
        else if(newvalue=='3天'){
              this.zxinlv = {
        time: ["1", "2", "3"],
        data: [714, 111, 222]
      };
      this.zxueya = {
        time: ["1", "2", "3"],
        datag: [714, 258, 457],
        datad: [714, 258, 457]
      };
        }
          else if(newvalue=='一周内'){
              this.zxinlv = {
        time: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        data: [714, 111, 222, 333, 444, 555, 258, 456]
      };
      this.zxueya = {
        time: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datag: [714, 258, 457, 451, 256, 355, 441],
        datad: [714, 258, 457, 451, 256, 355, 441]
      };
        }
      this.ini();
    }
  },
  methods: {
    createPicture() {
			html2canvas(document.getElementById('mymap')).then(canvas => {
				this.imgmap = canvas.toDataURL()
				console.log(999, this.imgmap)
				if (window.navigator.msSaveOrOpenBlob) {
					var bstr = atob(this.imgmap.split(',')[1])
					var n = bstr.length
					var u8arr = new Uint8Array(n)
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n)
					}
					var blob = new Blob([u8arr])
					window.navigator.msSaveOrOpenBlob(blob, 'chart-download' + '.' + 'png')
				} else {
					// 这里就按照chrome等新版浏览器来处理
					const a = document.createElement('a')
					a.href = this.imgmap
					a.setAttribute('download', 'chart-download')
					a.click()
				}
 
			});
		},
    zhi(value) {},
    ini() {
      let xinlu = this.$echarts.init(
        document.querySelector(".xinlubiao"),
        "westeros"
      );
      let xueyabiao = this.$echarts.init(
        document.querySelector(".xueyabiao"),
        "westeros"
      );
      let heid = this.$echarts.init(
        document.querySelector(".heid"),
        "westeros"
      );

      xinlu.setOption({
        title: {
          text: "心率"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["mmhg"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.zxinlv.time
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "mmhg",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#51c1e5",
                lineStyle: {
                  color: "#51c1e5"
                }
              }
            },
            data: this.zxinlv.data
          }
        ]
      });
      xueyabiao.setOption({
        title: {
          text: "血压"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["高压", "低压"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.zxueya.time
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "高压",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#51c1e5",
                lineStyle: {
                  colzor: "#51c1e5"
                }
              }
            },
            data: this.zxueya.datag
          },
          {
            name: "低压",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#eba9d7",
                lineStyle: {
                  color: "#eba9d7"
                }
              }
            },
            data: this.zxueya.datad
          }
        ]
      });
      heid.setOption({
        title: {
          text: "心率"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["入住人数"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.d
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "入住人数",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#4aa3ff",
                lineStyle: {
                  color: "#4aa3ff"
                }
              }
            },
            data: [714, 258, 457, 451, 256, 355, 441]
          }
        ]
      });
    }
  }
};
</script>
<style>
.body {
  margin-right: 8px;
  width: 55%;
  height: 510px;
  background-color: #ffffff;
  float: left;
}
.xinlubiao {
  height: 235px;
}
.xueyabiao {
  height: 235px;
}

.xueya {
  float: left;
  margin-right: 10px;
  width: 65px;
  height: 64px;
  background-position: 100% 100%;
}
.jieshao {
  color: #727272;
  height: 54px;
  padding-top: 12px;
}
.body-shen {
  width: 360px;
  height: 510px;
  background: url("../../assets/body.png") no-repeat;
  background-position: 10px 0px;
  float: left;
}
.body-nei {
  width: 366px;
  height: 500px;

  padding-top: 10px;
  float: left;
}
.body-nei > div {
  width: 50%;
  height: 66px;
  float: left;
  margin-bottom: 8px;
}
.chart {
  width: 44%;
  height: 510px;
  background-color: #ffffff;
  float: left;
  overflow-x: hidden;
  overflow-y: visible;
}
.heid {
  width: 100%;
  height: 235px;
}
</style>



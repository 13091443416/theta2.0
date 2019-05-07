<template>
  <div id="lineEchart" style="position: relative;width:100%;background-color:#ffffff;">
    <div :id="id" :style="{width: width, height: height}"></div>
    <div class="see">
      <template>
        <el-transfer
          style="text-align: left; display: inline-block"
          filterable
          :left-default-checked="[0]"
          :titles="['查看区域', 'Target']"
          :button-texts="['到左边', '到右边']"
          @left-check-change="handleClick"
          :data="data3"
        ></el-transfer>
      </template>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import westeros from "./theme/westeros";
export default {
  name: "lineEcharts",
  props: {
    id: {
      type: String,
      default: "myChart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      bingqu: null,
      data3: null,
      dis: null,
      cao: []
    };
  },
  created() {
    let bingqu = {
      bingquN: [
        {
          bingqun: "禽流感",
          data: [
            {
              name: "入住人数",
              data: [714, 258, 457, 451, 256, 355, 441]
            },
            {
              name: "离院人数",
              data: [452, 425, 457, 425, 412, 685, 425]
            },
            {
              name: "紧急状况",
              data: [412, 457, 425, 425, 452, 145, 445]
            },
            {
              name: "特殊关注",
              data: [888, 444, 555, 333, 888, 245, 777]
            }
          ]
        },
        {
          bingqun: "H1N1",
          data: [
            {
              name: "入住人数",
              data: [777, 444, 555, 755, 456, 123, 423]
            },
            {
              name: "离院人数",
              data: [123, 456, 786, 452, 456, 453, 435]
            },
            {
              name: "紧急状况",
              data: [453, 234, 654, 453, 785, 786, 456]
            },
            {
              name: "特殊关注",
              data: [423, 455, 122, 784, 423, 453, 453]
            }
          ]
        },
        {
          bingqun: "非典",
          data: [
            {
              name: "入住人数",
              data: [535, 244, 213, 456, 235, 456, 456]
            },
            {
              name: "离院人数",
              data: [456, 875, 456, 225, 452, 425, 456]
            },
            {
              name: "紧急状况",
              data: [254, 456, 875, 456, 245, 453, 235]
            },
            {
              name: "特殊关注",
              data: [888, 999, 584, 387, 555, 111, 555]
            }
          ]
        },
        {
          bingqun: "荨麻疹",
          data: [
            {
              name: "入住人数",
              data: [144, 741, 258, 852, 369, 963, 693]
            },
            {
              name: "离院人数",
              data: [254, 845, 638, 412, 456, 325, 564]
            },
            {
              name: "紧急状况",
              data: [543, 222, 44, 555, 666, 777, 888]
            },
            {
              name: "特殊关注",
              data: [111, 222, 333, 666, 555, 444, 777]
            }
          ]
        },
        {
          bingqun: "白癜风",
          data: [
            {
              name: "入住人数",
              data: [200, 632, 120, 140, 30, 100, 300]
            },
            {
              name: "离院人数",
              data: [800, 320, 5010, 434, 340, 300, 1100]
            },
            {
              name: "紧急状况",
              data: [820, 630, 5010, 440, 400, 230, 10]
            },
            {
              name: "特殊关注",
              data: [82, 620, 5010, 430, 300, 200, 100]
            }
          ]
        }
      ]
    };
    const generateData3 = _ => {
      const data = [];
      for (let i = 0; i < bingqu.bingquN.length; i++) {
        var jjj = bingqu.bingquN[i].bingqun;
        data.push({
          key: i,
          label: jjj
        });
      }
      return data;
    };
    this.dis = bingqu.bingquN[0];
    this.data3 = generateData3();
    this.bingqu = bingqu;
    this.cao = [
      bingqu.bingquN[0].data[0].data,
      bingqu.bingquN[0].data[1].data,
      bingqu.bingquN[0].data[2].data,
      bingqu.bingquN[0].data[3].data
    ];
  },
  mounted() {
    this.initChart();
  },
  watch: {
    cao(val) {
      //监听数据发生改变 刷新图表数据
      this.initChart();
    }
  },
  methods: {
    handleClick(value, direction, movedKeys) {
      var ruzhuArr = [0, 0, 0, 0, 0, 0, 0];
      var liyuanArr = [0, 0, 0, 0, 0, 0, 0];
      var jinjiArr = [0, 0, 0, 0, 0, 0, 0];
      var teshuArr = [0, 0, 0, 0, 0, 0, 0];
      for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < 7; j++) {
          ruzhuArr[j] =
            ruzhuArr[j] + this.bingqu.bingquN[value[i]].data[0].data[j];
          liyuanArr[j] =
            liyuanArr[j] + this.bingqu.bingquN[value[i]].data[1].data[j];
          jinjiArr[j] =
            jinjiArr[j] + this.bingqu.bingquN[value[i]].data[2].data[j];
          teshuArr[j] =
            teshuArr[j] + this.bingqu.bingquN[value[i]].data[3].data[j];
        }
      }

      var dd = [0, 0, 0, 0];
      dd[0] = ruzhuArr;
      dd[1] = liyuanArr;
      dd[2] = jinjiArr;
      dd[3] = teshuArr;
      console.log(ruzhuArr);

      console.log(liyuanArr);

      console.log(jinjiArr);

      console.log(teshuArr);
      console.log(dd);
      this.cao = dd;
    },

    initChart() {
      this.chart = echarts.init(document.getElementById(this.id), "westeros");

      this.chart.setOption({
        title: {
          text:  "院内情况统计"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["入住人数", "离院人数", "紧急状况", "特殊关注"]
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: this.dis.data[0].name,
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
            data: this.cao[0]
          },
          {
            name: this.dis.data[1].name,
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#65c8e8",
                lineStyle: {
                  color: "#65c8e8"
                }
              }
            },
            data: this.cao[1]
          },
          {
            name: this.dis.data[2].name,
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#efb8de",
                lineStyle: {
                  color: "#efb8de"
                }
              }
            },
            data: this.cao[2]
          },
          {
            name: this.dis.data[3].name,
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#9bbce4",
                lineStyle: {
                  color: "#9bbce4"
                }
              }
            },
            data: this.cao[3]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.see {
  position: absolute;
  right: 42px;
  top: 32px;
  width: 200px;
  height: 303px;
  /* background-color: red; */
  float: right;
  overflow: hidden;
}
</style>

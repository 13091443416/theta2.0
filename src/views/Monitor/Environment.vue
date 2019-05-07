<template>
  <div id="environment">
    <div class="envi"></div>
    <div class="massg">
      <li class="play"></li>
      <li class="pp">
        <div class="ppl">
          <table>
            <tr style="font-size:1rem;color:#999999">
              <td style=""><span style="width:0.875rem;height:0.875rem;background-color:#0ab06d;display:inline-block;border-radius: 50%;margin-right:0.375rem;"></span>活动中</td>
              <td>62人</td>
            </tr>
            <tr style="font-size:0.875rem;color:#999999">
              <td>全自理老人</td>
              <td>人</td>
            </tr>
             <tr style="font-size:0.875rem;color:#999999">
              <td>半自理老人</td>
              <td>人</td>
            </tr>
            <tr>
              <td colspan="2">
            <hr width=100% style="border:0.0625rem dashed #434950;" />
              </td>
            </tr>
             <tr style="font-size:1rem;color:#999999">
              <td style=""><span style="width:0.875rem;height:0.875rem;background-color:#d1aa0f;display:inline-block;border-radius: 50%;margin-right:0.375rem;"></span>静止中</td>
              <td>2人</td>
            </tr>
            <tr>
              <td style="font-size:0.875rem;color:#999999">全自理老人</td>
              <td style="font-size:0.875rem;color:#999999">人</td>
            </tr>
             <tr>
              <td style="font-size:0.875rem;color:#999999">半自理老人</td>
              <td style="font-size:0.875rem;color:#999999">人</td>
            </tr>
             <tr>
              <td style="font-size:0.875rem;color:#999999">全失能老人</td>
              <td style="font-size:0.875rem;color:#999999">人</td>
            </tr>
          </table>
        </div>
      </li>
      <li class="pie"></li>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      environment:[[26, 50, 1, 1, 1, 24, 1],[26, 50, 1, 1, 1, 24, 2],[26, 50, 1, 1, 1, 24, 3]]
    }
  },
  created(){
    // this.initWebSocket();
  },
  destroyed() {
      // this.websock.close()
    },
  mounted() {
    this.envi();
    this.pie();
  },
  methods: {
    initWebSocket(){ //初始化weosocket
        const wsuri = "ws://localhost:8080/websocket";
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        let actions = {"test":"12345"};
        this.websocketsend(JSON.stringify(actions));
      },
      websocketonerror(){//连接建立失败重连
        this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        const redata = JSON.parse(e.data);
        this.environment=redata
        console.log(this.environment[0])
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
    envi() {
      let myChart = this.$echarts.init(document.querySelector(".envi"));
      myChart.setOption({
        backgroundColor: "#1c293a",
        title: {
          text: "院内环境",
          left: "left",
          textStyle: {
            color: "#eee"
          }
        },

        radar: {
          indicator: [
            { name: "温度", max: 300 },
            { name: "湿度", max: 250 },
            { name: "PM2.5", max: 300 },
            { name: "PM10", max: 5 },
            { name: "PM10", max: 200 },
            { name: "NO2", max: 100 }
          ],
          shape: "circle",
          splitNumber: 4,
          name: {
            textStyle: {
              color: "#999999"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#1d5285"
            }
          }
        },
        series: [
          {
            name: "北京",
            type: "radar",
            lineStyle: {
              width: 1,
              opacity: 0.5
            },
            data: this.newenvironment,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#18b4e8"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      });
    },
    pie() {
      let myChart = this.$echarts.init(document.querySelector(".pie"));
      let youChart = this.$echarts.init(document.querySelector(".play"));
      youChart.setOption({
        title: { text: "院内人员信息", textStyle: { color: "#ffffff" } },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          y: "bottom",
          data: ["在院人员", "离院人员"],
          textStyle: { color: "#999999" }
        },
        backgroundColor: "#1c293a",

        color: ["#099af5", "#f4464a"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],

            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "16",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 77, name: "在院人员" },
              { value: 19, name: "离院人员" }
            ]
          }
        ]
      });
      myChart.setOption({
        title: {
          subtext: "人\n员\n活\n动\n情\n况\n统\n计\n表",
          textVerticalAlign: "bottom",
          subtextStyle: {
            lineHeight: 20,
            fontSize: 17
          }
        },
        backgroundColor: "#1c293a",
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#1bcbb4", "#d1aa0f"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 62, name: "活动中" }, { value: 15, name: "静止" }]
          }
        ]
      });
    }
  },
  computed(){
    function newenvironment(){
      return this.environment
    }
  }
};
</script>
<style>
#environment {
  width: 87.8125rem;
  height: 12.8125rem;
  margin-top: 0.3125rem;

}
#environment > div {
  float: left;
}
.envi {
  width: 20%;
  height: 12.8125rem;

  margin-right: 0.625rem;
}
.pie {
  width: 25.875rem;
  height: 12.8125rem;

}
.pp {
  width: 21.875rem;
  height: 11.875rem;

  padding-top: 0.9375rem;
}
.ppl {
  width: 80%;
  height: 95%;
  background-color: #141d28;
  margin: auto;
}
.ppl table{
  width:100%;
  height: 95%;
}
.play {
  width: 21.875rem;
  height: 12.8125rem;
 
}
.massg {
  /* width: 0.625rem; */
  height: 12.8125rem;
 background-color: #1c293a;
}
.massg li {
  
  float: left;
}
</style>



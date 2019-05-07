<template>
  <div id="blood">
    <div class="bld"></div>
    <div class="dheart">
      <div class="heart"></div>
      <div class="temperature"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      datag:[],
      heartRate:[],
      wristTemperature:[]
    }
    
  },
  watch:{
    newdatag(){
      this.datag=this.$store.state.jibi.bloodPressure.datag
      this.dataz=this.$store.state.jibi.bloodPressure.dataz
      this.datad=this.$store.state.jibi.bloodPressure.datad
      this.heartRate=this.$store.state.jibi.heartRate
      this.wristTemperature=this.$store.state.jibi.wristTemperature
      this.bld();
      this.heart();
    this.temperature();
    }
  },
 computed:{
    newdatag(){
      return this.$store.state.jibi
    }
  },
  mounted() {
    console.log(11111111111111111)
    console.log(this.$store.state.jibi)
    this.bld();
    this.heart();
    this.temperature();
  },
  methods: {
    bld() {
      var datag = this.datag;
      var dataz = this.dataz;
      var datad = this.datad;
      var Chart = this.$echarts.init(document.querySelector(".bld"));
      Chart.setOption({
        backgroundColor: "#1c293a",
        title: {
          text: "院内血压大数据展示",
          textStyle: { color: "#ffffff" }
        },
        legend: {
          textStyle: {
            color: "#999999"
          },
          right: 10,
          data: ["低压", "中压", "高压"]
        },
        xAxis: {
          name: "mmHg",
          nameLocation: "end",
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#a5a8ac"
            }
          }
        },
        yAxis: {
          name: "mmHg",
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#a5a8ac"
            }
          },
          scale: true
        },
        series: [
          {
            name: "低压",
            data: datad,
            type: "scatter",

            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return 1;
                },
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(120, 36, 50, 0.5)",
                shadowOffsetY: 5,
                color: "#5d323f"
              }
            }
          },
          {
            name: "中压",
            data: dataz,
            type: "scatter",

            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return 1;
                },
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(25, 100, 150, 0.5)",
                shadowOffsetY: 5,
                color: "#913943"
              }
            }
          },
          {
            name: "高压",
            data: datag,
            type: "scatter",

            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return 1;
                },
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: "rgba(25, 100, 150, 0.5)",
                shadowOffsetY: 5,
                color: "#c23f46"
              }
            }
          }
        ]
      });
    },
    heart() {
      var Chart = this.$echarts.init(document.querySelector(".heart"));
      Chart.setOption({
     backgroundColor:'#1e3247',
    color: ['#0998f6'],
    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        
        {
           
            show: false,
            type : 'value'
        }
    ],
    yAxis : [
        
        {
            
            name:"心率展示",
            nameLocation: 'end',
            axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#8d8e90',//左边线的颜色
                       
                    }
                },
             axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#8d8e90'
                            }},
            nameTextStyle: {
      color: '#6b7077',
      fontSize:16,
      padding: [5, 0, 0, -5]
    },
            type : 'category',
            data : this.heartRate[0],
            axisTick: {
                alignWithLabel: true
            },
           
        }
    ],
    series : [
         
        {
            label: {
               
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [5, -2],
                        textStyle: {
                            color: '#8d8e90',
                            fontSize: 13
                        }
                    }
                },
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:this.heartRate[1]
        }
    ]
      });
    },
    temperature(){
        var Chart = this.$echarts.init(document.querySelector(".temperature"));
      Chart.setOption({
       backgroundColor:'#1e3247',
    color: ['#1bcbb4'],
    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        
        {
           
            show: false,
            type : 'value'
        }
    ],
    yAxis : [
        
        {
            
            name:"体温展示",
            nameLocation: 'end',
            axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#8d8e90',//左边线的颜色
                       
                    }
                },
             axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#8d8e90'
                            }},
            nameTextStyle: {
      color: '#6b7077',
      fontSize:16,
      padding: [5, 0, 0, -5]
    },
            type : 'category',
            data :this.wristTemperature[0],
            axisTick: {
                alignWithLabel: true
            },
           
        }
    ],
    series : [
         
        {
            label: {
               
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [5, -2],
                        textStyle: {
                            color: '#8d8e90',
                            fontSize: 13
                        }
                    }
                },
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:this.wristTemperature[1]
        }
    ]
      });
    }
  },
 
};
</script>
<style>
#blood {
  height: 53.9375rem;
  width: 21%;
  position: absolute;
  top: 0.6875rem;
  left: 91.4375rem;
}
.bld {
  height: 34%;
  width: 100%;
  background-color: #1e3247;
  margin-bottom: 1.25rem;
}
.dheart {
  width: 100%;
  height: 64%;
}
.heart {
  width: 100%;
  height: 50%;
  background-color: #1e3247;
}
.temperature {
  width: 100%;
  height: 50%;
  background-color: #1e3247;
}
</style>



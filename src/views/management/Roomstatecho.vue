<template>
  <div class="echors"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.ini();
  },
  methods: {
    ini() {
      let echors = this.$echarts.init(document.querySelector(".echors"));

      echors.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['已入住房间','以住满房间','空余房间','全自理','半自理','全介护','全自理','半自理','全介护','全自理','半自理','全介护']
        // },
        color: [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#bda29a",
          "#6e7074",
          "#546570"
        ],
        series: [
          {
            name: "房间数",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 8
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 900, name: "已入住房间", selected: true },
              { value: 900, name: "以住满房间" },
              { value: 900, name: "空余房间" }
            ]
          },
          {
            name: "房间数",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              normal: {
                formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ",
                backgroundColor: "#eee",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                fontSize: 8,
                width: 80,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 10,
                    fontSize: 8,
                    align: "center"
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: "#aaa",
                    width: 80,
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 8,
                    lineHeight: 10
                  },
                  per: {
                    color: "#eee",
                    backgroundColor: "#334455",
                    padding: [1, 1],
                    width: 20,
                    fontSize: 8,
                    borderRadius: 2
                  }
                }
              }
            },
            labelLine: {
              normal: {
                length: 3
              }
            },
            data: [
              { value: 300, name: "全自理" },
              { value: 300, name: "半自理" },
              { value: 300, name: "全介护" },
              { value: 300, name: "全自理" },
              { value: 300, name: "半自理" },
              { value: 300, name: "全介护" },
              { value: 300, name: "全自理" },
              { value: 300, name: "半自理" },
              { value: 300, name: "全介护" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.echors {
  width: 100%;
  height: 100%;
}
</style>



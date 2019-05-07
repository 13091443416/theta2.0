<template>
  <div class="history">
    <div class="tiaojian">
      <table border="none" bordercolor="#fff" class="bubian" style="text-align: left;height:300px;">
        <tr>
          <td>报告类型：</td>
          <td>
            <el-select v-model="value" placeholder="请选择报告类型" style="width:220px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>查询时间：</td>
          <td style="text-align: left">
            <el-date-picker v-if="xuanze=='日报' " v-model="valuer" type="date" placeholder="选择日期" style="width:100pxs"></el-date-picker>
            <el-date-picker v-if="xuanze=='周报' " v-model="valuez" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
            <el-date-picker v-if="xuanze=='月报' " v-model="valuey" type="month" placeholder="选择月"></el-date-picker>
            <el-date-picker v-if="xuanze=='年报' " v-model="valuen" type="year" placeholder="选择年"></el-date-picker>
          </td>
        </tr>
        <tr>
         
          <td style="text-align: left">
            <el-checkbox v-model="checked1">详细数据</el-checkbox>
          </td> <td><el-checkbox v-model="checked2" disabled>健康分析(开发中)</el-checkbox></td>
        </tr>
       
        <tr>
          <td>
            <el-button type="primary">生成报表</el-button>
          </td>
          <td style="text-align: center">
            <el-button type="success">下载报表</el-button>
          </td>
        </tr>
      </table>
    </div>
    <div class="yanshi"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        xuanze:'日报',
        valuer: '',
        valuez:'',
        valuey:'',
        valuen:'',
      checked1: true,
      checked2: true,
      options: [
        {
          value: "日报",
          label: "日报"
        },
        {
          value: "周报",
          label: "周报"
        },
        {
          value: "月报",
          label: "月报"
        },
        {
          value: "年报",
          label: "年报"
        }
      ],
      value: ""
    };
  },
  watch:{
      value(val){
          this.xuanze=val
        //   console.log(val)
      }
  }
};
</script>
<style>
.tiaojian {
  width: 30%;
  height: 100%;
  /* background-color: aqua; */
  float: left;
}
.yanshi {
  width: 60%;
  height: 100%;
  background-color: red;
  float: left;
}
.bubian{
    margin-left: 20px;
    margin-top: 20px;
}
.history {
  height: 100%;
}
</style>


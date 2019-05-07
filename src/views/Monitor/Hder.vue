<template>
  <div class="headerjian">
    <li class="pei_h1">希塔智慧养老管护系统</li>
    <li class="pei_h2">{{time}}</li>
  </div>
</template>
<script>
// console.log(d2);
// console.log(vm.time);
export default {
  name: "hder",
  props: {
    msg: String
  },
  data() {
    return {
      time: '',
    };
  },
   mounted() {
    setInterval(() => {
      var d = new Date();
      var d2 =
        d.getFullYear() +
        "年" +
        (d.getMonth() + 1) +
        "月" +
        d.getDate() +
        "日" +
        " " +
        "" +
        d.getHours() +
        "时" +
        d.getMinutes() +
        "分" +
        d.getSeconds() +
        "秒";
      this.time = d2;
    }, 1000);
  }
};
// console.log(this.time);
</script>
<style>
.headerjian {
  height: 5rem;
  background: #153462;
  line-height: 5rem;
  width: 100%;
}
.pei_h1 {
  font-size: 2.25rem;
  float: left;
  color: #9da5b0;
  padding-left: 2.5rem;
}
.pei_h2 {
  font-size: 1rem;
  float: right;
  color: #9da5b0;
  padding-right: 2.5rem;
}
</style>



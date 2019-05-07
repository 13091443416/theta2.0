<template>
    <div
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-label="确认信息"
      class="el-message-box__wrapper"
      style="z-index: 206;"
    >
      <div class="el-message-box">
        <div class="el-message-box__header">
          <div class="el-message-box__title">
            <!---->
            <span>请输入老人姓名</span>
          </div>
          <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="close">
            <i class="el-message-box__close el-icon-close"></i>
          </button>
        </div>
        <div class="el-message-box__content">
          <!---->
          <div class="el-message-box__message">
            <p></p>
            <div class="bain">
               <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
            </div>
          </div>
          <div class="el-message-box__input" style="display: none;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" placeholder class="el-input__inner">
              <!---->
              <!---->
              <!---->
            </div>
            <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <button
            type="button"
            class="el-button el-button--default el-button--small"
            @click="close"
          >
            <!---->
            <!---->
            <span>取消</span>
          </button>
          <el-button v-if="btn=='f'" type="primary" size=small disabled @click="baocun">确定</el-button>
          <el-button v-if="btn=='t'" type="primary" size=small  @click="baocun">确定</el-button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        btn:'f',
        restaurants: [],
        state1: '',
        id:''
    };
  },
  watch:{
      state1(n,l){
          if(l!=''){ this.btn='f'}
      }
  },
  created(){
    this.$ajax.post('/api/personProblem/getNoAssessmentPersonList', 
  )
  .then((respones)=>{
    this.restaurants=respones.data
    console.log(respones.data[0].value)
  })
  .catch(function (error) {
    console.log(error);
  });
  },
  mounted(){
      //  this.restaurants = [
      //     { value: "武大郎",id:"1" },
      //     { value: "武松",id:"2" },
      //     { value: "张松",id:"3" }
      //   ];
 var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "block";
  },

  methods: {
    baocun() {
      console.log(this.state1);
      var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "none";
      this.$emit('childByValue', this.id)
    },
    close() {
        this.$router.back(-1)
      var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "none";
    },querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "武大郎" },
          { "value": "武松" },
        ];
      },
      handleSelect(item) {
        console.log(item.id);
        this.id=item.id
        console.log(this.state1);
        this.btn='t'
      }
  }
};
</script>
<style scoped>


.el-message-box__wrapper {
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
}
.el-scrollbar__wrap{
    z-index: 2147483647
}


</style>
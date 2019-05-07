<template>
  <div>
    <div class="meng"></div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="card kjfs">
          <p class="title"><i class="fa fa-th-large"></i>快捷方式</p>
          <ul>
            <li><router-link to="/addArticle" class="kjfs kjfs-bluee"><span><i class="el-icon-tickets fa-2x"></i></span><span>发表文章</span></router-link></li>
            <li><router-link to="/dragTabe" class="kjfs kjfs-pinkk"><span><i class="fa fa-hand-stop-o fa-2x"></i></span><span>拖拽排序</span></router-link></li>
            <li><router-link to="/pagePermissions" class="kjfs kjfs-yelloww"><span><i class="fa fa-universal-access fa-2x"></i></span><span>权限测试</span></router-link></li>
          </ul>
          <ul>
            <li><router-link to="/upload" class="kjfs kjfs-grennn"><span><i class="fa fa-cloud-upload fa-2x"></i></span><span>文件上传</span></router-link></li>
            <li><router-link to="/navClassifies" class="kjfs kjfs-purplee"><span><i class="fa el-icon-menu fa-2x"></i></span><span>前台菜单</span></router-link></li>
            <li><router-link to="/markdown" class="kjfs kjfs-lightBluee"><span><i class="fa fa-file-code-o fa-2x"></i></span><span>编辑器</span></router-link></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card dbsx">
          <p class="title"><i class="fa fa-thumb-tack"></i >待办事项</p>
          <ul>
        
            <li @click="meng"><router-link to="/index/Urgent"><span>紧急事件</span><span class="num" style="color:#f4464a">66</span></router-link></li>
            <li><router-link to="#"><span>特殊关注</span><span class="num">66</span></router-link></li>
            <div class="messal" >
<router-view />

    </div>
          </ul>
          <ul>
            <li><router-link to="#"><span>代办工单</span><span class="num">66</span></router-link></li>
            <li><router-link to="#"><span>未读消息</span><span class="num">66</span></router-link></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <router-link to="/Monitor">
        <div class="card bbxx">
          <p class="title"><i class="fa fa-tv"></i>院内大数据监控中心</p>
          <img src="../../assets/minic.png" alt="" style=" margin-right:35px;margin-left:25px">
          <span style="height: 256px;display: inline-block ">
          <img src="../../assets/mini.png" alt="">
          </span>
          <!-- <p class="title"><i class="fa fa-server"></i>版本信息</p>
          <div class="table">
            <p><span class="tit">当前版本</span>v1.0.0</p>
            <p><span class="tit">基于框架</span>vue2.0全家桶 + element-ui</p>
            <p><span class="tit">主要特色</span>单页面 / 响应式 / 无限级菜单 / 权限管理 / 极简</p>
            <p><span class="tit">获取渠道</span>
                <span class="gitbox">
                  <a target="_blank" href="https://github.com/Nirongxu/vue-xuAdmin.git"><el-button type="primary" icon="el-icon-download" size="small">github</el-button></a>
                  <a target="_blank" href="https://gitee.com/nirongxu/xu-webplatform.git"><el-button type="primary" icon="el-icon-download" size="small">码云</el-button></a>
                </span>
            </p>
          </div> -->
        </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <line-echarts id="lineEcharts" width="1383px" height="415px" ref="echarts"></line-echarts>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="24">
        <maintable id="maintable"></maintable>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import LineEcharts from '../../components/ECharts/lineEcharts'
import Maintable from '../table/maintable'
import Special from '../Monitor/Special'
export default {

  name: 'mainIndex',
  components: {Maintable, LineEcharts,Special},
  mounted () {
    var iframe = document.getElementById("urlIframe");
    var bHeight = iframe.contentWindow.document.body.scrollHeight; 
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
    var height = Math.max(bHeight, dHeight); 
    iframe.height = height; 
iframe.height = bHeight; 
    console.log(1231231321)
    console.log(this.$route.params.reportUrl)
    
    this.selfAdaption()
  },
  methods: {
    // element弹窗
    meng() {
        var meng=document.querySelector(".meng")
        console.log(meng)
        meng.style.display="block"
      },
    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
            
          }
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
  %shadow{
    
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 90px;
          min-width: 90px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
  #lineEchart{
    margin-#{$top}: 30px;
    padding-#{$top}: 30px;
    @extend %shadow;
  }
  
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
  .messal{
    z-index: 9999;
    // display: none;
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   border-radius: 5px;
  }
  .meng{
    width:100%;
    height: 100000px;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #999;
    opacity: 0.7;
  }
</style>

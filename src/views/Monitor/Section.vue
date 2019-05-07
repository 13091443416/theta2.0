<template>
  <div class="sectionjian">
    
    <Position/>
    <Special />
    <Blood/>
   <Environment />
  </div>
</template>
<script>
import Position from "./Position.vue";
import Special from "./Special.vue";
import Environment from "./Environment.vue"
import Blood from "./Blood"
export default {
  components: {
    Position,
    Special,
    Environment,
    Blood
  },
    created(){
    this.initWebSocket();
  },
  destroyed() {
      this.websock.close()
    },
  methods:{
     initWebSocket(){ //初始化weosocket
        const wsuri = "ws://localhost:8080//websocket";
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
        this.$store.commit('setdata',redata)
        // console.log(e.data)
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
  }
};
</script>

<style>
.sectionjian {
  height: 54.0625rem;
  background-color: #11151e;
  padding-top: 0.625rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  position: relative;
}

</style>

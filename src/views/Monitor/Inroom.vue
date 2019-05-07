<template>
  <div class="in-room">
    <li v-for="item in input.people" >
      <div>
        <em></em>
        <p style="font-weight: 200;margin-bottom: 0.625rem;margin-left: 2.5rem;">{{item.name}}</p>
        <p>{{item.num}}</p>
      </div>
      <div>
        <p class="btn">{{item.state}}</p>
        <p>查看详情>></p>
      </div>
    </li>
    <!-- <li>
      <div>
        <em></em>
        <p
          style="font-weight: 200;margin-bottom: 0.625rem;margin-left: 2.5rem;"
        >{{reversedMessage.people[0].name}}</p>
        <p>{{reversedMessage.people[0].num}}</p>
      </div>
      <div>
        <p class="btn">{{reversedMessage.people[0].state}}</p>
        <p>查看详情>></p>
      </div>
    </li>
    <li>
      <div>
        <em></em>
        <p style="font-weight: 200;margin-bottom: 0.625rem;margin-left: 2.5rem;">武大郎</p>
        <p>NO.123</p>
      </div>
      <div>
        <p class="btn">正常</p>
        <p>查看详情>></p>
      </div>
    </li>
    <li>
      <div>
        <em></em>
        <p style="font-weight: 200;margin-bottom: 0.625rem;margin-left: 2.5rem;">武大郎</p>
        <p>NO.123</p>
      </div>
      <div>
        <p class="btn">正常</p>
        <p>查看详情>></p>
      </div>
    </li>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      json: "",
    };
  },
  props:{
    input:null
  },
methods:{
  
},
  created() {
   
  },

  computed: {
   
  }
};
</script>
<style>
.in-room {
  height: 6.25rem;
  position: absolute;
  top: 4.375rem;
  left: 10.625rem;
  overflow-y:scroll
}
.in-room::-webkit-scrollbar{
  /* width:0.0625rem; */
  height: 6.25rem;
}
.in-room li {
  width: 15.375rem;
  height: 4.6875rem;
  float: left;
  background-color: #0c151c;
  border-left: 0.0625rem dashed #4b545b;
  padding-top: 1.5625rem;
}
.in-room li:first-of-type {
  border-left: none;
}
.in-room li > div {
  float: left;
  width: 7.6875rem;
  color: #9da2a8;
  position: relative;
  font-size: 1rem;
}

.in-room li > div:first-of-type > em {
  display: block;
  position: relative;
  width: 1.1875rem;
  height: 1.25rem;
  background-image: url(../../assets/6.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -0.0625rem;
  left: 2.125rem;
}
.btn {
  margin-bottom: 0.3125rem;
  position: relative;
  left: 1.125rem;
  width: 4.875rem;
  height: 1.375rem;
  font-size: 0.875rem;
  background-color: #054f68;
  border-radius: 3.125rem;
  text-align: center;
  line-height: 1.25rem;
}
</style>



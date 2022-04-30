<template>
  <div>
    <demo-echarts></demo-echarts>
    <div class="neon-link">
      <router-link :underline="false" :to="{name:'meteorShower'}" class="btn bc-meteor">Bright Meteor</router-link>
      <el-link :underline="false" class="btn bc-time">Time Flies</el-link>
      <el-link :underline="false" class="btn bc-Fireworks">Colorful Fireworks</el-link>
    </div>
  </div>
</template>

<script>
import  DemoEcharts from "@/components/echarts"

import "animate.css";

export default {

  name: "app",
  components: {DemoEcharts},
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.neon-link {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #031628;
}
.btn {
  font-size: 18px;
  font-weight: 300;
  padding: 10ox 20px;
  text-transform: uppercase;
  background-color: transparent;
}
.bc-meteor {
  color: aqua;
  text-decoration:none
}
.bc-time {
  color: rgb(52, 171, 207);
}
.bc-Fireworks {
  color: dodgerblue;
}
.bc-meteor:hover {
  color: white;
  background-color: rgba(76, 201, 240, 0.5);
  box-shadow: 10px 10px 99px 10px rgba(76, 201, 240, 1);
}
.bc-time:hover {
  color: white;
  background-color: rgba(37, 160, 187, 0.685);
  box-shadow: 10px 10px 99px 10px rgba(52, 210, 247, 1);
}
.bc-Fireworks:hover {
  color: white;
  background-color: rgba(38, 61, 250, 0.5);
  box-shadow: 10px 10px 99px 10px rgba(38, 61, 250, 1);
}
</style>




<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#065870"
      text-color="#fff"
      router
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" disabled>处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">工作台</template>
        <el-menu-item index="/tiny">富文本</el-menu-item>
        <el-menu-item index="2-2">待开发</el-menu-item>
        <el-menu-item index="2-3">待开发</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">待开发</template>
          <el-menu-item index="2-4-1">待开发</el-menu-item>
          <el-menu-item index="2-4-2">待开发</el-menu-item>
          <el-menu-item index="2-4-3">待开发</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item style="float: right" index="/login">登录</el-menu-item>
      <el-menu-item style="float: right" index="4" disabled
        >消息中心</el-menu-item
      >
    </el-menu>
    <img
      class="animate__animated animate__rubberBand"
      src="../assets/logo.png"
      alt=""
    /><br />
    <div class="neon-btn">
      <button class="btn bc-hove">流星雨</button>
    </div>
  </div>
</template>
  
<script>
import "animate.css";

export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
  
<style scoped>
.neon-btn{
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #031628;
}
.btn {
  font-size: 14px;
  font-weight: 300;
  border: 1px solid;
  padding: 10ox 20px;
  text-transform: uppercase;
  background-color: transparent;
}
.bc-hove {
  color: aqua;
}
.bc-hove:hover {
  background-color: aqua;
  box-shadow: 10px 10px 99px 10px rgba(76, 201, 240, 1);
}
</style>


  

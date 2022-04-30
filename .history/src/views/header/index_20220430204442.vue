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
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">工作台</template>
        <el-menu-item index="/tiny">富文本</el-menu-item>
        <el-menu-item index="/visualization">可视化</el-menu-item>
        <el-menu-item index="2-3">待开发</el-menu-item>
        <el-submenu index="3">
          <template slot="title">待开发</template>
          <el-menu-item index="3-1">待开发</el-menu-item>
          <el-menu-item index="3-2">待开发</el-menu-item>
          <el-menu-item index="3-3">待开发</el-menu-item>
        </el-submenu>
          <el-submenu index="4">
          <template slot="title">待开发</template>
          <el-menu-item index="2-5-1">待开发</el-menu-item>
          <el-menu-item index="2-5-2">待开发</el-menu-item>
          <el-menu-item index="2-5-3">待开发</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item style="float: right" index="/login">登录</el-menu-item>
      <el-menu-item style="float: right" index="4" disabled
        >消息中心</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
    };
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="less" scoped>
</style>

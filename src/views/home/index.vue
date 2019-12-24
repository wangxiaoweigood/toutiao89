
<template >
  <!-- 放置一个外层容器 -->
  <el-container>
    <!-- 左右区域 -->
    <el-aside style="height:100vh;width:231px">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 在放置一个container -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>主要区域</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>

</style>

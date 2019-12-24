<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
    <!-- 左侧 -->
    <el-col class="left" :span="6">
      <!-- 左侧图标 -->
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col class="right" :span="6">
      <el-row type='flex' justify='end' align='middle'>
         <img src="http://img5.imgtn.bdimg.com/it/u=1685592966,2792360841&fm=26&gp=0.jpg">
        <!-- 下拉菜单 -->
         <el-dropdown>
              <span>名字</span>
              <!-- 下拉菜单 具名插槽 -->
            <el-dropdown-menu slot="dropdown">
              <!-- 下拉内容 -->
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>git地址</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 18px;
    // font-weight:300;
    .title {
      margin-left: 10px;
      color: #2c3e50;
    }
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;

    }
  }
}
</style>

<template>
     <div>
       <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#2b3a42"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">博客</el-menu-item>
          <el-menu-item index="2">投票</el-menu-item>
          <el-menu-item index="3" >参与贡献</el-menu-item>
          <el-menu-item index="4"><a >中文文档</a></el-menu-item>
        </el-menu>
     </div>
</template>
<script>
  export default {
      name: 'navbar',
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '4'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
    }
  }
</script>

<style>
.el-header {
  padding:0
}

.el-menu-demo{
  display: flex;
  flex-direction: row-reverse;
}

</style>

<style scoped>
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,.el-menu-item.is-active {
  color: #fff!important;
  border-bottom-color: #8dd6f9!important;
}
</style>

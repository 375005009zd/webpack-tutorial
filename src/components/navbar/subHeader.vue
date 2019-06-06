<template>
     <div>
       <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#f2f2f2"
          text-color="#2086d7"
          active-text-color="#333333">
          <el-menu-item index="1">插件</el-menu-item>
          <el-menu-item index="2">LOADERS</el-menu-item>
          <el-menu-item index="3" >指南</el-menu-item>
          <el-menu-item index="4"><a >API</a></el-menu-item>
           <el-menu-item index="5"><a >配置</a></el-menu-item>
            <el-menu-item index="6"><a >概念</a></el-menu-item>
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
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    background:transparent!important;
    border:none!important;
}


.el-menu--horizontal>.el-menu-item {
    height: 40px;
    line-height: 40px;
    border:none!important;
}
</style>

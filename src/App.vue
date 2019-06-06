<template>
     <div>
       <el-container>
        <el-header>
          <router-view></router-view>
        </el-header>
        <el-header>
          <router-view name="subheader"></router-view>
        </el-header>
        <el-container>
          <el-aside width="290px">
              <router-view name="sidemenu">
          </router-view></el-aside>
          <el-main>
            <router-view name="maincontent"></router-view>
          </el-main>
        </el-container>
      </el-container>

     </div>
</template>
<script>
    export default {
        name:'App',
      
    }
</script>


<style>

</style>
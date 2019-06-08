<template>
     <div>
       <el-container>
        <el-header>
          <TopHeader></TopHeader>
        </el-header>
        <el-header>
          <SubHeader></SubHeader>
        </el-header>
        <el-container>
          <el-aside width="290px">
              <SideMenu></SideMenu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

     </div>
</template>
<script>
import TopHeader from '@/components/navbar'
import SubHeader from '@/components/navbar/subHeader'
import SideMenu from '@/components/sidemenu'

export default {
    name: 'homepage',
    components: {
      TopHeader,
      SubHeader,
      SideMenu
    }
  
}
</script>


<style>

</style>
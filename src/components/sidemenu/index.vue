<template>
     <div>
       <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>概念</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" route="/concepts">入口（entry）<router-link to="/concepts">ggg</router-link></el-menu-item>
                  <el-menu-item index="1-2">出口（output）</el-menu-item>
                  <el-menu-item index="1-2">loader</el-menu-item>
                  <el-menu-item index="1-2">插件（plugins）</el-menu-item>
                  <el-menu-item index="1-2">模式</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>入口起点（entry points）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">单个入口（简写）语法</el-menu-item>
                  <el-menu-item index="2-2">对象语法</el-menu-item>
                  <el-menu-item index="2-2">常见场景</el-menu-item>
                  <el-menu-item index="2-2">分离 应用程序(app) 和 第三方库 vendor</el-menu-item>
                  <el-menu-item index="2-2">多页面应用程序</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>输出（output）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">用法（Usage）</el-menu-item>
                  <el-menu-item index="3-2">多个入口起点</el-menu-item>
                  <el-menu-item index="3-2">高级进阶</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>模式（mode）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">用法</el-menu-item>
                  <el-menu-item index="4-2">mode：development</el-menu-item>
                  <el-menu-item index="4-2">mode：production</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>loader</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">示例</el-menu-item>
                  <el-menu-item index="5-2">使用 loader</el-menu-item>
                  <el-menu-item index="5-2">配置（Configration）</el-menu-item>
                  <el-menu-item index="5-2">内联</el-menu-item>
                  <el-menu-item index="5-2">CLI</el-menu-item>
                  <el-menu-item index="5-2">loader 特性</el-menu-item>
                  <el-menu-item index="5-2">解析 loader</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>插件（plugins）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">剖析</el-menu-item>
                  <el-menu-item index="6-2">用法</el-menu-item>
                  <el-menu-item index="6-2">配置</el-menu-item>
                  <el-menu-item index="6-2">Node API</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>配置（configuration）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">基本配置</el-menu-item>
                  <el-menu-item index="7-2">多个 Target</el-menu-item>
                  <el-menu-item index="7-2">使用其他配置语言</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>模块（modules）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">什么是 webpack 模块</el-menu-item>
                  <el-menu-item index="8-2">支持的模块类型</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>模块解析（module resolution）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="9-1">webpack 中的解析规则</el-menu-item>
                  <el-menu-item index="9-2">绝对路径</el-menu-item>
                  <el-menu-item index="9-2">相对路径</el-menu-item>
                  <el-menu-item index="9-2">模块路径</el-menu-item>
                  <el-menu-item index="9-2">解析 Loader(Resolving Loaders)</el-menu-item>
                  <el-menu-item index="9-2">缓存</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="10">
                <i class="el-icon-document"></i>
                <span slot="title">依赖图（dependency graph）</span>
              </el-menu-item>
              <el-submenu index="11">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>manifest</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="11-1">Runtime</el-menu-item>
                  <el-menu-item index="11-2">Main</el-menu-item>
                  <el-menu-item index="11-2">问题</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>构建目标（targets）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="12-1">用法</el-menu-item>
                  <el-menu-item index="12-2">多个 Target</el-menu-item>
                  <el-menu-item index="12-2">资源</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="13">
                <template slot="title">
                  <i class="el-icon-arrow-right"></i>
                  <span>模块热替换（hot module replacement）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="13-1">这一切是如何运行的？</el-menu-item>
                  <el-menu-item index="13-2">在应用程序中</el-menu-item>
                  <el-menu-item index="13-2">在编译器中</el-menu-item>
                  <el-menu-item index="13-2">在模板中</el-menu-item>
                  <el-menu-item index="13-2">在 HMR Runtime 中</el-menu-item>
                  <el-menu-item index="13-2">入门</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
       </el-row>
     </div>
</template>
<script>
  export default {
      name: 'sidemenu',
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    }
  }
</script>

<style>

</style>

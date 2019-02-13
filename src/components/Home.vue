<template>
    <div>
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item v-for="(item,index) in nav" :key="item.id" index="index">
                        {{ item.name }}
                    </el-menu-item>
                    
                    
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="300px">
                    <el-menu :default-active="menuIndex" active-text-color="#f00" unique-opened >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <ElMenuItem index="1-1">a</ElMenuItem>
                            <ElMenuItem index="1-2">b</ElMenuItem>
                            <ElMenuItem index="1-3">c</ElMenuItem>
                            <ElMenuItem index="1-4">d</ElMenuItem>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>导航二</span>
                            </template>
                            <ElMenuItem index="2-1">a</ElMenuItem>
                            <ElMenuItem index="2-2">b</ElMenuItem>
                            <ElMenuItem index="2-3">c</ElMenuItem>
                            <ElMenuItem index="2-4">d</ElMenuItem>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>主内容区</el-main>
            </el-container>
            <el-footer>底部区域</el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      news: [{ id: 11, title: "hdphp" }, { id: 12, title: "hdcms" }],
      input: "",
      activeIndex: "1",
      menuIndex: "1"
    };
  },
  computed: {
      count(){
          console.log(this.$store.state);
          return this.$store.state.menu.count;
      },
      nav(){
          return this.$store.state.nav.menu;
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="3">
                <h1>
                    <a href>朝花夕拾</a>
                    <i :class="iconview" style="color: #409eff;cursor:pointer;" @click="chanView"></i>
                </h1>
            </el-col>
            <div :class="menuview">
                <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="17">
                    <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                    >
                        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                        <el-menu-item index="2" ><router-link to="/posts">后端文章</router-link> </el-menu-item>
                        <el-menu-item index="3" ><router-link to="/posts">后端文章</router-link> </el-menu-item>
                        <el-menu-item index="4" ><router-link to="/posts">后端文章</router-link> </el-menu-item>

                    </el-menu>
                </el-col>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                    <el-input placeholder="请输入搜索关键词" suffix-icon="el-icon-search" v-model="keywords"></el-input>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuview: "hidden-sm-and-down",
                iconview: ["el-icon-s-unfold", "hidden-md-and-up"],
                activeIndex: "1",
                activeIndex2: "1",
                keywords:''
            };
        },
        methods: {
            chanView() {
                if (this.menuview != "") {
                    this.iconview[0] = "el-icon-s-fold";
                    this.menuview = "";
                } else {
                    this.iconview[0] = "el-icon-s-unfold";
                    this.menuview = "hidden-sm-and-down";
                }
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style lang="less" scoped>
    h1 {
        margin: 0;
        float: left;
        font-size: 2em;
        font-weight: 400;
        padding: 10px;
        a {
            color: #409eff;
            text-decoration: none;
        }
    }
    .el-menu {
        background: none;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-input {
        margin: 10px 0px;
    }
</style>

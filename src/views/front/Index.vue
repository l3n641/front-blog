<template>
<div class="index">
    <el-container>
        <Header></Header>
        <el-container >

                <el-main  class="main">
                    <el-row :gutter="20">
                        <el-col :span="21" :offset="3" >
                            <IndexCarousel></IndexCarousel>
                            <div class="new_line">最新发布:</div>
                            <div class="content-background" >
                                <el-row >
                                    <el-col class="post_list"><Post></Post></el-col>
                                    <el-col class="post_list"><Post ></Post></el-col>
                                </el-row>
                            </div>
                        </el-col>

                    </el-row>

                </el-main>

            <Aside></Aside>

        </el-container>
        <el-footer class=" flex: 0 0 auto;">
            fg
        </el-footer>

    </el-container></div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import IndexCarousel from "@/components/IndexCarousel.vue"
    import Post from "@/components/Post.vue"
    import Aside from "@/components/Aside.vue"

    export default {
        components: { Header,IndexCarousel ,Post,Aside},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
.top-nav{
float:right
}
<style >

    .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
    }


    .el-main {
        background-color: #F6F6F6;
        color: #333;
        line-height: 1em;
        min-height: calc(100vh - 120px);
    }

    .new_line {
        background-color: #FFFFFF;
        margin-top: 1em;
        padding: 0.5em;

    }


    .content-background {
        background-color: #FFFFFF;
        margin-top: 1em;
        padding: 0.5em;


    }


    .post_list {
        margin-top: 0.5em;
        border-bottom: #F6F6F6 solid 0.1em;
    }

</style>

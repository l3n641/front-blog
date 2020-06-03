<template>
    <div class="index">
        <el-container>
            <Header></Header>
            <el-container >

                <el-main  class="main">
                    <el-row :gutter="20">
                        <el-col>

                            <el-row>
                                <el-col :span="21" :offset="3" >
                                    <div class="content-background" >
                                        <el-row class="article-header">
                                            <header >
                                                <el-col  span="16"  offset="6" >
                                                    <h1 class="article-title">php如何判断一个日期的格式是否正确</h1>
                                                </el-col>
                                                <el-col>
                                                    <el-row  class="article-meta">
                                                        <div class="article-meta">
                                                            <el-col span="5" offset="3">
                                                                <time > <i class="el-icon-time"></i> 2016-1-4 10:29:39</time>
                                                            </el-col>
                                                            <el-col span="3"  offset="1" clss="post-type">
                                                                <i class="el-icon-s-order"></i><a href="program" title="" draggable="false">后端程序</a>
                                                            </el-col>
                                                            <el-col span="3" offset="1" class="article-meta-views" >
                                                                <i class="el-icon-reading"></i> 共120人围观
                                                            </el-col>
                                                            <el-col span="3" offset="1" class="item article-meta-comment" >
                                                                 <i class="glyphicon glyphicon-comment"></i> 0个不明物体
                                                            </el-col>
                                                        </div>
                                                    </el-row>
                                                </el-col>
                                                </header>
                                        </el-row>

                                        <el-row >
                                            <article class="article" >
                                                <el-col offset="1" >11222211</el-col>
                                            </article>
                                            <el-col   class="tags">
                                                <div class="article-tags">标签：
                                                    <a href="" rel="tag" class="tag" >PHP</a>
                                                    <a href="" rel="tag" class="tag" >PHP</a>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>

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
    import Aside from "@/components/Aside.vue"

    export default {
        components: { Header ,Aside},
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



    .content-background {
        background-color: #FFFFFF;
        margin-top: 1em;
        padding: 0.5em;


    }

    .article-header{
        border-bottom: #F6F6F6 solid 0.2em;
        margin-bottom: 1em;
    }

    .article-meta{
        font-size: 12px;
    }
    .article-title{
        line-height:150%
    }

    .article{
        min-height: 25em;
    }
    .tags{
        margin-top:1em;
        padding-top:  1em;
        border-top: solid 2px #F6F6F6;
        text-align: center;
    }
    .tag{
        background-color: #3f99cc;
        font-size: 12px;
        color: #ffffff;
        text-decoration:none;
        margin: 0.5em;
    }

</style>

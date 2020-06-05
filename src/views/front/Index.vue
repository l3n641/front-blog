<template>
<div class="index">
    <el-container>
        <Header></Header>
        <el-container >

                <el-main  class="main">
                    <el-row :gutter="20">
                        <el-col :span="21" :offset="3" >
                            <IndexCarousel></IndexCarousel>

                            <div class="new_line"><el-link type="danger">最新发布:</el-link></div>
                            <div class="content-background" >
                                <el-row v-for="data in post_datas" :key="data.id">
                                    <el-col class="post_list">
                                        <Post :post_data = " data "></Post>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>

                    </el-row>

                </el-main>

            <Aside></Aside>

        </el-container>
        <el-footer >
            fg
        </el-footer>

    </el-container></div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import IndexCarousel from "@/components/IndexCarousel.vue"
    import Post from "@/components/Post.vue"
    import Aside from "@/components/Aside.vue"
    import {get_posts} from "@/api/posts.js"

    export default {
        components: { Header,IndexCarousel ,Post,Aside},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                post_datas:[],
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
         mounted() {
            get_posts().then((response)=>{
               this.post_datas= this.post_datas.concat( response.data)
            })
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
        margin-top: 0.5em;
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

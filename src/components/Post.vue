<template>
    <div class="">
        <el-row>
            <el-col :span="20" :offset="2">
                <article class="">

                    <el-row>
                        <header >
                            <el-col :span="3" v-if="visible_title">
                                <router-link class="post_type" :to="{path:'/posts/'+post_data.id}">
                                    后端程序
                                </router-link>
                            </el-col>
                            <el-col :span="16"  class="title">
                                    <router-link style="color: #4A9FF9"  :to="{path:'/posts/'+post_data.id}">
                                        {{post_data&& post_data.title}}
                                </router-link>
                            </el-col>

                        </header>


                    </el-row>

                    <el-row :gutter = " 20 ">
                    <p class="meta">

                            <el-col :span="8">
                                <time class="time"><i class="el-icon-time"></i> {{post_data&& post_data.create_time}}</time>
                            </el-col>

                            <el-col :span="6">
                                <span class="views"><i class="el-icon-reading"></i> {{post_data&& post_data.post_views}}</span>
                            </el-col>


                            <el-col :span="4 " v-if="visible_comment">
                                <a class="comment" href="article.html#comment" draggable="false"><i class="el-icon-s-comment"></i> 0个不明物体</a>
                            </el-col>
                    </p>
                    </el-row>
                    <el-row>
                        <div  class="note" v-if="visible_content" v-html="post_data.content.substring(0,300)"></div>
                    </el-row>


                </article>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Post",

        props:{
            visible_title:{
                type: Boolean,
                default: true
                ,
            },
            visible_comment:{
                type: Boolean,
                default:true,
            },
            visible_content:{
                type: Boolean,
                default:true,
            },
            post_data:Object,
        },

    }
</script>

<style scoped>

 .title{
     font-size: 24px;
     padding-top: 0.5em;
     margin-top: 0.5em;
 }
 .header{
     font-size: 9em;
 }
  .meta{
      font-size: 12px;
  }
  .post_type{
      font-size: 13px;
      color: #2ac06d;
  }

 a{
     text-decoration:none;
     color: #000000;

 }
</style>

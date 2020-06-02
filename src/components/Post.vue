<template>
    <div class="">
        <el-row>
            <el-col :span="20" :offset="2">
                <article class="">

                    <el-row>
                        <header >
                            <el-col :span="3" v-if="visible_title"><a  href="program" style="" ><i>后端程序</i></a></el-col>
                            <el-col :span="16" ><p><a href="article.html" title="" >php如何判断一个日期的格式是否正确</a></p></el-col>

                        </header>


                    </el-row>

                    <el-row :gutter = " 20 ">
                    <p class="meta">

                            <el-col :span="8">
                                <time class="time"><i class="el-icon-time"></i> 2016-1-4 10:29:39</time>
                            </el-col>

                            <el-col :span="6">
                                <span class="views"><i class="el-icon-reading"></i> 共120人围观</span>
                            </el-col>


                            <el-col :span="4 " v-if="visible_comment">
                                <a class="comment" href="article.html#comment" draggable="false"><i class="el-icon-s-comment"></i> 0个不明物体</a>
                            </el-col>
                    </p>
                    </el-row>
                    <el-row>
                        <p class="note" v-if="visible_content">
                            可以用strtotime()把日期（$date）转成时间戳，再用date()按需要验证的格式转成一个日期，来跟$date比较是否相同来验证这个日期的格式是否是正确的。所以要验证日期格式 ...
                        </p>
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
            }
        }
    }
</script>

<style scoped>
 .header{
     font-size: 9em;
 }
  .meta{
      font-size: 12px;
  }

 a{
     text-decoration:none;
     color: #000000;

 }
</style>

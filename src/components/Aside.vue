<template>
    <el-aside :width="width"  >
        <el-row >
            <el-col   :span = " 20 " :offset="2">
                <el-row >
                    <el-col >
                        <IndexTable class="tab"  style="margin-top: 1.5em"></IndexTable>
                    </el-col>
                </el-row>


                <el-row style="margin-top: 1em" >
                    <el-col style="background: #FFFFFF; padding:1em 1em ; margin-bottom: 0.1em " >
                        热门文章
                    </el-col>
                    <el-col>
                        <HotPost style="background: #FFFFFF; padding-bottom:0.5em  ; margin-bottom: 0.5em "></HotPost>

                    </el-col>

                </el-row>



            </el-col>
        </el-row>

    </el-aside>
</template>

<script>
    import IndexTable from "@/components/IndexTab.vue"
    import HotPost from "@/components/HotPost.vue"

    export default {
        name: "Aside",
        components: {IndexTable,HotPost},
        props:{
            'width':{
                type: String,
                default:"25%"
            }
        }
    }
</script>

<style scoped>

    .el-aside {
        background-color: #F6F6F6;
        color: #333;
        line-height: 1em;
    }

</style>

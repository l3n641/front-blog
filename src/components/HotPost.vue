<template>
    <el-row  >

        <el-row >
            <el-col class="post_list" ><Post :visible_title="false" :visible_content="false" :visible_comment="false"></Post></el-col>
        </el-row>

        <el-row >
            <el-col class="post_list" ><Post :visible_title="false" :visible_content="false" :visible_comment="false"></Post></el-col>
        </el-row>

    </el-row>

</template>

<script>
    import Post from "@/components/Post.vue"

    export default {
        name: "HotPost",
        components:{Post}
    }
</script>

<style scoped>

    .hot-post {
        margin-top: 1em;
    }

</style>

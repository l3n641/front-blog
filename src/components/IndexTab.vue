<template>
    <div >
        <el-tabs type="border-card">
            <el-tab-pane label="网站公告">网站公告</el-tab-pane>
            <el-tab-pane label="会员中心">会员中心</el-tab-pane>
            <el-tab-pane label="联系站长">11</el-tab-pane>
        </el-tabs>
    </div>

</template>
<script>

    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style scoped lang="less">

</style>

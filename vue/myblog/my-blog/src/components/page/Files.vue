<template>
    <div class="files_box">
        <i class="files_title">文件档案:</i>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="2018年" name="1" >
                <div class="files_article">
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    <i class="time">发表于：2018-11-12 22:22:22</i>
                </div>
                <div class="files_article">
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    <i class="time">发表于：2018-11-12 22:22:22</i>
                </div>
            </el-collapse-item>
            <el-collapse-item title="2017年" name="2">
                <div class="files_article">
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    <i class="time">发表于：2018-11-12 22:22:22</i>
                </div>
                <div class="files_article">
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    <i class="time">发表于：2018-11-12 22:22:22</i>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(2);
                console.log("this.activeNames.length" + this.activeNames.length);
                if (this.activeNames.length > 1) {
                    console.log(1);
                    val.shift();
                }
            }
        }
    }
</script>

<style scoped>
    .files_title {
        display: block;
        line-height: 60px;
        text-align: left;
        font-size: 24px;
        color: #409EFF;
    }
    .files_article {
        display: block;
        line-height: 30px;
        font-size: 16px;
        color:#42b983;
    }
    .time{
        display: block;
        line-height: 30px;
        font-size: 12px;
        color:#e6e6e6;
    }
</style>


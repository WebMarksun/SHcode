<template>
    <div class="label_box">
        <el-tag class="labels" v-for="tag in tags" :key="tag.name" :type="tag.type">
            {{tag.name}}
            <i>{{tag.num}}</i>
        </el-tag>
        <div v-show="true">
            <i class="label_key">关键字</i>
            <ul class="label_article_list">
                <li>
                    <div>文章标题跳转到内容展示页面</div>
                    <i class="time">修改于:2018-11-11 12:22:22</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tags: [{
                        name: '标签一',
                        type: '',
                        num: '11'
                    },
                    {
                        name: '标签二1111',
                        type: 'success',
                        num: '111'
                    },
                    {
                        name: '标签三11111',
                        type: 'info',
                        num: '1111'
                    },
                    {
                        name: '标签四1111111',
                        type: 'warning',
                        num: '11111'
                    },
                    {
                        name: '标签五1',
                        type: 'danger',
                        num: '111111'
                    }
                ]
            };
        }
    }
</script>

<style scoped>
    .label_box {
        line-height: 60px;
    }
    .labels {
        margin: 0 20px;
    }
    .label_key {
        display: block;
        text-align: left;
        color: #409EFF;
    }
    .label_article_list {
        margin-left: 10px;
    }
    .label_article_list li {
        line-height: 30px;
        text-align: left;
        margin: 5px 0;
        color:#42b983;
    }
    .label_article_list li .time {
        display: block;
        line-height: 20px;
        font-size: 10px;
        text-align: right;
        margin: 5px 0;
        color:#e6e6e6;
    }
</style>


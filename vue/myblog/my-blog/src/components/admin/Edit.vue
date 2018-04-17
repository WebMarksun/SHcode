<template>
    <div class="box">
        <div class="art_box">
            <div class="art_title">文章列表 <span>+</span></div>
            <div class="art_list">
                <ul>
                    <li>
                        <span class="art_name">这是一篇文章</span>
                        <span class="art_time">2018-11-20 11:11:11</span>
                    </li>
                    <li>
                        <span class="art_name">这是一篇文章</span>
                        <span class="art_time">2018-11-20 11:11:11</span>
                    </li>
                    <li>
                        <span class="art_name">这是一篇文章</span>
                        <span class="art_time">2018-11-20 11:11:11</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="edit_box">
            <div class="art_title">
                <input type="text" placeholder="标题">
            </div>
            <div class="label_box">
                <span>选择标签</span>
                <el-checkbox-group v-model="checklabels" :min="1">
                    <el-checkbox v-for="lab in labelOptions" :label="lab" :key="lab">{{lab}}</el-checkbox>
                </el-checkbox-group>
                <div class="handle">
                    <input type="text" placeholder="增删标签">
                    <el-row>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
                </div>
                <div class="endhandle">
                    <el-row>
                        <el-button type="success">确认发布</el-button>
                        <el-button type="danger">删除草稿</el-button>
                    </el-row>
                </div>
                <div class="edit_content">
                    <textarea name="field" id="fieldel" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelOptions: ['label1', 'label2', 'label3', 'label4'],
                checklabels: ['label1', 'label2']
            }
        }
    }
</script>

<style scoped>
    .art_box {
        border: 1px solid #ddd;
        display: inline-block;
        background-color: #fff;
        width: 30%;
        float: left;
        max-width: 280px;
        max-height: 500px;
        padding-bottom: 20px;
    }
    .edit_box {
        max-height: 500px;
        border: 1px solid #ddd;
        border-left: 0;
        display: inline-block;
        background-color: #fff;
        padding-bottom: 20px;
        width: 65%;
        float: left;
    }
    .art_box .art_title {
        border-bottom: 1px solid #ddd;
        text-align: left;
        /* width:100%; */
        line-height: 20px;
        font-size: 16px;
        padding: 15px;
        color: #34495e;
    }
    .art_box .art_title span {
        float: right;
        font-size: 20px;
        color: block;
        font-weight: 500;
        line-height: 20px;
    }
    .art_box .art_list ul {
        overflow: scroll;
        max-height: 500px;
        padding: 0 10px;
    }
    .art_box .art_list li {
        border-bottom: 1px solid #ddd;
        padding: 10px;
    }
    .art_box .art_name {
        display: inline-block;
        font-size: 16px;
        text-align: left;
        color: #42b983;
        width: 100%;
        height: 20px;
    }
    .art_box .art_time {
        width: 100%;
        display: inline-block;
        font-size: 10px;
        line-height: 10px;
        text-align: left;
    }
    .edit_box .art_title input {
        margin: 10px 2%;
        width: 96%;
        height: 30px;
        font-size: 20px;
    }
    .label_box .el-button.is-circle {
        padding: 2px;
    }
    .handle input {
        width: 40%;
        margin: 3px;
    }
    .handle .el-row {
        display: inline-block;
        width: 100px;
    }
    .el-checkbox-group {
        margin: 3px;
    }
    span {
        font-size: 10px;
        line-height: 10px;
    }
    .endhandle .el-button{
    padding: 9px 9px;
    margin:10px 0;
    }
    .edit_content{
        width:98%;
    }
</style>

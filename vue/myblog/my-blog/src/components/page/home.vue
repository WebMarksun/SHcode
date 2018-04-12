<template>
    <div class="home_box">
        <div class="article_box">
            <div class="article_title">这里是文章的title</div>
            <div class="time_box">最后一次修改于：<i class="article_modify time">2018-3-19 12:11:11</i></div>
            <div class="article_content">
                这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容这里是文章的内容
            </div>
            <div class="time_box">发布于：<i class="article_publish time">2018-3-19 12:11:11</i></div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .home_box {
        /* background-color:#e6e6e6; */
        margin: 0 0 0 20px;
        padding: 0;
    }
    .article_title {
        height: 60px;
        line-height: 60px;
        text-align: left;
        font-size: 24px;
        font-weight: 550;
        color: #2c3e50;
    }
    .article_content {
        line-height: 40px;
        text-align: left;
        font-size: 16px;
        color: #2c3e50;
    }
    .time_box {
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-size: 12px;
        color: #e6e6e6;
    }
</style>

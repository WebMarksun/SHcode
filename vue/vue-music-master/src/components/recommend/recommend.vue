<template>
  <div class="recommend">
    <div class="recpmmend-swiper">
      <slide :swiper-slides="recommends"></slide>
    </div>
    <h1 class="list-title">热门歌单推荐</h1>
    <div class="recommend-list">
        <ul>
          <li @click="selectItem(item)" v-for="item in discList" class="item">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
    </div>
    <div class="loading-container" v-show="!discList.length">
      <loading></loading>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getRecommend, getDiscList} from 'api/recommend'
  import Loading from 'base/loading/loading'
  import {ERR_OK} from 'api/config'
  import slide from 'base/slider/slider'
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    components: {
      slide,
      Loading,
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
      /*获取轮播图数据*/
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    overflow-y:auto
    .list-title
      height: 60px
      line-height: 60px
      text-align: center
      font-size: $font-size-medium
      color: $color-theme
    .recommend-list
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 80px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>

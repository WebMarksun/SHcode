<template>
  <div>
    这是 --- {{hash}}
    <button>上一首</button>
    <button @click="next">下一首</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      hash: '',
      currentIndex: -1
    }
  },
  watch:{
    '$store.state.hash'(){
      this.hash = this.$store.state.hash;
      this.currentIndex = this.$store.state.songList.findIndex(item => item.hash == this.hash)
    }
  },
  methods:{
    next(){
      this.currentIndex++;
      this.hash = this.$store.state.songList[this.currentIndex].hash;
    }
  }
}
</script>
<style>
#app .play-bottom {
  width: 100%;
  height: 1.5rem;
  background-color:rgba(5, 5, 5, 0.7);
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  transition: .3s;
  z-index: 9;
}
.play-left {
  width: 60%;
  height: 100%;
  float: left;
  overflow: hidden;
  position:relative;
  box-sizing: border-box;
  display: flex;
}
.play-left img {
  width: 1.5rem;
  float: left;
}
.play-left p {
  margin: auto 0;
  width: 60%;
  color: #fff;
  float: left;
  font-size: .35rem;
  margin-left: .1rem;
}
.play-left p span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.play-left p span:nth-child(2){
  font-size: .3rem;
}
.play-right {
  position:relative;
  float: right;
  width: 40%;
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: .1rem;
  height: 100%;
}
.play-right > div {
  font-size: .7rem;
  color: #fff;
}

.play-right > div:active{
  color: #e5e5e5;
}
</style>


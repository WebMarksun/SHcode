import {add} from './tools'
import Vue from 'vue'
import './style/index.css'

import 'miaov';

console.log(add(1,2))

console.log('我是app')

//document.body.style.background = 'red';

new Vue({
  el:"#app"
})
import Axios from "axios";

console.log('执行了')
/* export function getHomeData(params) {
  return axios('http://m.kugou.com/?json=true')
} */
const miaov = Axios('')
console.log(miaov)

// 一秒钟之后打印1 之后再过1秒 2 在过1秒3  依次打印
// callback hell
setTimeout(() => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
    setTimeout(() => {
      console.log(3)
    }, 1000);
  }, 1000);
}, 1000);
/* 
  Promise 函数

  new Promise(function(resolve,reject){
    // 异步操作
  })

  三种状态
    pending 进行中
    resolved 成功了 
    rejected 失败了
*/

let p = new Promise(function (resolve, reject) {
  // 异步操作

  setTimeout(() => {
    console.log('我执行完了')
    //resolve(4444444);
    reject('失败了')
  }, 3000);
})
// 调用then方法，
/* 
    p.then(resolvedFn,rejectFn)
      p这个promise对象的状态变成了resolved,触发resolvedFn函数
      p这个promise对象的状态变成了rejected,触发rejectFn函数
*/
p.then((data) => {
  console.log('then执行了', data)
}/* ,(e) => {
  console.log('then执行了', e)
} */)
.catch((e) => {
  console.log(e)
})

/* setInterval(() => {
  console.log(123, p)
},1000) */



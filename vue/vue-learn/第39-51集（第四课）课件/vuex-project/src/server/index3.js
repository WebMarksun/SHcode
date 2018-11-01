import Axios from "axios";

console.log('执行了')
/* export function getHomeData(params) {
  return axios('http://m.kugou.com/?json=true')
} */
const miaov = Axios('')
console.log(miaov)

// 一秒钟之后打印1 之后再过1秒 2 在过1秒3  依次打印
// callback hell
/* setTimeout(() => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
    setTimeout(() => {
      console.log(3)
    }, 1000);
  }, 1000);
}, 1000); */

let time = (t,value) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(Math.random())
    }, t);
  })
}

/**
 * 
 * async 
 * await
 */
  // 异步函数 返回值是个promise对象
 async function fn() {
   console.log(1)
   var data1 = await time(1000)
   console.log(2, '结果为', data1)
   var data2 = await time(5000)
   console.log(3, '结果为', data2)
   var data3 = await time(2000)
   console.log(4, '结果为', data3)
 }

console.log(fn())

/* time(1000)
time(2000)
time(500) */

/*function a() {
  console.log(1)
}

function b() {
  console.log(2)
  for (var i = 0; i < 1000; i++) {
    console.log(1234)
  }
}
function c() {
  console.log(3)
}

a()
b()
c();*/


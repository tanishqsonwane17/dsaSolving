// let prompt = require('prompt-sync')()
// let input = prompt('Enter your number')
// for(let i =0; i<=n;i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(' * ')
//     }
//     console.log()
// }
// let prompt = require('prompt-sync')()
// let arr = []
// , let input = Number(prompt('Enter your Array size'))
// let innerArray = new Array(input)




// for(let i =0; i<innerArray.length; i++){
//     let insiderArray = Number(prompt('Enter your inside array length'))
//     innerArray[i] = new Array(insiderArray)
// }
// for(let i = 0; i<innerArray.length; i++){
//     for(let j =0; j<innerArray[i].length;j++){
//         innerArray[i][j] = Number(prompt('Enter your element'))
//     }
// }
// console.log(innerArray)



// let prompt = require('prompt-sync')()
// let input = Number(prompt('Enter your Array Length'));
// let arr = []
// let newArr = new Array(input);

// for(let i = 0; i<newArr.length; i++){
//   let innerArray = Number(prompt('Enter your Array indexes'));
//   newArr[i] = new Array(innerArray)
// }
// for(let i = 0; i<newArr.length;i++){
//   for(let j =0; j<newArr[i].length; j++){
//     newArr[i][j] = Number(prompt('Enter your Array elements'));
//   }
// }

// console.log(newArr)

// let arr = [

// [1,2,3],
// [4,5,6],
// [10,8,9]

// ]
// let leftsum = 0; let rightsum = 0
// for(let i = 0;i<arr.length; i++){
//   for(let j =0; j<arr[i].length; j++){
//     if(i == j) {
//       leftsum += arr[i][j]
//     }
//     if(i+j==arr.length-1){
//       rightsum+=arr[i][j]
//     }
//     if(arr[i]== arr[j]){
//       continue 
//     }
//   }
// }
// let ans = leftsum+rightsum
// console.log(ans)


// let arr = [1,2,3,4,5]
// let k = 2
// k = k%arr.length
// let count = 0
// for(let j =1; j<=k;j++){
//     count++
//     let one = arr[0]
//     for(let i =0; i<arr.length-1;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = one
// }
// console.log(arr,count)
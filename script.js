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
// console.log(arr)



// let prompt = require('prompt-sync')()
// let input = Number(prompt('Enter your array length'))
// let arr = []
// let max = 0

// for(let i = 1; i<=input;i++){
//     arr[i] = Number(prompt('Enter your array elements'))
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max)



// let prompt =  require('prompt-sync')()
// let input = Number(prompt('Enter your array length'))
// let arr = new Array(input)


// for(let i = 0;i<arr.length; i++){
//     let innerArr = Number(prompt('Enter your innner Array length'))
//     arr[i] = new Array(innerArr)
//     for(let j = 0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt('Enter your array Elements'))
//     }
// }
// console.log(arr)



// alphabetic pattern program
// let n = 5
// for(let i =1; i<=n;i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(65+j-1))
//     }
//     console.log()
// }




// let arr = [5,4,3,2,1]
// let ans = [...new Set(arr)]
// console.log(ans)

// function abc(num){
// let sum = 0;
// let temp = num;
// while(temp >0){
// sum+= temp%10;
// temp = Math.floor(temp/10)

// }
// return num%sum
// }
// console.log(abc(12))

// let n = 24;
// if(Math.sqrt(n) ){
//     console.log(true    )
// }
// else console.log(false)



// let n = 10;
// for(let i = 1; i<=n; i++){
//     if(n%3) console.log('fizz')
//      if(n%5) console.log('Buzz')
//      if(n%5 && n%3) console.log('fizzbuzz')
//     console.log(i)
// }

// let s = 'AcgDID';

// for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     let charNum = s.charCodeAt(i);

//     if (charNum >= 65 && charNum <= 90) {
//         let lower = String.fromCharCode(charNum + 32);
//         console.log(lower);
//     } else if (charNum >= 97 && charNum <= 122) {
//         let upper = String.fromCharCode(charNum - 32);
//         console.log(upper);
//     } else {
//         console.log(char); 
//     }
// }

// Count string swith giver prefix
let str = ['attention', 'atttttt', 'attiieoraojj', 'dflkajatt']
let n = 'at'
let count = 0
for(let i= 0; i<str.length;i++){
    if(str[i].startsWith(n)) count++
}
console.log(count)

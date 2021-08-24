// console.log(print(1,2));

// function print(a,b){
//     return parseInt(a)+parseInt(b);
// }

// let print= function (){
//     console.log("hello");
// }
// print();

// let print= function(a,b){
// return a+b;
// }
// console.log(print(1,2));

// let arr=["a","b","c","d"];
// function random(data, index){
//     console.log(data, index);
// }

// for(let i=0;i<arr.length;i++){
//     random(arr[i], i);
// }

// for(let i=0;i<arr.length;i++){
//     arr[i]+=2;
// }
// console.log(arr);

// for(let i in arr){
//     arr[i]+=2;
// }
// console.log(arr);

// for(let i of arr){
//     arr[i]+=2;
// }
// console.log(arr);

// arr=arr.forEach(function(data){
//    console.log(data+=2)
// })
// console.log(arr);
// let brr=[];
// for(let i in arr){
//     if(arr[i]%2 != 0){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

let arr=[1,3,2,4];
// console.log(arr.sort());
console.log(arr.sort(function(a,b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}))



arr=[1,3,2,4];
// arr=arr.sort(function(a,b){
//     if(a>b){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(arr);

// arr=arr.filter(function(value){
//     if(value%2==0){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(arr);

// console.log(arr.includes(6));

// arr=arr.slice(1,3);
// console.log(arr);
arr.sort(function(a,b){
if(a>b){
    return 1;
}else{
    return -1;
}
})
// arr.splice(1,3);
console.log(arr);
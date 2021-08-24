// let str="    Krishan Kumar Pandey     ";
// console.log(str.slice(1,9));
// console.log(str);
// str=str.slice(1,9);
// console.log(str);

// console.log(str.substr(-1,11));
// str=str.trim();
// console.log(str);
// str=str.replace("Krishan","Shri Vijay");
// console.log(str);
// str=str.toLowerCase();
// str=str.toUpperCase();
// console.log(str);
// let str="abcdefghijklmnoprstuvwxyz";
// let count=0;
// for(let i in str ){
//    if(str[i]=='b'){
//        count++;
//    }
// }
// console.log(count);

// let arr=new Array(26);
// for(let i=0;i<26;i++){
//     arr[i]=0;
// }
// for(let i =0;i<str.length;i++){
//     // let char=str[i];
//     arr[str.charCodeAt(i)-97]+=1;
// }
// console.log(arr);
// let str="123456789";
// let sum=0;
// for(let i in str){
// sum+=parseInt(str[i]);
// }
// console.log(sum);
// let str ='1A2';
// let sum=0;
// for(let i in str){
// if(str.charCodeAt(i)>47 && str.charCodeAt(i)<58){
//     sum+=parseInt(str[i]);
// }else{
//     sum+=str.charCodeAt(i);
// }
// }
// console.log(sum);
// let str="1A2";
// let sum=0;
// for(let i in str){
//     if(isNaN(str[i])){
//         sum+=str.charCodeAt(i);
        
//     }else{
//         sum+=parseInt(str[i]);
//     }
// }
// console.log(sum);

// let str="Krishan Kumar Pandey";
// let temp='';
// for(let i=str.length-1;i>=0;i--){
//  temp+=str[i];   
// }
// console.log(temp);


// let str="aaabbcaaa";
// let left=0;
// let right=str.length-1;
// let flag=0;
// while(left<right){
//     if(str[left]!=str[right]){
//         console.log("false");
//         flag=1;
//         break;
//     }
//     left++;
//     right--;
// }
// if(flag==0){
//     console.log("true");
// }
// let str="     Krishan      Kumar Pandey";
// let temp="";
// for(let i=str.length-1;i>=0;i--){
//     temp+=str[i];
// }

// let i=temp.length;
// let j=temp.length-1;
// while(j>=0){
//     if(j==' ' || j==0){
//         if(j==0){
//             console.log(temp.substring(j,i));
//         }else{
//         console.log(temp.substring(j+1, i));
//         i=j;
//         j--;
//         }
//     }
    
//     j--;
// }
// let arr=[];
// arr.push("Krishan");
// arr.push(21);
// arr.push(true);
// console.log(arr);

// arr.pop();arr.pop();arr.pop();
// console.log(arr);

// function add (a,b){
//     return parseInt(a)+parseInt(b);
// }
// console.log(add("1","2"));


// let print=function(a,b){
//     return a+b;
// }
// console.log(print(2,3));

let arr=[1,2,3,4];
// arr=arr.forEach(function(value,index,array ){
//     return arr[index]+2;
    
// });
// console.log(arr);
arr=arr.map(function temp(value, index, array){
    return value+2;
})
console.log(arr);
// function temp(data,value,array,arg1, arg2, arg3){
//     console.log(data,value,array,arg1, arg2, arg3);
// }
// arr.forEach(temp.bind(this,"hello1", "hello2", "hello3"));
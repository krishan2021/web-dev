let a="krishankumarpandeyashutoshpandey";
// let count=0;
// for(let i=0;i<a.length;i++){
//     if(a[i]=='a'){
//         count++;
//     }
// }
// console.log(count);

let arr=[];
for(let j=0;j<27;j++){
    arr[j]=0;
}

for(let i=0;i<a.length;i++){
    let val=arr[a.charCodeAt(i)-97];
    val++;
    arr[a.charCodeAt(i)-97]=val;
}
console.log(arr);
// let str="123456789";
// let sum=0;
// for(let i=0;i<str.length;i++){
//     sum+=parseInt(str[i]);
// }
// console.log(sum);
// let str="1A2";
// let sum=0;
// for(let i=0;i<str.length;i++){
// if(isNaN(str[i])){
//     sum+=str.charCodeAt(i);
// }else{
//     sum+=parseInt(str[i]);
// }
// }
// console.log(sum);

// let str="Krishan Kumar Pandey";
// let temp="";
// for(let i=str.length-1;i>=0;i--){
//     temp+=str[i];
// }
// console.log(temp);


// let str="aabbca";
// let left=0;
// let right=str.length-1;
// let flag=1;
// while(left<right){
// if(str[left]!=str[right]){
//     flag=0;
//     break;
// }
// left++;
// right--;
// }
// if(flag==0){
//     console.log("Not Pallindrome");
// }else{
//     console.log("Pallindrome");
// }

// let str="krishan kumar pandey";
// // console.log(str);
// let i=0;
// let j=1;
// let ans ="";
// while(i<str.length){
//     if(str[j]==' ' || j==str.length){
       
//             for(let x=j-1;x>=i;x--){
//                 ans+=str[x];
//             }
//             // if(j==str.length){
//             //     break;
//             // }
//             //  if(j==' '){
//                  ans+=" ";
                
//                  i=j+1;
//                  j=i+1;
//              }
            
//         // }
//         j++;
//     }
// console.log(ans);

// let str="krishan     kumar pandey";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }
// let i=rev.length-1;
// let j=i-1;
// let ans="";
// while(i>=0){
//     if(rev[j]==" " || j<0){
//         for(let x=j+1;x<=i;x++){
//            ans+=rev[x];
//         }
//         // if(j==0){
//         //     break;
//         // }
//         ans+=' ';
//         i=j-1;
//         j=i-1;
//     }
//     j--;
// }
// console.log(ans);

// let str="krishan kumar pandey";
// let ans="";
// // let i=0;
// for(let x=0;x<str.length;x++){
//     if(str[x]==' '){
// x++;
//     }else{
//         ans=str[x]+ans+" ";
//     }
// }
// console.log(ans);
// let arr=["krishan", 12, 12.5, true];
// let brr=["Ashutosh", 13, 12.5,false];

// console.log(arr.concat(brr));

// let str="krishan kumar pandey";
// console.log(str.split(" "));
let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
for(let i in arr){
     console.log(i);//typeof used hota hai data ka type janne ke lie or i index ko denote krega
}
// for(let i in arr){
//     console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }
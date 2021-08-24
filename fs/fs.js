const fs= require("fs");
// console.log(fs.readFileSync("a.txt", "utf-8"));
// console.log(fs.existsSync("a.txt"));
// fs.writeFileSync("b.txt", "Krishan! How are you.");
// let str=process.argv[2];
// let arr=(str.split(" "));
// for(let i=0;i<arr.length;i++){
// arr[i]=parseInt(arr[i]);
// }
// arr=arr.map(function(value, index){
//     parseInt(value);
// })
// console.log(arr);

let file1name=process.argv[2];
let file2name=process.argv[4];

let file1data=fs.readFileSync(file1name,"utf-8");
let file2data=fs.readFileSync(file2name,"utf-8");
if(process.argv[3]=='-a'){
console.log(file1data+"\n"+file2data);
}else if (process.argv[3]=='-aw'){
    fs.writeFileSync(file1name,file1data+"\n"+file2data );
    // fs.appendFileSync(file1name,fs.readFileSync(file2name) );// alternate method
}

#!/usr/bin/env node
const fs=require("fs");

const arguments=process.argv.slice(2);

let flags=[];
let filenames=[];
const secondaryguments=[];

for(let i of arguments){
    if(i[0]=='-'){
        flags.push(i);
    }else if (i[0]=='$'){
       secondaryguments.push(i.slice(1));
    }else{
        filenames.push(i);
    }
}

// if(flags.length==0 && filenames.length!=0){
//     for(let file of filenames){
//         console.log(fs.readFileSync(file, "utf-8"));
//     }
// }else{
// if(flags.length==1 && flags[0]=='-rs' && filenames.length!=0){
//     for(let file of filenames){
//         let arr= fs.readFileSync(file,"utf-8");
//         let array=arr.split(" ");
//         let str=array.join("");
//         console.log(str);
//     }(
// }
// }

//optimized version of above code

for(let file of filenames){
    let fileData=fs.readFileSync(file, "utf-8");

    for(let flag of flags){
        if(flag=='-rs'){    //remove space
        fileData=fileData.split(" ").join("");
    }else if (flag=='-rl'){  //remove nextline
        fileData=fileData.split("\r\n").join("");
    } 
// else if (flag=='-rsc'){    //remove special characters
//         let str="";
//         for(let char in fileData){
// if((fileData.charCodeAt(char)>=65 && fileData.charCodeAt(char)<=90) || (fileData.charCodeAt(char)>=97 && fileData.charCodeAt(char)<=122)){
//                str+=fileData[char];
//               }              
//         }
//         fileData=str;
//     }
// }
else if(flag=="-rsc"){
    for(let secondaryargument of secondaryguments){
        fileData=fileData.split(secondaryargument).join("");
    }
}
    
}console.log(fileData);

}
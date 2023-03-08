const fs=require('fs');

fs.readFile('./files/f2.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
})
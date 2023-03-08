const fs=require('fs');

fs.open('./files/f2.txt','r+',function(err,fileDescriptor){
    if(err)
    {
        console.log("Error");
    }
    else
    {
        console.log(fileDescriptor,"File opened successfully");
    }
})
const fs=require('fs');

fs.writeFile('./files/f3.txt',"Welcome to my file",err=>{
    if(err)
    {
        console.log('Error in writing file');
    }
    else
    {
        console.log("File written successfully");
    }
})
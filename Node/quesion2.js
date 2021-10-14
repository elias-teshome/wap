const { get } = require('http');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   function getNumber(total){
    readline.question('Enter value? ', x => {
       if(x.toLocaleLowerCase()==="stop")
       {
           console.log(`total is  ${total}`);
           readline.close();
       }
       else{
           getNumber(parseInt(x)+total);
       }
        

    });

   }

   getNumber();
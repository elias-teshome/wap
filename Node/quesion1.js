const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('your age? ', age => {
        if(age<16){
            console.log("You’re notallowed to drive in Iowa");
        }
        else{
            console.log("You’re allowed to get a drivers license inIowa");
        }
        readline.close();

    });

    
   
});
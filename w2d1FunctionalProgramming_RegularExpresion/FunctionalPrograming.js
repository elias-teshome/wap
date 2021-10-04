function sum(arry)
{
 
    return arry.reduce((x,y)=> x+y);

}

function multiply(arry){
    return arry.reduce((x,y) => x*y);
       
}

function reverse(str){
    return str.split('').reduce((acc,current)=>current+acc,"");
}   
function filterLongWords(words,i){
    return words.filter(e=>e.length>i);
}


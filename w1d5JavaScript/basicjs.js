function max(val1,val2){
    if(val1>val2){
        return val1;
    }
    else{
        return val2;
    }
      
}


function myFunctionTest(output,mess,f)
{
   if(f.toString()===output.toString()){
       console.log(mess + output + "  Test Succesed")
   }
   else{
    console.log(mess + output+ "Test Failer")
   }
  

}


function maxOfThree(val1,val2,val3){

    return max(val1,max(val2,val3));

}
function isVowel(ch){
    if(ch ==='a' ||ch==='A' || ch==='e'||ch==='E'||ch==='i'||ch==='I'
    ||ch==='o'||ch==='O'||ch==='u'||ch==='U'){
        return true;
    }
    else{
        return false;
    }
}
function sum(arry){
    let sum=0;
    for(let i=0;i<arry.length;i++){
        sum+=arry[i];
    }
    return sum;

}
function multiply(arry){
  return arry.reduce((x,y) => x*y);
     
}

function reverse(str){
    let reversString="";
    
    for(let i=str.length-1;i>=0;i--){
        reversString+=str[i];
    }
    return reversString;
}
function findLongestWord(arry){

    let maxCount=0;
    for(let i=0;i<arry.length;i++){
        maxCount=max(maxCount,arry[i].length);
    }
  return maxCount;
}

function filterLongWords(words,j){
     
 
    return words.filter(wor=>wor.length>j)

    }

//map,reduce  and filter

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})



const c = a.filter(function(elem, i, array){
  return elem ===3;});


const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");
document.writeln(b.toString() + "<br/>");
document.writeln(c.toString() + "<br/>");




//test the result
myFunctionTest(20,"Expected output of max(20,10) is  ", max(20,10))
myFunctionTest(4,"Expected output of maxOfThree(1,3,4) is  ", maxOfThree(1,3,4))
myFunctionTest(true,"Expected output of isVowel('A') is  ", isVowel('A'))
myFunctionTest(108,"Expected output of sum([1,3,4,100]) is  ", sum([1,3,4,100]))
myFunctionTest(12,"Expected output of multiply([1,3,4]) is  ", multiply([1,3,4]))
myFunctionTest('saile',"Expected output of reverse('elias') is  ", reverse('elias'))
myFunctionTest(4,"Expected output of findLongestWord(['ab','abc','abcd']) is  ", findLongestWord(['ab','abc','abcd']))
myFunctionTest(['abcd'],"Expected output of filterLongWords(['ab','abcd'],2) is  ", filterLongWords(['ab','abcd'],2))
// // var a = 12;
// // var b = 8;
// // var z=x(b,a);
// // z(a,b)
// // function x(a) {

// //     console.log(`1:${this} ${a} ${b}`);

// //     var b=function(b){
// //         if(a<=10){
// //             a=a*2;
// //         }
// //         console.log(`2:${this} ${a} ${b}`)
// //     };
   

// //     console.log(`3:${this} ${a} ${b}`)
// //     return b.bind({a:5,b:20})
// // }

// quesion 1

// var count =(function(){
// var counter=0;
// function add(){
//     return counter+=1;
// }

// function reset(){
//   counter=0;
// }

// return{
  
//     add:add,
//     reset:reset
// };

// })();
// console.log(count.add())

// quesion 2

// counter is the free variable. 
// Free variable is simple neither locally declared nor passed as aparameter 

// quesion 3


// var add=(function(){

//   var make_adder=function(inc){ 

//     var counter =0; 
    
//     return function add(inc){ 
    
//      counter +=inc; 
    
//     } 
//   }

//   return {
   
//     make_adder:make_adder

//   }

// })();

// make_adder(5);
// make_adder(5);
// console.log(2 2(5));





// quesion 4
// You can add a module containing all the functions and variable declarations and include them with a single function definition that is enclosed in parenthesis. We can create a module that is executed right away. For example 

// (function(params) { 

// Statements; 

// })(params); 

// quesion 5
// var employee = function(name, age, salary){ 

//       this.name = name; 
  
//       this.age = age; 
  
//       this.salary = salary; 
  
   
  
//       function setAge(newAge){ 
  
//           this.age = newAge; 
  
//       } 
  
   
  
//       function setSalary(newSalary){ 
  
//           this.salary = newSalary; 
  
//       } 
  
   
  
//       function setName(newName){ 
  
//           this.name = newName; 
  
//       } 
  
   
  
//       function getAge(){ 
  
//           return this.age; 
  
//       } 
  
   
  
//       function getSalary(){ 
  
//           return this.salary; 
  
//       } 
  
   
  
//       function getName(){ 
  
//           return this.name; 
  
//       } 
  
   
  
//       function increaseSalary(percentage){ 
  
//           return this.getSalary() + (this.getSalary() * percentage); 
  
//       } 
  
   
  
//       function incrementAge(){ 
  
//           return this.getAge() + 1; 
  
//       } 
  
   
  
//       return { 
  
//           setAge: setAge, 
  
//           setSalary: setSalary, 
  
//           setName: setName, 
  
//           increaseSalary: increaseSalary, 
  
//           incrementAge: incrementAge 
  
//       }; 
  
//   })();

// quesion 6

// employee.extension=function(address){


// this.address=address; 
// var setAdress=function(add){this.address=add;} 

// var getAddress=function(){return this.address;} 


// }

// var x=5
// var y=test()
// var b={x:4}
// var z=y.bind(b)
// z();

//   function test(){
//   console.log(this);
//   console.log(x);

//   var z= function(){

//     var x=3;
//     console.log(this);
//     console.log(this.x);

//   }
// var x=8;
// z();
// return z;

// }

// var x
// = 10
// ;
// function main()
// {
//  console
// .log
// ("x1 is:"
// + x);
//  x
// = 20
// ;
//  console
// .log
// ("x2 is:"
// + x);
//  if
// (x
// >
// 0
// )
// {
//  var x
// = 30
// ;
//  console
// .log
// ("x3 is:"
// + x);

// }
//  console
// .log
// ("x4 is:"
// + x);
//  var x
// = 40
// ;
//  var f
// = function
// (
// x
// )
// {
//  console
// .log
// ("x5 is:"
// + x);
//  };

// f
// (50);
//  console
// .log
// ("x6 is:"
// + x);
// }
// main();
// console
// .log
// ("x7 is:"
// + x);


const obj1={
    x:4,
    y:5,
    func:function(){
        return this.x*this.y;
    },
    fun:function(){
        console.log(this.x +" "+ this.y);
    }

};

console.log(obj1.func());
obj1.fun();
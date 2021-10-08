mocha.setup("bdd");
let assert = chai.assert;

describe("function banned word",function(){
    it("String object must have a filter method",function(){
        assert.notEqual(String.prototype.filter,undefined);
    })
    it("should return the string itself if the argument is empty",function(){
        let myString="ela ela";
        assert.equal(myString.filter(""),myString);
    })
   
})

describe("bubble sort",function(){
    it("Array have a bubleSort method",function(){
        assert.notEqual(Array.prototype.bubbleSort,undefined);
    })
    it("should return the string itself if the argument is in ascending order",function(){
        let arg=[1,2,3,4,5];
        assert.deepEqual(arg.bubbleSort(),arg);
    })
    it("should return 1,2,3,4 when given 4,3,2,1",function(){
        let arg=[4,3,2,1];
        assert.deepEqual(arg.bubbleSort(),[1,2,3,4])
    })
})
describe("test inheritance of teacher",function(){
    it("Teacher must have a method describe; to ensure it inherits from Person",function(){
        assert.notEqual(Teacher.prototype.describe,undefined);
    });
    it("return valid string",function(){
        assert.equal(new Teacher("Michael Zijlstra").teach("wap"),"Michael Zijlstra is teaching wap");
    })
})
window.onload=function(){
    mocha.run();
}
mocha.setup("bdd");
let assert = chai.assert;

describe("sum",function(){
    let test1=[1,2,3,4,5,6];
    it(`summation of ${test1} is 21`,function(){
        assert.equal(sum(test1),21);
    });
    let test2=[2,1,-5];
    it(`summation of ${test2} is -2`,function(){
        assert.equal(sum(test2),-2);
    });
   
    
});

describe("multiply",function(){
    let test1=[1,2,3,4,5];
    it(`multiplication of ${test1} is 120`,function(){
        assert.equal(multiply(test1),120);
    });
    let test2=[2,6,1,0];
    it(`multiplication of ${test2} is 0`,function(){
        assert.equal(multiply(test2),0);
    });
    
});

describe("reverse",function(){
    it("reverse of elias is saile",function(){
        assert.equal(reverse("elias"),"saile");
    });
    it('reverse of girma is amrig',function(){
        assert.equal(reverse("girma"),"amrig");
    });
   
});
describe("filterLongWords",function(){
    let test1=["er","rt","tyyu","ytrr","ghtrgr"];
    it(`longer words with 3 from ${test1} is ["tyyu","ytrr","ghtrgr"]`,function(){
        assert.deepEqual(filterLongWords(test1,3),["tyyu","ytrr","ghtrgr"]);
    })
    let test2=["ela","","g"]
    it(`longer words with 2 from ${test2} is ["ela"]`,function(){
        assert.deepEqual(filterLongWords(test2,2),["ela"]);
    })
   
});
window.onload=function(){
    mocha.run();
}
class ExtendOne extends Array{
    showOne(){
        console.log("ExtendOne");
    }
};

class ExtendTwo extends Array{
    static get [Symbol.species](){
        return ExtendOne;
    }
    showTwo(){
        console.log('ExtendTwo');
    }
};

let twoInst = new ExtendTwo(10, 20, 30);
let threeInst = twoInst.filter(value => value > 20);
console.log(threeInst);

threeInst.showOne();
console.log(threeInst.showTwo);
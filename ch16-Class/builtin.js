class ExtendArray extends Array{
    constructor(){
        super();
    }
    getTotal(){
        let total = 0;
        for(var value of this){
            total += value;
        };
        return total;
    }
};

let obj = new ExtendArray();
obj.push(10, 20);
console.log(obj.getTotal());    //  30
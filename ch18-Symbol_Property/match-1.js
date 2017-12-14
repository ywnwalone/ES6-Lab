console.log("sport".match(/s/));

class MatchCheck{
    constructor(base){
        this.base = base;
    }
    [Symbol.match](target){
        return this.base.indexOf(target) >= 0;
    }
}

let instMatch = new MatchCheck("sport");
console.log("po".match(instMatch));
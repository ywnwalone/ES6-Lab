let obj = {
    [Symbol.iterator](){
        return{
            maxCoutn: 2,
            count:  0,
            next(){
                if(this.count < this.maxCount){
                    return {value: this.count++ , done: false};
                }
                return {value: undefined, done: true}
            }
        }
    }
}

let iteratorObj = obj[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
const sym1 = Symbol('symbol one');
const sym2 = Symbol('symbol two');

class Sports{
    static [sym1](){
        return 'symbol-1';
    }
    [sym2](){
        return 'sym-2';
    }
}
console.log(Sports[sym1]());

let obj = new Sports();
console.log(obj[sym2]());
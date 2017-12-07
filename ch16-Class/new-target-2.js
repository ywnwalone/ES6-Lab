class Sports{
    constructor(){
        console.log('sports:',new.target.name);
    }
};
class Soccer extends Sports{
    constructor(){
        super();
        console.log('soccer:',new.target.name);
    }
};
let sport = new Sports();
let soccer = new Soccer();
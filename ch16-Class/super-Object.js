let Sports = {
    getTitle(){
        console.log('sports');
    }
};
let Soccer = {
    getTitle(){
        super.getTitle();
        console.log('soccer');
    }
};
Object.setPrototypeOf(Soccer, Sports);
Soccer.getTitle();  //  sports  \n  soccer
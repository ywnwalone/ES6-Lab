try{
    let result = Member;
}catch(e){
    console.log('hoisting does not work.');
};
class Member{
    static getMember(){
        return 'member';
    }
};
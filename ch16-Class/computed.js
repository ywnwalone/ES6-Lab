let type="Type";
class Sports{
    static ['get'+type](kind){
        return kind ? 'sports' : 'music';
    }
}
console.log(Sports['get'+type](1)); //  sports
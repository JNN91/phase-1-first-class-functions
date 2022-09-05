function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function NamedFunction(hello){
        return hello;
    }
}

function returnsAnAnonymousFunction(){
    return function(hello){
        return hello;
    }
}
// Sum with an arbitrary amount of brackets
// Write function sum that would work like this:


function sum(a){
    let currentsum = a;

    function f(b){
        currentsum = currentsum + b ;
        return f;
    }

    f.toString = function() {
        return currentsum ;
    };

    return f;

}

let f = sum();

console.log(f() );
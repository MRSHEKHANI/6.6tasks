// Modify the code of makeCounter() so that the counter can also decrease and set the number:
// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

function makeCounter(){
    let count = 0;

    function counter(){
        return count++;
    }

    counter.set = value =>  count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.set(10));
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());

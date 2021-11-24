/*Partial Application*/

Function.prototype.curry = function(...args){
    const currying = (fn, ...args)=>
        (fn.length<=args.length)?
            fn(...args)
            : (...others)=> currying(fn, ...args, ...others);
    return currying(this, ...args);
}
 /*I've expanded prototype of a function to have opportunity to apply partial application to any function*/


/*Real currying*/
function curry(_f){
    return (x) => (y) => (z) => _f(x,y,z)
}


/*Linear Unfold*/

function unfold(array, callback, initialValue=40){
    for(let i = 0; i < array.length; i++){
        array[i] = callback(initialValue, array[i],i,array)
    }
}

/*Linear fold*/

function fold(array,callback,startValue=0){
    for (let i = 0; i< array.length; i++){
        callback(startValue, array[i])
    }
    return startValue
}

/*Map for arrays*/

function map(array, callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        result[i] = callback(array[i],i,array)
    }
    return result
}

/*Filter for arrays*/
function filter(array, callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array))result.push(array[i])
    }
    return result
}

/*Average of even numbers*/

function evenAvg(array){
    let evenArray = array.filter(item=> item%2===0)
    return evenArray.reduce((sum, item) => sum+item, 0)/evenArray.length
}

/*Sum of random numbers*/

function sumRandomNumbers(){
    let array = []
    let sum = 0
    for (let i = 0; i < 10; i++){
        array[i] = Math.floor(Math.random()*10)
        sum+= array[i]
    }
    return sum
}

 /*First*/

function first(array, callback){
    for(let i = 0; i < array.length; i++){
        if (callback(array[i]))return array[i]
    }
    return ''
}

/*Lazy evaluation*/
const lazy = function (callback) {
    let res
    let proceed = false
    return function () {
        if (proceed){
            return res
        }
        res = callback.apply(this, arguments)
        proceed = true
        return res
    }
}

/*Memoization*/

function memoizer(callback){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
            return cache[n]
        } else {
            let result = callback(n)
            cache[n] = result
            return result
        }
    }
}
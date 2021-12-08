/*String calculator*/

function getNumbers() {
    let arr = [];
    arr[0] = document.querySelector("#numberX").value;
    arr[1] = document.querySelector("#numberY").value;
    return arr.map((item) => Number(item));
}

function sum() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#sum");
    output.innerHTML = x + y;
}

function difference() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#difference");
    output.innerHTML = x - y;
}

function division() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#division");
    output.innerHTML = x / y;
}

function multiplication() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#multiplication");
    output.innerHTML = x * y;
}

function remainder() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#remainder");
    output.innerHTML = x % y;
}

function degree() {
    let [x, y] = getNumbers();
    let output = document.querySelector("#degree");
    output.innerHTML = Math.pow(x, y);
}
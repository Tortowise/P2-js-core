/*Number system converter*/
function inputSystem() {
    const form = document.querySelector("#systems");
    let value = form.elements["system"].value;
    if (value === "binary") return 2;
    if (value === "decimal") return 10;
    if (value === "hexadecimal") return 16;
}

function inputNumber() {
    return document.querySelector("#number").value;
}

function binary() {
    let radix = inputSystem();
    let input = inputNumber();
    let number = parseInt(input, radix);
    let output = document.querySelector("#binary_output");
    output.innerHTML = number.toString(2);
}

function decimal() {
    let radix = inputSystem();
    let input = inputNumber();
    let number = parseInt(input, radix);
    let output = document.querySelector("#decimal_output");
    output.innerHTML = number.toString(10);
}

function hexadecimal() {
    let radix = inputSystem();
    let input = inputNumber();
    let number = parseInt(input, radix);
    let output = document.querySelector("#hexadecimal_output");
    output.innerHTML = number.toString(16);
}

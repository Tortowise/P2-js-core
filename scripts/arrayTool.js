/*Array Processing tool*/


function inputToArray(selector) {
    let string_array = document.querySelector(selector).value;
    string_array = string_array.split(" ");
    string_array = string_array.filter((item) => item !== "");
    let array = string_array.map((item) => Number(item));
    return array;
}

function subSum() {
    let array = inputToArray("#arrayTool");
    let max = 0;
    let current = 0;
    array.forEach((i) => {
        current = Math.max(0, current + i);
        max = Math.max(max, current);
    });
    let output = document.querySelector("#subSum_output");
    output.innerHTML = "The maximum sum of subarray is " + max;
}

function search() {
    let array = inputToArray("#arrayTool");
    for (let i = 0; i < array.length; i++) {
        //Sorting array
        for (let j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                let buffer = array[i];
                array[i] = array[j];
                array[j] = buffer;
            }
        }
    }
    let min = array[0];
    let max = array[array.length - 1];
    let median =
        array.length % 2 === 0
            ? array[array.length / 2]
            : array[(array.length + 1) / 2];

    let output = document.querySelector("#search_output");
    output.innerHTML =
        "The max value is " +
        max.toString() +
        "<br>The min value is " +
        min.toString() +
        "<br>The median value is " +
        median.toString();
}

function selection() {
    let array = inputToArray("#arrayTool");
    let len = array.length;
    let start = 0;
    let max = 0;
    let count = 1;
    let position = -1;
    let i = 0;

    while (i < len) {
        if (position < 0) {
            position = i;
        }
        if (array[i] < array[i + 1]) {
            count++;
        } else {
            if (count > max) {
                max = count;
                start = position;
            }
            position = -1;
            count = 1;
        }
        i++;
    }
    let str_output_array = "";
    while (max > 0) {
        str_output_array += array[start] + " ";
        max--;
        start++;
    }
    let output = document.querySelector("#selection_output");
    output.innerHTML = str_output_array;
}

document.querySelector("#sub-sum").addEventListener("click", subSum)
document.querySelector("#selection").addEventListener("click", selection)
document.querySelector("#search").addEventListener("click", search)
/*Sorting*/

function bubbleSort() {
    let arr = document.querySelector("#arraySort").value;
    arr = arr.split(" ");
    arr = arr.map((item) => Number(item));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let buf = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = buf;
            }
        }
    }

    let outputString = "Sorted array<br>" + arr;
    let output = document.querySelector("#bubble");
    output.innerHTML = outputString;
}

function insertionSort() {
    let arr = document.querySelector("#arraySort").value;
    arr = arr.split(" ");
    arr = arr.map((item) => Number(item));
    let com = 0;
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
            com++;
        }
        arr[j] = current;
    }
    let outputString = "Sorted array<br>" + arr;
    let output = document.querySelector("#insertion");
    output.innerHTML = outputString;
}

/* MERGE ALGORITHM*/
let merge_sort = function (array) {
    function merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        //merge what is left
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    function merge_sort(items) {
        //well it is only 1 element
        if (items.length < 2) {
            return items;
        }
        let middle = Math.floor(items.length / 2);
        //create two arrays
        let left = items.slice(0, middle);
        let right = items.slice(middle);
        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
};

function mergeSort() {
    let arr = document.querySelector("#arraySort").value;
    arr = arr.split(" ");
    arr = arr.map((item) => Number(item));
    arr = merge_sort(arr);
    let outputString = "Sorted array<br>" + arr;
    let output = document.querySelector("#merge");
    output.innerHTML = outputString;
}

/*QUICKSORT ALGORITHM*/
function partition(arr, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function quickSortIterative(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    let stack = [];

    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);

    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while (stack[stack.length - 1] >= 0) {
        // Extracting the top unsorted subarray
        let end = stack.pop();
        let start = stack.pop();

        let pivotIndex = partition(arr, start, end);

        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

function quickSort() {
    let arr = document.querySelector("#arraySort").value;
    arr = arr.split(" ");
    arr = arr.map((item) => Number(item));
    quickSortIterative(arr);
    let outputString = "Sorted array<br>" + arr;
    let output = document.querySelector("#quickSort");
    output.innerHTML = outputString;
}

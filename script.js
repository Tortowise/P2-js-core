/*Array Processing tool*/

function inputToArray(selector){
    let string_array = document.querySelector(selector).value
    string_array = string_array.split(' ')
    string_array = string_array.filter(item=>item!=='')
    let array = string_array.map(item=>Number(item))
    return array
}

function subSum(){
    let arr = inputToArray('#arrayTool')
    let max = 0
    let cur = 0
    arr.forEach(i=>{
        cur = Math.max(0,cur+i)
        max = Math.max(max,cur)
    })
    let output = document.querySelector('#subSum_output')
    output.innerHTML = "The maximum sum of subarray is " + max.toString()
}

function search(){
    let arr = inputToArray('#arrayTool')
    for(let i=0;i<arr.length;i++){      //Sorting array
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let buf = arr[i]
                arr[i] = arr[j]
                arr[j] = buf
            }
        }
    }
    let min = arr[0],
        max = arr[arr.length-1],
        med = (arr.length%2===0)?arr[arr.length/2]:arr[(arr.length+1)/2]
    let output = document.querySelector('#search_output')
    output.innerHTML = 'The max value is ' + max.toString() +
        '<br>The min value is ' + min.toString()+
        '<br>The median value is ' + med.toString()
}

function selection(){
    let array  = inputToArray('#arrayTool')
    console.log('selecting start')
    let len = array.length
    let start=0,
        max=0,
        count=1,
        pos=-1,
        i=0
    while(i<len){
        if (pos<0){
            pos = i
        }
        if (array[i]<array[i+1]){
            count++
        }
        else{
            if(count>max){
                max = count
                start = pos
            }
            pos = -1
            count = 1
        }
        i++
    }
    let str_output_array = ''
    while(max>0) {
        str_output_array += array[start] + ' '
        max--
        start++
    }
        let output = document.querySelector('#selection_output')
        output.innerHTML = str_output_array
}

/*Date Display Fromatter*/

function getInputDate(selector){
    let str = document.querySelector(selector).value
    return str
}

function dashDate(){
    let date = getInputDate('#date')
    date = date.slice(0,2) + '-' + date.slice(2,4) + '-' + date.slice(4,8);
    let output = document.querySelector('#dashDate')
    output.innerHTML = date
}

let months = {
    '01':'January',
    '02':'February',
    '03': 'March',
    '04': 'April',
    '05':'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

function fullMonth(){
    let date = getInputDate('#date')

    let day = date.slice(0,2)
    let month = date.slice(2,4)
    let year = date.slice(4,8)
    let outputString = day + " " + months[month] + " " + year
    let output = document.querySelector('#fullMonth')
    output.innerHTML = outputString
}

function yearmonthday(){
    let date = getInputDate('#date')
    let day = date.slice(6,8)
    let month = date.slice(4,6)
    let year = date.slice(0,4)
    let outputString = day + " " + months[month] + " " + year
    let output = document.querySelector('#YYYMMDD')
    output.innerHTML = outputString
}

function year_month_day(){
    let date = getInputDate('#date')
    let outputString = date.slice(6,8) + '-' + date.slice(4,6) + '-' + date.slice(0,4)
    let output = document.querySelector('#YYY_MM_DD')
    output.innerHTML = outputString
}

function dateDiff(){
    let date = getInputDate('#date')
    let  [year,month,day] = date.split('-')
    let currentDate = new Date()
    let outputString = (currentDate.getFullYear()-Number(year)) + ' years ago'
    let output = document.querySelector('#dateDiff')
    output.innerHTML = outputString
}

/*Text Formatter*/

function wrapByWord(){
    let text = document.querySelector('#inputText').value
    text = text.split(' ')
    let outputString = text.map(item=>item+'<br>').join('')
    let output = document.querySelector('#wordWrap')
    output.innerHTML = outputString
}

function wrapBySymbol(){
    let text = document.querySelector('#inputText').value
    let outputString = text.split('').join('<br>')
    let output = document.querySelector('#symbolWrap')
    output.innerHTML = outputString
}

function wrapbySentence(){
    let text = document.querySelector('#inputText').value
    text = text.split('.')
    let outputString = text.map(item=>item+'<br>').join('')
    let output = document.querySelector('#sentenceWrap')
    output.innerHTML = outputString
}

/*String calculator*/

function getNumbers(){
    let arr = []
    arr[0] = document.querySelector('#numberX').value
    arr[1] = document.querySelector('#numberY').value
    return arr.map(item=>Number(item))
}

function sum(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#sum')
    output.innerHTML = x+y
}

function difference(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#difference')
    output.innerHTML = x-y
}

function division(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#division')
    output.innerHTML = x/y
}

function multiplication(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#multiplication')
    output.innerHTML = x*y
}

function remainder(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#remainder')
    output.innerHTML = x%y
}

function degree(){
    let [x,y] = getNumbers()
    let output = document.querySelector('#degree')
    output.innerHTML = Math.pow(x,y)
}

/*Sorting*/

function bubbleSort(){
    let arr  = document.querySelector('#arraySort').value
    arr = arr.split(' ')
    arr = arr.map(item=>Number(item))
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let buf = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = buf
            }
        }
    }

    let outputString = 'Sorted array<br>' + arr
    let output = document.querySelector('#bubble')
    output.innerHTML = outputString
}

function insertionSort(){
    let arr  = document.querySelector('#arraySort').value
    arr = arr.split(' ')
    arr = arr.map(item=>Number(item))
    let com = 0
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
            com++
        }
        arr[j] = current;
    }
    let outputString = 'Sorted array<br>' + arr
    let output = document.querySelector('#insertion')
    output.innerHTML = outputString
}

/* MERGE ALGORITHM*/
let merge_sort = function(array){

    function merge(left, right){
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        //merge what is left
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }
    function merge_sort(items){
        //well it is only 1 element
        if (items.length < 2){
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

function mergeSort(){
    let arr  = document.querySelector('#arraySort').value
    arr = arr.split(' ')
    arr = arr.map(item=>Number(item))
    arr = merge_sort(arr)
    let outputString = 'Sorted array<br>' + arr
    let output = document.querySelector('#merge')
    output.innerHTML = outputString
}

/*QUICKSORT ALGORITHM*/
function partition(arr, start, end){
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
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
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
    while(stack[stack.length - 1] >= 0){

        // Extracting the top unsorted subarray
        let end = stack.pop();
        let start = stack.pop();

        let pivotIndex = partition(arr, start, end);

        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

function quickSort(){
    let arr  = document.querySelector('#arraySort').value
    arr = arr.split(' ')
    arr = arr.map(item=>Number(item))
    quickSortIterative(arr)
    let outputString = 'Sorted array<br>' + arr
    let output = document.querySelector('#quickSort')
    output.innerHTML = outputString
}

/*Number system converter*/
function inputSystem(){
    const form = document.querySelector('#systems')
    let value = form.elements['system'].value
    if (value == 'binary')return 2
    if(value == 'decimal')return 10
    if(value =='hexadecimal')return 16
}
function inputNumber(){
    return document.querySelector("#number").value
}

function binary(){
    let radix = inputSystem()
    let input = inputNumber()
    let number = parseInt(input,radix)
    let output = document.querySelector('#binary_output')
    output.innerHTML = number.toString(2)
}

function decimal(){
    let radix = inputSystem()
    let input = inputNumber()
    let number = parseInt(input,radix)
    let output = document.querySelector('#decimal_output')
    output.innerHTML = number.toString(10)
}

function hexadecimal(){
    let radix = inputSystem()
    let input = inputNumber()
    let number = parseInt(input,radix)
    let output = document.querySelector('#hexadecimal_output')
    output.innerHTML = number.toString(16)
}


/*Caching calculator*/

/*Caching object*/

let cachingObject = {
}

function cachingFunc(checkbox){
    for(let i = 0; i < 4; i++){
        if (checkbox[i] !== 0 && !(checkbox[i] in cachingObject)){
            cachingObject[checkbox[i]] = new Map()
    }
    }
}

function getCheckedCheckBoxes() {
    let checkboxes = document.getElementsByClassName('checkbox')
    let checkboxesChecked = [] // можно в массиве их хранить, если нужно использовать
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value) // положим в массив выбранный
             // делайте что нужно - это для наглядности
        }
        else checkboxesChecked.push(0);
    }
    return checkboxesChecked; // для использования в нужном месте
}

function getOperator(){
    let operator = document.querySelector('.operator').value
    if (operator === '+')return 'sum'
    else if (operator === '-')return 'diff'
    else if (operator === '*')return 'mult'
    else if (operator === '/')return 'div'
}
function cache(){
    let x = document.querySelector('#cacheX').value
    let y = document.querySelector('#cacheY').value
    let sign = document.querySelector('.operator').value
    let operator = getOperator()
    let checkbox = getCheckedCheckBoxes()
    let output = document.querySelector('#cache_output')
    const form = document.querySelector('#cache_rule')
    let rule = form.elements['setting'].value
    if (rule==='even') rule = 1
    else rule = 0
    console.log(rule)
    switch (operator){
        case 'sum':
                if(cachingObject['sum'] !== undefined){
                    if(cachingObject['sum'].has(x+sign+y)){
                        alert('The result is already in cache')
                        output.innerHTML = cachingObject['sum'].get(x+sign+y)
                    }
                    else{
                        if ((Number(x)+Number(y))%2==rule){
                            cachingObject['sum'].set(x+sign+y,Number(x)+Number(y))
                            cachingObject['sum'].set(y+sign+x,Number(x)+Number(y))
                            alert('Added to cache!')
                            output.innerHTML = cachingObject['sum'].get(x+sign+y)
                        }
                        else {
                            alert('Not added to cache, doesn\'t meet to requirements')
                            output.innerHTML = Number(x)+Number(y)
                        }
                    }
                }
                else {
                    alert('function is not cached')
                    output.innerHTML = Number(x)+Number(y)
                }
                break;
        case 'diff':
            if(cachingObject['diff'] !== undefined){
                if(cachingObject['diff'].has(x+sign+y)){
                    alert('The result is already in cache')
                    output.innerHTML = cachingObject['diff'].get(x+sign+y)
                }
                else{
                    if(Number(x)-Number(y)%2===rule){
                        cachingObject['diff'].set(x+sign+y,Number(x)-Number(y))
                        alert('Added to cache!')
                        output.innerHTML = cachingObject['diff'].get(x+sign+y)
                    }
                    else{
                        alert('Not added to cache, doesn\'t meet to requirements')
                        output.innerHTML = Number(x)-Number(y)
                    }
                }
            }
            else {
                alert('function is not cached')
                output.innerHTML = Number(x)-Number(y)
            }
            break;
        case 'mult':
            if(cachingObject['mult'] !== undefined){
                if(cachingObject['mult'].has(x+sign+y)){
                    alert('The result is already in cache')
                    output.innerHTML = cachingObject['mult'].get(x+sign+y)
                }
                else{
                    if(Number(x)*Number(y)%2==rule){
                        cachingObject['mult'].set(x+sign+y,Number(x)*Number(y))
                        alert('Added to cache!')
                        output.innerHTML = cachingObject['mult'].get(x+sign+y)
                    }
                    else{
                        alert('Not added to cache, doesn\'t meet to requirements')
                        output.innerHTML = Number(x)*Number(y)
                    }
                }
            }
            else {
                alert('function is not cached')
                output.innerHTML = Number(x)*Number(y)
            }
            break;
        case 'div':
            if(cachingObject['div'] !== undefined){
                if(cachingObject['div'].has(x+sign+y)){
                    alert('The result is already in cache')
                    output.innerHTML = cachingObject['div'].get(x+sign+y)
                }
                else{
                    if (Number(x)/Number(y)%2==rule){
                        cachingObject['div'].set(x+sign+y,Number(x)/Number(y))
                        alert('Added to cache!')
                        output.innerHTML = cachingObject['div'].get(x+sign+y)
                    }
                    else{
                        alert('Not added to cache, doesn\'t meet to requirements')
                        output.innerHTML = Number(x)/Number(y)
                    }
                }
            }
            else {
                alert('function is not cached')
                output.innerHTML = Number(x)/Number(y)
            }
            break;
    }
    console.log(cachingObject)
}

function generateParams(){
    document.querySelector('.submit').hidden = true
    let checkbox = getCheckedCheckBoxes()
    cachingFunc(checkbox)
    console.log(cachingObject)
}
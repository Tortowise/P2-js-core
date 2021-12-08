
/*Caching calculator*/

/*Caching object*/

let cachingObject = {};

function cachingFunc(checkbox) {
    for (let i = 0; i < 4; i++) {
        if (checkbox[i] !== 0 && !(checkbox[i].value in cachingObject)) {
            cachingObject[checkbox[i].value] = new Map();
        }
    }
}

function getCheckedCheckBoxes() {
    let checkboxes = document.getElementsByClassName("checkbox");
    let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
            // делайте что нужно - это для наглядности
        } else checkboxesChecked.push(0);
    }
    return checkboxesChecked; // для использования в нужном месте
}

function getOperator() {
    let operator = document.querySelector(".operator").value;
    if (operator === "+") return "sum";
    else if (operator === "-") return "diff";
    else if (operator === "*") return "mult";
    else if (operator === "/") return "div";
}

function cache() {
    let x = document.querySelector("#cacheX").value;
    let y = document.querySelector("#cacheY").value;
    let sign = document.querySelector(".operator").value;
    let operator = getOperator();
    let checkbox = document.querySelectorAll('[type=checkbox]:checked');
    let output = document.querySelector("#cache_output");
    const form = document.querySelector("#cache_rule");
    let rule = form.elements["setting"].value;
    if (rule === "even") rule = 1;
    else rule = 0;
    console.log(rule);
    switch (operator) {
        case "sum":
            if (cachingObject["sum"] !== undefined) {
                if (cachingObject["sum"].has(x + sign + y)) {
                    alert("The result is already in cache");
                    output.innerHTML = cachingObject["sum"].get(x + sign + y);
                } else {
                    if ((Number(x) + Number(y)) % 2 == rule) {
                        cachingObject["sum"].set(x + sign + y, Number(x) + Number(y));
                        cachingObject["sum"].set(y + sign + x, Number(x) + Number(y));
                        alert("Added to cache!");
                        output.innerHTML = cachingObject["sum"].get(x + sign + y);
                    } else {
                        alert("Not added to cache, doesn't meet to requirements");
                        output.innerHTML = Number(x) + Number(y);
                    }
                }
            } else {
                alert("function is not cached");
                output.innerHTML = Number(x) + Number(y);
            }
            break;
        case "diff":
            if (cachingObject["diff"] !== undefined) {
                if (cachingObject["diff"].has(x + sign + y)) {
                    alert("The result is already in cache");
                    output.innerHTML = cachingObject["diff"].get(x + sign + y);
                } else {
                    if (Number(x) - (Number(y) % 2) === rule) {
                        cachingObject["diff"].set(x + sign + y, Number(x) - Number(y));
                        alert("Added to cache!");
                        output.innerHTML = cachingObject["diff"].get(x + sign + y);
                    } else {
                        alert("Not added to cache, doesn't meet to requirements");
                        output.innerHTML = Number(x) - Number(y);
                    }
                }
            } else {
                alert("function is not cached");
                output.innerHTML = Number(x) - Number(y);
            }
            break;
        case "mult":
            if (cachingObject["mult"] !== undefined) {
                if (cachingObject["mult"].has(x + sign + y)) {
                    alert("The result is already in cache");
                    output.innerHTML = cachingObject["mult"].get(x + sign + y);
                } else {
                    if ((Number(x) * Number(y)) % 2 == rule) {
                        cachingObject["mult"].set(x + sign + y, Number(x) * Number(y));
                        alert("Added to cache!");
                        output.innerHTML = cachingObject["mult"].get(x + sign + y);
                    } else {
                        alert("Not added to cache, doesn't meet to requirements");
                        output.innerHTML = Number(x) * Number(y);
                    }
                }
            } else {
                alert("function is not cached");
                output.innerHTML = Number(x) * Number(y);
            }
            break;
        case "div":
            if (cachingObject["div"] !== undefined) {
                if (cachingObject["div"].has(x + sign + y)) {
                    alert("The result is already in cache");
                    output.innerHTML = cachingObject["div"].get(x + sign + y);
                } else {
                    if ((Number(x) / Number(y)) % 2 == rule) {
                        cachingObject["div"].set(x + sign + y, Number(x) / Number(y));
                        alert("Added to cache!");
                        output.innerHTML = cachingObject["div"].get(x + sign + y);
                    } else {
                        alert("Not added to cache, doesn't meet to requirements");
                        output.innerHTML = Number(x) / Number(y);
                    }
                }
            } else {
                alert("function is not cached");
                output.innerHTML = Number(x) / Number(y);
            }
            break;
    }
    console.log(cachingObject);
}//TODO

function generateParams() {
    document.querySelector(".submit").hidden = true;
    let checkbox = getCheckedCheckBoxes();
    cachingFunc(checkbox);
    console.log(cachingObject);
}


document.querySelector('#cache_func').addEventListener('click',cache);
document.querySelector('.submit').addEventListener('click', generateParams);
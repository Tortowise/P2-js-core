let splitTexBySeparator = {
    format: function (text, format) {
        let arraySplitter;
        let textSplittedBySeparator = '';
        switch (format) {
            case "word":
                arraySplitter = text.split(' ');
                break;
            case "symbol":
                arraySplitter = text.split("");
                break;
            case "sentence":
                arraySplitter = text.split(".");
                break;
        }
        for (let i=0;i<arraySplitter.length;i++){
            textSplittedBySeparator += arraySplitter[i] + "\n";
        }
        return textSplittedBySeparator;
    }
}


function textFormatter(){
    let inputText = document.querySelector("#inputText").value;
    console.log(inputText);
    let separator = document.querySelector('input.textformatter:checked').value;
    console.log(separator);
    let outputText = splitTexBySeparator.format(inputText,separator);
    console.log(outputText);
    let outputBlock = document.querySelector("#text_output");
    outputBlock.innerHTML = "<pre>"+outputText + "</pre>";
}

document.querySelector("#text_format").addEventListener('click', textFormatter)
// /*Text Formatter*/
//
//
//
//
//
//
//
//
// function wrapByWord() {
//     let text = document.querySelector("#inputText").value;
//     text = text.split(" ");
//     let outputString = text.map((item) => item + "<br>").join("");
//     let output = document.querySelector("#wordWrap");
//     output.innerHTML = outputString;
// }
//
// function wrapBySymbol() {
//     let text = document.querySelector("#inputText").value;
//     let outputString = text.split("").join("<br>");
//     let output = document.querySelector("#symbolWrap");
//     output.innerHTML = outputString;
// }
//
// function wrapbySentence() {
//     let text = document.querySelector("#inputText").value;
//     text = text.split(".");
//     let outputString = text.map((item) => item + "<br>").join("");
//     let output = document.querySelector("#sentenceWrap");
//     output.innerHTML = outputString;
// }
let text = document.getElementById("textHere");

let replaceBtn = document.getElementById("replaceBtn");
let deleteBtn = document.getElementById("deleteBtn");
let copyBtn = document.getElementById("copyBtn");
let clearBtn = document.getElementById("ClearBtn");
let deleteAdBtn = document.getElementById("deleteAdBtn");

let wordCount = document.getElementById("wordCount");
let charCount = document.getElementById("characterCount");

let replaceThis = document.getElementById("replaceThis");
let replaceWith = document.getElementById("replaceWith");
let deleteText = document.getElementById("deleteText");


function updateCount() {
    let curText = text.value;

    charCount.textContent = "character count: " + curText.length;

    let words = curText.trim().split(/\s+/);

    if (curText.trim() === "") {
        wordCount.textContent = "word count: 0";
    } else {
        wordCount.textContent = "word count: " + words.length;
    }
}

text.addEventListener("input", updateCount);

replaceBtn.addEventListener("click", function(){
    let oldText = replaceThis.value;
    let newText = replaceWith.value;
    if(oldText != ""){
    text.value = text.value.replaceAll(oldText, newText);
    updateCount();
    }
});
deleteBtn.addEventListener("click", function(){
    let textToDelete = deleteText.value;
    text.value = text.value.replaceAll(textToDelete, "");
    updateCount();
});
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(text.value);
})
clearBtn.addEventListener("click", function(){
    text.value = "";
    updateCount();
})

deleteAdBtn.addEventListener("click", function(){
    let newText = text.value;
    newText = newText.replaceAll("Advertisement", "");
    newText = newText.replaceAll("(", "");
    newText = newText.replaceAll("[", "");
    newText = newText.replaceAll("{", "");
    newText = newText.replaceAll("Read without ads with Tea Pass · from $1.99 →", "");
    newText = newText.replace(/\s*\n\s*/g, " ");
    text.value = newText;
    updateCount();
});

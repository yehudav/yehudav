
const copyAlert="";

document.getElementById("remove").onclick = function () { RemoveNikud() };
var copyBtn = document.getElementById("copy-to-clipboard");

copyBtn.addEventListener(
    'click', 
    function(event) 
    {
        navigator.clipboard.writeText(document.getElementById("text-area").value);
        alert("הטקסט הועתק בהצלחה");
    }
);

function RemoveNikud() {
    var text = document.getElementById("text-area").value;
    document.getElementById("text-area").value = Remove(text);
}

const nikud = 
[
    "ְ",
    "ִ",
    "ֵ",
    "ֶ",
    "ַ",
    "ָ",
    "",
    "ׁ",
    "",
    "ׂ",
    "ֹ",
    "ּ",
    "",
    "ֻ",
    "ֱ",
    "ֲ",
    "ֳ",
]

function Remove(text) {
    nikud.forEach(element => {text = text.replaceAll(element, "")}); 
    return text;
}
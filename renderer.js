
const COPY_ALERT = "הטקסט הועתק בהצלחה";
const NIKUD = ["ְ", "ִ", "ֵ", "ֶ", "ַ", "ָ", "", "ׁ", "", "ׂ", "ֹ", "ּ", "", "ֻ", "ֱ", "ֲ", "ֳ",];
/*const TAAMIM =[              "",    ];*/
const PUNCTUATION = [".", ",", "?", "!", ";", ":", "'", "\"", "\\", "/", "`", "-",];
const PARENTHESES = ["(", ")", "{", "}", "[", "]", "<", ">"];

var teTextArea = document.getElementById("text-area")
var btRemove = document.getElementById("remove");
var btCopy = document.getElementById("copy-to-clipboard");
var cbNikud = document.getElementById("nikud");
var cbTaamim = document.getElementById("taamim");
var cbPunctuation = document.getElementById("punctuation");
var cbParentheses = document.getElementById("parentheses");
var cbExtraSpaces = document.getElementById("extra-spaces");
var cbKtivMale = document.getElementById("ktiv-male");

// todo 2 arrays prone to bug, use a dictionary
var checkBoxes = [cbNikud, /*cbTaamim,*/ cbPunctuation, cbParentheses]
var checkBoxesCharacters = [NIKUD, /*TAAMIM,*/ PUNCTUATION, PARENTHESES]


document.addEventListener('keydown', e => {
    if (e.altKey && e.key.toLocaleLowerCase() == "n" ) {
        cbNikud.checked = !cbNikud.checked;
    }
    if (e.altKey && e.key.toLocaleLowerCase() == "t" ) {
        cbTaamim.checked = !cbTaamim.checked;
    }
    if (e.altKey && e.key.toLocaleLowerCase() == "p" ) {
        cbPunctuation.checked = !cbPunctuation.checked;
    }
    if (e.altKey && e.key.toLocaleLowerCase() == "b" ) {
        cbParentheses.checked = !cbParentheses.checked;
    }
    if (e.altKey && e.key.toLocaleLowerCase() == "s" ) {
        cbExtraSpaces.checked = !cbExtraSpaces.checked;
    }
});



btRemove.onclick = function () { RemoveCharacters() };
btCopy.addEventListener(
    'click',
    function (event) {
        navigator.clipboard.writeText(document.getElementById("text-area").value);
        alert(COPY_ALERT);
    }
);

function RemoveCharacters() {

    var text = teTextArea.value;
    var characters = GetCharacters();
    characters.forEach(element => { text = text.replaceAll(element, "") });
    if (cbExtraSpaces.checked) {
        text = text.replaceAll(/  +/g, ' ');
    }
    teTextArea.value = text;
}

function GetCharacters() {
    var characters = [];
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            characters = characters.concat(checkBoxesCharacters[i]);
        }
    }
    return characters;
}
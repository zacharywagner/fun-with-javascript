function bigger(){
    alert("Hello, world!");
    let textarea = document.getElementById("textarea");
    textarea.style.fontSize = "2em";
}

function fancyShmancy(){
    let textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
    alert("The text area is now bold, blue, and underlined!");
}

function boringBetty(){
    let textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
    alert("The text area is now not bold, black, and not underlined!");
}

function moo(){
    let textarea = document.getElementById("textarea");
    let text = textarea.value;
    text = text.toUpperCase();
    let sentences = text.split(".");
    for(let i = 0; i < sentences.length - 1; i++){
        sentences[i] = sentences[i] + "-Moo";
    }
    text = sentences.join(".");
    textarea.value = text;
}
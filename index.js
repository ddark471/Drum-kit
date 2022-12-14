

let size = document.querySelectorAll("button").length;

for(let i = 0; i < size; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        alert("I got clicked");
    });
}
let size = document.querySelectorAll("button").length;

for(let i = 0; i < size; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let buttonValue = this.innerHTML;

        makeSound(buttonValue);
        buttonAnimation(buttonValue);


    });
};

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key) {

        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            let kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
        break;
    }
};

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 500);
}

let bellboy1 = {
    name: "Timmy",
    age: 10,
    hasWorkPermit: true,
    languages: ["French", "English"]
};

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = true;
    this.languages = languages;
    this.suitcase = function(){
        alert('May I take your suitcase');
    };
}

let bellboy2 =  new BellBoy("Dodajon", 19, true, ["english", "russian"], true);


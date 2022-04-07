const clown = document.getElementById ("clown");
const shark = document.getElementById ("shark");
const crab = document.getElementById ("crab");
const petName = document.getElementById ("petName");
const submit = document.getElementById ("submit");
const fishPic = document.getElementById ("fishpic");
let response = document.getElementById ("response");
const feed = document.getElementById ("feed");
const play = document.getElementById ("play");
const clean = document.getElementById ("clean");
const sleep = document.getElementById ("sleep");
const audioClown = document.getElementById("audioClown");
const audioShark = document.getElementById("audioShark");
const audioCrab = document.getElementById("audioCrab");




let fishType;

class Creature {
    constructor(name, fish) {
        this._name = name;
        this.score = 0;
    }
    eat() {
        this.score++;
        response.textContent = `${this._name} was hungry: "chomp chomp chomp". You now have ${this.score} scales`;
        if (fishType == "clown") {
            fishPic.src = "fishPics/HappyClownfish.png" 
        } else if (fishType == "shark") {
            fishPic.src = "fishPics/HappyShark.jpg"
        } else {
            fishPic.src = "fishPics/HappyCrab.png"
        }
    }

    sleep() {
        this.score++;
        response.textContent = `${this._name} was sleepy: "ZZZZZZ". You now have ${this.score} scales`;
        if (fishType == "clown") {
            fishPic.src = "fishPics/HappyClownfish.png" 
        } else if (fishType == "shark") {
            fishPic.src = "fishPics/HappyShark.jpg"
        } else {
            fishPic.src = "fishPics/HappyCrab.png"
        }
    }
    song() {    
        this.score--;
        response.textContent = `${this._name} is not happy: "I hate this song!" You now have ${this.score} scales`;
        if (fishType == "clown") {
            fishPic.src = "fishPics/SadClownfish.png" 
            audioClown.src = "fishSongs/9 secs Tears of a Clown.mp3"
        } else if (fishType == "shark") {
            fishPic.src = "fishPics/SadShark.jpg"
            audioShark.src = "fishSongs/8 sec Baby Shark.mp3"
        } else {
            fishPic.src = "fishPics/SadCrab.png"
            audioCrab.src = "fishSongs/9 sec Under the Sea.mp3"
        }
    }
    cleanTank() {
        this.score--;
        response.textContent = `${this._name} is not happy: "I hate cleaning!" You now have ${this.score} scales`;
        if (fishType == "clown") {
            fishPic.src = "fishPics/SadClownfish.png" 
        } else if (fishType == "shark") {
            fishPic.src = "fishPics/SadShark.jpg"
        } else {
            fishPic.src = "fishPics/SadCrab.png"
        }
    }
    
}

// on click of choice pic appears
clown.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealClownfish.png";
    fishType = "clown";
})

shark.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealShark.jpg"
    fishType = "shark";
})

crab.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealCrab.png"
    fishType = "crab"; 
})

// on submit of info name pet

let fish;
submit.addEventListener ("click" , () => {
    fish = new Creature (petName.value)
})

// step 3 comment

feed.addEventListener ("click" , () => {
    fish.eat()
    if (fish.score == 10) {
        response.textContent = "WELL DONE! YOUR PET IS HAPPY!"
    }
})

play.addEventListener ("click" , () => {
    fish.song()
})

clean.addEventListener ("click" , () => {
    fish.cleanTank()
})

sleep.addEventListener ("click" , () => {
    fish.sleep()
})

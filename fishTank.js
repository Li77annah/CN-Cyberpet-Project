const clown = document.getElementById ("clown");
const shark = document.getElementById ("shark");
const crab = document.getElementById ("crab");
const petName = document.getElementById ("petName");
const submit = document.getElementById ("submit");
const fishPic = document.getElementById ("fishpic");

class Creature {
    constructor(name, fish) {
        this._name = name;
        this.score = 0;
        this._fish = fish;
    }
    eat() {
        this.score++;
        return "chomp chomp chomp";
    }
    sleep() {
        this.score++;
        return "ZZZZZZ";
    }
    song() {
        this.score--;
        return "I hate this song!";
    }
    cleanTank() {
        this.score--;
        return "Thank you for cleaning my tank"
    }
}

// on click of choice pic appears
clown.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealClownfish.png"
})

shark.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealShark.jpg"
})

crab.addEventListener ("click" , () => {
    fishPic.src = "fishPics/RealCrab.png"
})

// on submit of info name pet

let fish;
submit.addEventListener ("click" , () => {
    fish = new Creature (petName.value, "clown")
})


clown.addEventListener ("click" , () => {
    fish = new Creature (petName.value, "clown")
});

shark.addEventListener ("click" , () => {
    fish = new Creature (petName.value, "shark")
});

  
crab.addEventListener ("click" , () => {
    fish = new Creature (petName.value, "crab");
});
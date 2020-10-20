let resources = ["images/cat.png", "sounds/music.wav", "fonts/puzzler.otf"];

let game = hexi(512, 512, setup, resources, load);

game.fps = 30;
game.border = "2px red dashed";
game.backgroundColor = 0x000000;

function setup () {



}

function load() {

    //Display the file currently being loaded
    console.log(`loading: ${game.loadingFile}`);

    //Display the percentage of files currently loaded
    console.log(`progress: ${game.loadingProgress}`);

    //Add an optional loading bar
    game.loadingBar();
}

function play() {



}

game.start();
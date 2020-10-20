let resources = ["images/cat.png", "sounds/music.wav", "fonts/puzzler.otf"];

let game = hexi(512, 512, setup, resources, load);

game.fps = 60;
game.border = "2px red dashed";
game.backgroundColor = 0x000000;

let cats, message;

let makeCat = (x ,y) => {

    let cat = game.sprite("images/cat.png");
    cat.setPosition(x, y);

    game.breathe(cat, 2, 2, 20);
    game.pulse(cat, 10, 0,5);

    cat.vx = game.randomInt(-1, 1);
    cat.vy = game.randomInt(-1, 1);

    cats.addChild(cat);

};

function play () {

    message.rotation += 0.01;

    cats.children.forEach(cat => {

        game.contain(cat, game.stage, true);
        game.move(cat);

    });

}

function setup () {

    cats = game.group();

    message = game.text("Tap for cats!", "38px puzzler", "red");
    game.stage.putCenter(message);

    message.pivotX = 0.5;
    message.pivotY = 0.5;

    music = game.sound("sounds/music.wav");
    music.loop = true;
    music.volume = 0.25;


    game.pointer.tap = () => {

        if (!music.playing) music.play();

        //Supply `makeCat` with the pointer's `x` and `y` coordinates.
        makeCat(game.pointer.x, game.pointer.y);

        //Make the `message.content` display the number of cats
        message.content = `${cats.children.length}`;
    };

    game.state = play;
}

function load () {

    //Display the file currently being loaded
    console.log(`loading: ${game.loadingFile}`);

    //Display the percentage of files currently loaded
    console.log(`progress: ${game.loadingProgress}`);
    //Add an optional loading bar
    game.loadingBar();

}

game.start();
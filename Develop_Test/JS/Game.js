(function (window) {

    window.game = window.game || {}

    function Game() {
        this.initialize();
    }

    // Assigning long name to a variable
    var p = Game.prototype = new createjs.Container();

    // defining the method
    p.Container_initialize = p.initialize;

    // two variable for the game
    p.msgTxt = null; // If tnothing shows up, this message will show
    p.playerContainer = null; // container for the player object
    p.bulbContainer = null;// container for the bulb
    p.transformerContainer = null; // container for the transformer object.
   // p.transformerContainer.w = 150;
   // p.transformerContainer.h = 150;
    p.bulletContainer = null; // container for the laser object.
    //p.bulletContainer.w = 10;
    //p.bulletContainer.h = 10;

    p.initialize = function () {

        this.Container_initialize();
        this.addBG(); // Add backkground
        this.addButton();

        this.createPlayerContainer(); // create playerContainer
        this.createPlayer(); // create actual player object
       // this.createPlayerControls(); // create player controls

        this.createTransformerContainer(); // create transformerContainer
        this.createTransformers(); // create actual transformer object

        this.createBulbContainer();// create Bulb Container
        this.createBulbs();

        
    }

    p.addButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('Main Menu');
        btn.on('click', this.returnToMainMenu, this);

        //dimensions and postitions of button
        btn.regX = btn.width / 2;
        btn.x = canvas.width / 2;
        btn.y = 630;

        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#FFF', overColor: '#900' });
        this.addChild(btn);
    }
    p.returnToMainMenu = function (e) {
        window.location.reload();
        //this.dispatchEvent(game.GameStateEvents.MAIN_MENU);
    }

//BackGround
    // Adding Background function
    p.addBG = function () {
        var bg = new createjs.Bitmap('Content/game-level1-img.jpg');
        bg.scaleX = 1;
        bg.scaleY = 1;
        this.addChild(bg);

        var lifeCounts = [];
        //Adding Related Icons
        var i;
        var xMargin = 40;
        for ( i = 0 ; i < 3 ; i++)
        {
            var lifeCounts = new createjs.Bitmap('Content/LifeCounts.png');
            lifeCounts.scaleX = .3;
            lifeCounts.scaleY = .3;
            lifeCounts.x = 960 - xMargin;
            lifeCounts.y = 630;
            xMargin = xMargin + 40;
            this.addChild(lifeCounts);
        }
        
    }

   
  
// Player
    // Create player container
    p.createPlayerContainer = function () {
        if (this.playerContainer) {
            this.removeChild(this.playerContainer)
        }

        this.playerContainer = new createjs.Container();
        this.addChild(this.playerContainer);
    }

//Global Variable for player
    var player;
    
    // Create player object
    p.createPlayer = function () {
         var i, color;
        // Container for player object - players - with s at the end
        var players = this.playerContainer;
        var numPlayers = 1;
        var playerSize = 25;
        var numBullets = 3; // Can vary upon different level

        for (i = 0; i < numPlayers; i++) {
            // Creating object from a seperate file
            // File name is MakePlayer
            player = new MakePlayer(numBullets);
           // debugger;
            console.log(player.bullets);

            //After player is created, logic for the game.
            player.speed = 1;
          
            // Player Object's position
            player.x = 10;
            player.y = 450;


            players.addChild(player);
        }// End of for loop

    }
    //Bulb 
    p.createBulbContainer = function () {
      //  this.createBulbContainer = new createjs.Container();
        this.bulbContainer = new createjs.Container();
        this.addChild(this.bulbContainer);
    }
var bulb;
    p.createBulbs = function () {
        var i;
        // Container for bulb object - bulbs - with s at the end
        var bulbs = this.bulbContainer;
        var numBulbs = 1;
        var bulbSize = 25;

        for (i = 0; i < numBulbs; i++) {
            // Creating object from a seperate file
            // File name is MakePlayer
           bulb = new MakeBulb();

            //After player is created, logic for the game.
            bulb.speed = 1;

            // Player Object's position
            bulb.x = -20;
            bulb.y = -20;

            bulbs.addChild(bulb);
        }// End of for loop
    }
//Transformer

    // Transformer container and object
    p.createTransformerContainer = function () {
        this.transformerContainer = new createjs.Container();
        this.addChild(this.transformerContainer);
    }
//Global Variable for Transformer
var transformer;
    // Create Transformer
    p.createTransformers = function () {
        var i;
        // Container for transformers object - transformers - with s at the end
        var transformers = this.transformerContainer;
        var numTransformers = 1;
        var transdormerSize = 25;

        for (i = 0; i < numTransformers; i++) {
            // Creating object from a seperate file
            // File name is MakePlayer
            transformer = new MakeTransformer();

            //After player is created, logic for the game.
            transformer.speed = 1;

            // Player Object's position
            transformer.x = 0;
            transformer.y = 0;

            transformers.addChild(transformer);
        }// End of for loop

    }





// Game Related Things
    p.update = function () {
        //var i, orb, nextX;
        //var len = this.orbContainer.getNumChildren();
        //for (i = 0; i < len; i++) {
        //    orb = this.orbContainer.getChildAt(i);
        //    nextX = orb.x + orb.speed;
        //    if (nextX + orb.size > canvas.width) {
        //        nextX = canvas.width - orb.size;
        //        orb.speed *= -1;
        //    }
        //    else if (nextX - orb.size < 0) {
        //        nextX = orb.size;
        //        orb.speed *= -1;
        //    }
        //    orb.nextX = nextX;
        //}
    }
    p.render = function () {
        //var i, orb;
        //var len = this.orbContainer.getNumChildren();
        //for (i = 0; i < len; i++) {
        //    orb = this.orbContainer.getChildAt(i);
        //    orb.x = orb.nextX;
        //}
        //this.msgTxt.text = "ORBS LEFT: " + this.orbContainer.getNumChildren();
    }
    p.checkGame = function () {
        //if (!this.orbContainer.getNumChildren()) {
        //    this.dispatchEvent(game.GameStateEvents.GAME_OVER);
        //}
        
        //if (checkCollisionWithTransformer(this.transformerContainer, this.bulletContainer)) {
        //    console.writeline("Collied");
        //} else {
        //    console.writeline("Missed");
        //}


    }

    //p.checkCollisionWithTransformer = function (transformer, bullet) {
    //    if (rect1transformer.x < bullet.x + bullet.w &&
    //    transformer.x + transformer.w > bullet.x &&
    //    transformer.y < bullet.y + bullet.h &&
    //    transformer.h + transformer.y > bullet.y) {
    //        // collision detected!
    //        //this.color("green");
    //        return true;
    //    } else {
    //        // no collision
    //        this.color("blue");
    //        return false;
    //    }
    //}
    p.run = function () {
        this.update();
        this.render();
        this.checkGame();   
    }

    window.game.Game = Game;

}(window));
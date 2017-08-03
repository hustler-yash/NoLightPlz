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
    p.transformerContainer = null; // container for the transformer object.
    p.laserContainer = null; // container for the laser object.

    p.initialize = function () {
        this.Container_initialize();
        this.addBG(); // Add backkground
        this.addMessages(); // Add Message

        this.createplayerContainer(); // create playerContainer
        this.createPlayer(); // create actual player object

        this.createplayerContainer(); // create transformerContainer
        this.createTransformers(); // create actual transformer object

        this.createplayerContainer(); // create laserContainer
        this.createLaser(); // create actual laser object
    }

    // Adding Background function
    p.addBG = function () {
        var bg = new createjs.Shape();
        bg.graphics.beginFill('#92CBD6').drawRect(0, 0, canvas.width, canvas.height);
        this.addChild(bg);
    }

    // Adding Message function
    p.addMessages = function () {
        this.msgTxt = new createjs.Text("HELLO", '24px Arial', '#FFF');
        this.addChild(this.msgTxt);
    }
     
    // Create player container
    p.createplayerContainer = function () {
        this.playerContainer = new createjs.Container();
        this.addChild(this.playerContainer);
    }

    // Create player object
    p.createPlayer = function () {
       // var i, orb, color;
        var player = this.playerContainer;
        var numPlayers = 1;
        //var orbSize = 25;

        for (i = 0; i < numOrbs; i++) {
           // color = '#' + Math.floor(Math.random() * 16777215).toString(16)
            // orb = new PulsingOrb(color, orbSize);

            // Creating object from a seperate file
            // File name is MakePlayer
            player = new MakePlayer();
            orb.speed = Math.random() * 4;
            orb.size = orbSize;
            orb.x = orbSize;
            orb.y = orbSize + (i * orbSize * 2);
            orb.on('click', this.onOrbClick, this);
            orbs.addChild(orb);
        }// End of for loop

    }
    p.onOrbClick = function (e) {
        this.orbContainer.removeChild(e.target);
    }
    p.update = function () {
        var i, orb, nextX;
        var len = this.orbContainer.getNumChildren();
        for (i = 0; i < len; i++) {
            orb = this.orbContainer.getChildAt(i);
            nextX = orb.x + orb.speed;
            if (nextX + orb.size > canvas.width) {
                nextX = canvas.width - orb.size;
                orb.speed *= -1;
            }
            else if (nextX - orb.size < 0) {
                nextX = orb.size;
                orb.speed *= -1;
            }
            orb.nextX = nextX;
        }
    }
    p.render = function () {
        var i, orb;
        var len = this.orbContainer.getNumChildren();
        for (i = 0; i < len; i++) {
            orb = this.orbContainer.getChildAt(i);
            orb.x = orb.nextX;
        }
        this.msgTxt.text = "ORBS LEFT: " + this.orbContainer.getNumChildren();
    }
    p.checkGame = function () {
        if (!this.orbContainer.getNumChildren()) {
            this.dispatchEvent(game.GameStateEvents.GAME_OVER);
        }
    }
    p.run = function () {
        this.update();
        this.render();
        this.checkGame();
    }

    window.game.Game = Game;

}(window));
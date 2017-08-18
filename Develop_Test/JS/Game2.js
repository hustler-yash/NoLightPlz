﻿(function (window) {

    window.game = window.game || {}

    function Game2() {
        this.initialize();
    }

    // Assigning long name to a variable
    var p = Game2.prototype = new createjs.Container();

    // defining the method
    p.Container_initialize = p.initialize;

    // two variable for the game
    p.msgTxt = null; // If tnothing shows up, this message will show
    p.playerContainer = null; // container for the player object
    p.bulbContainer = null;// container for the bulb
    p.transformerContainer = null; // container for the transformer object.
    p.bulletContainer = null; // container for the laser object.

    p.initialize = function () {
        this.Container_initialize();
        this.addBG(); // Add backkground
        this.createPlayerContainer(); // create playerContainer
        this.createPlayer(); // create actual player object
        this.addFrontLawn();
        this.addButton();
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
        var bg = new createjs.Bitmap('Content/game-level2-background.jpg');
        bg.scaleX = 1;
        bg.scaleY = 1;
        this.addChild(bg);

    }

    // Player
    // Create player container
    p.createPlayerContainer = function () {
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

            //After player is created, logic for the game.
            player.speed = 1;

            // Player Object's position
            player.x = 10;
            player.y = 450;


            players.addChild(player);
        }// End of for loop

    }
   
    p.addFrontLawn = function () {
        // Adding Front Lawn
        var bgLawn = new createjs.Bitmap('Content/game-level2-frontLawn.png');
        bgLawn.scaleX = 1;
        bgLawn.scaleY = 1;
        this.addChild(bgLawn);

        var lifeCounts = [];
        //Adding Related Icons
        var i;
        var xMargin = 40;
        for (i = 0 ; i < 3 ; i++) {
            var lifeCounts = new createjs.Bitmap('Content/LifeCounts.png');
            lifeCounts.scaleX = .3;
            lifeCounts.scaleY = .3;
            lifeCounts.x = 960 - xMargin;
            lifeCounts.y = 630;
            xMargin = xMargin + 40;
            this.addChild(lifeCounts);
        }
    }

    // Game2 Related Things
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
    }
    p.run = function () {
        this.update();
        this.render();
        this.checkGame();
    }

    window.game.Game2 = Game2;

}(window));
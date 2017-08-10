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
        this.addButton();

        this.createPlayerContainer(); // create playerContainer
        this.createPlayer(); // create actual player object
        this.createPlayerControls(); // create player controls

        this.createTransformerContainer(); // create transformerContainer
        this.createTransformers(); // create actual transformer object
      

        this.createLaserContainer(); // create laserContainer
        this.createLaser(); // create actual laser object
        
    }

    p.addButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('Main Menu');
        btn.on('click', this.returnToMainMenu, this);

        //dimensions and postitions of button
        btn.regX = btn.width / 2;
        btn.x = canvas.width / 2;
        btn.y = 30;

        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#FFF', overColor: '#900' });
        this.addChild(btn);
    }
    p.returnToMainMenu = function (e) {
        this.dispatchEvent(game.GameStateEvents.MAIN_MENU);
    }

    // Adding Background function
    p.addBG = function () {
        var bg = new createjs.Bitmap('Content/game-background-Level1.jpg');
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
            lifeCounts.y = 610;
            xMargin = xMargin + 40;
            this.addChild(lifeCounts);
        }
        
    }

    // Adding Message function
    p.addMessages = function () {
        this.msgTxt = new createjs.Text("HELLO", '24px Arial', '#FFF');
        this.addChild(this.msgTxt);
    }
     
    // Create player container
    p.createPlayerContainer = function () {
        this.playerContainer = new createjs.Container();
        this.addChild(this.playerContainer);
    }

    // Create player object
    p.createPlayer = function () {
         var i, player, color;
        // Container for player object - players - with s at the end
        var players = this.playerContainer;
        var numPlayers = 1;
        var playerSize = 25;

        for (i = 0; i < numPlayers; i++) {
          
            // Creating object from a seperate file
            // File name is MakePlayer
            player = new MakePlayer();

            //After player is created, logic for the game.
            player.speed = 1;
          
            // Player Object's position
            player.x = 300;
            player.y = 430;


            // click on player
            player.on('click', this.onPlayerClick, this);

            // Add controls for the Player
            // Left Key, Right Key , Space
            player.on('', this.onPlayerClick, this);
            players.addChild(player);
        }// End of for loop

    }
    // Set controls for the player
    p.createPlayerControls = function () {
        
    }

    // This is not needed.
    p.onPlayerClick = function (e) {
        // Logic for Clicking on Player
        this.orbContainer.removeChild(e.target);
    }

    // Transformer container and object
    p.createTransformerContainer = function () {

    }

    p.createTransformers = function () {

    }

    // Laser container and object
    p.createLaserContainer = function () {

    }

    p.createLaser = function () {

    }

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

    window.game.Game = Game;

}(window));
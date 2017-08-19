(function (window) {

    window.game = window.game || {}

    function Game3() {
        this.initialize();
    }

    // Assigning long name to a variable
    var p = Game3.prototype = new createjs.Container();

    // defining the method
    p.Container_initialize = p.initialize;

    // two variable for the game
    p.msgTxt = null; // If tnothing shows up, this message will show
    p.playerContainer = null; // container for the player object
    p.bulbContainer = null;// container for the bulb
    p.transformerContainer = null; // container for the transformer object.
    p.bulletContainer = null; // container for the laser object.
    p.lifeCounts = [];

    p.initialize = function () {
        this.Container_initialize();
        this.addBG(); // Add backkground
        this.createPlayerContainer(); // create playerContainer
        this.createPlayer(); // create actual player object
        this.addFrontLawn();
        this.addButton();
        this.addBGSound();
    }
    p.addBGSound = function () {
        s = createjs.Sound.play("Content/audio/ParkBackground.mp3", createjs.Sound.INTERRUPT_NONE, 0, 10, -1, .125, 0);
        //this.addChild(s);
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
    p.gameOver = function (e) {
        this.dispatchEvent(game.GameStateEvents.GAME_OVER);
    }

    //BackGround
    // Adding Background function
    p.addBG = function () {
        var bg = new createjs.Bitmap('Content/level4.png');
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
    var numBullets;
    // Create player object
    p.createPlayer = function () {
        var i, color;
        // Container for player object - players - with s at the end
        var players = this.playerContainer;
        var numPlayers = 1;
        var playerSize = 25;
        numBullets = 6; // Can vary upon different level

        for (i = 0; i < numPlayers; i++) {
            // Creating object from a seperate file
            // File name is MakePlayer
            player = new MakePlayer(numBullets);

            //After player is created, logic for the game.
            player.speed = 1;

            // Player Object's position
            player.x = 10;
            player.y = 470;


            players.addChild(player);
        }// End of for loop

    }
   
    p.addFrontLawn = function () {
        // Adding Front Lawn
        var bgLawn = new createjs.Bitmap('Content/level4-front.png');
     
        bgLawn.scaleX = 1;
        bgLawn.scaleY = 1;
        this.addChild(bgLawn);

        
        //Adding Related Icons
        var i;
        var xMargin = 40;
        for (i = 0 ; i < numBullets ; i++) {
            this.lifeCounts[i] = new createjs.Bitmap('Content/bullets.png');
            this.lifeCounts[i].scaleX = .3;
            this.lifeCounts[i].scaleY = .3;
            this.lifeCounts[i].x = 960 - xMargin;
            this.lifeCounts[i].y = 630;
            xMargin = xMargin + 40;
            this.addChild(this.lifeCounts[i]);
        }
    }

    // Game3 Related Things
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
        //var game3 = game.MakePlayer.bullet_speed;
        
        //console(game3);
        //if(game.Game3)
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

    window.game.Game3 = Game3;

}(window));
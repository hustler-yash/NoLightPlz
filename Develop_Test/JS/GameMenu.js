(function (window) {

    window.game = window.game || {}

    function GameMenu() {
        this.initialize();
    }

    var p = GameMenu.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

    p.titleTxt = null;
    p.count = 0;

    p.initialize = function () {
        this.Container_initialize();
        this.addBG();
      //  this.addTitle();
      //  this.addOrbs();
        this.addButton();
        this.addControlsButton();
    }
    p.addBG = function () {
        //var bg = new createjs.Shape();
        var bg = new createjs.Bitmap('Content/NLP_logo.jpg');
        bg.scaleX = 1.3;
        bg.scaleY = 1;
       // bg.graphics.beginFill('0').drawRect(0, 0, canvas.width, canvas.height);
        this.addChild(bg);
    }
    p.addTitle = function () {
        this.titleTxt = new createjs.Text("No Light Plz ..", '40px Arial', '#fff');
        this.titleTxt.x = canvas.width / 2;
        this.titleTxt.y = 200;
        this.titleTxt.textAlign = 'center';
        this.addChild(this.titleTxt);
    }

    //p.addOrbs = function () {
    //    var i, orb;
    //    var orbContainer = new createjs.Container();
    //    var numOrbs = 5;
    //    var orbSize = 20;
    //    var orbPadding = 10;
    //    var orbsPosition = 300;
    //    for (i = 0; i < numOrbs; i++) {
    //        orb = new PulsingOrb('#FFF', orbSize);
    //        orb.x = i * ((orbSize * 2) + orbPadding);
    //        orbContainer.addChild(orb);
    //    }
    //    orbContainer.x = orbContainer.y = orbsPosition;
    //    this.addChild(orbContainer);
    //}

    // Start Game Button 
    p.addButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('Play Game');
        btn.on('click', this.playGame, this);

        //dimensions and postitions of button
        btn.regX = btn.width / 2 + 200;
        btn.x = canvas.width / 2;
        btn.y = 500;

        btn.setButton({upColor:'FF0000', color:'#FFF', borderColor:'#FFF', overColor:'#900'});
        this.addChild(btn);
    }

    // How to Play - Button
    p.addControlsButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('How To Play');
        btn.on('click', this.howToPlay, this);

        //dimensions and postitions of button
        btn.regX = btn.width / 2 - 200;
        btn.x = canvas.width / 2;
        btn.y = 500;

        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#FFF', overColor: '#900' });
        this.addChild(btn);
    }

    p.playGame = function (e) {
        this.dispatchEvent(game.GameStateEvents.GAME);
    }

    p.howToPlay = function (e) {
        this.dispatchEvent(game.GameStateEvents.howToPlay);
    }

    //p.run = function () {
    //    this.titleTxt.alpha = Math.cos(this.count++ * 0.1) * 0.4 + 0.6;
    //}
    window.game.GameMenu = GameMenu;

}(window));
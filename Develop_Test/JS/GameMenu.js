(function (window) {

    window.game = window.game || {}

    function GameMenu() {
        this.initialize();
    }

    var p = GameMenu.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

   
    p.count = 0;

    p.initialize = function () {
        this.Container_initialize();
        this.addBG();
        this.addBGSound();
        this.addButton();
        this.addButton2();
        this.addControlsButton();
    }
    p.addBG = function () {
        //var bg = new createjs.Shape();
        var bg = new createjs.Bitmap('Content/mAINmENU.png');
        bg.scaleX = 1;
        bg.scaleY = 1;
       // bg.graphics.beginFill('0').drawRect(0, 0, canvas.width, canvas.height);
        this.addChild(bg);
    }
   
    p.addBGSound = function () {
        s = createjs.Sound.play("Content/audio/cricketBackground.mp3", createjs.Sound.INTERRUPT_NONE, 0, 10, -1, .125, 0);
        //this.addChild(s);
    }

    p.stopBGsound = function () {
        s.stop();
      //  createjs.Sound.removeSounds(s);
    }

    // Start Game Button 
    p.addButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('Play Game');
        btn.on('click', this.playGame, this);
        //dimensions and postitions of button
        btn.regX = btn.width / 2    ;
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
        btn.regX = btn.width / 2 ;
        btn.x = canvas.width / 2;
        btn.y = 560;

        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#FFF', overColor: '#900' });
        this.addChild(btn);
    }
    p.addButton2 = function () {
        var btn, event;
        btn = new ui.SimpleButton('Go to Level-2');
        btn.on('click', this.goToLevel2, this);

        //dimensions and postitions of button
        btn.regX = btn.width / 2;
        btn.x = canvas.width / 2;
        btn.y = 620;

        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#FFF', overColor: '#900' });
        this.addChild(btn);
    }

    p.playGame = function (e) {
      //  p.stopBGsound();
        this.dispatchEvent(game.GameStateEvents.GAME);
    }

    p.howToPlay = function (e) {
     //   p.stopBGsound();
        this.dispatchEvent(game.GameStateEvents.HowToPlay);
    }

    p.goToLevel2 = function (e) {
        //   p.stopBGsound();
        this.dispatchEvent(game.GameStateEvents.GAMETWO);
    }

    //p.run = function () {
    //    this.titleTxt.alpha = Math.cos(this.count++ * 0.1) * 0.4 + 0.6;
    //}
    window.game.GameMenu = GameMenu;

}(window));
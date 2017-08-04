(function (window) {

    window.game = window.game || {}

    function HowToPlay() {
        this.initialize();
    }

    // Assigning long name to a variable
    var p = HowToPlay.prototype = new createjs.Container();

    // defining the method
    p.Container_initialize = p.initialize;


    p.titleTxt = null;
    p.count = 0;

    p.initialize = function () {
        this.Container_initialize();
        this.addBG();
        //  this.addTitle();
        //  this.addOrbs();
       // this.addButton();
       // this.addControlsButton();
    }

    p.addBG = function () {
        //var bg = new createjs.Shape();
        var bg = new createjs.Bitmap('Content/HowToPlay.jpg');
        bg.scaleX = 1.3;
        bg.scaleY = 1;
        // bg.graphics.beginFill('0').drawRect(0, 0, canvas.width, canvas.height);
        this.addChild(bg);
    }

    window.game.HowToPlay = HowToPlay;

}(window));
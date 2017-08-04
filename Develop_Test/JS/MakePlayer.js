(function () {

    var MakePlayer = function () {
        this.initialize();
    }
    
    // Making the player - Applying the image to object
    // var p = MakePlayer.prototype = new createjs.Shape();
    var p = MakePlayer.prototype = new createjs.Sprite();

   // var p = MakePlayer.prototype = new createjs.SpriteSheet(data);
   // var pig = new Pig(ss);
    //stage.addChild(pig);

    //p.count = 0;

    //properties of Player
    p.speed = 0;
    p.size = 0;

    p.Shape_initialize = p.initialize;

    MakePlayer.prototype.initialize = function () {
        
        this.size = size;
        this.Shape_initialize();
       // this.alpha = Math.random();
        this.graphics.beginFill(color).drawCircle(0, 0, size);
        this.on('tick', this.pulse);
    }
    //MakePlayer.prototype.pulse = function () {
    //    this.alpha = Math.cos(this.count++ * 0.1) * 0.4 + 0.6;
    //}
    window.MakePlayer = MakePlayer;
}());
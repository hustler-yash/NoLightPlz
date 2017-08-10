(function () {

    function MakePlayer() {
        this.initialize();
    }
    
    // Making the player - Applying the image to object
  //   var p = MakePlayer.prototype = new createjs.Shape();
   // var p = MakePlayer.prototype = new createjs.Sprite();

  //  var p = MakePlayer.prototype = new createjs.SpriteSheet(data);
   // var pig = new Pig(ss);
    //stage.addChild(pig);

    //p.count = 0;

    //properties of Player
   // p.speed = 0;
    //p.size = 0

    var p = MakePlayer.prototype = new createjs.Container();

    var data; //data for spritesheet

    p.Shape_initialize = p.initialize;

    p.initialize = function () {
        
       // this.size = size;
       // this.Shape_initialize();
        this.drawSprites();
       // this.alpha = Math.random();
      //  this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createPlayer();
     //   this.on('tick', this.pulse);
    }


    p.drawSprites = function () {
         data = {
            "images": ["Content/charWalk.png"],
            "frames": [
            [0, 0, 81, 167, 0, 0, 0], //1
            [81, 0, 81, 169, 0, 0, 0],//2
            [162, 0, 81, 169, 0, 0, 0],//3
            [243, 0, 81, 168, 0, 0, 0],//4
            [324, 0, 82, 165, 0, 0, 0],//5
            [406, 0, 82, 167, 0, 0, 0],//6
            [488, 0, 81, 169, 0, 0, 0],//7
            [569, 0, 81, 169, 0, 0, 0],//8
            [650, 0, 81, 169, 0, 0, 0],//9
            [731, 0, 81, 168, 0, 0, 0],//10
            [0, 165, 81, 167, 1, 0, 0],//11
            [0, 332, 81, 169, 1, 0, 0],//12
            [0, 501, 81, 170, 1, 0, 0],//13
            [0, 671, 82, 169, 1, 0, 0],//14
            [0, 0, 82, 165, 1, 0, 0],//15
            [0, 840, 82, 168, 1, 0, 0],//16
            [0, 1008, 81, 169, 1, 0, 0],//17
            [0, 1177, 81, 169, 1, 0, 0],//18
            [0, 1346, 81, 169, 1, 0, 0],//19
            [0, 1515, 81, 168, 1, 0, 0],//20
            ],
            "animations": {
                "bob": [0],
                "stand": [0, 0, "stand", 8],
                "stand_h": {
                    frames: [9],
                    next: "stand",
                    frequency: 8
                }
            }
        }
    }

    p.createPlayer = function () {
        var spritesheet = new createjs.SpriteSheet(data);
        var player = MakePlayer.prototype = new createjs.Sprite(spritesheet, 'bob');
        this.addChild(player);
    }


    //MakePlayer.prototype.pulse = function () {
    //    this.alpha = Math.cos(this.count++ * 0.1) * 0.4 + 0.6;
    //}

    window.MakePlayer = MakePlayer;
}());
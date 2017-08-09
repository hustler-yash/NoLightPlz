(function () {

    var MakePlayer = function () {
        this.initialize();
    }
    
    // Making the player - Applying the image to object
     var p = MakePlayer.prototype = new createjs.Shape();
   // var p = MakePlayer.prototype = new createjs.Sprite();

   // var p = MakePlayer.prototype = new createjs.SpriteSheet(data);
   // var pig = new Pig(ss);
    //stage.addChild(pig);

    //p.count = 0;

    //properties of Player
    p.speed = 0;
    p.size = 0;

    p.Shape_initialize = p.initialize;

    MakePlayer.prototype.initialize = function () {
        
       // this.size = size;
        this.Shape_initialize();
       // this.drawSprites();
       // this.alpha = Math.random();
        this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
       // this.createPlayer();
        this.on('tick', this.pulse);
    }


    p.drawSprites = function () {
        var data = {
            "images": ["Content/charWalk.png"],
            "frames": [
              [1, 1, 661, 308, 0, 0, 0],
              [664, 1, 308, 665, 0, 0, 0],
              [1331, 1, 308, 668, 0, 0, 0],
              [1, 311, 308, 671, 0, 0, 0],
              [1335, 931, 309, 672, 0, 0, 0],
              [1, 1552, 311, 672, 0, 0, 0],
              [1349, 1554, 312, 671, 0, 0, 0],
              [675, 1553, 311, 672, 0, 0, 0],
              [1349, 1242, 310, 672, 0, 0, 0],
              [1, 1241, , 309, 672, 0, 0],
              [675, 1242, 309, 672, 0, 0, 0],
              [674, 311, 308, 671, 0, 0, 0],
              [1347, 311, 308, 670, 0, 0, 0],
              [1, 621, 308, 669, 0, 0, 0],
              [672, 621, 308, 668, 0, 0, 0],
              [1342, 621, 308, 661, 0, 0, 0],
              [1, 931, 308, 666, 0, 0, 0],
              [669, 931, 308, 664, 0, 0, 0]
            ],
            "animations": {
                "board": [0],
                "bubble": [1],
                "chooseCPU1": [2],
                "chooseCPU2": [3],
                "chooseCPU3": [4],
                "cpu1": [5],
                "cpu2": [6],
                "cpu3": [7],
                "frank": [8],
                "scoreBrick": [9],
                "stone_0": [10],
                "stone_1": [11],
                "stone_2": [12],
                "stone_3": [13],
                "window": [14],
                "windowOn": [15]
            }
        }
    }

    p.createPlayer = function () {
        var p = MakePlayer.prototype = new createjs.SpriteSheet(data);

    }


    MakePlayer.prototype.pulse = function () {
        this.alpha = Math.cos(this.count++ * 0.1) * 0.4 + 0.6;
    }

    window.MakePlayer = MakePlayer;
}());
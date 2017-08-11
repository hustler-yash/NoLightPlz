(function () {

    function MakePlayer() {
        this.initialize();
    }

    //constants to players
    const ARROW_KEY_LEFT = 37;
    const ARROW_KEY_RIGHT = 39;
    const A_KEY_DOWN = 65;
    const D_KEY_DOWN = 68;
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 800;

    var p = MakePlayer.prototype = new createjs.Container();
    var data; //data for spritesheet
    var player;
    var player_speed = 20;
    
    

    p.Shape_initialize = p.initialize;

    p.initialize = function () {
        
       // this.size = size;
       // this.Shape_initialize();
        this.drawSprites();
       // this.alpha = Math.random();
      //  this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createPlayer();
        this.createPlayerControls();
     //   this.on('tick', this.pulse);
    }


    p.drawSprites = function () {
         data = {
             "images": ["Content/charWalk.png", "Content/charWalk._hrz.png"],
            "frames": [
            // For the right side

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

            // For the Left side

            [0, 165, 81, 167, 1, 0, 1],//11
            [0, 332, 81, 169, 1, 0, 1],//12
            [0, 501, 81, 170, 1, 0, 1],//13
            [0, 671, 82, 169, 1, 0, 1],//14
            [0, 0, 82, 165, 1, 0, 1],//15
            [0, 840, 82, 168, 1, 0, 1],//16
            [0, 1008, 81, 169, 1, 0, 1],//17
            [0, 1177, 81, 169, 1, 0, 1],//18
            [0, 1346, 81, 169, 1, 0, 1],//19
            [0, 1515, 81, 168, 1, 0, 1],//20
            ],
            "animations": {
                "bob": [0],
                "goRight": {
                    frames: [1,2,3,4,5,6,7,8,9],
                    next: "bob",
                    frequency: -40,
                },
                "goLeft": {
                    frames: [10,11,12,13,14,15,16,17,18,190],
                    next: "bob",
                    frequency: -40,
                }
            }
        }
    }
    // Create Player
    p.createPlayer = function () {
        var spritesheet = new createjs.SpriteSheet(data);
        player = MakePlayer.prototype = new createjs.Sprite(spritesheet, 'bob');
        this.addChild(player);
    }
    
    // Setting Player Controls
    p.createPlayerControls = function () {
        window.onkeydown = this.handleKeyDown;
        window.onkeyup =   this.handleKeyUp;
    }

    // Handling Key DOWN event
    p.handleKeyDown = function (e) {
        e = !e ? window.event : e;
        switch (e.keyCode) {

            case A_KEY_DOWN:
            case ARROW_KEY_LEFT:
                leftKeyDown = true;
                a_KeyDown = true;
                
                if (player.x > 0)
                {
                    player.gotoAndPlay('goLeft');
                    player.x = player.x - player_speed;
                }
                

                //createjs.Tween.get(player).to({ x: -40 }, 1000);
                
                break;

            case D_KEY_DOWN:
            case ARROW_KEY_RIGHT:
                rightKeyDown = true;
                d_KeyDown = true;
                
                if (player.x < STAGE_WIDTH-100) {
                    player.gotoAndPlay('goRight');
                    player.x = player.x + player_speed;
                } 
                       
                break;

           
        }
    }

    window.MakePlayer = MakePlayer;
}());
(function () {

    function MakePlayer(numBul) {
        numBullets = numBul;
        this.initialize();
    }

    //constants to players
    const ARROW_KEY_LEFT = 37;
    const ARROW_KEY_RIGHT = 39;
    const A_KEY_DOWN = 65;
    const D_KEY_DOWN = 68;
    const SPACE_KEY = 32;
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 800;


    var p = MakePlayer.prototype = new createjs.Container();
    var data; //data for spritesheet
    var player;
    var player_speed = 25;
    var bullet = [];
    MakePlayer.bullets = bullet;
   // var bullets = game.Game.bulletContainer;
    var bullet_speed = 10;
    var numBullets;
    var numBulletsLeft = numBullets;


    p.Shape_initialize = p.initialize;

    p.initialize = function () {


        this.drawSprites();

        //  this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createPlayer();
        this.createPlayerControls();

        this.createBullet(numBullets);

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
                    frames: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    next: "bob",
                    frequency: -40,
                },
                "goLeft": {
                    frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 190],
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
        //    player.addEventListener("onkeydown", this.handleKeyDown);
        //    player.addEventListener("onkeyup", this.handleKeyUp);
        window.onkeydown = this.handleKeyDown;
        window.onkeyup = this.handleKeyUp;
    }

    // Create Bullet
    p.createBullet = function (numBul) {

        for (i = 0; i < numBul ; i++) {
            bullet[i] = new createjs.Shape();
            bullet[i].graphics.beginStroke('#000');
            bullet[i].graphics.beginFill('#FFF000');
            bullet[i].graphics.drawCircle(0, 0, 5);
            bullet[i].x = 70;
            bullet[i].y = 32;
            bullet[i].visible = false;
           // bullets.addChild(bullet[i]);
            this.addChild(bullet[i]);
        }

    }

    // Handling Key DOWN event
    p.handleKeyDown = function (e) {
        e = !e ? window.event : e;
        switch (e.keyCode) {

            case A_KEY_DOWN:
            case ARROW_KEY_LEFT:
                leftKeyDown = true;
                a_KeyDown = true;

                if (player.x > 0) {
                    player.gotoAndPlay('goLeft');
                    player.x = player.x - player_speed;

                    for (i = 0; i < numBullets ; i++) {
                        bullet[i].visible = false;
                        bullet[i].x = bullet[i].x - player_speed;
                    }
                }

                break;

            case D_KEY_DOWN:
            case ARROW_KEY_RIGHT:
                rightKeyDown = true;
                d_KeyDown = true;

                if (player.x < STAGE_WIDTH - 100) {


                    player.gotoAndPlay('goRight');
                    player.x = player.x + player_speed;

                    for (i = 0; i < numBullets ; i++) {
                     //   bullet[i].visible = true;
                        bullet[i].x = bullet[i].x + player_speed;
                    }
                }

                break;

            case SPACE_KEY:
               
                if (j >= numBullets) {
                    return;
                }

                createjs.Ticker.addEventListener("tick", fireBullet);
                createjs.Ticker.interval = 50;
                console.log("fireBullet done..");

                
                break;

        }
    }

    p.handleKeyUp = function (e) {
        e = !e ? window.event : e;
        switch (e.keyCode) {
            case ARROW_KEY_LEFT:
                leftKeyDown = false;
                a_KeyDown = false;
                break;
            case ARROW_KEY_RIGHT:
                rightKeyDown = false;
                d_KeyDown = false;
                break;
        }
    }

    var j = 0;
    function fireBullet(event) {

        bullet[j].visible = true;
      //  if(isCollied(bullet[j], trasformer))
        bullet[j].x = bullet[j].x + bullet_speed;
        bullet[j].y = bullet[j].y - bullet_speed;

        if (bullet[j].y < -468) {
            createjs.Ticker.removeEventListener("tick", fireBullet);
            bullet[j].visible = false;
            j++;

        }
    }

    window.MakePlayer = MakePlayer;
}());
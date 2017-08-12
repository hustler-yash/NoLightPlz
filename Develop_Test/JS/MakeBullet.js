(function () {

    function MakeBullet(numBul) {
        numBullets = numBul;
        this.initialize();
    }

    var p = MakeBullet.prototype = new createjs.Container();

    var bullet;
    var numBullets;
    var bullet_speed = 10; // To Move with Player object
    var fire_speed = 30;// Can be vary for stage difficulty

    // Constants
    const ARROW_KEY_LEFT = 37;
    const ARROW_KEY_RIGHT = 39;
    const A_KEY_DOWN = 65;
    const D_KEY_DOWN = 68;
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 700;

    p.initialize = function () {
        //this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createBullet();
        this.createBulletControls();
    }

    //bullet
    // Create bullet
    var bullet;
    p.createBullet = function () {

        bullet = new createjs.Shape();
        bullet.graphics.beginStroke('#000');
        bullet.graphics.beginFill('#FFF000');
        bullet.graphics.drawCircle(0, 0, 5);
        bullet.x = 0;
        bullet.y = 0;
        this.addChild(bullet);

        //createjs.graphics.beginFill("#fgf").drawCircle(0, 0, 10);
        //bullet.scaleX = 1;
        //bullet.scaleY = 1;
        //this.addChild(bullet);
    }

    // Setting Player Controls
    p.createBulletControls = function () {
        window.onkeydown = this.handleKeyDown;
        window.onkeyup = this.handleKeyUp;
    }

    // Handling Key DOWN event
    p.handleKeyDown = function (e) {
        e = !e ? window.event : e;
        switch (e.keyCode) {

            case A_KEY_DOWN:
            case ARROW_KEY_LEFT:
                leftKeyDown = true;
                a_KeyDown = true;

               // for (i = 0; i < numBullets; i++) {
                if (bullet[i].x > 0) {
                        bullet[i].x = bullet[i].x - bullet_speed;
                    }
                //}
                

                break;

            case D_KEY_DOWN:
            case ARROW_KEY_RIGHT:
                rightKeyDown = true;
                d_KeyDown = true;

                for (i = 0; i < numBullets; i++) {
                    if (bullet[i].x < STAGE_WIDTH - 100) {
                        bullet[i].x = bullet[i].x + bullet_speed;
                    }
                }

                break;


        }
    }


    window.MakeBullet = MakeBullet;
}());
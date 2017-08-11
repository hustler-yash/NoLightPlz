(function () {

    function MakeBulb() {
        this.initialize();
    }

    var p = MakeBulb.prototype = new createjs.Container();
  
    var bulb;
    var bulb_speed = 10;

    // Constants
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 700;


   

    p.initialize = function () {

        // this.size = size;
        // this.Shape_initialize();
       // this.drawSprites();
        // this.alpha = Math.random();
        //  this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createBulb();
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setInterval(50);
       // this.run();
       // this.on('tick', this.pulse);

        //   this.on('tick', this.pulse);
    }

    
    function handleTick(event) {
        // Actions carried out each tick (aka frame)
        if (!event.paused) {
            // Actions carried out when the Ticker is not paused.
            if (bulb.x < -120) {
                bulb.x = STAGE_WIDTH ;
            } else {
                bulb.x = bulb.x - bulb_speed;
                //bulb.update();
            }
        }
    }


    p.update = function () {
        var i=0;
        do{
            if (bulb.x < 0) {
                bulb.x = STAGE_WIDTH;
            } else {
                bulb.x = bulb.x - bulb_speed;
                //bulb.update();
            }
            i++
        }while(i<=10);
    }

//bulb
    // Create bulb
    var bulb;
    p.createBulb = function () {
        bulb = new createjs.Bitmap('Content/bulb.png');
        bulb.scaleX = .6;
        bulb.scaleY = .6;
        this.addChild(bulb);
    }

    p.run = function () {
        this.update();
        //this.render();
        //this.checkGame();
    }

    window.MakeBulb = MakeBulb;
}());
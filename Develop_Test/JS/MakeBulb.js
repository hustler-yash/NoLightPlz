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

        this.createBulb();
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setInterval(50);
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

//bulb
    // Create bulb
    var bulb;
    p.createBulb = function () {
        bulb = new createjs.Bitmap('Content/bulb.png');
        bulb.scaleX = .3;
        bulb.scaleY = .3;
        this.addChild(bulb);
    }


    window.MakeBulb = MakeBulb;
}());
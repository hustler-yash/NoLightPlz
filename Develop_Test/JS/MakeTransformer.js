(function () {

    function MakeTransformer() {
        this.initialize();
    }

    var p = MakeTransformer.prototype = new createjs.Container();
  
    var transformer;
    var transformer_speed = 10;

    // Constants
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 800;


   

    p.initialize = function () {

        // this.size = size;
        // this.Shape_initialize();
       // this.drawSprites();
        // this.alpha = Math.random();
        //  this.graphics.beginFill("#fgf").drawCircle(0, 0, 50);
        this.createTransformer();
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
            if (transformer.x < -120) {
                transformer.x = STAGE_WIDTH ;
            } else {
                transformer.x = transformer.x - transformer_speed;
                //transformer.update();
            }
        }
    }


    p.update = function () {
        var i=0;
        do{
            if (transformer.x < 0) {
                transformer.x = STAGE_WIDTH;
            } else {
                transformer.x = transformer.x - transformer_speed;
                //transformer.update();
            }
            i++
        }while(i<=10);
    }

//Transformer
    // Create Transformer
    var transformer;
    p.createTransformer = function () {
        transformer = new createjs.Bitmap('Content/transformer.png');
        transformer.scaleX = .6;
        transformer.scaleY = .6;
        this.addChild(transformer);
    }

    p.run = function () {
        this.update();
        //this.render();
        //this.checkGame();
    }

    window.MakeTransformer = MakeTransformer;
}());
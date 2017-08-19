(function () {

    function MakeTransformer() {
        this.initialize();
    }

    var p = MakeTransformer.prototype = new createjs.Container();
  
    var transformer;
    var transformer_speed = 10;

    // Constants
    const STAGE_WIDTH = 1000;
    const STAGE_HEIGHT = 700;


    p.initialize = function () {
        this.createTransformer();
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setInterval(50);
    }

    
    function handleTick(event) {
        // Actions carried out each tick (aka frame)
        if (!event.paused) {
            // Actions carried out when the Ticker is not paused.
            p.addTransSound(); // Sound 
            if (transformer.x < -120) {
                transformer.x = STAGE_WIDTH ;
            } else {
                transformer.x = transformer.x - transformer_speed;
                //transformer.update();
            }
        }
    }

    p.addTransSound = function () {
        s = createjs.Sound.play("Content/audio/transformerEffect.mp3", createjs.Sound.INTERRUPT_ANY, 0, 10, -1, 0.0075, 0);
        //this.addChild(s);
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

    window.MakeTransformer = MakeTransformer;
}());
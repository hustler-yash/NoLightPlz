(function (window)){
  window.game = window.game || {}

  function noLightPlz(){
    this.initialize();
  }
  var n = noLightPlz.prototype;
  n.currentGameStateFunction;
  n.currentGameState;
  n.currentScene;

  n.initialize = function(){
    canvas = document.getElementById('canvas');
    stage = new createjs.stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on('tick',this.onTick,this);
    this.changeState(game.Ga)
  }
}
)

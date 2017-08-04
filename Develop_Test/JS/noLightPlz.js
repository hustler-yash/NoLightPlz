(function (window) {
  window.game = window.game || {}

    function noLightPlz(){
        this.initialize();
    }

    // assigning long name to p
    var p = noLightPlz.prototype;

    // Creating Scene -> Game State -> Game State Function
    p.currentGameStateFunction; // activity related to current State
    p.currentGameState; // States
    p.currentScene; // Current Scene

    // initialize function - First thing to start
    p.initialize = function () {
        canvas = document.getElementById('canvas'); // getting canvas
        stage = new createjs.Stage(canvas); // stage variable assigning to canvas
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.onTick, this); //onTick - upadate stage
        // To change the state of Scene
        // Is it in Main-menu, Start, Game Over  state ?
        this.changeState(game.GameStates.MAIN_MENU);
    }

    // Moving from state to state
    p.changeState = function (state) {
        this.currentGameState = state;
        switch (this.currentGameState) {

            case game.GameStates.MAIN_MENU:
                this.currentGameStateFunction = this.gameStateMainMenu;
                break;
            case game.GameStates.GAME:
                this.currentGameStateFunction = this.gameStateGame;
                break;
            case game.GameStates.RUN_SCENE:
                this.currentGameStateFunction = this.gameStateRunScene;
                break;
            case game.GameStates.GAME_OVER:
                this.currentGameStateFunction = this.gameStateGameOver;
                break;
        } //End of Switch
    } // End of changeState function

    // Changing the States
    p.onStateEvent = function (e, data) {
        this.changeState(data.state);
    }

    // Menu of the Game
    // NOTE:- RAJ YOU HAVE TO CODE THIS PART
    p.gameStateMainMenu = function () {
        //creating scene
        var scene = new game.GameMenu();

        // adding the function to scene or library
        // Here, game.GameStateEvents.GAME - GAME is a file.
        scene.on(game.GameStateEvents.GAME, this.onStateEvent, this, false, { state: game.GameStates.GAME });

        //adding scene to stage
        stage.addChild(scene);

        // removing current child
        stage.removeChild(this.currentScene);

        // Assigning scene to Current scene
        this.currentScene = scene;

        //Changing the state of Game
        // Here - game will be in running mode.
        this.changeState(game.GameStates.RUN_SCENE);
    }












    p.onTick = function (e) {
        this.run();
        stage.update();
    }

    window.game.noLightPlz = noLightPlz;

}(window));
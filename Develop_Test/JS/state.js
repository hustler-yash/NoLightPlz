(function () {

    window.game = window.game || {};

    var GameStates = {
        MAIN_MENU: 0,
        HowToPlay: 1,
        RUN_SCENE:2,
        GAME:10,
        SCORE_SCREEN:11,
        GAME_OVER:20
    }

    var GameStateEvents = {
        MAIN_MENU: 'main menu event',
        HowToPlay: 'how to play',
        GAME_OVER:'game over event',
        MAIN_MENU_SELECT:'game menu select event',
        GAME:'game event',
        SCORE_SCREEN:'score screen event'
    }

    window.game.GameStates = GameStates;
    window.game.GameStateEvents = GameStateEvents;

}());

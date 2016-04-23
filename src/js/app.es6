import * as Game from "./game";

var game;

init();

function init() {
	game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
	game.state.add("Game", Game.Game);

	game.state.start("Game");
}
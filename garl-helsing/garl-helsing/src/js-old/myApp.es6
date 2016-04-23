//import * as Boot from "./boot";
//import * as Game from "./game";
//
//var game;
//
//init();
//
//function init() {
//  game = new Phaser.Game(800, 480, Phaser.AUTO, 'game');
//  game.state.add("Boot", Boot.Boot);
//  game.state.add("Game", Game.Game);
//
//  game.state.start("Boot");
//}

import * as logic from "./game/logic";

let gameLogic = new logic.Grid(10);

console.log(gameLogic.grid);

console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());
console.log(gameLogic.nextTurn());


console.log(gameLogic.grid);
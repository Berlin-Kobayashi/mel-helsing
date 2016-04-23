var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update,
	render: render
});

function preload() {

	game.load.tilemap('map', 'assets/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('background', 'assets/background2.png');
	game.load.image('ground_1x1', 'assets/ground_1x1.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

var bg;
var map;
var layer;
var cursors;
var sprite;
var jumpButton;
var jumpTimer = 0;
var facing = 'left';

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	bg = game.add.tileSprite(0, 0, 2000, 600, 'background');

	map = game.add.tilemap('map');
	map.addTilesetImage('ground_1x1');
	layer = map.createLayer('Tile Layer 1');
	layer.resizeWorld();

	map.setCollisionBetween(1, 12);

	sprite = game.add.sprite(32, 320, 'dude');
	game.physics.enable(sprite, Phaser.Physics.ARCADE);

	sprite.body.collideWorldBounds = true;
	sprite.body.maxVelocity.y = 500;
	sprite.body.bounce.set(0.2);
	sprite.body.setSize(20, 32, 5, 16);
	sprite.animations.add('left', [0, 1, 2, 3], 10, true);
	sprite.animations.add('turn', [4], 20, true);
	sprite.animations.add('right', [5, 6, 7, 8], 10, true);

	game.camera.follow(sprite);
	game.physics.arcade.gravity.y = 800;

	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

var frameCounter = 0;
function update() {
	if (frameCounter % 3 == 0) {
		createTiles();
	}

	game.physics.arcade.collide(sprite, layer);

	//  Un-comment these to gain full control over the sprite
	sprite.body.velocity.x = 0;

	if (cursors.left.isDown) {
		sprite.body.velocity.x = -150;
		if (facing != 'left') {
			sprite.animations.play('left');
			facing = 'left';
		}
	}
	else if (cursors.right.isDown) {
		sprite.body.velocity.x = 150;
		if (facing != 'right') {
			sprite.animations.play('right');
			facing = 'right';
		}
	}
	else {
		if (facing != 'idle') {
			sprite.animations.stop();

			if (facing == 'left') {
				sprite.frame = 0;
			}
			else {
				sprite.frame = 5;
			}

			facing = 'idle';
		}
	}

	if (jumpButton.isDown && sprite.body.onFloor() && game.time.now > jumpTimer) {
		sprite.body.velocity.y = -500;
		jumpTimer = game.time.now + 750;
	}

	frameCounter++;
}

function render() {

	//  Useful debug things you can turn on to see what's happening

	// game.debug.spriteBounds(sprite);
	// game.debug.cameraInfo(game.camera, 32, 32);
	// game.debug.body(sprite);
	//game.debug.bodyInfo(sprite, 16, 24);

}

var prevX = Math.round(Math.random() * 50),
	prevY = Math.round(Math.random() * 20),
	barLength = 0,
	horizontalMode = Math.round(Math.random());
function createTiles() {
	console.log(horizontalMode);
	var xAxis = Math.round(Math.random() * 50);
	var yAxis = Math.round(Math.random() * 20);

	if (barLength < 3) {
		if (horizontalMode == 1) {
			map.putTile(1, ++prevX, prevY, layer);
			barLength++;
		} else {
			map.putTile(1, prevX, ++prevY, layer);
			barLength++;
		}
	} else {
		prevX = xAxis;
		prevY = yAxis;
		barLength = 0;
		horizontalMode = Math.round(Math.random());
	}
}
define([
		'lib/scene',
		'entity/player',
		'lib/map',
		'lib/viewport',
		'config/colors',
		'geo/v2',
		'lib/gridcollider',
		'entity/virtualkeyboard',
		'basic/entity',
		'entity/characterselection',
		'entity/pressureplate',
		'entity/door',
		'core/graphic',
		'entity/destructible'
	], function (
		Scene,
		Player,
		TiledMap,
		ViewPort,
		colors,
		V2,
		GridCollider,
		Keys,
		Entity,
		CharacterSelection,
		PressurePlate,
		Door,
		graphics,
		Destructible
	) {
		var start = new V2(500, 500);
		graphics.add('img/bg_forest.jpg');

		function PlayScene() {
			Scene.call(this);

			this.bg = 'img/bg_forest.jpg';
			this.map = new TiledMap('map');
			this.viewport = new ViewPort(true);
			this.selector = new CharacterSelection();

			this.players = {y: null, a: null, e: null};
			this.playbacks = {y: null, a: null, e: null};

			this.delta = 0;
			this.duration = this.map.get('time') || 10000;

			this.obstacles = new Entity();
			this.obstacles.add(new Destructible(new V2(800, 600)));

			this.door = new Door(new V2(400, 600));
			this.pressureplate = new PressurePlate(new V2(40, 600), this.players, this.door);
			this.obstacles.add(this.door);
			this.viewport.add(this.pressureplate);

			this.keys = new Keys.Aggregator();
			this.keyAware.push(this.keys);

			this.viewport.add(this.map.render());
			this.viewport.add(this.obstacles);
			this.viewport.dragable(true);

			this.add(this.viewport);
			this.add(this.selector);
		}

		PlayScene.prototype = new Scene();

		PlayScene.prototype.selectCharacter = function (character) {
			if (this.players[character]) {
				this.players[character].fadeIn();
				this.playbacks[character] = null;
			} else {
				this.players[character] = new Player(start, GridCollider.factory(this.map, this.obstacles.entities), character);
				this.viewport.add(this.players[character]);
			}

			this.character = character;
			this.player = this.players[character];

			this.viewport.dragable(false);
			this.viewport.follow(this.player);

			this.delta = 0;

			for (var i in this.players)
				if (this.players[i])
					this.players[i].position = new V2(500, 500);

			for (var i in this.playbacks)
				if (this.playbacks[i])
					this.playbacks[i].reset();

			for (var i in this.obstacles.entities)
				if (this.obstacles.entities[i].reset)
					this.obstacles.entities[i].reset();

			this.recorder = new Keys.Recorder();
			this.keys.add(this.recorder);
			this.keys.add(this.player);
		};

		PlayScene.prototype.stop = function () {
			this.keys.clear();
			this.player.fadeOut();
			this.player.stop();

			this.playbacks[this.character] = new Keys.Playback(this.recorder);
			this.playbacks[this.character].delta = this.duration * 2;
			this.playbacks[this.character].add(this.player);

			this.player = null;
			this.viewport.dragable(true);
			this.viewport.follow(null);
			this.add(this.selector);
		};

		PlayScene.prototype.onUpdate = function (delta) {
			for (var i in this.playbacks)
				if (this.playbacks[i])
					this.playbacks[i].update(delta);

			if (this.recorder)
				this.recorder.update(delta);

			this.delta += delta;
			if (this.delta >= this.duration && this.player)
				this.stop();
		};

		return PlayScene;
	}
);
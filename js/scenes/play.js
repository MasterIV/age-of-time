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
		'entity/destructible',
		'entity/toucharea',
		'entity/goal'
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
		Destructible,
		TouchArea,
		Goal
	) {
		var start = new V2(500, 500);
		graphics.add('img/bg_forest.jpg');

		function PlayScene(level) {
			Scene.call(this);

			this.add(new TouchArea());

			this.bg = 'img/bg_forest.jpg';
			this.map = new TiledMap(level);
			this.viewport = new ViewPort(true);
			this.selector = new CharacterSelection();

			this.players = {y: null, a: null, e: null};
			this.playbacks = {y: null, a: null, e: null};
			this.spawn = {y: start, a: start, e: start};

			this.delta = 0;
			this.duration = this.map.get('time') || 10000;

			this.obstacles = new Entity();
			this.spawnObjects(this.map.getObjects());

			this.keys = new Keys.Aggregator();
			this.keyAware.push(this.keys);

			this.viewport.add(this.map.render());
			this.viewport.add(this.obstacles);
			this.viewport.dragable(true);

			this.add(this.viewport);
			this.add(this.selector);
		}

		PlayScene.prototype = new Scene();

		PlayScene.prototype.spawnObjects = function(objects) {
			var doors = { red: [], green: [], blue: [], yellow: [] };
			var buttons = { red: [], green: [], blue: [], yellow: [] };

			for(var i = 0; i < objects.length; i++) {
				var o = objects[i];
				if(!o.properties) continue;
				var p = o.properties;

				var pos = new V2(o.x, o.y);
				pos.grid(this.map.tile.x, this.map.tile.y);
				pos.mul(this.map.tile.x);

				switch(p.type) {
					case 'spawn':
						this.spawn[p.character] = pos;
						break;
					case 'destructible':
						this.obstacles.add(new Destructible(pos));
						break;
					case 'door':
						var d = new Door(pos, p.color);
						this.obstacles.add(d);
						doors[p.color].push(d);
						break;
					case 'button':
						var b = new PressurePlate(pos, this.players);
						this.viewport.add(b);
						buttons[p.color].push(b);
						break;
					case 'goal':
						this.viewport.add(new Goal(pos, this.players));
						break;
				}
			}

			for(var c in buttons)
				for(var j in buttons[c])
					buttons[c][j].targets = doors[c];
		};

		PlayScene.prototype.selectCharacter = function (character) {
			if (this.players[character]) {
				this.players[character].fadeIn();
				this.playbacks[character] = null;
			} else {
				this.players[character] = new Player(Zero(), GridCollider.factory(this.map, this.obstacles.entities), character);
				this.viewport.add(this.players[character]);
			}

			this.character = character;
			this.player = this.players[character];

			this.viewport.dragable(false);
			this.viewport.follow(this.player);

			this.delta = 0;

			for (var i in this.players)
				if (this.players[i])
					this.players[i].position = this.spawn[i].clone();

			for (var i in this.playbacks)
				if (this.playbacks[i])
					this.playbacks[i].reset();

			this.obstacles.dispatch(this.obstacles.entities, 'reset');

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
define([
		'lib/scene',
		'entity/player',
		'lib/map',
		'lib/viewport',
		'basic/rect',
		'config/colors',
		'geo/v2',
		'lib/gridcollider',
		'entity/virtualkeyboard',
		'basic/entity',
		'entity/characterselection'
	], function (
		Scene,
		Player,
		TiledMap,
		ViewPort,
		RectEntity,
		colors,
		V2,
		GridCollider,
		Keys,
		Entity,
		CharacterSelection
	) {
		var start = new V2(500, 500);

		function PlayScene() {
			Scene.call(this);

			this.map = new TiledMap('map');
			this.viewport = new ViewPort(true);
			this.selector = new CharacterSelection();

			this.players = {y: null, a: null, e: null};
			this.playbacks = {y: null, a: null, e: null};

			this.delta = 0;
			this.duration = this.map.get('time') || 10000;

			this.obstacles = new Entity();
			this.obstacles.add(new RectEntity(new V2(80, 400), new V2(40, 80), colors.default));

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
				this.players[character] = new Player(start, GridCollider.factory(this.map, this.obstacles.entities));
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

			this.recorder = new Keys.Recorder();
			this.keys.add(this.recorder);
			this.keys.add(this.player);
		};

		PlayScene.prototype.stop = function () {
			this.keys.clear();
			this.player.fadeOut();
			this.player.velocity = Zero();

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
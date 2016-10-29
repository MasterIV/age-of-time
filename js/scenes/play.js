define(['lib/scene', 'entity/player', 'lib/map', 'lib/viewport', 'basic/rect', 'config/colors', 'geo/v2', 'lib/gridcollider', 'entity/virtualkeyboard'],
		function(Scene, Player, TiledMap, ViewPort, RectEntity, colors, V2, GridCollider, Keys ) {
			var start = new V2(500, 500);

			function PlayScene() {
				Scene.call(this);

				this.players = [];
				this.playbacks = [];

				this.delta = 0;
				this.duration = 10000;

				this.obstacle = new RectEntity(new V2(80, 400), new V2(40, 80), colors.default);

				this.map = new TiledMap('map');
				this.viewport = new ViewPort(true);

				this.player = new Player(start, GridCollider.factory(this.map, [this.obstacle]));
				this.players.push(this.player);

				this.keys = new Keys.Aggregator();
				this.keys.add(this.player);
				this.keyAware.push(this.keys);

				this.viewport.add(this.map.render());
				this.viewport.add(this.player);
				this.viewport.add(this.obstacle);
				this.viewport.follow(this.player);

				this.add(this.viewport);

				this.initRecorder();
			}

			PlayScene.prototype = new Scene();

			PlayScene.prototype.reset = function() {
				this.delta = 0;

				this.remove(this.recorder);
				this.keys.remove(this.recorder);

				for(var i = 0; i < this.players.length; i++)
					this.players[i].position = new V2(500, 500);
				for(var i = 0; i < this.playbacks.length; i++)
					this.playbacks[i].reset();

				this.createShadow();
				this.initRecorder();
			};

			PlayScene.prototype.createShadow = function() {
				var playback = new Keys.Playback(this.recorder);
				this.playbacks.push(playback);

				var shadow = new Player(new V2(500, 500), GridCollider.factory(this.map, [this.obstacle]), true);
				this.players.push(shadow);

				this.viewport.add(shadow);
				playback.add(shadow);
				this.add(playback);
			};

			PlayScene.prototype.initRecorder = function() {
				this.recorder = new Keys.Recorder();
				this.keys.add(this.recorder);
				this.add(this.recorder);
			};

			PlayScene.prototype.onUpdate = function(delta) {
				this.delta += delta;
				if(this.delta >= this.duration)
					this.reset();
			};

			return PlayScene;
		}
);
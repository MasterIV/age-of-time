define([
	'lib/scene',
	'lib/map',
	'core/game',
	'core/graphic',
	'geo/v2',
	'scenes/play',
	'basic/button',
	'definition/colors',
	'config/screen',
	'basic/layout',
	'lib/persistentstorage',
	'basic/image',
	'basic/text',
	'lib/animation',
	'config/fonts'
	], function(
		Scene,
		TiledMap,
		game,
		graphics,
		V2,
		PlayScene,
		Button,
		Colors,
		screen,
		Layout,
		storage,
		ImageEntity,
		TextEntity,
		Animation,
		fonts
	) {
		graphics.add('img/level_selection_button_bg.png');
		graphics.add('img/level_selection_collected_clocks.png');
		graphics.add('img/level_selection_tick.png');
		graphics.add('img/bg_forest.jpg');

		function LevelsScene() {
			Scene.call(this);
			this.bg = 'img/bg_forest.jpg';
			this.buttons = [];
			var self = this;

			var hLayout = new Layout.horizontal(Zero(), 40, 20);
			var vLayout = new Layout.vertical(Zero(), 20, 30);
			var count = 1;

			for(var i in MapNames)
				(function( l, n ){
					var b = Button.create(new V2(0, 0), function() {
						level = l;
						game.scene = new PlayScene(n);
					}).img('img/level_selection_button_bg.png');

					b.clocks = [];

					var t = new TextEntity(new V2(110, 45), l*1+1, fonts.levels);
					t.hover = function() { return b.hover(); };
					b.add(t);

					for(var i = 0; i < 3; i++) {
						var c = new Animation('img/level_selection_collected_clocks.png', new V2(160+i*75, -17), 2);
						c.onUpdate = null;
						c.frame = 1;
						b.add(c);
						b.clocks.push(c);
					}

					self.buttons.push(b);
					vLayout.add(b);

					if(++count > 6) {
						vLayout.align("center");
						hLayout.add(vLayout);
						vLayout = new Layout.vertical(Zero(), 20, 30);
						count = 1;
					}
				})(i, MapNames[i]);

			vLayout.align("center");
			hLayout.add(vLayout);
			hLayout.align("top");
			this.center(hLayout);

			this.updateProgress();
		}

		LevelsScene.prototype = new Scene();

		LevelsScene.prototype.updateProgress = function() {
			for(var i = 0; i < this.buttons.length; i++) {
				var prgs = storage.get('level-'+i);
				var b = this.buttons[i];

				console.log(prgs);

				if(prgs !== null && prgs !== b.prgs) {
					if(prgs !== null && typeof b.prgs == 'undefined')
						b.add(new ImageEntity(new V2(18, -20), 'img/level_selection_tick.png'));

					for(var j = 0; j < 3; j++)
						b.clocks[i].frame = prgs > j ? 0 : 1;

					b.prgs = prgs;
				}
			}
		};

		return LevelsScene;
	}
);
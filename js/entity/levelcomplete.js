define([
	'basic/entity', 'geo/v2', 'core/graphic', 'config/screen', 'basic/image', 'lib/animation'
], function (Entity, V2, graphics, screen, ImageEntity, Animation) {
		graphics.add('img/level_complete_overlay.png');

		function LevelComplete(clocks, callback) {
			this.setSize(screen.w, screen.h);

			var img = new ImageEntity(Zero(), 'img/level_complete_overlay.png');
			this.center(img);
			img.position.y += 100;

			var img_v = img.position;
			var offset = 0;
			for (var i = 0; i < 3; i++) {
				var clock = new Animation('img/level_selection_collected_clocks.png', new V2(230 + img_v.x + offset, 320 + img_v.y), 2);
				clock.scale = .8;
				this.add(clock);
				clock.onUpdate = null;
				clock.frame = 1;
				if (i < clocks)
					clock.frame = 0;
				offset += 69 + 10;
			}

			this.onClick = function(p) {
				callback(p);
				return true;
			}
		}
		LevelComplete.prototype = new Entity();

		/*LevelComplete.prototype.up = function(key) {
			this.onClick();
		};*/

		return LevelComplete;
	}

);

define(['basic/entity', 'geo/v2', 'config/colors', 'basic/image', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, ImageEntity, graphics, Animation) {
		graphics.add('img/tiles/door_green_a.png');
		graphics.add('img/tiles/door_green_b.png');
		graphics.add('img/tiles/door_blue_a.png');
		graphics.add('img/tiles/door_blue_b.png');
		graphics.add('img/tiles/door_red_a.png');
		graphics.add('img/tiles/door_red_b.png');
		graphics.add('img/tiles/door_yellow_a.png');
		graphics.add('img/tiles/door_yellow_b.png');

		function Door(pos, color) {
			Entity.call(this, pos, new V2(40, 80));
			this.isOpen = false;

			var variation = Math.random() > .5 ? 'a' : 'b';
			this.add(new ImageEntity(new V2(-20, 0), 'img/tiles/door_'+color+'_'+variation+'.png'));
		}

		Door.prototype = new Entity();

		Door.prototype.onUpdate = function() {
			this.entities[0].color = this.isOpen ? colors.default : colors.player;
		};

		Door.prototype.setStatus = function(status) {
			this.isOpen = status;
		};

		Door.prototype.collision = function(entity, area) {
			if(this.isOpen) {
				return false;
			} else {
				return this.relativeArea().collision(area);
			}
		};

		return Door;
	}
);
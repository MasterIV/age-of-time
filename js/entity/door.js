define(['basic/entity', 'geo/v2', 'config/colors', 'basic/image', 'core/graphic', 'lib/animation', 'basic/particles', 'definition/random'],
	function(Entity, V2, colors, ImageEntity, graphics, Animation, Particles, Random) {
		graphics.add('img/tiles/door_green_a.png');
		graphics.add('img/tiles/door_green_b.png');
		graphics.add('img/tiles/door_blue_a.png');
		graphics.add('img/tiles/door_blue_b.png');
		graphics.add('img/tiles/door_red_a.png');
		graphics.add('img/tiles/door_red_b.png');
		graphics.add('img/tiles/door_yellow_a.png');
		graphics.add('img/tiles/door_yellow_b.png');
		graphics.add('img/smoke.png');

		function Door(pos, color) {
			Entity.call(this, pos, new V2(40, 40));
			this.isOpen = false;

			var variation = Math.random() > .5 ? 'a' : 'b';
			this.img = graphics['img/tiles/door_'+color+'_'+variation+'.png'];
			this.effector = new Particles(Zero(), {
				autoplay: false,
				lifetime: 500,
				interval: 100,
				loop: false,
				speed: Random.between(100, 200),
				sprite: graphics['img/smoke.png']
			});
			this.center(this.effector);
		}

		Door.prototype = new Entity();

		Door.prototype.setStatus = function(status) {
			var before = this.isOpen;
			this.isOpen = status;
			if (!before && this.isOpen)
				this.effector.play();
		};

		Door.prototype.collision = function(entity, area) {
			if(this.isOpen) {
				return false;
			} else {
				return this.relativeArea().collision(area);
			}
		};

		Door.prototype.onDraw = function( ctx ) {
			if(!this.isOpen)
				ctx.drawImage(this.img, 0, 0);
		};

		return Door;
	}
);
define(['basic/entity', 'geo/v2', 'config/colors', 'basic/image', 'core/graphic', 'lib/animation', 'core/sound'],
	function(Entity, V2, colors, ImageEntity, graphics, Animation, snd) {
		graphics.add('img/animations/door_explosion.png');
		graphics.add('img/tiles/destructible_box.png');
		snd.add('snd/crack.mp3');

		function Destructible(pos) {
			Entity.call(this);
			this.position = pos;
			this.destroyed = false;
			this.add(new ImageEntity(Zero(), 'img/tiles/destructible_box.png'));
		}

		Destructible.prototype = new Entity();

		Destructible.prototype.collision = function(entity, area) {
			if( this.destroyed ) return false;
			var c = this.relativeArea().collision(area);

			if(c && entity.character == 'e') {
				this.destroy(entity);
				return false;
			} else {
				return c;
			}
		};


		Destructible.prototype.destroy = function(actor) {
			if(actor.hit) actor.hit();

			this.parent.parent.add(new Animation(
				'img/animations/door_explosion.png',
				this.position, 18, 50));

			snd.play('snd/crack.mp3');
			this.destroyed = true;
		};

		Destructible.prototype.reset = function() {
			this.destroyed = false;
		};

		Destructible.prototype.draw = function(ctx) {
			if(this.destroyed) return;
			Entity.prototype.draw.call(this, ctx);
		};

		return Destructible;
	}
);
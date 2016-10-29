define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation'],
	function(Entity, V2, colors, RectEntity, graphics, Animation) {

		function Destructible(pos) {
			Entity.call(this);
			this.position = pos;
			this.destroyed = false;
			this.add(new RectEntity(Zero(), new V2(40, 80), colors.default));
		}

		Destructible.prototype = new Entity();

		Destructible.prototype.collision = function(entity, area) {
			if( this.destroyed ) return false;
			var c = this.relativeArea().collision(area);

			if(c && entity.character == 'e') {
				this.destroyed = true;
				return false;
			} else {
				return c;
			}
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
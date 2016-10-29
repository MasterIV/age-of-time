define(['basic/entity', 'geo/v2', 'basic/rect', 'basic/image'],
	function(Entity, V2, RectEntity, ImageEntity) {
		function Scrollbar(pos, size) {
			Entity.call(this, pos, size);

			//this.visible = false;
		}

		Scrollbar.prototype = new Entity();

		Scrollbar.prototype.bg = function(color) {
			var rect = new RectEntity(Zero(), new V2(this.size.x, this.size.y), color);

			this.add(rect);
			return this;
		};

		Scrollbar.prototype.onDraw = function() {
			console.log();
		};

		return Scrollbar;
	}
);
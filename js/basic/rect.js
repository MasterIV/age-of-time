define(['basic/entity', 'config/colors'],
	function(Entity, colors) {
		function RectEntity(pos, size, color) {
			Entity.call(this, pos, size);
			this.alpha = 1;
			this.color = color || colors.default;
		}

		RectEntity.prototype = new Entity();

		RectEntity.prototype.onDraw = function(ctx) {
			this.color.apply(ctx, this.hover());
			ctx.globalAlpha = this.alpha;
			ctx.fillRect(0, 0, this.size.x|0, this.size.y|0);
			ctx.strokeRect(0, 0, this.size.x|0, this.size.y|0);
			ctx.globalAlpha = 1;
		};

		return RectEntity;
	}
);
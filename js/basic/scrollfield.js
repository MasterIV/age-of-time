define(['basic/entity', 'geo/v2', 'basic/layout', 'basic/scrollbar'],
	function(Entity, V2, LayoutEntity, ScrollbarEntity) {
		function Scrollfield(pos, size, spacing, bgColor, fgColor) {
			Entity.call(this, pos, size);

			this.Scrollbar = new ScrollbarEntity(new V2(this.size.x - 20, 0), new V2(20, this.size.y));
			if (bgColor) this.Scrollbar.bg(bgColor);
			//if (fgColor) this.Scrollbar.fg(fgColor);
			this.add(this.Scrollbar);
			this.Layout = new LayoutEntity.vertical(Zero(), 0, spacing);
			this.add(this.Layout);

			this.drawBuffer = this.createBuffer();

			this.initialized = true;
		}

		Scrollfield.prototype = new Entity();

		Scrollfield.prototype.add = function(entity) {
			if (this.initialized) {
				this.Layout.add(entity);
				this.Layout.align("center");
				if (this.Layout.size.y > this.size.y) {
					//this.size.x += 20;
					//this.Scrollbar.visible = true;
				}
			} else {
				Entity.prototype.add.call(this, entity);
			}
		};

		Scrollfield.prototype.createBuffer = function() {
			var buffer = document.createElement('canvas');
			buffer.width = this.size.x;
			buffer.height = this.size.y;
			var ctx = buffer.getContext('2d');
			return { buffer: buffer, ctx: ctx };
		};

		Scrollfield.prototype.draw = function(ctx) {
			ctx.save();

			if (this.onDraw) this.onDraw(this.drawBuffer.ctx);
			this.dispatch(this.entities, 'draw', this.drawBuffer.ctx);
			this.dispatch(this.blocking, 'draw', this.drawBuffer.ctx);
			if (this.postDraw) this.postDraw(this.drawBuffer.ctx);

			ctx.drawImage(this.drawBuffer.buffer, 0, 0, this.size.x | 0, this.size.y | 0, this.position.x, this.position.y, this.size.x | 0, this.size.y | 0);

			ctx.restore();
		};

		return Scrollfield;
	}
);
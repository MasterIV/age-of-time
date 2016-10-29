define(['basic/entity', 'core/graphic', 'geo/v2', 'basic/rect'],
		function (Entity, graphics, V2, Rect) {
			function Animation( img, pos, frames, speed, loop ) {
				this.frames = typeof frames == 'number' ? new V2(frames, 1) : frames;
				this.img = graphics[img];
				this.loop = loop;

				this.duration = speed;
				this.anitime = 0;
				this.frame = 0;
				this.state = 0;
				this.alpha = 1;
				this.flip = 1;

				Entity.call(this, pos, new V2(this.img.width / this.frames.x, this.img.height / this.frames.y ));
				//this.add(new Rect(this.position, this.size));
			}

			Animation.prototype = new Entity();

			Animation.prototype.onUpdate = function(delta) {
				this.anitime += delta;
				this.frame = Math.floor( this.anitime / this.duration );

				if(this.frame>=this.frames.x && !this.loop)
					this.parent.remove(this);

				this.frame %= this.frames.x;
				this.anitime %= this.frames.x*this.duration;
			};

			Animation.prototype.onDraw = function(ctx) {
				ctx.globalAlpha = this.alpha;
				ctx.scale(this.flip, 1);
				var trans = 0;
				if (this.flip == -1)
					trans = -this.size.x;
				ctx.drawImage( this.img, this.frame*this.size.x, this.state*this.size.y, this.size.x, this.size.y, trans, 0, this.size.x, this.size.y );
				ctx.globalAlpha = 1;
			};

			return Animation;
		}
);
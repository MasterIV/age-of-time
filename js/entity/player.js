define(['basic/entity', 'geo/v2', 'config/colors', 'basic/rect', 'core/graphic', 'lib/animation', 'lib/velociraptor'],
	function(Entity, V2, colors, RectEntity, graphics, Animation, Velociraptor) {


		function Player(pos, collider, character) {
			Entity.call(this, pos);
			this.character = character;
			this.velocity = new V2(0,0);

			switch(character) {
				case 'y': this.img =  new RectEntity(Zero(), new V2(40, 40), colors.player_y); break;
				case 'a': this.img =  new RectEntity(Zero(), new V2(40, 80), colors.player_a); break;
				case 'e': this.img =  new RectEntity(Zero(), new V2(40, 80), colors.player_e); break;
			}

			this.add(this.img);

			this.leftDown = false;
			this.rightDown = false;

			this.grounded = false;
			this.collider = collider(this);

			this.velociraptor = new Velociraptor();
			if(character == 'a')
				this.velociraptor.maxJumpSpeed *= 1.5;
		}

		Player.prototype = new Entity();

		Player.prototype.onUpdate = function(delta) {
			this.velociraptor.move(this, delta);
			var c = this.collider.move(this.velocity.prd(delta/1000));

			if(!this.grounded && c.y && this.velocity.y > 0)
				this.grounded = true;

			if(c.y) this.velocity.y = 0;
			if(c.x) this.velocity.x = 0;
		};

		Player.prototype.down = function(key) {
			switch(key) {
				// case 'left': this.velocity.x = -speed; break;
				// case 'right': this.velocity.x = speed; break;
				case 'left': this.leftDown = true; break;
				case 'right': this.rightDown = true; break;
				case 'up': this.jump(); break;
				case 'space': this.jump(); break;
			}
		};

		Player.prototype.up = function(key) {
			switch(key) {
				//case 'left':  case 'right': this.velocity.x = 0; break;
				case 'left': this.leftDown = false; break;
				case 'right': this.rightDown = false; break;
			}
		};

		Player.prototype.jump = function () {
			if(this.grounded) {
				this.grounded = false;
				this.velociraptor.jump(this);
			}
		};

		Player.prototype.stop = function () {
			this.leftDown = false;
			this.rightDown = false;
		};

		Player.prototype.fadeOut = function () {
			this.img.alpha = .5;
		};

		Player.prototype.fadeIn = function () {
			this.img.alpha = 1;
		};

		return Player;
	}
);
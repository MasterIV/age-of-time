/* Moves the player */

define(['core/sound'],
	function(snd) {
		snd.add('snd/jump.mp3');

		function Velociraptor() {
			// Horizontal movement
			this.acceleration = .4;
			this.deceleration = .8;
			this.speed = 300;
			// Vertical movement
			this.maxJumpSpeed = 600;
			this.minJumpPower = .75;
			this.gravity = .8;
		}

		Velociraptor.prototype.move = function(player, delta) {

			// Inputs

			// Left / Right
			if (player.leftDown) {
				if (!player.rightDown) {
					if (player.velocity.x > 0)
						player.velocity.x = Math.max(-this.speed, player.velocity.x - this.deceleration * delta);
					else
						player.velocity.x = Math.max(-this.speed, player.velocity.x - this.acceleration * delta);
				} else {
					if (player.velocity.x > 0)
						player.velocity.x = Math.max(0, player.velocity.x - this.deceleration * delta);
					else
						player.velocity.x = Math.min(0, player.velocity.x + this.deceleration * delta);
				}
			} else if (player.rightDown) {
				if (player.velocity.x < 0)
					player.velocity.x = Math.min(this.speed, player.velocity.x + this.deceleration * delta);
				else
					player.velocity.x = Math.min(this.speed, player.velocity.x + this.acceleration * delta);
			} else {
				if (player.velocity.x > 0)
					player.velocity.x = Math.max(0, player.velocity.x - this.acceleration * delta);
				if (player.velocity.x < 0)
					player.velocity.x = Math.min(0, player.velocity.x + this.acceleration * delta);
			}

			// Up
			if (player.velocity.y < 0 && !player.upDown)
				player.velocity.y += this.gravity * delta;

			// Gravity

			player.velocity.y += this.gravity * delta;
		};

		Velociraptor.prototype.jump = function(player) {
			var variableJumpPower = 1 - this.minJumpPower;
			var currentBoost = Math.abs(player.velocity.x / this.speed);

			var jump_power = this.maxJumpSpeed * this.minJumpPower + this.maxJumpSpeed * variableJumpPower * currentBoost;

			player.velocity.y = -jump_power;
			if (!player.ghost) snd.play('snd/jump.mp3');
			else snd.play('snd/ghost_jump.mp3');

		};

		return Velociraptor;
	}
);
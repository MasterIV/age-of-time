/* Moves the player */

define([],
	function() {
		function Velociraptor() {
			// Horizontal movement
			this.acceleration = .3;
			this.deceleration = .5;
			this.speed = 200;
			// Vertical movement
			this.maxJumpSpeed = 400;
			this.minJumpPower = .5;
			this.gravity = .6;
			this.speed = 300;
		}

		Velociraptor.prototype.move = function(player, delta) {

			// Inputs

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

			// Gravity

			player.velocity.y += this.gravity * delta;
		};

		Velociraptor.prototype.jump = function(player) {
			var variableJumpPower = 1 - this.minJumpPower;
			var currentBoost = 0;
			var jump_power = this.maxJumpSpeed * this.minJumpPower + this.maxJumpSpeed * variableJumpPower;
			player.velocity.y = -this.maxJumpSpeed;
		};

		return Velociraptor;
	}
);
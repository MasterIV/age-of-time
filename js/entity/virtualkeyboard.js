define(['basic/entity'],
	function (Entity) {

		function KeyAggregator() {
			this.entities = [];
			this.keysDown = {};
		}

		KeyAggregator.prototype.dispatch = Entity.prototype.dispatch;

		KeyAggregator.prototype.add = function(entity) {
			this.entities.push(entity);
		};

		KeyAggregator.prototype.down = function (key) {
			if (!this.keysDown[key]) {
				this.keysDown[key] = true;
				this.dispatch(this.entities, 'down', key);
			}
		};

		KeyAggregator.prototype.up = function (key) {
			if (this.keysDown[key]) {
				this.keysDown[key] = false;
				this.dispatch(this.entities, 'up', key);
			}
		};

		/* ------------------------------------------------------------------------------------------------------ */

		function KeyRecorder() {
			this.delta = 0;
			this.keyDownStart = {};
			this.recordings = [];
		}

		KeyRecorder.prototype.update = function(delta) {
			this.delta += delta;
		};

		KeyRecorder.prototype.down = function(key) {
			this.keyDownStart[key] = this.delta;
		};

		KeyRecorder.prototype.up = function(key) {
			this.recordings.push({ key: key, start: this.keyDownStart[key], end: this.delta });
		};

		/* ------------------------------------------------------------------------------------------------------ */

		function KeyPlayback(keyRecorder) {
			this.keyRecorder = keyRecorder;
			this.entities = [];
			this.delta = 0;
		}

		KeyPlayback.prototype.dispatch = Entity.prototype.dispatch;

		KeyPlayback.prototype.add = function(entity) {
			this.entities.push(entity);
		};

		KeyPlayback.prototype.update = function(delta) {
			this.replay(this.delta, this.delta + delta);
			this.delta += delta;
		};

		KeyPlayback.prototype.replay = function (oldDelta, newDelta) {
			for(var i = 0, j = this.keyRecorder.recordings.length; i < j; i++) {
				var recording = this.keyRecorder.recordings[i];
				if(recording.start > oldDelta && recording.start <= newDelta) {
					this.dispatch(this.entities, 'down', recording.key);
				}
				if(recording.end > oldDelta && recording.end <= newDelta) {
					this.dispatch(this.entities, 'up', recording.key);
				}
			}
		};

		/* ------------------------------------------------------------------------------------------------------ */

		return {
			Aggregator: KeyAggregator,
			Recorder: KeyRecorder,
			Backplayer: KeyPlayback
		};

	}
);
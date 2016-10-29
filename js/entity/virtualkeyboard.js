define(['basic/entity'],
	function (Entity) {
		function VirtualKeyboard() {
			Entity.call(this);
			this.isRecording = false;
		}

		VirtualKeyboard.prototype = new Entity();

		VirtualKeyboard.prototype.onUpdate = function (delta) {
			var oldDelta = this.delta;
			this.delta += delta;
			if (!this.isRecording && this.recordings != null && this.recordings.length > 0) {
				this.performReplay(oldDelta, this.delta);
			}
		};

		VirtualKeyboard.prototype.down = function (key) {
			if (this.isRecording) {
				if (this.keyDownStart[key] == null) {
					this.keyDownStart[key] = this.delta;
					this.dispatch(this.entities, 'down', key);
				}
			}
		};

		VirtualKeyboard.prototype.up = function (key) {
			if (this.isRecording) {
				if (this.keyDownStart[key] != null) {
					this.recordings.push({key: key, start: this.keyDownStart[key], end: this.delta});
					this.keyDownStart[key] = null;
					this.dispatch(this.entities, 'up', key);
				}
			}
		};

		VirtualKeyboard.prototype.startRecording = function () {
			this.isRecording = true;
			this.keyDownStart = {};
			this.recordings = [];
			this.delta = 0;
		};

		VirtualKeyboard.prototype.stopRecording = function () {
			this.isRecording = false;
		};

		VirtualKeyboard.prototype.replay = function () {
			this.stopRecording();
			this.delta = 0;
		};

		VirtualKeyboard.prototype.performReplay = function (oldDelta, newDelta) {
			var self = this;

			this.recordings.filter(function (recording) {
				return recording.start > oldDelta && recording.start <= newDelta;
			}).map(function (recording) {
				self.dispatch(self.entities, 'down', recording.key);
			});

			this.recordings.filter(function (recording) {
				return recording.end > oldDelta && recording.end <= newDelta;
			}).map(function (recording) {
				self.dispatch(self.entities, 'up', recording.key);
			});
		};

		return VirtualKeyboard;

	}
);
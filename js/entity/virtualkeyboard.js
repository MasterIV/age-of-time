define(['basic/entity'],
	function(Entity) {

		function Virtualkeyboard() {
			Entity.call(this);

            this.isRecording = false;
		}

		Virtualkeyboard.prototype = new Entity();

		Virtualkeyboard.prototype.onUpdate = function(delta) {
            var oldDelta = this.delta;
			this.delta += delta;
            if(!this.isRecording && this.recordings != null && this.recordings.length > 0) {
                this.performReplay(oldDelta, this.delta);
            }
		};

		Virtualkeyboard.prototype.down = function(key) {
            if(this.isRecording) {
                if(this.keyDownStart[key] == null) {
                    this.keyDownStart[key] = this.delta;
                    this.dispatch(this.entities, 'down', key);
                }
            }
		};

		Virtualkeyboard.prototype.up = function(key) {
            if(this.isRecording) {
                if(this.keyDownStart[key] != null) {
                    this.recordings.push({ key: key, start: this.keyDownStart[key], end: this.delta });
                    this.keyDownStart[key] = null;
                    this.dispatch(this.entities, 'up', key);
                }
            }
		};

		Virtualkeyboard.prototype.startRecording = function() {
            this.isRecording = true;
            this.keyDownStart = {};
            this.recordings = [];
            this.delta = 0;
		};

        Virtualkeyboard.prototype.stopRecording = function() {
            this.isRecording = false;
        }

        Virtualkeyboard.prototype.replay = function() {
            this.stopRecording();
            this.delta = 0;
        }

        Virtualkeyboard.prototype.performReplay = function(oldDelta, newDelta) {
            var self = this;
            var recordingsStarts = this.recordings.filter(function(recording){
                return recording.start > oldDelta && recording.start <= newDelta;
            }).map(function(recording){
                self.dispatch(self.entities, 'down', recording.key);
            });
            var recordingsEnds = this.recordings.filter(function(recording){
                return recording.end > oldDelta && recording.end <= newDelta;
            }).map(function(recording){
                self.dispatch(self.entities, 'up', recording.key);
            });
        }

		return Virtualkeyboard;

	}
);
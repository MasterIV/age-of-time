define(['config/config'],
	function(Config) {

		function PersistentStorage() {
			this.title = Config.title;
		}

		PersistentStorage.prototype.set = function(key, value) {
			localStorage.setItem(this.title + '::' + key, JSON.stringify(value));
		}

		PersistentStorage.prototype.get = function(key) {
			return JSON.parse(localStorage.getItem(this.title + '::' + key));
		}

		return PersistentStorage;
		
	}
);
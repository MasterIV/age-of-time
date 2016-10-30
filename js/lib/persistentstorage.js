define(['config/config'],
	function(Config) {

		return {
			set: function(key, value) {
				return localStorage.setItem(Config.title + '::' + key, JSON.stringify(value));
			},
			get: function(key) {
				return JSON.parse(localStorage.getItem(Config.title + '::' + key));
			}
		};

	}
);
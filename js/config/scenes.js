define(['scenes/menu', 'scenes/credits', 'scenes/play', 'scenes/help', 'scenes/particles', 'scenes/levels'],
		function (MenuScene, CreditsScene, PlayScene, HelpScene, ParticleScene, LevelsScene) {
			return {
				init: function () {
					this.menu = new MenuScene();
					this.credits = new CreditsScene();
					this.help = new HelpScene();
					this.particles = new ParticleScene();
					this.levels = new LevelsScene();
					this.default = this.menu;
				}
			};
		}
);
define(['lib/scene', 'lib/map', 'geo/v2', 'basic/scrollfield', 'basic/button', 'definition/colors', 'config/screen', 'basic/layout'],
	function(Scene, TiledMap, V2, ScrollfieldEntity, Button, Colors, screen, Layout) {
		function LevelsScene() {
			Scene.call(this);

		//	var scrollfield = new ScrollfieldEntity(Zero(), new V2(screen.w, screen.h), 0, new Colors('#AAA', '#AAA'), new Colors('#111', '#111'));
		//	this.add(scrollfield);

		//	console.log(TileMaps);

			var level1 = Button.create(new V2(0, 0), function() { console.log("level 1"); }).rect(screen.w - 20, 200).text("Level 1");
			var level2 = Button.create(new V2(0, 0), function() { console.log("level 2"); }).rect(screen.w - 20, 200).text("Level 2");
			var level3 = Button.create(new V2(0, 0), function() { console.log("level 3"); }).rect(screen.w - 20, 200).text("Level 3");
			var level4 = Button.create(new V2(0, 0), function() { console.log("level 4"); }).rect(screen.w - 20, 200).text("Level 4");

			var vLayout = new Layout.vertical(new V2(0, 20), 20, 50);
			/*vLayout.add(playButton);
			vLayout.add(creditsButton);
			vLayout.add(helpButton);
			vLayout.add(particlesButton);
			vLayout.align("center");
			this.center(vLayout);*/
		}

		LevelsScene.prototype = new Scene();

		return LevelsScene;
	}
);
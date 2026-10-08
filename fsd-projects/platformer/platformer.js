$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50,100,70, 10);
createPlatform(100, 300, 100, 15);
createPlatform(200, 450, 60, 5);
createPlatform(355, 400, 75, 10);
createPlatform(500, 500, 75, 12);
createPlatform(400, 600, 200, 15);
createPlatform(600, 700, 100, 18);
    // TODO 3 - Create Collectables
createCollectable("database", 150, 250, 0.1, 0.7);
createCollectable("steve", 500, 400,0.9, 1);
createCollectable("grace", 600, 650, 0.5,0.8);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, );
createCannon("bottom", 500, 2500);
createCannon("left", 400, 3000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

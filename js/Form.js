class Form {
  constructor() {
        
    this.title = createElement("h1");
    this.playButton = createButton("ENTER GAME");
    this.greeting = createElement("h2");
    this.reset = createButton("Reset")
    this.rule = createElement("h2")

  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
  }

  display() {

    this.title.html("『𝕋ℍ𝔼×𝔽𝕀ℕ𝔸𝕃×𝔹𝔸𝕋𝕋𝕃𝔼』");
    this.title.position(width / 2 - 170, 10);
    
    this.playButton.position(width / 2 - 80, height / 2 - 100);
    this.greeting.position(width / 2 - 180, height / 2 - 50);
    this.reset.position(width-100,50);
    this.rule.position(width / 2 - 180, height / 2 - 50);

    this.playButton.mousePressed(() => {
      
      this.playButton.hide();

      playerCount += 1;

      if (playerCount === 1) {
        player.name = "Naruto";
        var message = "Welcome Naruto, Waiting for Sasuke...";
        this.greeting.html(message);
        var rules = "use D key to move front,use A key to move backward,use R key for fire ball/shadow clone jutsu,use E key for rassengan "
      }
      else {
        player.name = "Sasuke";
      }

      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
    });

    this.reset.mousePressed(()=>{
      database.ref('/').update({
        gameState:0,
        playerCount:0,
        players:{}
      })
      window.location.reload();
    })
    
  }
}
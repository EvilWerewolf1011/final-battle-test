class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
         gameStateRef.on("value",function(data){
          gameState = data.val();
      })
  
    }

    async start()
    {

      if(gameState === 0)
      {   
        player = new Player();
        player.getCount();
        console.log(playerCount);
        image(nameBackgroundImage,0,0,displayWidth,displayHeight-30);
        form = new Form();
        form.display();
  
      }

      naruto = createSprite(500,200);
      naruto.addAnimation("narutostand",naruto_stand);
      naruto.addAnimation("naruto_run",naruto_run);
      naruto.changeAnimation("narutostand");

      naruto.scale = 0.5; 

      sasuke = createSprite(700,200);
      sasuke.addAnimation("sasukestand",sasuke_stand);
      sasuke.addAnimation("sasuke_run",sasuke_run);
      sasuke.changeAnimation("sasukestand",sasuke_stand);
      sasuke.scale = 1.3; 
    
    }

    play()
    {

      form.hide();
      Player.getPlayerInfo();
     // backgroundSound.play();
      if(allPlayers !== undefined)
      {
        image(backgroundImage,0,0,displayWidth,displayHeight-30);
        this.handlePlayerControls();
        drawSprites();
      }
    }

    handlePlayerControls()
    {

      if (keyDown("D"))
      {
        naruto.changeAnimation("naruto_run");
        naruto.scale = 1.2;
      }

      if (keyDown("D"))
      {
        sasuke.changeAnimation("sasuke_run");
        sasuke.scale = 0.6;
      }


    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

}
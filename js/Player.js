class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.positionX = 0;
      this.positionY = 0;
      this.currentAnimation = "";

    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update()
    {

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        positionX:this.positionX,
        positionY:this.positionY,
        currentAnimation:this.currentAnimation,
        
      });
    }

    static getPlayerInfo()
    {

      var ref = database.ref("players");
      ref.on('value',(data)=>
      {

        allPlayers = data.val();

      });

    }


}
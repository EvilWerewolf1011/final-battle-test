var backgroundImage,nameBackgroundImage;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var database;
var form, player, game;
var rasengan, shadow_clone, fire_ball, chidori;
var naruto,sasuke;
var naruto_stand,sasuke_stand;
var backgroundSound;
var naruto_run ,sasuke_run;


function preload()

{

  naruto_stand = loadAnimation("./naruto/rasengan_frames/r12.png");
  sasuke_stand = loadAnimation("./sasuke/fire_ball_frames/fire1.png");
  chidori = loadAnimation("sasuke/fire_ball_frames/fire1.png","sasuke/chidori_frames/c1.png","sasuke/chidori_frames/c2.png","sasuke/chidori_frames/c3.png","sasuke/chidori_frames/c4.png","sasuke/chidori_frames/c5.png","sasuke/chidori_frames/c6.png","sasuke/chidori_frames/c7.png","sasuke/chidori_frames/c8.png","sasuke/chidori_frames/c9.png","sasuke/chidori_frames/c10.png","sasuke/chidori_frames/c11.png","sasuke/chidori_frames/c12.png","sasuke/chidori_frames/c13.png","sasuke/chidori_frames/c14.png","sasuke/chidori_frames/c15.png","sasuke/chidori_frames/c16.png","sasuke/chidori_frames/c17.png");
  /*fire_ball = loadAnimation("sasuke/fire_ball_frames/fire2.png","sasuke/fire_ball_frames/fire3.png","sasuke/fire_ball_frames/fire4.png","sasuke/fire_ball_frames/fire5.png","sasuke/fire_ball_frames/fire6.png","sasuke/fire_ball_frames/fire7.png","sasuke/fire_ball_frames/fire8.png","sasuke/fire_ball_frames/fire9.png","sasuke/fire_ball_frames/fire10.png","sasuke/fire_ball_frames/fire11.png","sasuke/fire_ball_frames/fire12.png","sasuke/fire_ball_frames/fire13.png","sasuke/fire_ball_frames/fire14.png","sasuke/fire_ball_frames/fire15.png","sasuke/fire_ball_frames/fire16.png","sasuke/fire_ball_frames/fire17.png","sasuke/fire_ball_frames/fire19.png","sasuke/fire_ball_frames/fire20.png","sasuke/fire_ball_frames/fire21.png","sasuke/fire_ball_frames/fire22.png","sasuke/fire_ball_frames/fire23.png","sasuke/fire_ball_frames/fire24.png","sasuke/fire_ball_frames/fire25.png","sasuke/fire_ball_frames/fire26.png");
  rasengan = loadAnimation("naruto/rasengan_frames/r1.png","naruto/rasengan_frames/r2.png","naruto/rasengan_frames/r3.png","naruto/rasengan_frames/r4.png","naruto/rasengan_frames/r5.png","naruto/rasengan_frames/r6.png","naruto/rasengan_frames/r7.png","naruto/rasengan_frames/r8.png","naruto/rasengan_frames/r9.png","naruto/rasengan_frames/r10.png","naruto/rasengan_frames/r11.png","naruto/rasengan_frames/r12.png","naruto/rasengan_frames/r13.png","naruto/rasengan_frames/r14.png");
  shadow_clone = loadAnimation("naruto/shadow_frames/s1.png","naruto/shadow_frames/s2.png","naruto/shadow_frames/s3.png","naruto/shadow_frames/s4.png","naruto/shadow_frames/s5.png","naruto/shadow_frames/s6.png","naruto/shadow_frames/s7.png","naruto/shadow_frames/s8.png","naruto/shadow_frames/s9.png","naruto/shadow_frames/s10.png","naruto/shadow_frames/s11.png","naruto/shadow_frames/s12.png","naruto/shadow_frames/s13.png","naruto/shadow_frames/s14.png","naruto/shadow_frames/s15.png","naruto/shadow_frames/s16.png","naruto/shadow_frames/s17.png","naruto/shadow_frames/s18.png","naruto/shadow_frames/s19.png")
  */
  sasuke_run = loadAnimation("./sasuke/running_frames/run_s1.png","./sasuke/running_frames/run_s2.png","./sasuke/running_frames/run_s3.png","./sasuke/running_frames/run_s4.png","./sasuke/running_frames/run_s5.png",)
  naruto_run = loadAnimation("./naruto/run_naruto_frame/run_n1.png","./naruto/run_naruto_frame/run_n2.png","./naruto/run_naruto_frame/run_n3.png","./naruto/run_naruto_frame/run_n4.png",)
  backgroundImage = loadImage("background.PNG");
  nameBackgroundImage = loadImage("namebackground.PNG");
  backgroundSound = loadSound("background_song.mp3");


  
}
function setup() 
{
  canvas = createCanvas(displayWidth - 20 , displayHeight - 110);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  


}

function draw() 
{
 // background(255,255,255);  

  if(playerCount === 2)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }

}


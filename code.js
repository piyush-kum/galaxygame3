var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bcb720d8-fb7c-41f9-bb12-17eb30dcb6b3","21fa3874-ecad-4b03-be47-9bb6e60ad04d","de84750f-743d-4559-8110-c125b1f59bbd","201e61eb-2482-44a8-b11b-0cc46c457f6b","a1815eb9-759f-4772-a6ec-92c67d7211a9","47c3a7c7-d2dd-4030-9fc7-066d9497a46a","68b1e451-2bbc-490c-981d-4956eff5dd7f","827ddc0f-b1e9-4c49-a80c-2a10024438c4","230057a5-c89c-4743-8d2a-e6ebce6aab88","4e0374a2-8288-431b-a52a-bbb6e0115c03","710dd029-1c6b-4101-98e3-264487990674","f15437ae-68ea-4fbf-beda-04fad16946b1"],"propsByKey":{"bcb720d8-fb7c-41f9-bb12-17eb30dcb6b3":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png"},"21fa3874-ecad-4b03-be47-9bb6e60ad04d":{"name":"3","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"Imxyc5VUbwChsAF1KYV6aHUJPhalMb7I","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/21fa3874-ecad-4b03-be47-9bb6e60ad04d.png"},"de84750f-743d-4559-8110-c125b1f59bbd":{"name":"2","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"QRnKpD_ovQDbzyFmBlBaY7gEI5h8mva_","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/de84750f-743d-4559-8110-c125b1f59bbd.png"},"201e61eb-2482-44a8-b11b-0cc46c457f6b":{"name":"4","sourceUrl":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png","frameSize":{"x":398,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png"},"a1815eb9-759f-4772-a6ec-92c67d7211a9":{"name":"5","sourceUrl":"assets/api/v1/animation-library/gamelab/acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX/category_vehicles/ship09.png","frameSize":{"x":400,"y":278},"frameCount":1,"looping":true,"frameDelay":2,"version":"acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":278},"rootRelativePath":"assets/api/v1/animation-library/gamelab/acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX/category_vehicles/ship09.png"},"47c3a7c7-d2dd-4030-9fc7-066d9497a46a":{"name":"6","sourceUrl":"assets/api/v1/animation-library/gamelab/yQNNErop_hFJExW1biTGuvEVfbMo.Skz/category_stickers/sticker_09.png","frameSize":{"x":92,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"yQNNErop_hFJExW1biTGuvEVfbMo.Skz","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yQNNErop_hFJExW1biTGuvEVfbMo.Skz/category_stickers/sticker_09.png"},"68b1e451-2bbc-490c-981d-4956eff5dd7f":{"name":"7","sourceUrl":"assets/api/v1/animation-library/gamelab/m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ/category_vehicles/ship06.png","frameSize":{"x":400,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ/category_vehicles/ship06.png"},"827ddc0f-b1e9-4c49-a80c-2a10024438c4":{"name":"8","sourceUrl":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png","frameSize":{"x":291,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T_hk5BFBexob16gBEUk.HrOnP8dsGLQu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png"},"230057a5-c89c-4743-8d2a-e6ebce6aab88":{"name":"9","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"},"4e0374a2-8288-431b-a52a-bbb6e0115c03":{"name":"10","sourceUrl":"assets/api/v1/animation-library/gamelab/cGFeOscGhIwdeHmmzzBqUk5XqXjwz2M6/category_vehicles/ufoGreen.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":2,"version":"cGFeOscGhIwdeHmmzzBqUk5XqXjwz2M6","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cGFeOscGhIwdeHmmzzBqUk5XqXjwz2M6/category_vehicles/ufoGreen.png"},"710dd029-1c6b-4101-98e3-264487990674":{"name":"11","sourceUrl":"assets/api/v1/animation-library/gamelab/Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ/category_vehicles/ufoBlue.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":2,"version":"Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Mm_U04vWjYgiMntQGcHd1Zc680jjaRjJ/category_vehicles/ufoBlue.png"},"f15437ae-68ea-4fbf-beda-04fad16946b1":{"name":"12","sourceUrl":"assets/api/v1/animation-library/gamelab/8MpupCnGVxEi_YgGEC7STSg2JpY2anD7/category_stickers/sticker_24.png","frameSize":{"x":368,"y":126},"frameCount":1,"looping":true,"frameDelay":2,"version":"8MpupCnGVxEi_YgGEC7STSg2JpY2anD7","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":126},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8MpupCnGVxEi_YgGEC7STSg2JpY2anD7/category_stickers/sticker_24.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(198,60,400,6);
 boundary1.shapeColor="black"
var boundary2 = createSprite(198,355,400,6);
boundary2.shapeColor="black"

var car1 = createSprite(65,155,15,15);
car1.shapeColor="red"
car1.setAnimation("4")
car1.scale="0.07"
var car2 = createSprite(164,264,15,15)
car2.shapeColor="red"
car2.setAnimation("4")
car2.scale="0.07"

var car3 = createSprite(241,155,15,15);
car3.shapeColor="red"
car3.setAnimation("4")
car3.scale="0.07"
var car4 = createSprite(332,264,15,15)
car4.shapeColor="red"
car4.setAnimation("4")
car4.scale="0.07"
var store = createSprite(380,208,9,151);
store.shapeColor="yellow"
store.setAnimation("9")
store.scale="0.16"
var Lives =5;
var ufo1 = createSprite(291,260,5,5);

ufo1.setAnimation("11")
ufo1.scale="0.3"
var ufo2 = createSprite(118, 164,5,5);

ufo2.setAnimation("10")
ufo2.scale="0.3"
var gameState="serve"


var sam = createSprite(12,204,20,20);
sam.shapeColor="green"
sam.setAnimation("8")
sam.scale="0.12"
var star1 = createSprite(118, 206,5,5);
star1.setAnimation("6")
star1.scale="0.2"
var star2 = createSprite(254,264,5,5);
star2.setAnimation("6")
star2.scale="0.2"
var star3 = createSprite(294,168,5,5);
star3.setAnimation("6")
star3.scale="0.2"
var star4 = createSprite(48,80,5,5);
star4.setAnimation("6")
star4.scale="0.2"
var star5 = createSprite(212,107,5,5);
star5.setAnimation("6")
star5.scale="0.2"
var star6 = createSprite(153,336,5,5);
star6.setAnimation("6")
star6.scale="0.2"
var star7 = createSprite(70,280,5,5);
star7.setAnimation("6")
star7.scale="0.2"
var star8 = createSprite(315,340,5,5);
star8.setAnimation("6")
star8.scale="0.2"
var star9 = createSprite(155,30,5,5);
star9.setAnimation("6")
star9.scale="0.2"
var star10 = createSprite(370,130,88,5,5);
star10.setAnimation("6")
star10.scale="0.2"
var star11 = createSprite(52,356,5,5);
star11.setAnimation("6")
star11.scale="0.2"
var star12 = createSprite(243,366,5,5);
star12.setAnimation("6")
star12.scale="0.2"
var star13 = createSprite(129,113,5,5);
star13.setAnimation("6")
star13.scale="0.2"
var star14 = createSprite(24,145,5,5);
star14.setAnimation("6")
star14.scale="0.2"
var star15 = createSprite(190,190,5,5);
star15.setAnimation("6")
star15.scale="0.2"
var star16 = createSprite(275,75,5,5);
star16.setAnimation("6")
star16.scale="0.2"



function draw() {
 background("black")
 
 if (keyDown("space")) {
  playSound("assets/category_background/fantasy.mp3", true);
    
 }
 
 if (Lives == 0) {
   stopSound("assets/category_background/fantasy.mp3");
   
 }
 
 
 
 
 
 
 
 
 
 
 
 stroke("pink")
 fill("pink")
 textSize(20)
 text("Lives = " +Lives,307,20) 


if (gameState == "serve") {
  stroke("yellow");
  fill("yellow");
  textSize(17)
  text("Welcome! A space boy name Sam. He is not able ",6,40)
    stroke("yellow")
   fill("yelow")
   textSize(17)
   text(" to reach his spaceship because of the aliens. ",22,77)
  
   stroke("yellow")
   fill("yelow")
   textSize(17)
  text("Please Help Sam to reach his spaceship",63,97)
 
stroke("yellow")
   fill("yelow")
   textSize(17)
  text("so that he can go back to his planet EARTH.",40,120)






 stroke("skyblue")
   fill("skyblue")
   textSize(25)
  text("Press 'Space' to start",81,212)
 
 
 
 
  if (keyDown("space")) {
  car1.velocityY=10
}
if (keyDown("space")) {
  car2.velocityY=-10
}
if (keyDown("space")) {
  car3.velocityY=10
}
if (keyDown("space")) {
  car4.velocityY=-10
  
  
}
if (keyDown("space")) {
  ufo1.velocityY=2
}
if (keyDown("space")) {
  ufo2.velocityY=-2
  gameState="play"
}
}

if (gameState == "play") {
  if (keyDown("right")) {
  sam.x=sam.x+5
}
if (keyDown("left")) {
  sam.x=sam.x-5
}
}

if (sam.collide(store) || Lives == 0) {
  gameState="end"
}


if (gameState == "end") {
  stroke("red" )
fill("red")
textSize(40)
  text("GAME OVER!",76,96)
  car1.setVelocity(0,0)
  car2.setVelocity(0,0)
  car3.setVelocity(0,0)
  car4.setVelocity(0,0)
  ufo1.setVelocity(0,0)
  ufo2.setVelocity(0,0)
}



















if (sam.collide(store)) {
  stroke("pink")
  fill("pink")
  textSize(30)
  text("!!YOU WIN!!",126,203)
}



createEdgeSprites()
car1.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary1)
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)
sam.collide(rightEdge)
sam.collide(leftEdge)
sam.collide(boundary1)
sam.collide(boundary2)
sam.collide(store)
ufo1.bounceOff(topEdge)
ufo1.bounceOff(bottomEdge)
ufo2.bounceOff(topEdge)
ufo2.bounceOff(bottomEdge)
if (sam.isTouching(car1) || sam.isTouching(car2)||sam.isTouching(car3) || sam.isTouching(car4) || sam.isTouching(ufo1) || sam.isTouching(ufo2) ) {
  Lives=Lives-1
  sam.x=20;
  sam.y=208;
}












 drawSprites()
 }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

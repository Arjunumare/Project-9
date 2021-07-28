var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var thief = createSprite(25,375,15,15);
var laser1 = createSprite(100,200,200,5);
var laser2 = createSprite(300,200,200,5);
laser1.velocityX=3;
laser1.velocityY=3;
laser2.velocityX=3;
laser2.velocityY=-3;
function draw() {
 
 thief.velocityX=0;
 thief.velocityY=0;
 background("white");
 createEdgeSprites();
 laser1.bounceOff(edges);
 laser1.shapeColor = "red";
 laser2.bounceOff(edges);
 laser2.shapeColor = "red";
 drawSprites(); 
  if(keyIsDown(RIGHT_ARROW)){
 thief.velocityX=2;
 thief.velocityY=0;  
  }
  if(keyIsDown(LEFT_ARROW)){
 thief.velocityX=-2;
 thief.velocityY=0;
  }
  if(keyIsDown(UP_ARROW)){
 thief.velocityY=-2;  
 thief.velocityX=0;  
  }
  if(keyIsDown(DOWN_ARROW)){
 thief.velocityY=2;
 thief.velocityX=0;
  }
 if(laser1.isTouching(thief)||(laser2.isTouching(thief))){
  textSize(24);
  text("Thief is Caught",120,200);
  laser1.setVelocity(0,0); 
  laser2.setVelocity(0,0);
  thief.setVelocity(0,0);

}
 shape(390, 0, 380, 10, 390, 20, 400, 10);
 thief.collide(edges);
  
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

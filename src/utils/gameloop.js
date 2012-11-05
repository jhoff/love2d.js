var updateLoop;

var gameloop = function(){};

gameloop.prototype.start = function(draw, update) {
    // start the update loop
    updateLoop = new VariableTimeStepLoop(update);
    updateLoop.start();

    //start the animation loop
    var recursiveAnim = function() {
        draw();
        requestAnimFrame( recursiveAnim );
    };
    requestAnimFrame( recursiveAnim );
};

gameloop.prototype.stop = function() {
    updateLoop.stop();
};

exports.loop = gameloop;

// requestAnimationFrame for smart animating
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// http://code.google.com/p/variable-time-step-loop
function VariableTimeStepLoop(onUpdateHandler) {
    this.lastUpdateTime = null;
    this.updateDelay = 0;

    this.onUpdate = function(secondsElapsed) {
        throw "The 'onUpdate' event must be assigned a handler.";
    }

    if( typeof( onUpdateHandler ) == "function" ) {
        this.onUpdate = onUpdateHandler;
    }

    this.isOn == false;
    this.onStop = function() {};
    this.onStart = function() {};
}
VariableTimeStepLoop.prototype.start = function() {
    this.isOn = true;
    this.onStart();
    this.lastUpdateTime = new Date();
    this.onUpdateTick();
}
VariableTimeStepLoop.prototype.stop = function() {
    this.isOn = false;
}
VariableTimeStepLoop.prototype.onUpdateTick = function() {
    var now = new Date();
    var secondsElapsed = (now - this.lastUpdateTime) / 1000;
    this.onUpdate( secondsElapsed );
    this.lastUpdateTime = now;

    if( this.isOn == true ) {
        var self = this;
        setTimeout( function() { self.onUpdateTick(); }, this.updateDelay );
    } else {
        this.onStop();
    }
}
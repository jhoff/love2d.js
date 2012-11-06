var timer = function() {
    this.lastRun = false;
}

timer.prototype.getDelta = function() { // Returns the time between the last two frames.
    return this.delta;
}

timer.prototype.getFPS = function() { // Returns the current frames per second.
    return Math.floor( 1 / this.delta );
}

timer.prototype.getMicroTime = function() { // Returns the value of a timer with microsecond precision.
    return new Date().getTime() / 1000; // Javascript doesn't have microsecond precision
}

timer.prototype.getTime = function() { // Returns the amount of time since some time in the past.
    return new Date().getTime() / 1000;
}

timer.prototype.sleep = function( s, callback ) { // Sleeps the program for the specified amount of time.
    setTimeout(callback,s);
}

timer.prototype.step = function() { // Measures the time between two frames.
    if(!this.lastRun) this.delta = 0
    else this.delta = (new Date().getTime() - this.lastRun)/1000;
    this.lastRun = new Date().getTime();
}

module.exports = timer;
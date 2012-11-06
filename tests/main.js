var love2d = require('src/love');
window.love = new love2d('lovewindow');

var paused = false;

var tests = [
    new require('./rectangle'),
    new require('./circle'),
    new require('./line'),
    new require('./print'),
    new require('./polygon')
];

love.load = function() {
    console.log('loaded!');
}

love.focus = function(f) {
    paused = !f;
}

love.update = function(dt) {
    if( !paused ) {
        for (var i=0; i < tests.length; i++) {
            tests[i].update(dt);
        };
    }
};

love.draw = function() {
    if( !paused ) {
        for (var i=0; i < tests.length; i++) {
            tests[i].draw();
        };
    }
    love.graphics.print( love.timer.getFPS(), 5, 5 );
};

love.run();
var love2d = require('src/love');

var tests = [
    new require('./rectangle'),
    new require('./circle'),
    new require('./line'),
    new require('./print'),
    new require('./polygon')
];

function update(dt) {
    for (var i=0; i < tests.length; i++) {
        tests[i].update(dt);
    };
};

function draw() {
    for (var i=0; i < tests.length; i++) {
        tests[i].draw();
    };
};

window.love = new love2d('lovewindow', draw, update);
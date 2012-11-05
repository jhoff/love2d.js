var love2d = require('src/love');

var helloWorld = {
    position: {
        x: 300,
        y: 150
    },
    rotation: 0,
    speed: 10,
    text: 'Hello World!',
    update: function(dt) {
        this.rotation += ( Math.PI / 20 ) * this.speed * dt
    },
    draw: function() {
        love.graphics.print( this.text, this.position.x, this.position.y, this.rotation, 2 )
    }
}

function update(dt) {
    helloWorld.update(dt);
};

function draw() {
    helloWorld.draw();
};

window.love = new love2d('lovewindow', draw, update);
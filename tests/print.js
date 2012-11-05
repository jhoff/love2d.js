module.exports = {
    position: {
        x: Math.random() * 1000,
        y: Math.random() * 500
    },
    direction: {
        x: 1,
        y: 1
    },
    scale: {
        x: 2,
        y: null
    },
    offset: {
        x: 10,
        y: -10
    },
    shear: {
        x: 0.1,
        y: 0.1
    },
    speed: (Math.random() * 100) + 100,
    text: "Javascript is cool!",
    rotation: 0,
    update: function(dt) {
        if( this.position.x <= 0 ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = 0;
        } else if( this.position.x >= love.canvas.width ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = love.canvas.width;
        }
        if( this.position.y <= 0 ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = 0;
        } else if( this.position.y >= love.canvas.height ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = love.canvas.height;
        }
        this.position.x += dt * this.speed * this.direction.x;
        this.position.y += dt * this.speed * this.direction.y;
        this.rotation += ( Math.PI / 5 ) * dt
    },
    draw: function() {
        love.graphics.setColor(255,255,255,255);
        love.graphics.print(
            this.text,
            this.position.x,
            this.position.y,
            this.rotation,
            this.scale.x,
            this.scale.y,
            this.offset.x,
            this.offset.y,
            this.shear.x,
            this.shear.y
        );
        love.graphics.setColor(255,255,255,255);
    }
};
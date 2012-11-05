module.exports = {
    position: {
        x: Math.random() * 1000,
        y: Math.random() * 500
    },
    direction: {
        x: 1,
        y: 1
    },
    speed: (Math.random() * 100) + 100,
    height: 100,
    width: 100,
    update: function(dt) {
        if( this.position.x <= 0 ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = 0;
        } else if( this.position.x + this.width >= love.canvas.width ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = love.canvas.width - this.width;
        }
        if( this.position.y <= 0 ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = 0;
        } else if( this.position.y + this.height >= love.canvas.height ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = love.canvas.height - this.height;
        }
        this.position.x += dt * this.speed * this.direction.x;
        this.position.y += dt * this.speed * this.direction.y;
    },
    draw: function() {
        love.graphics.setColor(255,255,255,255);
        love.graphics.rectangle(
            'fill',
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
        love.graphics.setColor(0,0,0,255);
        love.graphics.rectangle(
            'line',
            this.position.x + ( this.width / 4 ),
            this.position.y + ( this.height / 4 ),
            this.width / 2,
            this.height / 2
        );
        love.graphics.setColor(255,255,255,255);
    }
};
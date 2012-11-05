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
    radius: 50,
    update: function(dt) {
        if( this.position.x <= this.radius ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = this.radius
        } else if( this.position.x + this.radius >= love.canvas.width ) {
            this.direction.x = this.direction.x * -1;
            this.position.x = love.canvas.width - this.radius;
        }
        if( this.position.y <= this.radius ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = this.radius;
        } else if( this.position.y + this.radius >= love.canvas.height ) {
            this.direction.y = this.direction.y * -1;
            this.position.y = love.canvas.height - this.radius;
        }
        this.position.x += dt * this.speed * this.direction.x;
        this.position.y += dt * this.speed * this.direction.y;
    },
    draw: function() {
        love.graphics.setColor(255,255,255,255);
        love.graphics.circle(
            'fill',
            this.position.x,
            this.position.y,
            this.radius
        );
        love.graphics.setColor(0,0,0,255);
        love.graphics.circle(
            'line',
            this.position.x,
            this.position.y,
            this.radius / 2
        );
        love.graphics.setColor(255,255,255,255);
    }
};
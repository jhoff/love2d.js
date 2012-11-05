module.exports = {
    coords: [
        Math.random() * 1000, // (x1)
        Math.random() * 500,  // (y1)
        Math.random() * 1000, // (x2)
        Math.random() * 500,  // (y2)
        Math.random() * 1000, // (x3)
        Math.random() * 500,  // (y3)
        Math.random() * 1000, // (x4)
        Math.random() * 500   // (y4)
    ],
    direction: {
        x: 1,
        y: 1
    },
    speed: (Math.random() * 100) + 100,
    update: function(dt) {
        // has the ability to get stuck along the edges... good enough for a test though
        // to make it not get stuck, you'd have to calculate and move all the coordinates ( too much work )
        if( Math.min.apply( Math, splitArray(this.coords)[0] ) <= 0 ) {
            this.direction.x = this.direction.x * -1;
        } else if( Math.max.apply( Math, splitArray(this.coords)[0] ) >= love.canvas.width ) {
            this.direction.x = this.direction.x * -1;
        }
        if( Math.min.apply( Math, splitArray(this.coords)[1] ) <= 0 ) {
            this.direction.y = this.direction.y * -1;
        } else if( Math.max.apply( Math, splitArray(this.coords)[1] ) >= love.canvas.height ) {
            this.direction.y = this.direction.y * -1;
        }
        for (var i=0; i < this.coords.length; i++) {
            if( i % 2 == 0 ) {
                this.coords[i] += dt * this.speed * this.direction.x;
            } else {
                this.coords[i] += dt * this.speed * this.direction.y;
            }
        };
    },
    draw: function() {
        var c = this.coords;
        love.graphics.setColor(255,255,255,255);
        love.graphics.polygon( 'fill', c );
        love.graphics.setColor(255,0,0,255);
        love.graphics.polygon( 'line', c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8] );
        love.graphics.setColor(255,255,255,255);
    }
};

function splitArray(candid) {
    var oddOnes = [],
        evenOnes = [];
    for(var i=0; i<candid.length; i++)
        (i % 2 == 0 ? evenOnes : oddOnes).push(candid[i]);
    return [evenOnes, oddOnes];
}
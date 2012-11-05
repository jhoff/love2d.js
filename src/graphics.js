var graphics = function() {
    this.color = [255,255,255,255];
};

graphics.prototype.line = function( /* x1, y1, x2, y2, ... */ ) {
    if( arguments[0] instanceof Array ) { var args = Array.prototype.slice.call(arguments[0]); }
    else { var args = Array.prototype.slice.call(arguments); }
    love.context.beginPath();
    this._traceCoords(args);
    love.context.strokeStyle = this._getRgbaColor();
    love.context.stroke();
}

graphics.prototype.polygon = function( /* mode, ... */ ) {
    if( arguments[1] instanceof Array ) { var mode = arguments[0]; var args = Array.prototype.slice.call(arguments[1]); }
    else { var args = Array.prototype.slice.call(arguments); var mode = args.shift(); }
    love.context.beginPath();
    this._traceCoords(args);
    love.context.closePath();
    this._fillOrStroke(mode);
}

graphics.prototype.rectangle = function( mode, x, y, w, h ) {
    love.context.beginPath();
    love.context.rect(x, y, w, h);
    this._fillOrStroke(mode);
}

graphics.prototype.circle = function( mode, x, y, radius ) {
    love.context.beginPath();
    love.context.arc( x, y, radius, 0, Math.PI*2, true);
    this._fillOrStroke(mode);
}

graphics.prototype.print = function( text, x, y, r, sx, sy, ox, oy, kx, ky ) {
    r = r || 0; sx = sx || 1; sy = sy || sx; ox = ox || 0; oy = oy || 0; kx = kx || 0; ky = ky || 0; // defaults
    love.context.save();
    love.context.translate(x,y);
    love.context.rotate(r);
    love.context.font = '20px sans-serif';
    love.context.fillStyle = this._getRgbaColor();
    love.context.textBaseline = 'top';
    love.context.scale(sx, sy);
    love.context.transform(1 ,ky, kx, 1, 0, 0);
    love.context.fillText(text, ox, oy );
    love.context.restore();
}

graphics.prototype.setColor = function( r, g, b, a ) {
    this.color = [r,g,b,a];
}

graphics.prototype.getColor = function( ) {
    return this.color;
}


/* Internal functions */

graphics.prototype._fillOrStroke = function(mode) {
    if( mode == 'line' ) {
        love.context.lineWidth = 1;
        love.context.strokeStyle = this._getRgbaColor();
        love.context.stroke();
    } else if( mode == 'fill' ) {
        love.context.fillStyle = this._getRgbaColor();
        love.context.fill();
    } else {
        love.throwError( 'Invalid mode specified: ' + mode );
    }
}

graphics.prototype._getRgbaColor = function() {
    return 'rgba('
        + this.color[0] + ','
        + this.color[1] + ','
        + this.color[2] + ','
        + this.color[3] / 255 + ')';
}

graphics.prototype._traceCoords = function( args /* x1, y1, x2, y2, ... */ ) {
    if( args.length > 1 ) {
        love.context.moveTo(args.shift(), args.shift());
        while( args.length > 1 ) {
            love.context.lineTo(args.shift(), args.shift());
        }
    }
}

exports.graphics = graphics;
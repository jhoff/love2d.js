var gameloop = require('./utils/gameloop');
var graphics = require('./graphics');

var love = function(canvas, draw, update, fullscreen){
    var self = this;
    this.resetCSS();

    this.canvas = document.getElementById(canvas);
    this.context = this.canvas.getContext('2d');

    this.graphics = new graphics.graphics();

    if( fullscreen ) {
        this.canvas.width = this.getDocumentWidth();
        this.canvas.height = this.getDocumentHeight();
    }

    var lovedraw = function() {
        self.clearCanvas();
        draw();
    }

    this.gameloop = new gameloop.loop();
    setTimeout(function() {
        self.gameloop.start(lovedraw, update);
    },1);
}

love.prototype.clearCanvas = function() {
    // Store the current transformation matrix
    this.context.save();

    // Use the identity matrix while clearing the canvas
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Restore the transform
    this.context.restore();
}

love.prototype.resetCSS = function() {
    // http://meyerweb.com/eric/tools/css/reset/
    var css = 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none;}table{border-collapse:collapse;border-spacing:0;}';
    if ('\v' == 'v') /* ie only */ {
        document.createStyleSheet().cssText = css;
    } else {
        var style = document.createElement('STYLE');
        style.type = 'text/css';
        style.innerHTML = css;
        document.getElementsByTagName('HEAD')[0].appendChild(style);
    }
}

love.prototype.getDocumentWidth = function() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
        Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
        Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );
}

love.prototype.getDocumentHeight = function() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

love.prototype.throwError = function(msg) {
    alert(msg);
    gameloop.stop();
}

module.exports = love;
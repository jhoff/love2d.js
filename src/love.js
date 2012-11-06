// polyfills
require('./utils/polyfills');

//modules
var graphics = require('./modules/graphics');
var timer = require('./modules/timer');

var love = function(canvas){
    var self = this;

    this.resetCSS();

    this.canvas = document.getElementById(canvas);
    this.context = this.canvas.getContext('2d');

    this.graphics = new graphics();
    this.timer = new timer();

    window.visibly.onVisible(function() {
        if( typeof(self.focus) == 'function' ) self.focus(true);
    });

    window.visibly.onHidden(function() {
        if( typeof(self.focus) == 'function' ) self.focus(false);
    });

}

love.prototype.run = function() {
    var love = this;

    if( typeof(love.load) == 'function' ) love.load();

    var dt = 0;

    // Main loop time.
    var whiletruedo = function() {

        // -- Process events.
        // if love.event then
        //     love.event.pump()
        //     for e,a,b,c,d in love.event.poll() do
        //         if e == "quit" then
        //             if not love.quit or not love.quit() then
        //                 if love.audio then
        //                     love.audio.stop()
        //                 end
        //                 return
        //             end
        //         end
        //         love.handlers[e](a,b,c,d)
        //     end
        // end

        // Update dt, as we'll be passing it to update
        if( love.timer ) {
            love.timer.step();
            dt = love.timer.getDelta();
        }

        // Call update and draw
        if( love.update ) love.update(dt); // will pass 0 if love.timer is disabled
        if( love.graphics ) {
            love.graphics.clear()
            if( love.draw ) love.draw();
        }

        if( love.timer ) love.timer.sleep( 0.001, function() {
            requestAnimFrame( whiletruedo );
        });
    };
    whiletruedo();
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

love.prototype.throwError = function(msg) {
    alert(msg);
    gameloop.stop();
}

module.exports = love;
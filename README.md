## Love2d.js

A HTML5 Canvas implementation of [Löve2d](http://love2d.org) in Javascript.

### Goal

The goal of this project is to implement the [löve2d api](https://love2d.org/wiki/Main_Page) in pure javascript, using the same approach and design model.

This is **NOT** a recomplied port of löve2d, it is rewritten from scratch.

This is **NOT** intended to run existing .lua files, recompiled or otherwise.

### Dependencies

* Dependency Injection framework that is commonjs compliant
    * Currently written to work with [linkedin/inject](https://github.com/linkedin/inject), but it should work with others.

### Open for pull requests

If this is a project you'd like to see completed, I'm currently accepting all pull requests.

### Current Status

* **love** `partially implemented`
    * **love.draw** `complete`
    * ~~love.focus~~
    * ~~love.joystickpressed~~
    * ~~love.joystickreleased~~
    * ~~love.keypressed~~
    * ~~love.keyreleased~~
    * ~~love.load~~
    * ~~love.mousepressed~~
    * ~~love.mousereleased~~
    * ~~love.quit~~
    * ~~love.run~~
    * **love.update** `complete`
* ~~love.audio~~
* ~~love.event~~
* ~~love.filesystem~~
* ~~love.font~~
* **love.graphics** `partially implemented`
    * ~~love.graphics.arc~~
    * ~~love.graphics.checkMode~~
    * **love.graphics.circle** `complete`
    * ~~love.graphics.clear~~
    * ~~love.graphics.draw~~
    * ~~love.graphics.drawq~~
    * ~~love.graphics.getBackgroundColor~~
    * ~~love.graphics.getBlendMode~~
    * ~~love.graphics.getCanvas~~
    * ~~love.graphics.getCaption~~
    * **love.graphics.getColor** `complete`
    * ~~love.graphics.getColorMode~~
    * ~~love.graphics.getDefaultImageFilter~~
    * ~~love.graphics.getFont~~
    * ~~love.graphics.getHeight~~
    * ~~love.graphics.getLineStipple~~
    * ~~love.graphics.getLineStyle~~
    * ~~love.graphics.getLineWidth~~
    * ~~love.graphics.getMaxPointSize~~
    * ~~love.graphics.getMode~~
    * ~~love.graphics.getModes~~
    * ~~love.graphics.getPixelEffect~~
    * ~~love.graphics.getPointSize~~
    * ~~love.graphics.getPointStyle~~
    * ~~love.graphics.getScissor~~
    * ~~love.graphics.getWidth~~
    * ~~love.graphics.hasFocus~~
    * ~~love.graphics.isCreated~~
    * ~~love.graphics.isSupported~~
    * **love.graphics.line** `complete`
    * ~~love.graphics.newCanvas~~
    * ~~love.graphics.newFont~~
    * ~~love.graphics.newFramebuffer~~
    * ~~love.graphics.newImage~~
    * ~~love.graphics.newImageFont~~
    * ~~love.graphics.newParticleSystem~~
    * ~~love.graphics.newPixelEffect~~
    * ~~love.graphics.newQuad~~
    * ~~love.graphics.newScreenshot~~
    * ~~love.graphics.newSpriteBatch~~
    * ~~love.graphics.newStencil~~
    * ~~love.graphics.point~~
    * **love.graphics.polygon** `complete`
    * ~~love.graphics.pop~~
    * ~~love.graphics.present~~
    * **love.graphics.print** `complete`
    * ~~love.graphics.printf~~
    * ~~love.graphics.push~~
    * ~~love.graphics.quad~~
    * **love.graphics.rectangle** `complete`
    * ~~love.graphics.reset~~
    * ~~love.graphics.rotate~~
    * ~~love.graphics.scale~~
    * ~~love.graphics.setBackgroundColor~~
    * ~~love.graphics.setBlendMode~~
    * ~~love.graphics.setCanvas~~
    * ~~love.graphics.setCaption~~
    * **love.graphics.setColor** `complete`
    * ~~love.graphics.setColorMode~~
    * ~~love.graphics.setDefaultImageFilter~~
    * ~~love.graphics.setFont~~
    * ~~love.graphics.setIcon~~
    * ~~love.graphics.setInvertedStencil~~
    * ~~love.graphics.setLine~~
    * ~~love.graphics.setLineStipple~~
    * ~~love.graphics.setLineStyle~~
    * ~~love.graphics.setLineWidth~~
    * ~~love.graphics.setMode~~
    * ~~love.graphics.setNewFont~~
    * ~~love.graphics.setPixelEffect~~
    * ~~love.graphics.setPoint~~
    * ~~love.graphics.setPointSize~~
    * ~~love.graphics.setPointStyle~~
    * ~~love.graphics.setRenderTarget~~
    * ~~love.graphics.setScissor~~
    * ~~love.graphics.setStencil~~
    * ~~love.graphics.shear~~
    * ~~love.graphics.toggleFullscreen~~
    * ~~love.graphics.translate~~
    * ~~love.graphics.triangle~~
* ~~love.image~~
* ~~love.joystick~~
* ~~love.keyboard~~
* ~~love.mouse~~
* ~~love.physics~~
* ~~love.sound~~
* ~~love.thread~~
* ~~love.timer~~

### License

[love2d.js shares the same ZLIB license as Löve2d](https://love2d.org/wiki/License)
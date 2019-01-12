<b>GPU (Grey Processing Unit)</b>
===============
<div>[Back to main page](http://www.avneeshsarwate.com#)</div>

This is an ongoing series of greyscale [fragment shaders](https://thebookofshaders.com/01/).

This series began as an investigation into (more of a blind tinkering with, honestly) procedurally generated visuals at the border of "moving objects" and "textures". I was interested in creating moving images in which the observer's eye would be drawn to purposeful motion, but the moving entities would be hard to semantically distinguish from the "background". I've also been interested [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity) and generative art, and I challenged myself to keep the shaders "simple" - I didn't use any pre-rendered textures, and the only uniforms provided to the shader (other than UV coordinates) were time, a single random walk value, and the previously drawn frame as a texture (allowing for feedback effects). 

For each shader, two links are provided - the live rendering and the file's Git history. Since the animations currently do not work on mobile, some static rendered video clips are included at the end of the page.

Pressing Ctrl+Shift will reveal/hide the text of the fragment shader, allowing you to live code it. Some utility functions common across the different shaders are defined [here](https://github.com/AvneeshSarwate/The_Force/blob/master/shaders/header.frag).


### <b>Shaders (Desktop Chrome only)</b>
- [Shader 0](https://avneeshsarwate.github.io/The_Force/?dancingFabric) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/dancingFabric.glsl)
- [Shader 1](https://avneeshsarwate.github.io/The_Force/?liquidGridSmooth) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/liquidGridSmooth.glsl) (Interacts with  mouse clicks and webcam input)
- [Shader 2](https://avneeshsarwate.github.io/The_Force/?circleSlices) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/circleSlices.glsl)
- [Shader 3](https://avneeshsarwate.github.io/The_Force/?wanderingBlotches) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/wanderingBlotches.glsl)
- [Shader 4](https://avneeshsarwate.github.io/The_Force/?warpFeedback) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/warpFeedback.glsl)
- [Shader 5](https://avneeshsarwate.github.io/The_Force/?plaidWarp) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/plaidWarp.glsl)
- [Shader 6](https://avneeshsarwate.github.io/The_Force/?warpCanyons) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/warpCanyons.glsl)
- [Shader 7](https://avneeshsarwate.github.io/The_Force/?inkSpiral) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/inkSpiral.glsl)
- [Shader 8](https://avneeshsarwate.github.io/The_Force/?rainExperiments) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/rainExperiments.glsl)
- [Shader 9](https://avneeshsarwate.github.io/The_Force/?mapTears) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/mapTears.glsl)
- [Shader 10](https://avneeshsarwate.github.io/The_Force/?tadpoleClouds) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/tadpoleClouds.glsl)
- [Shader 11](https://avneeshsarwate.github.io/The_Force/?moshmosh) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/moshmosh.glsl)
- [Shader 12](https://avneeshsarwate.github.io/The_Force/?flowbox) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/flowbox.glsl)
- [Shader 13](https://avneeshsarwate.github.io/The_Force/?gridshred) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/gridshred.glsl)
- [Shader 14](https://avneeshsarwate.github.io/The_Force/?rolltide) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/rolltide.glsl)
- [Shader 15](https://avneeshsarwate.github.io/The_Force/?creature1) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/creature1.glsl)
- [Shader 16](https://avneeshsarwate.github.io/The_Force/?gridlinewaves) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/gridlinewaves.glsl)
- [Shader 17](https://avneeshsarwate.github.io/The_Force/?pixelsink) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/pixelsink.glsl) 
- [Shader 18](https://avneeshsarwate.github.io/The_Force/?cellDance) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/cellDance.glsl) 
- [Shader 19](https://avneeshsarwate.github.io/The_Force/?fogShip) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/fogShip.glsl) 
- [Shader 20](https://avneeshsarwate.github.io/The_Force/?lightLine) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/lightLine.glsl) 
- [Shader 21](https://avneeshsarwate.github.io/The_Force/?liquidMaze) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/liquidMaze.glsl)
- (STROBE/EPILEPSY WARNING) [Shader 22](https://avneeshsarwate.github.io/The_Force/?magicPortals) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/magicPortals.glsl)
- [Shader 23](https://avneeshsarwate.github.io/The_Force/?pixeliquefy) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/pixeliquefy.glsl)
- [Shader 24](https://avneeshsarwate.github.io/The_Force/?threadFlow) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/threadFlow.glsl)
- [Shader 25](https://avneeshsarwate.github.io/The_Force/?smokePaint) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/smokePaint.glsl)
- [Shader 26](https://avneeshsarwate.github.io/The_Force/?rippleDraw) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/rippleDraw.glsl)
- [Shader 27](https://avneeshsarwate.github.io/The_Force/?fabricFlow) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/fabricFlow.glsl)
- [Shader 28](https://avneeshsarwate.github.io/The_Force/?windowWorld) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/windowWorld.glsl)
- [Shader 29](https://avneeshsarwate.github.io/The_Force/?threadFlow) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/threadFlow.glsl)
- [Shader 30](https://avneeshsarwate.github.io/The_Force/?traveler1) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/traveler1.glsl)
- [Shader 31](https://avneeshsarwate.github.io/The_Force/?tiles1) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/tiles1.glsl)
- [Shader 32](https://avneeshsarwate.github.io/The_Force/?beachWaves) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/beachWaves.glsl)
- [Shader 33](https://avneeshsarwate.github.io/The_Force/?daliCurtain) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/daliCurtain.glsl)
- [Shader 34](https://avneeshsarwate.github.io/The_Force/?noisePlay1) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/noisePlay1.glsl)
- [Shader 35](https://avneeshsarwate.github.io/The_Force/?cellWiggle) [history](https://github.com/AvneeshSarwate/The_Force/blob/master/forceCode/cellWiggle.glsl)


I plan to add more shaders to this series, and to possibly add browser-based interactions to existing shaders (Shader 1 currently interacts with mouse clicks).

All of these shaders were prototyped in and are displayed using my [fork](https://github.com/AvneeshSarwate/The_Force) of Shawn Lawson's [The Force](https://github.com/shawnlawson/The_Force). 


<video width="55%" controls="true">
    <source src="/static/img/greyProcessingUnit/liquidGridSmooth.ogv" type="video/ogg"></source>
    <source src="/static/img/greyProcessingUnit/liquidGridSmooth.mp4" type="video/mp4"></source>
    <source src="/static/img/greyProcessingUnit/liquidGridSmooth2.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
</video>
<video width="55%" controls="true">
    <source src="/static/img/greyProcessingUnit/plaidWarp.ogv" type="video/ogg"></source>
    <source src="/static/img/greyProcessingUnit/plaidWarp.mp4" type="video/mp4"></source>
    <source src="/static/img/greyProcessingUnit/plaidWarp2.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
</video>
<video width="55%" controls="true">
    <source src="/static/img/greyProcessingUnit/inkSpiral.ogv" type="video/ogg"></source>
    <source src="/static/img/greyProcessingUnit/inkSpiral.mp4" type="video/mp4"></source>
    <source src="/static/img/greyProcessingUnit/inkSpiral2.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
</video>
<video width="55%" controls="true">
    <source src="/static/img/greyProcessingUnit/mapTears.ogv" type="video/ogg"></source>
    <source src="/static/img/greyProcessingUnit/mapTears.mp4" type="video/mp4"></source>
    <source src="/static/img/greyProcessingUnit/mapTears2.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
</video>

<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
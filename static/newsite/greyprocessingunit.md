<b>GPU (Grey Processing Unit)</b>
===============
<div>[Back to main page](http://www.avneeshsarwate.com#)</div>

This is an ongoing series of greyscale [fragment shaders](https://thebookofshaders.com/01/).

This series began as an investigation into (more of a blind tinkering with, honestly) procedurally generated visuals at the border of "moving objects" and "textures". I was interested in creating moving images in which the observer's eye would be drawn to purposeful motion, but the moving entities would be hard to semantically distinguish from the "background". I've also been interested [Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity) and generative art, and I challenged myself to keep the shaders as "simple" as possible - I didn't use any pre-rendered textures, and the only uniforms provided to the shader (other than UV coordinates) were time and a single random walk value. For each shader, two links are provided - the live rendering and the file's Git history. 

### <b>Shaders</b>
- [Shader 1](https://avneeshsarwate.github.io/The_Force/?liquidGridSmooth) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/liquidGridSmooth.glsl)
- [Shader 2](https://avneeshsarwate.github.io/The_Force/?circleSlices) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/circleSlices.glsl)
- [Shader 3](https://avneeshsarwate.github.io/The_Force/?wanderingBlotches) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/wanderingBlotches.glsl)
- [Shader 4](https://avneeshsarwate.github.io/The_Force/?warpFeedback) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/warpFeedback.glsl)
- [Shader 5](https://avneeshsarwate.github.io/The_Force/?plaidWarp) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/plaidWarp.glsl)
- [Shader 6](https://avneeshsarwate.github.io/The_Force/?warpCanyons) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/warpCanyons.glsl)
- [Shader 7](https://avneeshsarwate.github.io/The_Force/?inkSpiral) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/inkSpiral.glsl)
- [Shader 8](https://avneeshsarwate.github.io/The_Force/?rainExperiments) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/rainExperiments.glsl)
- [Shader 9](https://avneeshsarwate.github.io/The_Force/?mapTears) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/mapTears.glsl)
- [Shader 10](https://avneeshsarwate.github.io/The_Force/?tadpoleClouds) [history](https://github.com/AvneeshSarwate/The_Force/commits/master/forceCode/tadpoleClouds.glsl)


Pressing Ctrl+Shift will reveal/hide the text of the fragment shader, allowing you to live code it. Some utility functions common across the different shaders are defined [here](https://github.com/AvneeshSarwate/The_Force/blob/master/shaders/header.frag).

I plan to add more shaders to this series, and to possibly add browser-based interactions to existing shaders (Shader 1 currently interacts with mouse clicks).

All of these shaders were prototyped in and are displayed using my [fork](https://github.com/AvneeshSarwate/The_Force) of Shawn Lawson's [The Force](https://github.com/shawnlawson/The_Force). 

<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
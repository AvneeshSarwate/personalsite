<b>Reflection Room</b>
===============
<div>[Back to main page](http://www.avneeshsarwate.com#)</div>

Reflection Room is an immersive environment developed with [Yo-Yo Lin](https://www.yoyolin.com/).

<figure>
    <img src="/static/img/reflectionroom/pic1.jpg" alt="Reflection Room">
</figure>

### <b>Inspiration</b>
We wanted to create a room that would use reflections and feedback of the motion of those inside to create a dynamic, interactive light cocoon. 

<figure>
<video width="100%" controls>
    <source src="/static/img/reflectionroom/vid1.mp4" type="video/mp4"></source>
    <source src="/static/img/reflectionroom/vid1.ogv" type="video/ogg"></source>
    Your browser does not support the video tag.
</video>
</figure>

### <b>Implementation</b>
The room was set up using three projectors and three cameras, with a camera/projector set on each wall acting as a sort of mirror. The motion of the participants picked up by a camera would leave a trail on it's corresponding wall. Since each wall was in the camera frame of the others, any motion would result in a reflection in the other walls, creating a feedback effect through the room. 

Each individual wall could be tuned for different movement thresholds and trail effects. The configurable program was implemented fully in WebGL and can be seen [here](https://avneeshsarwate.github.io/The_Force/?controllableFeedbackTrails) (hit ctrl-v to show and play with the parameter controls, Chrome only for now).


<figure>
<video width="100%" controls>
    <source src="/static/img/reflectionroom/vid2.mp4" type="video/mp4"></source>
    <source src="/static/img/reflectionroom/vid2.ogv" type="video/ogg"></source>
    Your browser does not support the video tag.
</video>
</figure>

<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
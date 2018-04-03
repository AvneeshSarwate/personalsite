<b>Avneesh Sarwate</b>
===============

I'm a software engineer and musician working with computer music and interactive art, based in ATL and NYC. In particular, I'm interested in [interfaces for musical performance](#interfaces) (for which I have some [publications](#publications)), and have recently started working with [interactive visuals](#visuals). 

You can find me on [Instagram](https://www.instagram.com/avneeshsarwate/), [GitHub](https://github.com/AvneeshSarwate), [LinkedIn](https://www.linkedin.com/in/avneesh-sarwate-16172662), and [GMail](mailto:avneeshsarwate@gmail.com). 

I am also a member of [Grind Arts Company](http://www.grindarts.com/) and an alumnus of the [Princeton Laptop Orchestra](http://plork.princeton.edu/index.php).

And to round out this intro, my [resume](/static/papers/Sarwate_Resume.pdf).

## <a id="interfaces"></a><b>Musical Interfaces</b>
I'm interested making electronic music more "live" and building music performance interfaces that allow for powerful new modes of improvisation. In particular, I'm interested in [live coding](https://en.wikipedia.org/wiki/Live_coding) and generative music, and how to integrate them into different musical workflows. 

Below are demo videos of the modules of my personal performance set up. The code can be found on my [GitHub](https://github.com/AvneeshSarwate/performancePlatform).

### Quad Looper [(video)](https://www.youtube.com/watch?v=iKiAXec5VqA)
<span class="marginnote">
The Quad Looper module uses a Launchpad Pro to control a 4 channel MIDI looper. It uses a 2D keyboard design adapted from the original keyboard layout of the Launchpad Pro.
</span>
<figure>
	<img src="/static/img/quad_looper.jpg" alt="Quad Looper Image">
</figure>

### Scenes and Synth Sliders [(video)](https://www.youtube.com/watch?v=VqyQjneqEmQ)
<span class="marginnote">
This module lets you quickly save and replay sets of loops (or "scenes" as they are called in Ableton) created on the Quad Looper. It also allows you to control, save, and swap between parameter settings for your synths, and also associate parameter settings to specific scenes.
</span>
<figure>
	<img src="/static/img/scenes_sliders.jpg" alt="Sliders Image">
</figure>

### Musical Live Coding [(video)](https://www.youtube.com/watch?v=R64AoH1WEOo)
<span class="marginnote">
This module is a live-coding framework that lets you algorithmically generate and play melodies. It also links with the Quad Looper and Scene/Slider modules to let you manipulate melodies you have recorded using the looper. My [paper](/static/papers/CalcificationAndHybridLiveCoding.pdf) on live-coding goes into more detail about how I plan to integrate live-coding into current and future modules of my performance setup.
</span>
<figure>
	<img src="/static/img/live_coding.jpg" alt="Live Coding Image">
</figure>

### Pydal [(video)](https://www.youtube.com/watch?v=57jBWRkTb1M)
<span class="marginnote">
The Pydal module is based on [TidalCycles](https://tidalcycles.org/), a Haskell library by Alex McClean that allows you to define and manipulate rhythmic patterns. This module is a partial port of TidalCycles to Python, with some custom modifications.
</span>
<figure>
	<img src="/static/img/pydal_crop.jpg" alt="Pydal Image">
</figure>

### Audio Sampler [(video)](https://www.youtube.com/watch?v=0EM-peUwOjk)
<span class="marginnote">
The audio sampler lets you record and loop arbitrary audio from an external device. You can also use the Pydal module to rhythmically splice and chop the audio clips you’ve recorded.
</span>
<figure>
	<img src="/static/img/sampler.jpg" alt="Sampler Image">
</figure>

### SkipStep [(video)](https://www.youtube.com/watch?v=An8rsLGQtDw)
<span class="marginnote">
SkipStep is a multi-channel algorithmic step sequencer. It lets you quickly draw and loop melodies, and also quickly manipulate them with built in algorithms. Multiple instances can also be tempo-synchronized over a wireless network to allow groups to play together. The [paper](/static/papers/SkipStep.pdf) on SkipStep discusses some of the motivations and goals of the project, and describes in detail many of its performance features (Note: the older version of SkipStep described in this paper does not use a pad to "launch" the melodies. Instead, the sequencers are always on and continually looping). You can check out some videos of the older version of SkipStep in action [here](https://vimeo.com/99373121) [here](https://www.youtube.com/watch?v=Cn-sI0XXstk&feature=youtu.be) and [here](https://www.youtube.com/watch?v=aJazBP6ZHg0&feature=youtu.be)
</span>
<figure>
	<img src="/static/img/skipstep.jpg" alt="Live Coding Image">
</figure>


## <a id="visuals"></a><b>Interactive Visuals (under development)</b>
I like to play with [shaders](https://avneeshsarwate.github.io/)<sup>1</sup>. 
<span class="marginnote">
<sup>1</sup> Works on both desktop (mic/camera input) and mobile (touch input). Both versions are built using a fork of Shawn Lawson's frame work [The Force](https://github.com/avneeshsarwate/The_Force/tree/master). Some other shader experiments are on [Instagram](https://www.instagram.com/avneeshsarwate/).
</span>

I'm also into [p5](https://p5js.org/), and like making things like [this](https://avneeshsarwate.github.io/p5Experiments/?optical), [this](https://avneeshsarwate.github.io/p5Experiments/?bodygrav), and [this](https://avneeshsarwate.github.io/p5Experiments/?hulldraw).

I also like to do interactive/VJ style visuals with touchscreens and MIDI controllers, like [this](https://www.instagram.com/p/BVnhsVkHLzc/), [this](https://youtu.be/mZgzgJ57O3E?t=40m32s), [this](https://www.youtube.com/watch?v=mZgzgJ57O3E&feature=youtu.be&t=49m31s), and [this](https://www.dropbox.com/sh/kz57srj7ojhb5iq/AAD33gPDxM3fo_XhjH0_EjCja?dl=0).


<!-- - add d3 collision sound thing
- add video of maskingdance.maxpat demo to instagram 
	- link video of actual performance?
- add credits for software used (tufte.css, marked, The Force)
 -->
## <a id="publications"></a><b>Publications</b>
Sarwate, A. (2016, October). Calcification and Hybrid Live-Coding. In Proceedings of the Audio Mostly 2016 (pp. 55-60). ACM. [PDF](/static/papers/CalcificationAndHybridLiveCoding.pdf)

Sarwate, Avneesh, and Jeff Snyder. "SkipStep: A Multi-Paradigm Touch-screen Instrument." In ICMC. 2014. [PDF](/static/papers/SkipStep.pdf)

Snyder, J., & Sarwate, A. (2014). Mobile Device Percussion Parade. In NIME (pp. 147-150). [PDF](/static/papers/MobileMarchingBand.pdf) 

Sarwate, Avneesh, and Rebecca Fiebrink. Expansion on description-based design of melodies. In Proceedings of the 9 th Artificial Intelligence and Interactive Digital Entertainment Conference. Boston. 2013. [PDF](papers/ExpansionOnDescriptionBasedDesign.pdf)

Sarwate, A., & Fiebrink, R. (2013). Variator: A Creativity Support Tool for Music Composition. In NIME (pp. 279-282). [PDF](/static/papers/Variator.pdf)


<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
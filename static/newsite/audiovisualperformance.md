<b>Audiovisual Performance</b>
===============
<div>[Back to main page](http://www.avneeshsarwate.com#)</div>

Inspired by the likes of [Oskar Fischinger](https://www.youtube.com/watch?v=6Xc4g00FFLk) and [Ryoji Ikeda](https://www.youtube.com/watch?v=Sa5g0kQrkUY), I have been exploring audiovisual composition and improvisation. My goal was to create systems that would allow for realtime performance of music and graphics where, even if the music were improvised, the graphics would remain tightly synced to the music. In each piece, the graphical system is a program that listens to realtime MIDI input from the performance to modify the visuals in response to the music. The following in-progress pieces are the result of various strategies towards this aesthetic goal. More to come. 

### <b>Piece 1</b>
For this piece, I used my custom MIDI live-looping system to perform the piece. When melodies matching certain abstract melodic templates (defined via [regular expressions](https://en.wikipedia.org/wiki/Regular_expression)) are played, the system triggers gestures in the flock of moving circles.

<figure>
    <div class="iframe_container">
        <iframe src="https://www.youtube.com/embed/xOYPkdNwmNE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="iframe_video"></iframe>
    </div>
</figure>

### <b>Piece 2</b>
In this piece, the notes played launch particles into a simple physics environment with visible and invisible gravity wells. The trajectories of the particles, as well as the positions of the gravity wells, are controlled by the notes played. 

<figure>
    <div class="iframe_container">
        <iframe src="https://www.youtube.com/embed/xo7bH9-9364" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="iframe_video"></iframe>
    </div>
</figure>

### <b>Piece 3</b>
The sound in this piece is generated from a polyphonic-glissando synthesizer. The green sliders adjust the pitch of each individual voice. The blue sliders control the parameters of a tape-feedback simulation device. The motion of the red circles mirrors the interpolation of the microtonal chords, and the warping of the texture is reflective of the tape feedback, and controlled by the same parameters. 

<figure>
    <div class="iframe_container">
        <iframe src="https://www.youtube.com/embed/lgswcWDTGNU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="iframe_video"></iframe>
    </div>
</figure>

### <b>Piece 4 (Hyperphase)</b>
This piece is an electronic percussion piece that explores non-metrical rhythms and musical patterns that occur in continuous time (rather than discrete time). The piece is performed with a mix of [live coding](https://en.wikipedia.org/wiki/Live_coding) and MIDI controllers, with the live coding used to control the rhythms, and the MIDI controllers used to manipulate audio effects. The greyscale patterns visualize the rhythms played and their relative effects, while the color effects reflect the audio effects that are layered on top. This performance was part of the [live coding summer at IMPA](http://w3.impa.br/~vitorgr/livecode2019/index.html). A more detailed explanation of the technology behind the piece can be found in the [proceedings](http://w3.impa.br/~vitorgr/livecode2019/proceedings.html).

<figure>
    <div class="iframe_container">
        <iframe src="https://www.youtube.com/embed/farVt4xQtbs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="iframe_video"></iframe>
    </div>
</figure>



<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
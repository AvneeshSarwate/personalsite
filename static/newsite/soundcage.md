<b>SoundCage - Belltower</b>
===============
<div>[Back to main page](http://www.avneeshsarwate.com#)</div>

SoundCage is a prototype of an interactive music installation developed with [Ryan Rose](http://www.rytrose.com/).

<figure>
    <img src="/static/img/soundcageside.jpg" alt="SoundCage side view">
</figure>

We were interested in creating a multi-directional, interactive sonic experience that could be easily built and moved around. Given these considerations, we decided to create an installation inspired by belltowers. We developed sensor/actuator packages and used them as control inputs to a musical system in a PVC framed space. Using strings as guidelines for ultrasonic distance sensors, visitors moved throughout the space, varying the tolling of bells from transduction speakers by moving closer and further away from the sensors. When certain ratios of distances between different distance sensors were hit, the speakers would play excerpts of Sederunt Principes by Perotin.

<!-- <figure> -->
<video width="100%" controls>
    <source src="/static/img/soundcagevid.ogv" type="video/ogg"></source>
    <source src="/static/img/soundcagevid.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
</video>
<!-- </figure> -->

### <b>Sensing Audience Motion</b>
We used four ultrasonic distance sensors to detect the motion of the users inside the cage. Due to the narrowness of the  band in which the sensors would detect motion, we decided to tie a string in parallel with the ultrasound beam to give users a physical reference point of where they could interact with the cage. Another issue we faced was that there was significant cross-talk between the different sensors. To solve this, we quickly alternated between running the sensors one at a time for about 5 ms windows, effectively multiplexing them. This still gave us about 5 data-points per second per sensor, which, when quantized, gave us stable readings at a sufficiently fast rate.

<span>
    <img width="49%" src="/static/img/soundcageSensor1.png" alt="Ultrasound sensor part">
    <img width="49%" src="/static/img/soundcageSensor2.png" alt="Ultrasound sensor installed">
</span>

### <b>Transduction Speakers</b>
We generated audio through transduction speakers attached to a wooden board. The audio signal (a bell sample) for each of the four speakers was generated on a laptop, with a USB audio interface used to split the audio over four  ¼” audio cables. These cables were plugged into a small amplifier circuit which was powered by the Arduino, and then this amplified signal was what was delivered to the transducer. Due to the minimal shielding on the amplifier circuit and our workspace's proximity to a radio transmission tower, we encountered significant radio noise during assembly. However this noise was greatly reduced in other locations.

<span>
    <img width="35%" src="/static/img/transducer1.png" alt="Transducer part">
    <img width="64%" src="/static/img/transducer2.png" alt="Transducer installed">
</span>

### <b>Framing and construction</b>
<span>
    <p width="50%">
        The structure was assembled from PVC and wood. The individual sensor/actuator modules were mounted onto  oak boards (which also served as the resonant surfaces for the transducers). Each module had its own Arduino, ultrasonic sensor, amplifier circuit, and transducer. The Arduinos were connected to a laptop and sent over the distance values from the ultrasound sensors via USB. SuperCollider was used on the laptop to calculate the timing of the bell samples based on the distance values. The sensor/actuator modules were all mounted onto a cage made of PVC pipes. The construction and self-contained nature of the sensor/actuator modules, as well as the lightweight and easy dis/reassembly of the PVC cage made for a relatively light and portable structure. 
    </p>
    <img width="50%" src="/static/img/soundcageFrame.png" alt="SoundCage components">
</span>


<footer>*This site was built using  [jQuery](http://jquery.com/), [Marked](https://github.com/chjj/marked), and [Tufte CSS](https://github.com/edwardtufte/tufte-css)*</footer>
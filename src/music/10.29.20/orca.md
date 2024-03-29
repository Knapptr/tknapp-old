---
title: Sequencing with Orca
date: 2020-10-29
description: MIDI sequencing with an 'esoteric programming language.'
image: ./orca.hello.png
location: music
---

[Orca](http://www.hundredrabbits.itch.io/orca) is unique sequencing environment. Created by [Hundred Rabbits](http://100r.co/site/home), a sea-faring development team, Orca is a live-coding environment that sends MIDI (among other) signals.

![*The Orca environment*](./orcasimple.jpg)

Orca has massive flexiblity. Combined with a simple midi hub, Orca could sequence an entire setup of hardware.

I created the following piece in late May of 2020. Orca is sending MIDI on 3 channels to the Elektron Digitone. Each channel sends note-on, note value and velocity signals- which are generated with orcas simple-but powerful operators. The 'pine tree' section of Orca here is merely a visualization; no MIDI signals are generated there. Drums are sequenced directly on the remaining channel of the Digitone.

<iframe width="100%" height="300"src="https://www.youtube.com/embed/bsTxFKnyLT0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For an overview of how Orca works, check out [Allieway Audio's excellent video](https://www.youtube.com/watch?v=RaI_TuISSJE).

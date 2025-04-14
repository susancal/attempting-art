---
layout: single
title: Accurate Closed Captions for The Yellow Submarine
date: 2025-04-02 18:32 -0500
categories: software
permalink: /software/2025-04-02-Accurate-Closed-Captions-for-The-Yellow-Submarine/
---
I recently found out my husband had never seen The Yellow Submarine. I was one part disappointed that he never had, but one part excited to show him! The VHS was in my regular childhood rotation, and it had probably been at least 25 years since I'd watched it.

We found it on YouTube and put it on. These days, we like to enable subtitles on everything we watch, and The Beatles' Liverpudlian accents could certainly use the assist. Being an older movie, I couldn't find any copies that _didn't_ have auto-generated captions - and boy did they stink. We rewound several times to pick up what the characters said and reconcile it with the captions. I gotta say, the movie is even more clever than I ever knew as a child.

Captions aside, watching the film was an unexpected experience. I knew it would be a nostalgia trip, but I wasn't prepared for the sheer vacuum-time-suck back to my childhood (a la Anton Ego when he [tastes Remi's ratatouille](https://www.youtube.com/watch?v=Cxpm-xYSvkU){:target="_blank"}). Even the narrator's opening words and first few notes made my eyes start to well up. The art, colors, music, and probably even the humor I didn't understand as a child had a big impact on me as a person! This movie is special to me and I decided that it deserved better subtitle for my subsequent re-watches.

So how did I do it? 
- I downloaded a copy of the video from [archive.org](https://archive.org/details/yellow-submarine-1968_film){:target="_blank"}. 
- I uploaded that mp4 to Google Drive, and asked Google to auto-generate subtitles. I knew the actual text would be wrong, but the timestamps would be mostly right! I downloaded the captions to a file called `detected.vtt`.
- I googled "Yellow Submarine script" and found [this](https://genius.com/The-beatles-yellow-submarine-script-annotated). A quick read told me this looked correct. I copied it into a text file called `script.txt`
- I spun up a session of Claude, and prompted (this is based on my memory): `I have a file called script.txt that contains an accurate script of a movie. I have a file called detected.vtt that contains auto-generated captions. The timestamps in the captions are correct, but the auto-generated text is wrong. Please use script.txt and compare it to the captions in detected.vtt. Update any discrepancies in detected.vtt with the correct script. Do NOT change the timestamps.`
- Claude was taking a long time, so after 10 minutes I exited and told Claude: `please stop the way you're doing it, and process in a more efficient way`. It was done after about 2 minutes.
- I played the video locally using VLC and loaded in the new `corrected.vtt` subtitles. For some reason, VLC wouldn' support VTT, so a quick Google search told me that `.srt` is the correct extension. I asked Claude to convert the file.
- I played the video locally using VLC and loaded in the new `corrected.srt` subtitles. It was about 95% correct in one go! The words were right, but the timing was off in a few places. I manually got the first half of the movie synced correctly, and will double check the rest soon.

Anyway, [here is my copy](https://drive.google.com/file/d/1nEHZG9pnFOOs0cd3QSECndR6t8rBVfBN/view?usp=sharing){:target="_blank"} of The Yellow Submarine with accurate closed captions. Enjoy! (as of 4/13/25, I realize the timing is off for most of Nowhere Man - it will be fixed)
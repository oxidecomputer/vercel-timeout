# Vercel Remix Error Repro

This is as close to nothing but Remix as you can get. We have one route that
renders a specified amount of random data. If the response is small enough
or large enough, the response works as expected. If it is within a particular
range, the response gets cut off and the page spins for a minute until something
times out.

* ... every smaller number I tried was good
* good https://vercel-timeout.vercel.app/?size=16180
* bad https://vercel-timeout.vercel.app/?size=16181
* ... every number I tried in this range is bad
* bad https://vercel-timeout.vercel.app/?size=64344
* good https://vercel-timeout.vercel.app/?size=64345
* ... every bigger number I tried was good


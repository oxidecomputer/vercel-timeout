# Vercel Remix Error Repro

This is as close to nothing but Remix as you can get. We have one route that
renders a specified amount of random data. If the response is small enough
or large enough, the response works as expected. If it is within a particular
range, the response gets cut off and the page spins for a minute until something
times out.

* good https://vercel-timeout.vercel.app/?size=16000
* bad https://vercel-timeout.vercel.app/?size=17000
* bad https://vercel-timeout.vercel.app/?size=64000
* good https://vercel-timeout.vercel.app/?size=65000


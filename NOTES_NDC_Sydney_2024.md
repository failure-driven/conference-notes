# NDC Sydney 2024

NDC
  Robot on azure
    - live site https://bcsrobotdevuksapp.azurewebsites.net/
  Jess Budd accessibility
    - https://jessbudd.com/resources/making-single-page-apps-accessible/
  Ólafur Waage
    - https://olafurw.com/
    - https://olafurw.com/games/sudoku/ - really cool as it highlights possible
      row/column - written in Rust and WASM

  https://copenhagensuborbitals.com/
    Supposedly Peter opensourced "Snow mix" not sure where to find it

  hacking
    https://ghidra-sre.org/ - NSA tool
  RemoteID for drones
    also https://mavicpilots.com/threads/cheap-remote-id-modules-the-hacks-to-make-them-invisible.138774/
    and https://youtu.be/GJBNqKafe-Q
  Rowdy Codes
    https://rowdy.codes/talks/20240214-ndc-sydney/
    https://beatsinthebrowser.nl/sequencer/
    in an attempt to recreate Roland TR-808
    https://en.wikipedia.org/wiki/Roland_TR-808
    and TR-909 https://en.wikipedia.org/wiki/Roland_TR-909

  Rust
    https://slides.com/craigspence/craig-s-angular-rust-spectacular
    https://github.com/phenomnomnominal
    simulation.rs
      https://gist.github.com/phenomnomnominal/5409b7822c4b0d3e9f514b920cbf2333
    simulation.ts
      https://gist.github.com/phenomnomnominal/e0fd08923843ae8c8c9c1a4825867d00
  HTML Mandy Michael
    https://github.com/mandymichael/htmlresources

## Wed 14 Feb

### Keynote: Decades in the Machine - Meaning and Purpose in Technology

_David Whitney_

[link to agenda item](
  https://ndcsydney.com/agenda/keynote-decades-in-the-machine-meaning-and-purpose-in-technology/0a7yceczbm3
)

- speak less, listen more
- when you hear a new idea
  > look for waht you love ❤️  in the idea and not what you
  > immediately hate
- rather than
  > Strong opinioins, loosely held
  - try something like
  > calm thoughts, quitely mentioned
- don't be dogmatic about an approach or technology, if someone is paying for
  you to do the work, then the tech you are using is probably good enough
- love each others languages
- throw out bike shedding
- "learning stuff" is the job, don't be comfortable in what you are currently
  doing
- people are often a lot less hireable than they think they are, especially
  specialists - "secialiasation is for insects"
- in your career, chart a cours for generalisation
- if you feel out of your depth, you are probably learning

- at the end David gave a bunch of good thoughts

### Advanced HTML for Good Developers

_Mandy Michael_

[link to agenda item](
  https://ndcsydney.com/agenda/advanced-html-for-good-developers-0b14/03hqjdcm5ij
)

- some really cool things here
- made me interested in the things you can do with HTML
- a great demo of div only site in a screen reader vs semantic HTML
- most importantly
    - convey information early - preload, 103 early hints, pre-connect, etc
    - explore all the attributes - they will help you
- also liked the terms
  - CLS Cumulative Layout Shift
  - Largest Contentful Paint (LCP) - https://web.dev/articles/lcp

### Conquering complexity: refactoring JavaScript projects

_Phil Nash_

[link to agenda item](
  https://ndcsydney.com/agenda/conquering-complexity-refactoring-javascript-projects-0mlb/0jm6255audu
)

- sonar code analysis - complexity is the 2nd higest lint issue across all the
  code they see (other issues are basic like var vs let/const, == vs ===, etc)
- explain Cyclomatic Complexity - every branch: if, for, etc
- explain and look at Cognigive Complexity - putthing things on your brain stack
    - so not only every branch as above but also every indentation, eg for in a
      for
- anyone got an example of a working emthod in the 1,000's???

### Craig's Amazing Rust Spectacular (brought to you by Rust-eze)

_Craig Spence_

[link to agenda item](
  https://ndcsydney.com/agenda/craigs-amazing-rust-spectacular-brought-to-you-by-rust-eze-0sep/0jd3aa893p2
)

- comparison of TypeScript to Rust
- nicely done
- code of a fluid dynamics analysis in JS vs Rust and Rust into WASM
- interesting to look at the code
- also render in the terminal???

### Beats in the Browser - Coding Music with JavaScript

_Rowdy Rabouw_

[link to agenda item](
  https://ndcsydney.com/agenda/beats-in-the-browser-coding-music-with-javascript-03qz/00vo1exybuf
)

- very cool
- Music and Midi API in browsers
- also good example of BlueTooth API - to connect Heart Rate Monitor to drive
  music but demo failed due to flat battery

### How I Met Your Data

_Troy Hunt_

saw the last part as was at DJ Rowdy's talk on Beats in browser

[link to agenda item](
  https://ndcsydney.com/agenda/how-i-met-your-data/89f5311dda04
)

- looked like a good overivew of haveIbeenPwned

### Fun with a vendor compentition

- https://github.com/saramic/learning/tree/master/hacks/ssw_rewards_app

## Thu 15 Feb

### The Role of AI in Building a more Equitable Future
_Michael Tjalve_

[link to agenda item](
  https://ndcsydney.com/agenda/the-role-of-ai-in-building-a-more-equitable-future-059v/0uv3hvou2yz
)

- recommended - did not see yet

### Drones, RemoteID and the Thrilling Future of UAS Flight
_Heather Downing_

[link to agenda item](
  https://ndcsydney.com/agenda/drones-remoteid-and-the-thrilling-future-of-uas-flight-0ixu/0wq716wdnb6
)

- some interesting things on drones, licences and the bringing in of RemoteID
- also some of the practical uses like coast guard drones, zipline and swoop deliveries of medicine - Swoop is going live west of Brisbane

### GitHub Copilot: What's here, what's new, and what's next
_Damian Brady_

[linke to agenda item](
  https://ndcsydney.com/agenda/github-copilot-what-s-here-what-s-new-and-what-s-next/0x9bte2rd2d
)

- definitely worth giving github copilot another go
- TODO notes

### Styling the Future: A Deep Dive into Modern CSS
_Anton Ball_

[linke to agenda item](
  https://ndcsydney.com/agenda/styling-the-future-a-deep-dive-into-modern-css-04ld/0ule6jz7s1e
)

- TODO notes

### TDD & DDD from the Ground Up (Live Coding)
_Chris Simon_

[link to agenda item](
  https://ndcsydney.com/agenda/tdd-and-ddd-from-the-ground-up-live-coding-0k4a/0mpqbd978l1
)

- only went to first 5 minutes and was not too convinced due to verbose nature of .NET
- later talking to Chris realised that after his initial intro to TDD he pushes
  through a number of commits (using 3 line script) ending on a threading issue
  which is resolved by reaching out to the business domain expert and realising
  it is actually a sequential ting - leading to simpler design

### Kafka for .NET Developers
_Ian Cooper_

[link to agenda item](
  https://ndcsydney.com/agenda/kafka-for-net-developers-0w4k/08y1uizbixy
)

- went to this but was bored with a bunch of .NET implementation - nothing new
  in terms of how this works.
- kcat for testing kafka
    - https://github.com/edenhill/kcat

### Programming and Technology in Amateur Space Exploration
_Mads Wilson_

[link to agenda item](
  https://ndcsydney.com/agenda/programming-and-technology-in-amateur-space-exploration-034z/e84b811a6d0e
)

### Build your own Secure Messenger
_Ben Dechrai_

[link to agenda item](
  https://ndcsydney.com/agenda/build-your-own-secure-messenger-03d5/0bahm4vco3q
)

- might be worth watching

### How hacking works - Web edition
_Espen Sande-Larsen_

[link to agenda item](
  https://ndcsydney.com/agenda/how-hacking-works-web-edition-0761/0547ff9e6c2e
)

- lots of cool Capture The Flag (CTFs)

### NDC Party: Architecting Apollo: Systems Design Lessons from the Golden Age of Spaceflight
_Kyle Kotowick_

[link to agenda item](
  https://ndcsydney.com/agenda/architecting-apollo-systems-design-lessons-from-the-golden-age-of-spaceflight-0yuz/4a2f1ce5204b
)

- just a good story with facinating info

## Fri 16 Feb

### Keynote: Iron Man or Ultron: Is AI here to help us or hurt us?
_Scott Hanselman_

[link to agenda item](
  https://ndcsydney.com/agenda/opening-keynote-hanselman/3fad6caa73ef
)

### Learning Rust the wrong way.
_Ólafur Waage_

[link to agenda item](
  https://ndcsydney.com/agenda/learning-rust-the-wrong-way-0c2l/095rk9wrnce
)

- on rust and learning
- when learning is hard, you learn more

### On Becoming a Space-Faring Civilization
_Richard Campbell_

[link to agenda item](
  https://ndcsydney.com/agenda/on-becoming-a-space-faring-civilization/54a6be6a5e0e
)
- supposedly a good talk - should watch

### Making Single Page Apps Accessible: It's easier than you think
_Jess Budd_

[link to agenda item](
  https://ndcsydney.com/agenda/making-single-page-apps-accessible-its-easier-than-you-think-0gbj/0gxathsh3r5
)

- lots of notes

### Playing Video Games One Frame at a Time
_Ólafur Waage_

[link to agenda item](
  https://ndcsydney.com/agenda/playing-video-games-one-frame-at-a-time-00t1/0nejq2sat4d
)

- supposedly some good hacking

### Microsoft Security Copilot - your new best friend!
_George Coldham_

[link to agenda item](
  https://ndcsydney.com/agenda/microsoft-security-copilot-your-new-best-friend-0ovv/0sao417qzub
)

- supposedly a new part of copilot

### Developer Smackdown
_Selena Small, Michael Milewski_

[link to agenda item](
  https://ndcsydney.com/agenda/developer-smackdown-0zxt/0medbyh7f5n
)


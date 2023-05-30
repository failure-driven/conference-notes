# ReactMiami 2023

https://www.reactmiami.com/

All videos listed and being published as we speak

- https://www.youtube.com/playlist?list=PL02pdjMT4gWwIDHt4mzmzbiXU-7Sk1LN5

React.js: The Documentary

[![React.js: The Documentary](http://img.youtube.com/vi/8pDqJVdNa44/0.jpg)](https://youtu.be/8pDqJVdNa44)

[![ReactMiami the pitch](http://img.youtube.com/vi/I5vgAJ6uD0U/0.jpg)](https://youtu.be/I5vgAJ6uD0U?t=1053)

---

## Thursday 20 April

---

### Keynote: The Web's Next Transition - Kent C. Dodds

- basically a talk covering his article https://www.epicweb.dev/the-webs-next-transition
- a good istory lesson in the kind of interactions we have had with things like standard forms, moving to SPA's (Single Page Application)
- finally finishing off with PESPA's (Progressively Enhanced Single Page Apps)
- and a sell for REMIX - https://remix.run/

[![Keynote: Kent C. Dodds - The Web's Next Transition](
http://img.youtube.com/vi/Ie7SJEzPtPo/0.jpg)](
https://youtu.be/Ie7SJEzPtPo)

---

### Level up with Copilot - Rizèl Scarlett

- slides https://www.canva.com/design/DAFIfRDAr2U/W3lxJU60NteuLyeyno-VPQ/view
- intro level talk on how to use Copilot
- check out https://platform.openai.com/overview for the basis of a lot of this
    - emoji generator examples
    - code generator examples
- example usages
    - translating code from 1 programming language to another
    - getting an understanding of what code does, the AI takes code and writes out an explanation
- useful whilst pair programming
    - helps with typing
    - helps with learning new programming languages
- a demo of writing a tweet with co-pilot - ie build something to call the API and tweet
- Code spaces
    - seem pretty cool, everyone is using them
    - can store secrets in code spaces - no need to display during demos
- The term of "prompt engineering" - ie prompting CoPilot or ChatGPT to help engineer the solution you want.
- further reading
    - [A Beginner's Guide to Prompt Engineering with GitHub Copilot](https://dev.to/github/a-beginners-guide-to-prompt-engineering-with-github-copilot-3ibp)
    - [8 things you didn’t know you could do with GitHub Copilot](https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/)

---

### Building the Fastest Commerce Site: How we Built Next.js Commerce 2.0 - Hassan El Mghari


[![Hassan El Mghari - Building the Fastest Commerce Site: How we Built Next js Commerce 2 0](
http://img.youtube.com/vi/DfukYzUonnk/0.jpg)](
https://youtu.be/DfukYzUonnk)

### The Unexpected States of Burnout - Jenny Truong

[![Jenny Truong - The Unexpected States of Burnout](
http://img.youtube.com/vi/tcN8grYAEuQ/0.jpg)](
https://youtu.be/tcN8grYAEuQ)

---

### Look Mom, No Passwords! A Developers Guide to WebAuthn - Will Johnson

- a technical deep dive into the code to create a WebAuthen token
- interesting that you can create an anonymous user from a device as well - ie
  no need for an email
- more details https://developer.auth0.com/
- https://auth0.com/blog/authors/will-johnson/
- not that useful, was hoping to get more info on if you can and how to
  implement an actual PassKey device in software

---

### Modern Redux with Redux Toolkit - Mark Erikson

### Don't just React, Mobilize! - Jennifer Robison

[![Jennifer Robison - Don't Just React, Mobilize](
http://img.youtube.com/vi/pePQpCAnju0/0.jpg)](
https://youtu.be/pePQpCAnju0)

### Personalization: The Art of Offering Custom Experiences - Facundo Giuliani

### Your SaaS forecast: Cloudy with a chance of GraphQL - Michael Liendo

[![Michael Liendo - Your SaaS forecast: Cloudy with a chance of GraphQL](
http://img.youtube.com/vi/weqNUmNVjJ8/0.jpg)](
https://youtu.be/weqNUmNVjJ8)

### On-demand Flow State: A Framework for Mental Performance - Anthony Shew

### Design Systems are a Carnival! One Accessible Component, Many Pretty Masks - Kathleen McMahon

---

### Everything's Better With Friends - Sunil Pai

- Cloudflare's Durable Objects - https://developers.cloudflare.com/workers/learning/using-durable-objects/

> Global Uniqueness guarantees that there will be a single instance of a
> Durable Object class with a given ID running at once, across the world.

- live open sourcing of https://partykit.io/
    - https://github.com/partykit/partykit

> partykit is a software development kit for building realtime collaborative
> applications. You can use it with your existing web applications, or build
> new ones from scratch.

- demo https://together.tldraw.com/fast/Ko5KCaEJtbeaKt9hs7gFU

[![Sunil Pai - Everything's Better With Friends (how to build collaborative applications)](
http://img.youtube.com/vi/wd8QTRjZZaE/0.jpg)](
https://youtu.be/wd8QTRjZZaE)


### Getting Down to Brass Tacks: Using Chrome Dev Tools to Level Up Your Applications - Ken Wheeler
Friday

- Chrome Dev Tools
    - flex debuggin
        - similar to https://developer.chrome.com/docs/devtools/css/flexbox/
    - get a table running with `console.table`
        - https://developer.mozilla.org/en-US/docs/Web/API/console/table
        ```
        console.table(["apples", "oranges", "bananas"]);

        (index)     Value
        0	        'apples'
        1	        'oranges'
        2	        'bananas'
        ```
    - console.trace
        - similar to https://developer.chrome.com/blog/print-out-a-quick-stack-trace-from-the-console/
    - analyze runtime performance
        - https://developer.chrome.com/docs/devtools/performance/
        - https://developer.chrome.com/docs/devtools/memory-problems/
        - https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/
        - https://www.bitdegree.org/learn/chrome-memory-tab
    - emulate blured vision and reduced contrast etc
        - https://umaar.com/dev-tips/231-emulate-vision-deficiencies/
        ![emulate vision deficiencies](https://umaar.com/assets/images/dev-tips/emulate-vision-deficiencies.gif)
        - https://addyosmani.com/blog/emulate-vision-deficiencies-devtools/
    - CSS Overview: Identify potential CSS improvements
        - https://developer.chrome.com/docs/devtools/css-overview/

---

## Friday 21 April

---

### The Best JavaScript is No JavaScript - Una Kravets

- new things in Chrome and related browsers
    - container queries vs media queries (so on a div not just the whole page)
    - a lot of code, NOT, ranges, boolean style CSS queries supported
    - popovers now powerd by CSS - no need for popper.js
    - you can now style drop down select boxes
    - WATCH THE VIDEO

[![Una Kravets - The JavaScript is No JavaScript](
http://img.youtube.com/vi/aOB2f315Yu4/0.jpg)](
https://youtu.be/aOB2f315Yu4)

~~[![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=1053)~~

---

### Video Editing in the Browser - Christopher "Vjeux" Chedeau

- presenter's blog https://blog.vjeux.com/
- how hard would it be to create an editor in browser?
    - end result a web based decoding library to run in browser
        - https://github.com/vjeux/mp4-h264-re-encode
    - honourable mentions
        - [High-performance inference of OpenAI's Whisper automatic speech recognition (ASR) model](https://github.com/ggerganov/whisper.cpp)
        - [tensorflow.js](https://www.tensorflow.org/js)
        - creator of excalidraw - the best whiteboard
            - https://excalidraw.com/
            - https://excalidraw-slides.netlify.app/
    - WATCH THE VIDEO

    [![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=2871)

---

### The Hidden Infrastructure Powering our Frontends - Dax Raad

- SST - serverless tools OS for AWS
    - https://sst.dev/
- interesting talk covering parts of what it takes to deploy to a resilient
  cloud infrastructure and how SST tooling can help you do it

### Take a Rest from REST - Aleksandra Sikora

- presenters site https://www.aleksandra.codes/
- journey from
    - RPC (Remote Procedure Call)
    - -> OO (Object Oriented)
    - -> ProtoBuf
    - -> CORBA
    - -> SOAP
    - -> 2000 REST
    - -> JSON - RPC
    - -> REST
        - inflexible
        - n+1 on client - overfetching
    - -> RESTful
    - -> GraphQL
        - type safety
        - no caching
        - there is GraphQL CDN
        - servers are hard to setup but usually pays off
    - -> RPC 2020
    - -> tRPC
- tools
    - [tRPC - Move Fast and Break Nothing. End-to-end typesafe APIs made easy.](https://trpc.io/)
    - [Prisma - Next-generation Node.js and TypeScript ORM](https://www.prisma.io/)
    - [Zod TypeScript-first schema validation with static type inference](https://zod.dev)
    - [Blitz](https://blitzjs.com/) picks up where Next.js leaves off,
      providing battle-tested libraries and conventions for shipping and
      scaling world wide applications.
    - mention onf Fets a lib written by a friend? and BridgeJS for bringing back REST - would need to re-watch

---

### R Is For React Performance - Henri Helvetica

### To Micro Frontend or Not to Micro Frontend: 5 Questions to Ask First - Danielle Maxwell

---

### Create Engaging “Scrollytelling” Experiences With React & GSAP - Julian Benegas

- crazy demo just look at the presenters company site https://basement.studio/
- code https://github.com/basementstudio/scrollytelling
- demo https://scrollytelling.basement.studio/

[![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=13375)

---

### Visualizing the Blockchain - Stephanie Modica

### Building for Disabled Power Users - Ryan Magoon

### Build Your Machine Learning Model on Edge with React Native - Rashmi Nagpal

### Data-Driven Design Systems in Practice - Hosh'ki Tsunoda & June Cho

---

### Setting Up ESLint and TypeScript for React - Josh Goldberg

- https://twitter.com/JoshuaKGoldberg/status/1653073908147290112
- https://blog.joshuakgoldberg.com/configuring-eslint-prettier-and-typescript-together
    [![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=25744)

### Usability Testing for Developers - Kathryn Grayson Nanz

---

### 10x Your Teamwork Through Pair Programming - Selena Small & Michael Milewski

- yours truly

[![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=29033)

---

### React as a Developer Health Tool - Tejas Kumar

[![ReactMiamai](http://img.youtube.com/vi/mPPZ-NUnR-4/0.jpg)](https://youtu.be/mPPZ-NUnR-4?t=30808)

- some cool things you can do with live code and
- Arc browser https://arc.net/
- discussion of server componnents
- https://qwik.builder.io/ tiny JS footprint
    - selective hydration may come into React in future
- cool API for dog breeds https://dog.ceo/dog-api/
- need server going forward in React, use vite or nextJS but will roll our own in demo
- demo using live blocks
    - [Collaborative experiences in days, not months](https://liveblocks.io/)
    - make real time collaborative tools approachable
    - whiteboard example https://liveblocks.io/docs/tutorials/collaborative-online-whiteboard
- demo https://liveblocks-three.vercel.app/


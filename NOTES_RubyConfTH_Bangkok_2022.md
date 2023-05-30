# RubyConfTH Bangkok 2022

- 2 years in the making since 2019 RubyConfTH

## Day 1 Friday 9th December

- https://rubyconfth.com/schedule/#day-1

Keynote: A Beginner's Guide to Puma Internals (Slides)
Nate is a Rails performance expert. He’s the author of several books, and he
also maintains the Puma web server project.
Nate Berkopec @nateberkopec

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/01_nate_puma/1_will_let_you_name_next_puma_release.jpg)
![main_reqeust_response_classes](https://failure-driven.com/images/RubyConfTH-bangkok-2022/01_nate_puma/2_main_request_response_classes.jpg)
![good order of tags for oss contrib](https://failure-driven.com/images/RubyConfTH-bangkok-2022/01_nate_puma/3_good_order_of_tags_for_oss_contrib.jpg)

- OSS - Rails to get best review of  your code
- lazyness - get others to do the work for me
- maintainers - "build an army of nerds"
- most people here have NOT contributed to OSS
- hump for most is they are intimidated
- Overview of project goals and approaches
  - details HTTP & TCP
  - Puma allows Rack Apps to run
  - Puma is the interface between Rack and Socekt data stream
  - Pre-foring - fors child processes
  - The threadpool - is the special sauce of Puma over competitors
  - main thing to allow GVL (Global VM Lock) & wait for I/O
  - Reactor in Ruby 3
  - more throughput for similar memory resources - this is the difference from
    servers like Unicorn - this is the reason to use Puma, if this is your
    usecase use Puma 
  - Unicorn needs buffering as has no reactor and use nginx or apache
  - [CLOC](https://github.com/AlDanial/cloc) - count lines of project
  - use own mini_ssl - originally for performand, plan is to get rid of it,
    still uses OpenSSL under the covers
  - uses parser from Mongrel
  - Ragel parser lib
  - Java/C code in /ext - this is where most OSS help is needed
  - IO.select is used to accept connections on Socket - you can see what it
    does, "it's in the name"
  - `brew intall ragel`, simple to get up and running
  - tags to get started with
    - contrib-wated - great first thing
    - needs-repro - reproducible bug
    - docs - can do "non code contributions"
    - PR review comments on any PR
    - bug-fix
    - finally features
    - Good OSS strategy
![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/01_nate_puma/3_good_order_of_tags_for_oss_contrib.jpg)
  - * wroking with ruby core?? can? Rack speck Sockets
  - Chris Seeaton memorial
    - plain language academic
    - infinite patience
    - mission to make languages fast

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/01_nate_puma/4_chris_seaton_memorial.jpg)

> A Rails performance guidebook: from 0 to 1B requests/day
> Cristian is a software engineer in love with Ruby. He has been working with Rails since the release of Rails 3, more than 10 years ago. Currently, he leads performance optimization efforts at Zendesk as a Group Tech Lead.
> Cristian Planas @crplanas

- talk on scaling zendesk
- gems like Devise give you everything Authentication - a fress lunc
- unfrotunately ActiveScale does not exist
- scaling is hard - problem left for the developer

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/02_cristian_performance)

- 2x number of zendesk tikcets as people on earth
- 3TB for tickets, biggest table 60 TB
- use monitoring (important) and error budgets - often for latency and uptime
- DB query performance
  - db indexes
  - sharding
  - anti pattern greedy select - fetch all by default
- caching - write cache & DB together
- tech that tempts us to misuse them - we should learn
- cold storate
  - create escalator object
  - move to cheaper storage

> Hanami 2: New Framework, New You
> Tim is a core team member of Hanami, dry-rb and rom-rb, and a Principal Engineer at Buildkite. He’s been writing Ruby for over 20 years and still loves it! He works to bring the joy of Ruby to the experience of writing real, maintainable apps of all shapes and sizes.
>Tim Riley @timriley

good intro to getting started with hanami

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/03_tim_hanami)


> Megaruby - mruby/c on Sega Mega Drive
> Yuji is a software developer based in Adelaide, South Australia. He is originally from Tokyo, Japan. He used to be a Windows desktop application developer until he discovered Ruby.
> Yuji Yokoo @yujiyokoo

a great demo of what can be done. SOunds like a lot of mruby needs to be cut down to make this work. There are other projects out there like esp32 ruby etc. Finally a game of wordle

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/04_yuji_mruby)

> Roasting the Duck - A talk about Ruby and types
> Paolo Perrotta is the author of “Metaprogramming Ruby” and “Programming Machine Learning”. He's been coding for most of his life, ranging from embedded to enterprise software, computer games, and web apps. He lives in Bologna, Italy.
> Paolo Perrotta @nusco

overview of how to use RBS files to add typing in ruby 3.1

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/05_paolo_ruby_types)

> Scaling Ruby with JRuby (Slides)
> Charles works on JRuby and JVM language technologies at Red Hat.
> Charles Oliver Nutter @headius

State of the union of how jRuby is going - it's fast and good for applications where it can warm up

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/06_charles_scaling_w_jruby)

> 10x your teamwork through pair programming
> Michael is a developer keen on the people side of things. He loves pairing, and in particular with people new to writing software. He especially likes driving software out with tests and directing the evolution of the design. In his spare time he is busy camping with his 4 kids.
> Michael Milewski @saramic
> Selena is a full-stack lead engineer at Fresho in Melbourne Australia who is particularly passionate about TDD. As a self-taught coder with a background in management, she is well-equipped to mentor others. In her spare time, she is a nak muay ying, a professional kickboxer.
> Selena Small @selenasmall88

That's us

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/07_selena_michael_pairing)

> Why I choose Phoenix
> Elixir developer, former Ruby dev for over a decade. Freelancer, streaming at https://www.twitch.tv/Elixir_Bytes. Podcasting about freelancing for software devs at https://dreamclients.io
> Aaron Cruz @mraaroncruz

overview

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/08_aaron_pheonix")

> Keynote: The Ecstatic Organisation
> Siddharth is the CTO of InVideo. He has been a Ruby developer for fifteen years and has also been an investment banker and musician.
> Siddharth Sharma @_svs_

be ecstatic in what you do

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/09_sid_ecstatic_org)

## Offical RubyConfTH Party

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/10_party)

## Hallway track RubyConfTH

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/11_hallway_track)

## Day 2 Saturday 10th December

https://rubyconfth.com/schedule/#day-2

> Keynote: Ruby & JVM: A (JRuby) Love Story
> Yarden is a Software Engineer at Rookout, where you can find her in the office jumping between 6 different programming languages a day. She loves learning about new technology, creating iOS apps and making everything she can automated.
> Yarden Laifenfeld @YardenLaif

- non breaking breakpoints
- Rookout - lilve debugger - https://www.rookout.com/
- force_ruby_platform true
- supports Java & Ruby
- Rookout is a gem
{{< highlight bash >}}
gem install rookout
{{< / highlight >}}
- TracePoints - is a ruby API for debugging
- Jruby behind in TracePoints API
- cannot specifiy line
- use JavaAgent instrumentationAPI instead

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/12_yarden_ruby_jvm_love)


> On making your Rails App more transparent
> Stephan is working as a Software Developer at NEW WORK SE! When not working he's traveling with his family, hiking or sailing.
> Stephan Eberle @stephaneberle

- transparent rails
- Open telemetry
  - look at network
  - latency over time
  - based on Google Daper  paper
- logs are without context
- Open Telementry
  - trace spans
    - a unit of work
  - also metrics
  - statsd used for metrics or prometeous
- Jaeger UI to connect a UI
- instances inside DataDog and Sentry
- are similar
- zipkin
- Jager UI
- sentry - can it read this
- use with multi services
- talk to lots of external providers
- can instruemnt a rails monolith app
- [ ] it might be already in DataDog
- OpenTelementry on github

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/13_stephan_rails_transparency)

> GitOps: The Single source of truth
> Audy's background is as a backend developer, then he's focused on SysAdmin/DevOps for the last 8 years. The guy who gets excited when talking about cloud technology and container orchestration!
> Thatthep Vorrasing @amaudy

- CI/CD in gitlab
- github actions are similar but enterprisy and cost
- Jenkins and Bitbucket are also competitors
- kubeseal - see Mgmt
- hashi corp valut

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/14_thatthep_gitops)

> Dealing With A Project's Complexity In A Changing Environment
> Anita is a self-learner who entered the Ruby world in 2013 as a backend developer. Since then, she has started a master’s degree in psychology. Initially a hobby, with time, psychology turned into a valuable experience that helped her transition to a managerial path in IT.
> Anita Jaszewska @anita_jaszewska

- dealing with issues
- 5 states we go through and how we deal with it
- Tips
  - "I" statement of feeling
  - ask questions
  - focus on risks & solutions

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/15_anita_project_complexity)

> Dissecting Rails - a different approach to learning Rails
> Ratnadeep (rtdp), is a software craftsman, an entrepreneur and work with Ruby for the past 13 years. He runs a Rails consulting company BetaCraft Technologies. Earlier he was a digital nomad and changed his location every few weeks, coding Ruby and exploring places.
> Ratnadeep Deshmane @rtdp

- Ruby-vernat translated ruby
- RTDP - digital nomad
- Rails vs Ruby
- learn the parts
  - rake
  - rack
  - ActiveSupport
  - hash_with_indifferent_access gotchas
  - ActiveRecord
  - ActiveModel
  - ActiveMailer - running as standalone mailer
  - ActiveJob
  - others are too intertwind depnedencies on the rest of rails to run individually: ActionCable, ActionVeiew, ActionController - these are better run inside rails
  - DSLs in rails/ruby - RSpec, Routes
  - Routes: sinatroa/hanami/Roda better for
  - templates: ERB
  - dissecting-rails book/site

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/16_ratnadeep_disecting_rails)

> Roda: Simplicity, Reliability, Extensibility, Performance (Slides)
> Jeremy Evans is a Ruby committer who focuses on fixing bugs in Ruby. He the lead developer of the Sequel database library, the Roda web toolkit, the Rodauth authentication framework, and many other Ruby libraries. He is the author of “Polished Ruby Programming”.
> Jeremy Evans @jeremyevans0

- Roda - routing tree pattern matcing
- actions driving routing makes it simpler, can also run any code in the middle
- 2xfaster and 1/3lessmemory as prod re-write of rails
- Killer feature for auth
- frozen application
- anti_pollution of namesapce and methods
- 100% line and branch coveraate
- CSRF is better
- lot's of plugins and they are all better

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/17_jeremy_roda)

Take away: Definitely worth a try. Certainly seems like this is a viable option for projects that need most of the power of rails but in a different lighterweight framework. Would be nice to play with the routing ideas as well as check out some of the alternative plugins like Shine?

> Processing data: Ruby or SQL? (Slides)
> Nerd, cyclist, and blogger. Jônatas is a pair programming evangelist, Vim editor user and enthusiast.
> Jônatas Paganini @jonatasdp

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/18_jonatas_ruby_or_sql)

mostly sat and listend to this one. certainly seems like I would want to re-run some of my experiments on this

> Refactoring for Rails - using deodorant to prevent code smells and a shower from time to time to eliminate the most persistent ones (Slides)
> Rodrigo works with development since 1997, have worked with many languages and platforms before falling in love with Ruby and now has the objective to help developers to use the best tools for each job so they can solve hard problems, with less bugs and have more free time.
> Rodrigo Urubatan Ferreira Jardim @urubatan

missed this one but got an image

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/19_rodrigo_refactoring_for_rails)

and the binary on the <span style="font-size: 50px">💩</span> above ...

{{< highlight ruby >}}
[
  0b01100011, 0b01101111,
  0b01100100, 0b01100101,
  0b00100000, 0b01110011,
  0b01101101, 0b01100101,
  0b01101100, 0b01101100,
].map(&:chr).join

"code smell"
{{< / highlight >}}

> Keynote: YJIT's Three Languages: the Fun of Code that Writes Code
> Noah spent many years charting exactly how fast Ruby is for various tasks, and continues this work at speed.yjit.org. On the YJIT team, he bothers younger, more vigorous programmers with questions like, “would you say five warmup iterations are enough if we set this parameter?”
> Noah Gibbs @codefolio

amazing work on an improved Just In Time optimiser
- needs some warm up time
- as an example of concatinationg strings, a 30th << 6(int) would break the optimiastion as would different string encoding
- BootSnap preparse bytecode to disk

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/20_noah_yjit)

resources link https://codefol.io/speaking/rubyconfth2022/

also some recent benchmarks https://speed.yjit.org/

attempted with

{{< highlight bash >}}
cat a.rb

  ary = ""
  10_000_000.times do
    ("a".."z").each do |letter|
      ary << letter
    end
  end

ruby --yjit a.rb  21.36s user 0.27s system 98% cpu 21.922 total
ruby --yjit a.rb  21.78s user 0.29s system 98% cpu 22.376 total
ruby --yjit a.rb  21.42s user 0.30s system 98% cpu 22.022 total

ruby a.rb         21.36s user 0.28s system 98% cpu 21.942 total
ruby a.rb         21.37s user 0.29s system 98% cpu 21.953 total
{{< / highlight >}}

the wrap


## Hallway track RubyConfTH

![will let you name next puma release](https://failure-driven.com/images/RubyConfTH-bangkok-2022/21_after_parties)

{{< load-photoswipe >}}
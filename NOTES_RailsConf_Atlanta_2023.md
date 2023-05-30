# RailsConf Atlanta 2023

https://railsconf2023.sessionize.com

---

## Monday 24th April

---

### Keynote - Eileen M. Uchitelle
Eileen M. Uchitelle - Rails Core Team | Senior Staff Engineer @ Shopify

- a good listen
- Rails design guidelines
- Action vs Active
- a bit of Meta Programming

---

### Mentorship in Three Acts
Adam Cuppy - President, LEARN academy

- **probably worth a watch when it is out**
- great presenter probably worth a listen when the deck comes out
- slides
    - https://speakerdeck.com/acuppy/mentorship-in-three-acts

---

### The Math Every Programmer Needs
Joël Quenneville - Principal Developer at thoughtbot

- had a chat with the presenter and certainly some great ideas to look into
  about actual practical maths you can use in your day to day to help
  understand, reason about and expand code. Especially around truth tables and
  logic style statements
- slides
    - https://speakerdeck.com/joelq/the-math-every-programmer-needs

---

### A custom design pattern for building dynamic ActiveRecord queries
Justin Daniel - Software engineer with G2

- did not go but heard good things about it
- slides
    - https://docs.google.com/presentation/d/1o2icW9yPl0MYtFhojs_BOjXohOvQqg5Z4ABI9gAL9nI/edit#slide=id.g22da31ecc1d_0_33

---

### ActiveRecord::Encryption; Stop Hackers from Reading your Data
Matthew Langlois - Product Security Engineer @ GitHub
Kylie Stradley - Product Security Engineer @ GitHub

- https://gh.io/ar-encryption-slides
    - https://docs.google.com/presentation/d/1y0V7-PHO809jCsUQwVQXCXN-17RJ85abxVp3INRXpm0/edit#slide=id.g120d7c85a14_0_475
- [Why and how GitHub encrypts sensitive database columns using ActiveRecord::Encryption](https://github.blog/2022-10-26-why-and-how-github-encrypts-sensitive-database-columns-using-activerecordencryption/)
- [How GitHub converts previously encrypted and unencrypted columns to ActiveRecord encrypted columns](https://github.blog/2022-11-03-how-github-converts-previously-encrypted-and-unencrypted-columns-to-activerecord-encrypted-columns/)
- https://guides.rubyonrails.org/active_record_encryption.html

---

### Upgrading Rails: The Dual-Boot Way
Michael Toppa - FastRuby.io, Senior Engineering Manager
Fiona Lapham - OmbuLabs, Software Engineer

- didn't go to the workshop but might be worth checking out how it compares to
  our Rails upgrading ideas
- slides
    - https://docs.google.com/presentation/d/1ijT_62aHHuHGy0ib6uDvgomy5CuFTsIdyA1Dsjz103k/edit#slide=id.g2378a9eadf0_0_202

---

### A Whole New World: Rails on the JVM with JRuby
Charles Nutter - The JRuby Guy

- in the wild
    - NASA Seti and Alan Telescope use JRuby based app
    - Oslo has JRuby based Android refueling terminals
- compatability
    - latest jruby 9.4 is compatible with 3.1
    - 3.2 compatability in next 6 months jruby #7517
    - 99.8% compatible with rails but things like roda scale even better
- [warbler](https://github.com/jruby/warbler) gem to create a run anywhere
  jar/war from jruby project is being revampted
- GUI
    - swing
    - SWT
    - javaFX - flash like with jRubyFX
    - [shoes](http://shoesrb.com/) - _old thing_
    - [glimmer](https://github.com/AndyObtiva/glimmer) - _new thing_
    - [Purugin](https://github.com/enebo/Purugin) - ruby minecraft plugin
- mobile
    - Ruboto - usied in vending machines
    - can run on android using
        - ruboto-core apk -> via http://ruboto.org/downloads/
        - ruboto-irb apk -> via https://github.com/ruboto/ruboto-irb/tree/master/dist
- new speed things
    - [GraalVM](https://github.com/oracle/graal) faster for numeric
      calculations because of "escape analysis" -
      https://github.com/jruby/jruby-graal
    - [Loom](https://openjdk.org/projects/loom/) - Fibers, Continuations and
      Tail-Calls for the JVM
        - 100,00 native threads would not work but with loom you can do this using `fiber.new`
        - `jruby -J-enable-preview fiber_test.rb`
    - Project Panama FFi
        - allow auto extracting from headers to generate binding code to C
          libraries
        - use FFI or Fiddle
    - good for Queue's things like sidekiq in particular

---

### Taylor’s Guide to Big Rewrites
Andy Croll - CTO at CoverageBook

- did not go but was good
- **probably worth a watch when it is out**

---

### Merged PRs: An Untapped Resource for Practice and Exploration
Thomas Countz - Senior Engineer on Zendesk's Core Engineering team

- slides
    - [./slides/RailsConf_2023_Merged_PRs.pdf](./slides/RailsConf_2023_Merged_PRs.pdf)

---

### Rails as a piece of birthday cake
Vladimir Dementyev

- **probably worth a watch when it is out**
- https://evilmartians.com/events/rails-as-a-piece-of-birthday-cake
- book coming later this year
  https://www.packtpub.com/product/layered-design-for-ruby-on-rails-applications/9781801813785
- slides
    - https://speakerdeck.com/palkan/railsconf-2023-rails-as-a-piece-of-cake

---

### How to Have The Slowest Rails App Ever
Nate Berkopec - Owner, The Speedshop

- did not go
- no slides
- **probably worth a watch when it is out**
- the gist of things
    - https://engineering.gusto.com/our-ruby-on-rails-system-tests-got-4-times-faster-with-one-setting/

---

### Go Passwordless with WebAuthn in Ruby
Braulio Martinez - Cofounder & Software Engineer @ Cedarcode

- slides
    - https://speakerdeck.com/brauliomartinezlm/go-passwordless-with-webauthn-in-ruby
- with demo rails code
    - ruby lib https://github.com/cedarcode/webauthn-ruby
    - demo WebAuthn rails app https://webauthn.cedarcode.com/session/new
        - and the code https://github.com/cedarcode/webauthn-rails-demo-app
    - demo WebAuthn 2FA app https://webauthn-2fa.cedarcode.com/session/new
        - and the code https://github.com/cedarcode/webauthn-2fa-rails-demo
- no longer need passwords for Google
    - https://www.theverge.com/2023/5/3/23709318/google-accounts-passkey-support-password-2fa-fido-security-phishing

---

### Pair programming with AI
Josh Puetz - Software Engineer - Donut

- slides https://joshpuetz.com/assets/files/railsconf-2023-ai-slides.pdf
- Kent Beck quote - AI has brought down 90% of my value to 0 but 10% of my
  value has been amplified 1,000 X
- legal issues - who owns the code, who is responsible for bugs?
- AI is a little like Schrodingers model of the atom - there is a probability
  space of where an electorn may exist
- Useful for coding
    - code explanation
    - refactoring
    - writing tests
    - planning
- be warned
    - sometimes code does not work
    - still need to cut & paste from ChatGPT etc
- Copilot is based on Codex - GPT _ code samples
    - code completion - you don't have to leave the editor
    - generation
    - limited context
    - write tests OK-ish
    - write good comments
- duty to disclose your AI pair?
- who can sue? who owns the IP?

---

### Exploring the Power of Turbo Streams and ActionCable
Kevin Liebholz - Software Engineer at portagon

- slides
    - https://speakerdeck.com/kevinliebholz/exploring-the-power-of-turbo-streams-and-action-cable

---

### A pragmatic and simple approach to fixing a memory leak
Vincent Rolea - Senior Product Developer at Podia

- the gist
    - https://gist.github.com/virolea/4045781114c834b0b56eda5aa1591685
- a related talk on [RailsConf 2022 - The Queue Continuum: Applied Queuing Theory by Justin Bowen](https://www.youtube.com/watch?v=N6LxQkyky3w)

---

### Catch Me If You Can: Learning to Process Webhooks in Your Rails App
Colin Loretz - Senior Software Engineer at Orbit
Chris Oliver - Owner of GoRails

- code https://github.com/colinloretz/railsconf-webhooks
- tutorial https://gorails.com/episodes/how-to-process-inbound-webhooks-railsconf-2023
- worth a watch as it covers some interesting topics on handling webhooks,
  signing them and post processing them - more of what our customers need to
  do.
    - also an interesting analogy on how ActiveMailbox handles emails in a similar way
- https://webhooks.fyi/

---

### Teaching Capybara Testing - An Illustrated Adventure
Brandon Weaver - Principal Software Engineer at Gusto

- **probably worth a watch when it is out**

---

### 10x your teamwork through pair programming
Michael Milewski - software developer
Selena Small - Head of Delivery | Lead Software Engineer at Fresho

- that's me !!!

---

### Building an offline experience with a Rails-powered PWA
Alicia Rojas - Software developer at Telos Labs

- slides
    - https://docs.google.com/presentation/d/1CwWOAgrfNg3yR07EGAbYDxd50A0BovEtpkmofwN9fZQ
    - [./slides/RailsConf_2023_PWA.pdf](./slides/RailsConf_2023_PWA.pdf) (_no speaker notes_)

---

### Applying microservices patterns to a modular monolith
Guillermo Aguirre - Senior Software Engineer @ Rootstrap

- good talk - relevant to what we are doing
- kind of what we did for compliance reporting
- **probably worth a watch when it is out**

---

### Forecasting the Future: An Introduction to Machine Learning for Weather Prediction in Native Ruby
Landon Gray (he/him) - Test Double, Senior Software Consultant

- slides
    - https://speakerdeck.com/thedayisntgray/an-introduction-to-machine-learning-for-weather-prediction-in-native-ruby
- had lots of promise but kind of was limited use
- use [iruby](https://github.com/SciRuby/iruby) Official gem repository: Ruby
  kernel for Jupyter/IPython Notebook
    - [Ruby/Numo::NArray](https://github.com/ruby-numo/numo-narray) - pandas equivalent
    - [Daru - Data Analysis in RUby](https://github.com/SciRuby/daru) - numpy equivalent
    - [Rumale is a machine learning library in Ruby](https://github.com/yoshoku/rumale)
- look for anything with Andrew Kane for ML and ruby - https://ankane.org/

---

### An imposter's guide to growth in engineering
Ebun Segun - Software Engineer, Shopify

### Hotwiring My React Brain
Aji Slater - Development Team Lead, thoughtbot

---

### Gradually Modularizing your Monolith with Ruby Packs and Packwerk
Alex Evanczuk - Product Infrastructure and Gradual Modularity Engineer at Gusto

- Stephan Hagemann - Leading Product Infrastructure Engineering at Gusto
- Did not make it but wanted to
    - https://github.com/gradual-systems/railsconf-workshop
    - https://github.com/gradual-systems/railsconf-workshop/blob/main/README.md#set-up-your-machine
- Slides
    - https://docs.google.com/presentation/d/1iM1ffdoy6otuBopqGTUTgnOC9nXgrzrcxN6l8xsF13Y/edit#slide=id.g23309be7886_1_55
    - https://leanpub.com/package-based-rails-applications/c/railsconf2023
- Slack server
    - https://rubymod.slack.com/join/shared_invite/zt-1dgyrxji9-sihGNX43mVh5T6tw18hFaQ#/shared-invite/email

---

### Beyond CRUD: the PostgreSQL techniques your Rails app is missing
Shayon Mukherjee - Staff Software Engineer at Tines

- slides
    - https://speakerdeck.com/shayonj/rails-conf-beyond-crud-the-postgresql-techniques-your-rails-app-is-missing
    - [./slides/RailsConf_Beyond_CRUD__the_PostgreSQL_techniques_your_Rails_app_is_missing.pdf](./slides/RailsConf_Beyond_CRUD__the_PostgreSQL_techniques_your_Rails_app_is_missing.pdf)

---

### A Picture Is Worth a 1000 Lines of Code
Rich Steinmetz - Uncovering the invisible

- went, was interesting but nothing too revoultionary - "draw pictures"

---

### Faster and cheaper websites: integrating next-gen images in your Rails apps
JP Balarini - CTO @ eagerworks.com

- slides
    - https://speakerdeck.com/jpbalarini/faster-and-cheaper-websites-integrating-next-gen-images-in-your-rails-apps
    - [./slides/RailsConf_2023_Faster_and_cheaper_websites.pdf](./slides/RailsConf_2023_Faster_and_cheaper_websites.pdf)

---

### Terms of Deployment: The Process of Evaluating Hatchbox, Fly, and Render for Developers
Jordan Burke - Senior Software Developer, Headway.io

- render is the winner for hobby projects
- slides
    - https://docs.google.com/presentation/d/1wWdGbIeq1QUtCXsd3aQD1DivLYiU887x-7kYL9s8xKo/edit#slide=id.g2399767d46b_1_1

---

### Functional Patterns in Ruby
John Crepezzi - Developer - Jane Street

- good talk on why and how to learn OCaml
- slides
    - https://www.dropbox.com/sh/kipvya4bul8xnjm/AACxpR6ytEg-KU38Ogek35vDa?dl=0&preview=railsconf23.pdf
    - [./slides/RailsConf_2023_functional_patterns_in_ruby.pdf](./slides/RailsConf_2023_functional_patterns_in_ruby.pdf)

---

### Offsite planning for Everyone
Allison McMillan

- slides
    - https://speakerdeck.com/asheren/offsite-planning-for-everyone

---

### Off to the races
Kyle d'Oliveira - Senior Software Engineer @ Aha!

- slides
    - https://speakerdeck.com/doliveirakn/off-to-the-races
    - [./slides/RailsConf_2023_off_to_the_races.pdf](./slides/RailsConf_2023_off_to_the_races.pdf)

- great talk worth a listen or look at the slides
- you will learn:
    - race conditions,
    - general strategies,
    - how to notice them in the wild
- dining philosophers typical idea used to demostrate this
- demo how to use Redis to create a race conditions with `and_wrpa_original`
- common READ - MODIFY - WRITE problem
    - remove using atomic action if possible
    - optimistic locking (with lock_version column)
        - if stale object, `retry`
    - pessimistic locking - only the operation has lock and wrap in transaction
        - uses SQL `FOR UPDATE`
    - redlock-db - redis distributed lock gem
    - with_adviosory_lock gem
- CHECK - THEN ACT - race condition
- validate uniquness has race condition - according to the docs
- use UPSERT if possible
- some discussion around instrumenting
- **probably worth a watch when it is out**

---

### Strategies for saying no
Elle Meredith - Consultant at Blackmill Consulting

- slides
    - [./slides/RailsConf_2023_strategies_for_saying_no.pdf](./slides/RailsConf_2023_strategies_for_saying_no.pdf)

---

### A Brewer's Guide to Filtering out Complexity and Churn
Alan Ridlehoover - Sr. Engineering Manager @ Cisco Meraki
Fito von Zastrow Alfonso

- https://www.youtube.com/watch?v=jE1Wp7-wnSM
- slides
    - https://speakerdeck.com/aridlehoover/a-brewers-guide-to-filtering-out-complexity-and-churn-railsconf-2023-edition

---

### Hacking Your Emotional API
John Sawers - Sr. Eng. Manager at Privia Health. I talk about feelings

- https://emotionalapi.com/after-the-talk/
- slides
    - https://speakerdeck.com/johnksawers/hacking-your-emotional-api-railsconf

---

### Keynote - Aaron Patterson
Aaron Patterson - Senior Staff Engineer at Shopify

- great talk on how to build out a language model for your editor
- **probably worth a watch when it is out**

---

## Random links

- https://github.com/technicalpickles/flamegraph-lighting-talk
- MagmaChat announcement - https://docs.google.com/presentation/d/1PGPz_P-VFknC_PWyiCw6GzNzRpyUUgz_K6WctHghhTw/edit#slide=id.g23a584002d1_0_57
- https://onceamaintainer.substack.com/p/once-a-maintainer-alex-rudall
- https://onceamaintainer.substack.com/p/once-a-maintainer-benji-nguyen

## One more thing

the online contest - just base64 decode the url below

aHR0cHM6Ly9ydWJ5Y29uZi0yMDIzLXd3dGJhcmUubmV0bGlmeS5hcHAvIy8xMgo=

for challenges like

```
p 1::+(2)

a) 3
b) NoMethodError
c) 12
d) SyntaxError
```

```
1..5.to_a

a) RangeError
b) NoMethodError
c) nil
d) [1,2,3,4,5]
```

```
$_ = "2023"
p ~~/\d/

a) nil
b) "2"
c) -1
d) NoMethodError
```


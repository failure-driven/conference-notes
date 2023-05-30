# Conferences 2023

A review of all the conferences in 2023

* as seen on [Melbourne Ruby](
  https://www.meetup.com/ruby-on-rails-oceania-melbourne/events/msjwdtyfchbpc/)
  - and originally proposed as https://github.com/rubyaustralia/melbourne-ruby/issues/205

* slides will be available https://failure-driven.github.io/conferences-2023/

## Notes

all my "raw" notes with a lot of links to videos etc

- [NOTES_RubyKaigi_Matsumoto_2023.md](NOTES_RubyKaigi_Matsumoto_2023.md)
- [NOTES_RailsConf_Atlanta_2023.md](NOTES_RailsConf_Atlanta_2023.md)
- [NOTES_ReactMiami_Miami_2023.md](NOTES_ReactMiami_Miami_2023.md)
- [NOTES_Programmable_Melbourne_Sydney_2023.md](NOTES_Programmable_Melbourne_Sydney_2023.md)
- [NOTES_RubyConfAU_Melbourne_2023.md](NOTES_RubyConfAU_Melbourne_2023.md)
- [NOTES_RubyConfTH_Bangkok_2022.md](NOTES_RubyConfTH_Bangkok_2022.md)

## Plan

### Original form the issue

I have had the opportunity to attend a heap of recent ruby related conferences.
In this talks I will share:

1. what I have learnt
1. how I got to go
1. upcoming conferences
1. how to get the most out of conferences

The conferences covered are:

* RubyConfTH Bangkok 2022
* RubyConfAU Melbourne 2023
* Programmable Melbourne/Sydney 2023
* TestBash Spring London | Remote 2023
* ReactMiami 2023
* RailsConf Atlanta 2023
* RubyKaigi Matsumoto 2023
* and coming soon CPP Canada, RustConf Albuquerque, ReactSummit Amsterdam |
  Remote, NDC Copenhagen

talk will be anywhere from 10min - 40min and include some audience interaction
and games if we go for the longer version

### What I can delivelr

- Who am I
    - interactive code FTW
- How I got here
    - 100 submissions for 10 acceptances
        - show sessionize
            - https://sessionize.com/selena-small/
            - https://sessionize.com/michael-milewski/
        - and papercall process
        - take a look at https://rubyconferences.org/
    - criteria
        - get accepted, does it pay, go ✅
    - drivers
        1. swag,
        1. acceptance via CFP,
        1. credibility from talking
        1. reduce decissions around where to travel
    - underlying drivers
        1. actually completing things
        1. so what is new in the community
        1. be a better programmer - more completion, more experience, wider
           network
        1. equity
- list the Selena and Michael will code for swag tour 2023
    1. RubyConfTH Bangkok 2022
    1. RubyConfAU Melbourne 2023
    1. Programmable Melbourne/Sydney 2023
    1. TestBash Spring London | Remote 2023
    1. ReactMiami 2023
    1. RailsConf Atlanta 2023
    1. RubyKaigi Matsumoto 2023
    1. ReactSummit Amsterdam | Remote 2023
    1. NDC Copenhagen
- bit win being quoted by others - image
- had to even say NO - CPP North, RustConf Albuquerque and a few others
- go check out the repo for all the notes and links to videos etc
    - code samples
        - Bangkok - roda, sql thing, learning rails
          ```
            sql = "INSERT INTO inbound_jobs (status, body, created_at, updated_at)
                SELECT 'pending', random()*80, ts, ts
                FROM generate_series(
                  TIMESTAMP '2023-01-01 00:00:00',
                  TIMESTAMP '2024-01-01 00:00:00',
                  INTERVAL '5 minutes') as g1(ts);"
            ActiveRecord::Base.connection.execute(sql)
          ```
        - Melbourne - making it rain GIF, async
        - programmable - capybara script, OpenTelemetry
        - ReactMiami - webAuthen demo?
        - RailsAtlanta - race condition demo?
        - RubyKaigi - keyboard, secial characters, utf-8, our gif
    - list of must watch
        - Bangkok: roda, puma
        - Melbourne: async, sallary, hanami, search party
        - Programmable: WebAuthen (recuring theme)
        - ReactMiami - uma
        - RailsAtlanta - race conditions, big rewrites, mentorship, birthday cake, slowest app, webhooks, aaron patterson keynote
        - RubyKaigi - samuel williams, 
    - recurring themes
        - WebAuthen passkeys
        - RailsEngines (special mention and recurring theme), Atlanta modular monolith


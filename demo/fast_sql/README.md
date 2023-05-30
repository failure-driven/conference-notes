# Fast SQL

script

```
rails new demo --minimal --skip-test --database postgresql
cd demo/
bin/rails generate scaffold stat value:integer
bin/setup
bin/rails s

bin/rails generate controller demo
vi config/routes.rb
# add
root "demo#index"

vi app/controllers/demo
# add
render body: Stat.average(:value)

# generate some data
time bin/rails runner '10000.times { Stat.create!(value: rand(100)) }'
bin/rails r "p Stat.count"
bin/rails r "p Stat.delete_all"

# update the stats to show per month
render body: Stat.group("DATE_TRUNC('month', created_at)").average(:value).to_json

# UI is useless
curl http://127.0.0.1:3000/ | jq

# we want more stats and to generate them faster
time bin/rails r "sql = \"INSERT INTO stats (value, created_at, updated_at)
SELECT random()*100, ts, ts
FROM generate_series(
  TIMESTAMP '2023-01-01 00:00:00',
  TIMESTAMP '2024-01-01 00:00:00',
  INTERVAL '5 minutes') as g1(ts);\";
ActiveRecord::Base.connection.execute(sql)"
```

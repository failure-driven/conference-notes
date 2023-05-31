# Special characters 

script

```
asdf shell ruby mruby-3.2.0
irb
"abc".length
"💎".length
"💎".ord
"💎🙏🏯".inspect
"💎🙏🏯".bytes.map{_1.to_s(2)}

# ohm sign
"Ω".bytes.map{_1.to_s(2)}
```

```
asdf shell ruby 3.2.2
irb
"abc".length
"💎".length
"💎".ord
"💎🙏🏯".inspect
"💎🙏🏯".bytes.map{_1.to_s(2)}

"a".bytes.map{_1.to_s(2)}
"ą".bytes.map{_1.to_s(2)}
# ohm sign
"Ω".bytes.map{_1.to_s(2)}
"🏯".bytes.map{_1.to_s(2)}
"👍🏾".bytes.map{_1.to_s(2)}
```

slide 52 https://speakerdeck.com/ima1zumi/c-9f8bab18-7b38-4a6a-b0b2-56a9fda78a9f?slide=52

Why does it matter?

```
# demo of checking a webhook signature
ruby -e 'require "openssl"

signature = "1685333333.d00459a41703d2a3a8063a21ef4da94d62b80eb99f7f6d3ecf5b90ebf2b15d0f"
secret = "some_secret"
message = "{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}"

timestamp, given_signature, *other = signature.split(".")
signed_payload = timestamp + "." + message
expected_signature = OpenSSL::HMAC.hexdigest("sha256", secret, signed_payload)

puts(expected_signature)
puts(given_signature)'
```

but you will notice some emoji

``
# so byte length
ruby -e 'p "{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}".bytes.length'

# will not equal length
ruby -e 'p "{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}".length'
```

which means you can run it in any language like JavaScript

```
node -e 'var crypto = require("crypto")
var message = "{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}"
var secret = "some_secret"
var signature = "1685333333.d00459a41703d2a3a8063a21ef4da94d62b80eb99f7f6d3ecf5b90ebf2b15d0f"

var data = signature.split(".")
var timestamp = data[0]
var givenSignature = data[1]

var signedPayload = timestamp + "." + message

var expectedSignature = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex")

console.log(expectedSignature)
console.log(givenSignature)'
```

even in the browser

```
let secret = "some_secret";
let body = "1685333333.{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}";
let enc = new TextEncoder("utf-8");
key = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    {name: "HMAC", hash: {name: "SHA-256"}},
    false,
    ["sign","verify"])
toHexString = (byteArray) => Array.from(byteArray).map((i) => i.toString(16).padStart(2, '0')).join("");
toHexString(new Uint8Array(
  await window.crypto.subtle.sign(
    {name: "HMAC"},
    key,
    await new Blob([body], {type: 'text/plain; charset=utf-8'}).arrayBuffer())))
```

but if I use the wrong encoding, say `UTF-16LE` as is default in Windows C#

```
ruby -e 'require "openssl"

signature = "1685333333.d00459a41703d2a3a8063a21ef4da94d62b80eb99f7f6d3ecf5b90ebf2b15d0f"
secret = "some_secret"
message = "{\"data\":[{\"payment_description\":\"🤞 hoe this works\"}]}"

timestamp, given_signature, *other = signature.split(".")
signed_payload = timestamp + "." + message
expected_signature = OpenSSL::HMAC.hexdigest("sha256", secret, signed_payload.encode("UTF-16LE"))

puts(expected_signature)
puts(given_signature)'
```

I get the wrong answer

## One more thing

```
# special e (U+0435) and i (U+0435)
# zero width space (U+200B)
# ideographic space (U+3000)

# RLO: 202E;RIGHT-TO-LEFT OVERRIDE
# LRE: U+202A: LEFT-TO-RIGHT EMBEDDING
# PDF: U+202C: POP DIRECTIONAL FORMATTING
```

https://www.sw.it.aoyama.ac.jp/2023/pub/Ruby%ea%9d%a9du%d0%af/


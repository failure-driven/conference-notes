# Pass Key

Saw a number of presentation including one by Phil Nash 

* https://www.slideshare.net/PhilNash4/the-state-of-passwordless-auth-on-the-web-256910360
* https://www.youtube.com/watch?v=n_DmQPGjovg

from https://webauthn.guide/

```
# so on any SSL enabled site
open https://github.com

const publicKeyCredentialCreationOptions = {
    challenge: Uint8Array.from('randomStringFromServer', c => c.charCodeAt(0)),
    rp: {
        name: "Duo Security",
        id: window.location.host,
    },
    user: {
        id: Uint8Array.from("UZSL85T9AFC", c => c.charCodeAt(0)),
        name: "some+email@example.com",
        displayName: "Your Name",
    },
    pubKeyCredParams: [{alg: -7, type: "public-key"}],
    authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
    },
    timeout: 60000,
    attestation: "direct"
};

const credential = await navigator.credentials.create({
    publicKey: publicKeyCredentialCreationOptions
});
```

and now for a demo https://conferences-2023-pass-key-demo.netlify.app/


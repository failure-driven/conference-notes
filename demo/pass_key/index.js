function sayHi() {
  console.log("hi");
}
// TODO: generate a valid random challenge?
// a way to get random values for the challenge?
// array = new Uint8Array(128);
// btoa(crypto.getRandomValues(array))
// https://www.valentinog.com/blog/challenge/ suggests to
//
//  array = new Uint8Array(128);
//  codeVerifier = crypto.getRandomValues(array)
//  encoder = new TextEncoder();
//  data = encoder.encode(codeVerifier);
//  digest = await window.crypto.subtle.digest("SHA-256", data);
//  base64Digest = btoa(digest)
//  return base64Digest
//    .replace(/\+/g, "-")
//    .replace(/\//g, "_")
//    .replace(/=/g, "");
const credentials = {};
async function signIn() {
  const credential = await navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from('notSoRandomStringFromNotSoServer', c => c.charCodeAt(0)),
    }
  })
  credentials.credentialId = credential.id;
  localStorage.setItem("credentialId", credential.id); // this is probably NOT secure
  displayStorage();
  isVerified();
}
async function signUp() {
  if(!localStorage.credentialId) { // could check against an in memory credentials object?
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: Uint8Array.from('notSoRandomStringFromNotSoServer', c => c.charCodeAt(0)),
        rp: { name: "Pass Key Demo" },
        // TODO: where is the generate the user on the fly? is the id it?
        user: {
            id: Uint8Array.from(crypto.randomUUID(), c => c.charCodeAt(0)),
            name: "Guest",
            displayName: "Guest",
        },
        pubKeyCredParams: [{alg: -7, type: "public-key"}],
        //timeout: 60000
      }
    });

    localStorage.setItem("credentialId", credential.id); // this is probably NOT secure
    displayStorage();
  } else {
    const credential = await navigator.credentials.get({
      publicKey: {
        challenge: Uint8Array.from('notSoRandomStringFromNotSoServer', c => c.charCodeAt(0)),
        // TODO: passing in the credential seems to not care?
        // allowCredentials: [{
        //   id: Uint8Array.from(localStorage.credentialId, c => c.charCodeAt(0)),
        //   name: "Conferences2023PassKeyDemo",
        //   type: 'public-key',
        // }],
        // timeout: 60000,
      }
    });
    // TODO: could actually be changing the credential as we don't successfully
    // pass it above as part of the challenge
    credentials.credentialId = credential.id;
    localStorage.setItem("credentialId", credential.id); // this is probably NOT secure
    displayStorage();
  }
  isVerified();
}
const clearStorage = () => {
  localStorage.clear();
  displayStorage();
  isVerified();
}
const displayStorage = () => {
  document.getElementById("local-storage-contents").value = JSON.stringify(localStorage, null, 4);
}
const isVerified = () => {
  if(credentials.credentialId  === localStorage.credentialId) {
    document.getElementById("is-verified").innerHTML = "✅ VERIFIED"
  } else {
    document.getElementById("is-verified").innerHTML = "❌ NOT VERIFIED"
  }
}
// TODO: make functions available without calling them each time
sayHi();
isVerified();
displayStorage();
signUp();
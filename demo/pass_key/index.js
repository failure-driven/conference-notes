function sayHi() {
  console.log("hi");
}
async function signUp() {
  const publicKeyCredentialCreationOptions = {
      challenge: Uint8Array.from('randomStringFromServer', c => c.charCodeAt(0)),
      rp: {
          name: "Pass Key Demo",
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
}
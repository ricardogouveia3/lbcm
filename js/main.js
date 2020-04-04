let textAreaEntry = document.querySelector("#entry");
let textAreaExit = document.querySelector("#exit");
let buttonCrypto = document.querySelector("#entryToExit");
let buttonDecrypto = document.querySelector("#exitToEntry");

buttonCrypto.addEventListener("click", () => {
  cryptUncrypt(true);
})

buttonDecrypto.addEventListener("click", () => {
  cryptUncrypt(false);
})

function cryptUncrypt(way) {
  switch (way) {
    case true:
      if (textAreaEntry.value) {
        let uncryptedText = textAreaEntry.value;
        let uncryptedTextLength = uncryptedText.length;
        let cryptedText = '';

        uncryptedText.split('').forEach(letter => {
          let charCode = letter.charCodeAt();
          let cryptoCharCode = charCode + uncryptedTextLength;
          let cryptoChar = String.fromCharCode(cryptoCharCode);

          cryptedText += cryptoChar;
        });

        textAreaExit.value = '';
        setTimeout(() => {
          textAreaExit.value = cryptedText;
        }, 250);
      } else {
        console.error('Não há texto para criptografar!');
      }
      break;

    case false:
      if (textAreaExit.value) {

        let cryptedText = textAreaExit.value;
        let cryptedTextLength = cryptedText.length;
        let decryptedText = '';

        cryptedText.split('').forEach(letter => {
          let charCode = letter.charCodeAt();
          let decryptoCharCode = charCode - cryptedTextLength;
          let decryptoChar = String.fromCharCode(decryptoCharCode);

          decryptedText += decryptoChar;
        });

        textAreaEntry.value = '';
        setTimeout(() => {
          textAreaEntry.value = decryptedText;
        }, 250);
      } else {
        console.error('Não há texto para descriptografar!');
      }
      break

    default:
      console.error('É preciso informar se deve-se criptografar ou descriptografar!');
      break;
  }
}

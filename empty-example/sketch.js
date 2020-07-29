function setup() {
  createCanvas(400, 100);

  let mic = new p5.AudioIn();
  mic.start();

  getAudioContext().resume();

  let languageCode = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(languageCode, gotSpeech);

  let continuous = true;
  let interm = true;

  speechRec.start(continuous, interm);

  function gotSpeech() {
    console.log("Started speaking");


    if(speechRec.resultValue) {
      createP(speechRec.resultString);
    } else {
      createP(" Ooopsie... nothing! ");
    }

    console.log(speechRec);
  }
}

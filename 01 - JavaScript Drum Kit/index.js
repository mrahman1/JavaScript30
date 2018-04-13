let keys = [
  {
    note: "a",
    code: "65",
    sound: "clap",
 },
 {
   note: "s",
   code: "83",
   sound: "hihat"
 }
]

for (let key of keys){
  let keyDiv = document.querySelector(".keys");
  let audioFile = `sounds/${key.sound}.wav`

  keyDiv.innerHTML += (
    `<div data-key=${key.code} class="key">
      <kbd>${key.note}</kbd>
      <audio data-key=${key.code} src="${audioFile}"></audio>
    </div>`
  )
}


function playSound(e){
  let pressedKey = event.which
  let audio = document.querySelector(`audio[data-key="${pressedKey}"]`);
  console.log(audio)
  audio.play()
}

window.addEventListener('keydown', playSound)

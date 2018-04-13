let keys = [
  {
    note: "A",
    sound: "clap",
 },
 {
   note: "S",
   sound: "hihat"
 },
 {
   note: "D",
   sound: "kick"
 },
 {
   note: "F",
   sound: "openhat"
 },
 {
   note: "G",
   sound: "boom"
 },
 {
   note: "H",
   sound: "ride"
 },
 {
   note: "J",
   sound: "snare"
 },
 {
   note: "K",
   sound: "tom"
 },
 {
   note: "L",
   sound: "tink"
 }

]

for (let key of keys){
  let keyDiv = document.querySelector(".keys");
  let audioFile = `sounds/${key.sound}.wav`
  let keyCode = key.note.charCodeAt()

  keyDiv.innerHTML += (
    `<div data-key=${keyCode} class="key">
      <kbd>${key.note}</kbd>
      <audio data-key=${keyCode} src="${audioFile}"></audio>
    </div>`
  )
}


function playSound(e){
  let pressedKey = event.which
  let audio = document.querySelector(`audio[data-key="${pressedKey}"]`);
  let keyDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);

  keyDiv.classList.add('playing');
  audio.play()
}


function removeTransition(e) {
  e.target.classList.remove('playing');
}

const keyList = document.querySelectorAll('.key');
keyList.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound)

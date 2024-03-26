// sweet alert

Swal.fire({
    title: "DEVELOPER",
    text: "ADEEL HASSAN",
    imageUrl: "sounds/B612_20231105_015059_114.jpg",
    imageWidth: 500,
    imageHeight: 300,
    imageAlt: "Custom image"
  });




// window.addEventListener('keydown',function(e){
//     console.log(e)
// });
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  //   console.log(key)
    if (!audio) return; // stop function from running all together
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.toggle("playing");
  }
  const keys = document.querySelectorAll(".key");
  // console.log(keys);
  function removeTransition(e) {
    // console.log(e); // have to run condition on property name
    if (e.propertyName === "transform") // and skip it if its not transform
      // console.log(e.propertyName)
      this.classList.remove("playing");
  }
  function handleClick(){
    const keyCode = this.getAttribute('data-key');
    playSound({ keyCode: keyCode });
  }
  keys.forEach((key) => key.addEventListener("click", handleClick));
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
  
  
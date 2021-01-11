"use strict";

//counting characters in text area box
document.getElementById('textarea').onkeyup = function () {
  if(this.value.length === 100){
    document.getElementById('current').innerHTML = "Enough!"
  }else{
      document.getElementById('current').innerHTML = "You typed " + (this.value.length) + " characters";
  }
}

//displaying a message after submit 
document.getElementById('btn').addEventListener("click",sendMessage);

function emptyMessage(){
  return document.getElementById('textarea').value.length === 0;
}

function sendMessage(){
  if(emptyMessage()){
    document.getElementById('thankYouP').textContent = "Your message is empty, write something";
  }else{
    document.getElementById('thankYouP').textContent = "Thank you! i'll contact you."
  }
}

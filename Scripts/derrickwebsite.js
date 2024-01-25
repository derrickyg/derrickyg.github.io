let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src', this.height = "300", width = "300");
  if(mySrc === '../Images/dglinkedin.jfif') {
    myImage.setAttribute ('src','../Images/IMG_8401.JPG', this.height = "400", width = "1000");
  } else {
    myImage.setAttribute ('src','../Images/dglinkedin.jfif', this.height = "300", width = "300");
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Thanks for viewing my website, ' + myName + "!";
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Derrick Gan'
  }
  
  myButton.onclick = function() {
    setUserName();
  }

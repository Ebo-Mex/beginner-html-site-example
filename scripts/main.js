let myimg = document.querySelector('img');

myimg.onclick = function() {
    let mysrc = myimg.getAttribute('src');
    if(mysrc === 'images/example-img-1.jpg'){
        myimg.setAttribute('src', 'images/example-img-2.jpg')
    } else{
        myimg.setAttribute('src', 'images/example-img-1.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello World and ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello World and ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

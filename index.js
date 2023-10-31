// Variables

let menu = document.getElementById('menu');
let menubtn = document.getElementById('menubtn');
let homeBtn = document.getElementById('home-btn')
let backgroundImage = ['images/about.jpg', 'images/exp.jpg', 'images/about.jpg']
let aboutBtn = document.getElementById('about-btn')
let submitBtn = document.getElementById('btn')
let content = ["abc", "efg", "hij"]
let aboutText = document.getElementById('aboutText')
let currentText = 0
let currentBg = 0
let ogText = "XYZ"
let ogBg = 'images/contact.jpg'

// Changing the Background

homeBtn.addEventListener('click', function () {
    document.body.style.backgroundImage = `url(${backgroundImage[currentBg]})`
    if (currentBg < backgroundImage.length) {
        currentBg++;
    } else {
        currentBg = 0;
        document.body.style.backgroundImage = `url(${ogBg})`
    }

})

// Changing the About Text

function changeTextAbout() {
    if (currentText < content.length) {
        aboutText.textContent = content[currentText]
        currentText++;
    } else {
        currentText = 0
        aboutText.textContent = ogText
    }
}

// Changing the Experience Text

function changeTextExp() {
    if (currentText < content.length) {
        aboutText.textContent = content[currentText]
        currentText++;
    } else {
        currentText = 0
        aboutText.textContent = ogText
    }
}

// Changing the Project Text

function changeTextProj() {
    if (currentText < content.length) {
        aboutText.textContent = content[currentText]
        currentText++;
    } else {
        currentText = 0
        aboutText.textContent = ogText
    }
}

// Alert when Submitting

function submitBtnn() {
    alert('You sure you want to submit ?');
}

// Navigation for Mobile

function openMenu() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menubtn.style.display = 'block';
    } else {
        menu.style.display = 'block';
        menubtn.style.display = 'none';
    }
}

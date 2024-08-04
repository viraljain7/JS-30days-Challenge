// Activity 1 - Basic Event Handling
// Task 1 - Change text by click button
const change_text = () => {
    document.querySelector("#text").innerHTML = "Chai Aur Code";
};

// Task 2  - Change Image visibility by double click
const toggleImg = document.querySelector('#imageToToggle');
const toggleBtn = document.querySelector('#toggleImageButton');

toggleBtn.addEventListener('dblclick', function () {
    if (toggleImg.style.visibility === 'hidden') {
        toggleImg.style.visibility = 'visible';
        alert('Img is visible');
    } else {
        toggleImg.style.visibility = 'hidden';
        alert('Img is hidden');
    }
});


// Activity 2 - Mouse Event
// Task 3 - Add mouseover event to change bg color
const bg_changer = document.querySelector("#bg_changer");
bg_changer.addEventListener("mouseover", function () {
    bg_changer.style.background = 'gray';
});


// Task 4 - Add mouseout event to reset bg color
bg_changer.addEventListener("mouseout", function () {
    bg_changer.style.background = 'black';
});



// Activity 3 - Keyboard Event
// Task 5 - When press keydown log key pressed

const inputField = document.querySelector('#name');
const keyDisplay = document.querySelector('#keyDisplay');

inputField.addEventListener('keydown', function (event) {
    console.log(`Key down: ${event.key}`);
});

inputField.addEventListener('keyup', function (event) {
    keyDisplay.textContent = `Key released: ${event.target.value}`;
});
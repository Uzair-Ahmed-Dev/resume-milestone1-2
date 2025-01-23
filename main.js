"use strict";
const toggleButton = document.getElementById('mybtn');
const content = document.getElementById('skills');
function toggleContent() {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        mybtn.textContent = 'Hide Content';
    }
    else {
        skills.style.display = 'none';
        mybtn.textContent = 'Show Content';
    }
}
toggleButton.addEventListener('click', toggleContent);

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const body = document.querySelector('body');


let button = true;
btn1.addEventListener('click', function () {
    if (!button) {
        return;
    }
    else {
        createCard('Alert!', 'This is an alert message.', '#ef4444');
        freezeButtons();
    }
});
btn2.addEventListener('click', function () {
    if (!button) {
        return;
    }
    else {
        createCard('Warning!', 'This is a warning message.', '#fbbf24');
        freezeButtons();
    }
});
btn3.addEventListener('click', function () {
    if (!button) {
        return;
    }
    else {
        createCard('Info!', 'This is an informational message.', '#3b82f6');
        freezeButtons();
    }
});
function createCard(title, message, color) {
    const container = document.getElementById('container');
    const card = document.createElement('div');
    card.style.backgroundColor = '#fee2e2';
    card.style.width = '300px';
    card.style.height = '200px';
    card.style.borderRadius = '15px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.gap = '20px';
    card.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    const titleEl = document.createElement('div');
    titleEl.textContent = title;
    titleEl.style.color = color;
    titleEl.style.fontWeight = 'bold';
    titleEl.style.fontSize = '20px';
    titleEl.style.fontFamily = "'Times New Roman', Times, serif";
    const messageEl = document.createElement('p');
    messageEl.textContent = message;
    messageEl.style.color = color;
    messageEl.style.fontWeight = 'bold';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.width = '70px';
    closeBtn.style.height = '40px';
    closeBtn.style.backgroundColor = color;
    closeBtn.style.color = 'white';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '6px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', () => {
        container.removeChild(card);
        unfreezeButtons();
    });
    card.appendChild(titleEl);
    card.appendChild(messageEl);
    card.appendChild(closeBtn);
    container.appendChild(card);
}
function freezeButtons() {
    button = false;
    const array = [btn1, btn2, btn3];
    array.forEach(btn => {
        btn.style.opacity = 0.5;
        btn.style.pointerEvents = 'none';
        btn.style.cursor = 'not-allowed';
        body.style.backgroundColor = "#8e939a";
    });
}
function unfreezeButtons() {
    button = true;
    const array = [btn1, btn2, btn3];
    array.forEach(btn => {
        btn.style.opacity = 1;
        btn.style.pointerEvents = 'auto';
        btn.style.cursor = 'pointer';
        body.style.backgroundColor = "white";
    });
}

let Cards = [];
let profileImages = [
    "./images/v1.jpg",
    "./images/V.jpg",
    "./images/Suga.jpg",
    "./images/RM.jpg",
    "./images/Jungkook.jpg",
    "./images/boy1.jpg",
    "./images/boy2.jpg",
    "./images/boy3.jpg",
    "./images/Jhope.jpg",
    "./images/V.jpg",
    "./images/RM.jpg",
    "./images/433460616_2063188650721338_5063699959120094225_n.jpg",
    "./images/433462890_2063193150720888_5563556632399519056_n.jpg",
    "./images/IMG-20241210-WA0006.jpg",
    "./images/IMG-20241210-WA0007.jpg",
    "./images/boy1.jpg",
];
let usedImages = 0;
function addCard() {
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const marks = parseInt(document.getElementById("marks").value);
    if (usedImages >= profileImages.length) {
        alert("No more unique profile images available!");
        return;
    }
    const img = profileImages[usedImages];
    usedImages++;
    Cards.push({ name, age, marks, img });
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("marks").value = '';
    showCards();
}
function showCards() {
    Cards.sort((a, b) => b.marks - a.marks);
    const container = document.getElementById("cardContainer");
    container.innerHTML = '';
    for (let i = 0; i < Cards.length; i++) {
        const cards = Cards[i];
        let cardClass = 'other';
        let positionText = `${i + 1}th`;
        if (i === 0) {
            cardClass = 'first';
            positionText = '1st';
        } else if (i === 1) {
            cardClass = 'second';
            positionText = '2nd';
           
        } else if (i === 2) {
            cardClass = 'third';
            positionText = '3rd';
        }
        const card = document.createElement("div");
        card.className = `card ${cardClass}`;
        card.innerHTML = `
                 <img style="margin-top:20px;" src="${cards.img}" alt="Profile">
                  <h3>${cards.name}</h3>
                  <p style="display: flex; flex-rows; justify-content: space-between; margin-top:40px; align-items: center;"><b>Age    :    ${cards.age}</b> <b>Marks :     ${cards.marks}%</b></p>
                  <div class="position">${positionText}</div>`;
        container.appendChild(card);
    }
}
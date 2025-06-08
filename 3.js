function addInterestField() {
    const container = document.getElementById("interests-container");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter interest";
    input.className = "interest-field";
    container.appendChild(input);
}
function showInfo() {
    const name = document.getElementById("username").value.trim();
    const interestInputs = document.getElementsByClassName("interest-field");
    const output = document.getElementById("output");
    output.innerHTML = "";
    const ul = document.createElement("ul");
    if (name !== "") {
        const liName = document.createElement("li");
        liName.textContent = "Name : " + name;
        ul.appendChild(liName);
    }
    for (let i = 0; i < interestInputs.length; i++) {
        const interest = interestInputs[i].value.trim();
        if (interest !== "") {
            const liInterest = document.createElement("li");
            liInterest.textContent = "Interest : " + interest;
            ul.appendChild(liInterest);
        }
    }
    output.appendChild(ul);
}
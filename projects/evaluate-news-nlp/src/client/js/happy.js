function happy(){
    let happyText = document.createElement('h1');
    let resultsSection = document.querySelector('.resultsSection');
    happyText.innerText = '😊';
    resultsSection.appendChild(happyText);
}

export { happy }
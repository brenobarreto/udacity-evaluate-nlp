function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::");
    fetch('http://localhost:3000/getSentiment')
    .then(res => res.json())
    .then(data => { 
        console.log(data);
        document.getElementById('results').innerHTML = 
            `Polarity: ${data.polarity} | Subjectivity: ${data.subjectivity}`;
    });
        
}

export { handleSubmit }

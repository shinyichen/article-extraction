function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const url = document.getElementById('url').value;
    const data = {
        url: url
    }
    if (Client.validateInput(url)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8000/extract', {
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header        
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.status === 200)
                res.json().then(res => updateUI(res));
            else 
                updateUIError(res);
        });
    } else {
        // invalid URL
        updateUIError("Invalide URL");
    }
}

function updateUI(res) {
    document.getElementById('results').classList.remove('hide');
    document.getElementById('errorMsg').classList.add('hide');
    document.getElementById('resultTitle').innerHTML = res.title;
    document.getElementById('resultAuthor').innerHTML = res.author;
    document.getElementById('resultArticle').innerHTML = res.article;
    document.getElementById('resultImage').innerHTML = res.image;
    document.getElementById('resultVideos').innerHTML = res.videos;
    document.getElementById('resultDate').innerHTML = res.publishDate;
    document.getElementById('resultFeeds').innerHTML = res.feeds;
}

function updateUIError(error) {
    document.getElementById('results').classList.add('hide');
    document.getElementById('error').classList.remove('hide');
    document.getElementById('errorMsg').innerHTML = error;
}

export { handleSubmit }

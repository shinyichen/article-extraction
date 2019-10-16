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
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('resultTitle').innerHTML = res.title;
            document.getElementById('resultAuthor').innerHTML = res.author;
            document.getElementById('resultArticle').innerHTML = res.article;
            document.getElementById('resultImage').innerHTML = res.image;
            document.getElementById('resultVideos').innerHTML = res.videos;
            document.getElementById('resultDate').innerHTML = res.publishDate;
            document.getElementById('resultFeeds').innerHTML = res.feeds;
        })
    }
}

export { handleSubmit }

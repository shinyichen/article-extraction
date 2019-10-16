function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    if (Client.validateInput(url)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
    }
}

export { handleSubmit }

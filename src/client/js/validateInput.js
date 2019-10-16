function validateInput(url) {
    console.log("::: Running validateInput :::", url);
    const pattern = /^https?:\/\/[a-zA-Z0-9\.\-]+.[a-zA-Z]/i; // /i for case insensitive
    if (url.match(pattern)) {
        return true;
    } else {
        alert("Invalid URL");
        return false;
    }
}

export { validateInput }

function validateInput(url) {
    console.log("::: Running validateInput :::", url);
    const pattern = /^http[s]?:\/\/[a-zA-Z0-9\.\-\/]+[^.][.]{1}[a-zA-Z]+[\/]?([a-zA-Z0-9\-\/]+)?$/i; // /i for case insensitive
    if (url.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

export { validateInput }
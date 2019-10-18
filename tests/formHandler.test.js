const { handleSubmit, updateUI, updateUIError } = require('../src/client/js/formHandler');

const htmlContent = `
    <section id="results" class="hide">
        <p class="resultItem"><b>Title</b>: <span id="resultTitle"></span></p>
        <p class="resultItem"><b>Author</b>: <span id="resultAuthor"></span></p>
        <p class="resultItem"><b>Article</b>: <span id="resultArticle"></span></p>
        <p class="resultItem"><b>Image</b>: <span id="resultImage"></span></p>
        <p class="resultItem"><b>Videos</b>: <span id="resultVideos"></span></p>
        <p class="resultItem"><b>Publish Date</b>: <span id="resultDate"></span></p>
        <p class="resultItem"><b>Feeds</b>: <span id="resultFeeds"></span></p>
    </section>

    <section id="error" class="hide">
        <p>Error: <span id="errorMsg"></span></p>
    </section>
`

const title = "My Article";
const author = "J. Chen";
const article = "This is an article";
const date = "Jan. 5, 2020";

test('test suceed', ()=>{
    document.body.innerHTML = htmlContent;
    updateUI({
        title: title,
        author: author,
        article: article,
        publishDate: date
    });
    expect(document.getElementById("resultTitle").innerHTML).toEqual(title);
    expect(document.getElementById("resultAuthor").innerHTML).toEqual(author);
    expect(document.getElementById("resultArticle").innerHTML).toEqual(article);
    expect(document.getElementById("resultDate").innerHTML).toEqual(date);
});

test('test error', ()=>{
    document.body.innerHTML = htmlContent;
    updateUIError("Invalid");
    expect(document.getElementById("errorMsg").innerHTML).toEqual("Invalid");
});
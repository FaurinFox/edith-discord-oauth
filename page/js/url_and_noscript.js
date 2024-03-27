function checkElementById(el) {
    const element = document.getElementById(el);
    if (element !== null) return true;
    else return false;
}

function container_styles() {
    if (checkElementById("container"))
        document.getElementById("container").style.display = 'flex';
    if (checkElementById("noscript-container"))
        document.getElementById("noscript-container").style.display = 'none';
}

fetch('/cfg/oauth')
.then(response => {
    return response.json();
})
.then((data) => {
    if (checkElementById("login-btn")) {
        document.getElementById("login-btn").href = data.result.oauth.url;
        container_styles();
    }
})
.catch((err) => {
    console.error(`Error fetching data: ${err}`);
    container_styles();
});
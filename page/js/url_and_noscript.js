function container_styles() {
    document.getElementById("container").style.display = 'flex';
    document.getElementById("noscript-container").style.display = 'none';
}

fetch('/cfg/oauth')
.then(response => {
    return response.json();
})
.then((data) => {
    document.getElementById("login-btn").href = data.result.oauth.url;
    container_styles();
})
.catch((err) => {
    console.error(`Error fetching data: ${err}`);
    container_styles();
});
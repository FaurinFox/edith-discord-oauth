function checkElement(by, el) {
    if (by === 0) {
        const element = document.getElementById(el);
        if (element) return true;
        //if (element !== null || element !== undefined) return true;
        else return false;
    }else if (by === 1) {
        const element = document.querySelector(el);
        if (element) return true;
        //if (element !== null || element !== undefined) return true;
        else return false;
    }
    return false;
}

function container_styles() {
    if (checkElement(0, "container"))
        document.getElementById("container").style.display = 'flex';
    if (checkElement(0, "noscript-container"))
        document.getElementById("noscript-container").style.display = 'none';
}

fetch('/cfg/result')
.then(response => {
    return response.json();
})
.then((data) => {
    if (checkElement(0, "login-btn")) {
        document.getElementById("login-btn").href = data.result.oauth.url;
        container_styles();
    }
    if (checkElement(1, "#container .container-image"))
        document.querySelector("#container .container-image").src = data.result.logo.url;
        container_styles();
})
.catch((err) => {
    console.error(`Error fetching data: ${err}`);
    container_styles();
});
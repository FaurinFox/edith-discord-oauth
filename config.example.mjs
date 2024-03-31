const Config = {
    port: 6884, // Change as desired
    debug: false, // To log debug things or to not log debug things
    discord: {
        // These are checked, must not match placeholders for this to run
        client_id: "YOUR_CLIENT_ID",
        client_secret: "YOUR_SECRET_TOKEN",
        oauth_url: "YOUR_OAUTH_URL"
    },
    page: {
        // Full url, or a relative path
        logo_url: "https://example.com/images/logo.png"
    }
}

export default Config;